<template>
    <div class="bei-dou-box" v-loading="dialogLoading">
        <!--<div v-if="type==='chemical'" class="bei-dou-nav" style="top: 20px;">-->
        <!--<div @click="navClick('left')" :class="{'nav-opacity':rightActive}"-->
        <!--style="padding-right:20px;text-align:right;width: 180px;height:40px;line-height: 40px;font-size: 16px">-->
        <!--企业分布-->
        <!--</div>-->
        <!--<div @click="navClick('right')" :class="{'nav-opacity':!rightActive}"-->
        <!--style="padding-left:20px;text-align:left;width: 180px;height:40px;line-height: 40px;font-size: 16px">-->
        <!--预警态势-->
        <!--</div>-->
        <!--</div>-->
        <div class="bei-dou-container" id="beidouMapContainer"></div>
        <el-dialog v-if="dialogTableVisible" width="65.62%" title="传感器：W川AJH104R0009F4"
                   :visible.sync="dialogTableVisible"
                   :close-on-click-modal=false>
            <coal-chemical-chart></coal-chemical-chart>
        </el-dialog>
    </div>
</template>

<script>
import CoalChemicalChart from './coal-chemical-chart';
import xss from 'xss';

export default {
    components: { CoalChemicalChart },
    data () {
        return {
            type: 'coal',
            rightActive: false,
            dialogTableVisible: false,
            dialogLoading: false,
            path: [],
            startArr: [],
            startIcon: require('../../assets/img/icon/4.png'),
            colorArr: [
                'green',
                'blue',
                'yellow',
                'orange',
                'red'
            ]
        };
    },
    mounted () {
        let id = this.$route.query.id || 'test';
        this.drawStart(id);
    },
    methods: {
        navClick (type) {
            if (type === 'left') {
                this.rightActive = false;
            }
            else {
                this.rightActive = true;
            }
        },
        async drawMap () {
            let me = this;
            let box = document.querySelector('.bei-dou-box');
            let container = document.querySelector('.bei-dou-container');
            container.style.width = box.offsetWidth - 40 + 'px';
            container.style.height = box.offsetHeight - 40 + 'px';
            await this.$nextTick(() => {
                me._beiDouMap = new AMap.Map('beidouMapContainer', {
                    resizeEnable: true,
                    mapStyle: 'amap://styles/97dc37fba506b5695a546dfb165032d4',
                    center: [104.06, 30.67],
                    zoom: 13
                });
            });
        },
        drawLine () {
            let me = this;
            let path = this.path;

            let polyline = new AMap.Polyline({
                path: path,
                isOutline: true,
                outlineColor: '#FF5E54',
                borderWeight: 0.5,
                strokeColor: '#FF5E54',
                strokeOpacity: 1,
                strokeWeight: 0.5,
                // 折线样式还支持 'dashed'
                strokeStyle: 'solid',
                // strokeStyle是dashed时有效
                strokeDasharray: [10, 5],
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50
            });

            polyline.setMap(me._beiDouMap);
            // 缩放地图到合适的视野级别
            me._beiDouMap.setFitView([polyline]);

        },
        updateMarkerPosition () {
            // <div><img src="${me.startIcon}"/>星座曲线</div>
            let me = this;
            let infoContent = document.createElement('div');
            infoContent.setAttribute('class', 'bei-dou-info');
            me._infoContent = infoContent;
            me._infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                closed: true,
                content: '',
                offset: new AMap.Pixel(16, -45)
            });
            document.querySelectorAll('.bei-dou-marker').forEach(item => item.remove());
            this.startArr.forEach((item, i) => {
                let content = document.createElement('div');
                content.setAttribute('class', `bei-dou-marker ${me.colorArr[item.alarmLevel]}`);
                content.setAttribute('id', 'start-' + i);
                content.innerHTML = xss(`
                        <div>
                            <div>
                                <div>
                                    <img src="${item.imageUrl}"/>
                                </div>
                            </div>
                        </div>`);
                let box = document.querySelector('.bei-dou-box');
                box.appendChild(content);
                setTimeout(() => {
                    let width = document.querySelector('#start-' + i).offsetWidth;
                    let height = document.querySelector('#start-' + i).offsetHeight;
                    let marker = new AMap.Marker({
                        map: me._beiDouMap,
                        content: content,
                        animation: 'AMAP_ANIMATION_DROP',
                        position: item.path,
                        offset: new AMap.Pixel(-width / 2, -height / 2)
                    });
                    marker.on('mouseover', (e) => me._markerOver(e, i));
                    marker.on('mouseout', () => me._windowTime = setTimeout(() => me._infoWindow.close(), 5000));
                    marker.on('click', (e) => me._markerClick(e, item.id, item.number));
                });
            });
        },
        async getStartData (id) {
            try {
                // let res = await  this.$req.get(this.$url.start.line, { OrgId: 'test' });
                let res = await  this.$req.get(this.$url.start.line, { OrgId: id });
                let data = res.data || [];
                if (data.length === 0) {
                    this.$alert('', '该企业无北斗数据', {
                        confirmButtonText: '确定',
                        type: 'info',
                        center: true,
                        roundButton: true

                    });
                }
                let imageStartUrl = require('../../assets/img/icon/3.png');
                let imageCoalUrl = require('../../assets/img/icon/2.png');
                data.forEach(item => {
                    this.path.push([item.longitude, item.latitude]);
                    let obj = {
                        imageUrl: item.type ? imageStartUrl : imageCoalUrl,
                        orgName: item.orgName,
                        name: item.name,
                        id: item.id,
                        number: item.number,
                        alarmLevel: item.alarmLevel,
                        path: [item.longitude, item.latitude]
                    };
                    this.startArr.push(obj);
                });
            }
            catch (e) {
                console.log(e);
            }
        },
        async drawStart (id) {
            let me = this;
            try {
                await Promise.all([me.drawMap(), me.getStartData(id)]);
                me.drawLine();
                me.updateMarkerPosition();
            }
            catch (e) {
                console.log(e);
            }
        },

        _markerOver (e, i) {
            let me = this;
            clearTimeout(me._windowTime);
            me._infoContent.innerHTML = xss(`<div>${me.startArr[i].orgName}</div>
            <div>${me.startArr[i].name}</div>`);
            me._infoWindow.setContent(me._infoContent);
            me._infoWindow.open(me._beiDouMap, e.target.getPosition());
        },
        _markerClick (e, id, sensorNumber) {
            this.dialogLoading = true;
            // types:'api/BDSatellite/GetSensBdSensorMenus',
            this.$req.get(this.$url.start.types, { id }).then((res) => {
                if (res.code === 200) {
                    sessionStorage.setItem('sensorTypesData', JSON.stringify(res.data));
                    sessionStorage.setItem('sensorNumber', sensorNumber);
                }
                else {
                    console.log(res);
                }
            }).finally(() => {
                this.dialogLoading = false;
                this.dialogTableVisible = true;
            });
        }

    }
};
</script>
<style lang="scss">
    .nav-opacity {
        opacity: 0.5;
    }

    .bei-dou-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 8px 0px rgba(8, 33, 85, 0.1);
        position: relative;
        .bei-dou-nav {
            position: absolute;
            z-index: 1000;
            margin: 0 auto;
            display: flex;
            justify-content: center;

            > div {
                font-weight: 400;
                color: #007bff;
                &:hover {
                    opacity: 1;
                }
            }

            > div:first-child {
                background: url("../../assets/img/beidou/1.png") center no-repeat;
                background-size: contain;

            }
            > div:last-child {
                background: url("../../assets/img/beidou/2.png") center no-repeat;
                background-size: contain;

            }
        }

        .bei-dou-container {
            border-radius: 10px;
        }
        .bei-dou-marker {
            border-radius: 50%;
            padding: 4px;
            background: #ffffff;
            box-shadow: 0px 0px 8px 0px rgba(8, 33, 85, 0.2);
            div {
                border-radius: 50%;
                padding: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .red {
            border: 1px solid rgba(255, 94, 84, 0.8);
            > div {
                background: rgba(255, 94, 84, 0.2);
                > div {
                    background: rgba(255, 94, 84, 0.6);
                    > div {
                        background: rgba(255, 94, 84, 1);
                        padding: 3px;
                    }
                }
            }

        }
        .orange {
            border: 1px solid rgba(255, 115, 46, 0.8);
            > div {
                background: rgba(255, 115, 46, 0.2);
                > div {
                    background: rgba(255, 115, 46, 0.6);
                    > div {
                        background: rgba(255, 115, 46, 1);
                        padding: 3px;
                    }
                }
            }
        }
        .yellow {
            border: 1px solid rgba(255, 214, 0, 0.8);
            > div {
                background: rgba(255, 214, 0, 0.2);
                > div {
                    background: rgba(255, 214, 0, 0.6);
                    > div {
                        background: rgba(255, 214, 0, 1);
                        padding: 3px;
                    }
                }
            }
        }
        .blue {
            border: 1px solid rgba(0, 123, 255, 0.8);
            > div {
                background: rgba(0, 123, 255, 0.2);
                > div {
                    background: rgba(0, 123, 255, 0.6);
                    > div {
                        background: rgba(0, 123, 255, 1);
                        padding: 3px;
                    }
                }
            }
        }
        .green {
            border: 1px solid rgba(43, 215, 0, 0.8);
            > div {
                background: rgba(43, 215, 0, 0.2);
                > div {
                    background: rgba(43, 215, 0, 0.6);
                    > div {
                        background: rgba(43, 215, 0, 1);
                        padding: 3px;
                    }
                }
            }
        }
        .bei-dou-info {
            background: #ffffff;
            border-radius: 10px;
            padding: 12px 15px 16px;
            color: #082155;
            > div:first-child {
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                line-height: 16px;
                letter-spacing: 0px;
                border-left: 2px solid #FF5E54;
                padding-left: 5px;
            }
            > div:nth-child(2) {
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                line-height: 12px;
                letter-spacing: 0px;
                margin: 16px 0 0 0;
            }
        }

        .el-dialog {
            border-radius: 10px;
            .el-dialog__header {
                border-bottom: 1px solid #979797;
                .el-dialog__title {
                    font-weight: 600;
                    color: #082155;
                }
            }
            .el-dialog__body {
                padding-top: 10px;
            }
        }
    }

    .amap-logo {
        display: none !important;
    }

</style>
