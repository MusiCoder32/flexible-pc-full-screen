<template>
    <div class="bei-dou-box">
        <div v-if="type==='chemical'" class="bei-dou-nav" style="top: 20px;">
            <div @click="navClick('left')" :class="{'nav-opacity':rightActive}" style="padding-right:20px;text-align:right;width: 180px;height:40px;line-height: 40px;font-size: 16px">企业分布</div>
            <div @click="navClick('right')" :class="{'nav-opacity':!rightActive}" style="padding-left:20px;text-align:left;width: 180px;height:40px;line-height: 40px;font-size: 16px">预警态势</div>
        </div>
        <div class="bei-dou-container" id="beidouMapContainer"></div>
        <el-dialog width="65.62%" title="传感器：W川AJH104R0009F4" :visible.sync="dialogTableVisible" :close-on-click-modal=false>
            <!--<router-view></router-view>-->
            <chemical-chart v-if="type==='chemical'"></chemical-chart>
            <coal-chart v-else></coal-chart>
        </el-dialog>
    </div>
</template>

<script>
import ChemicalChart from './chemical-chart'
import CoalChart from './coal-chart'
export default {
    components: { ChemicalChart ,CoalChart},
    data () {
        return {
            type:'coal',
            rightActive:false,
            dialogTableVisible:false,
            path: [
                [116.397428, 39.90923],
                [116.398428, 39.90923],
                [116.398428, 39.90823],
                [116.397428, 39.90823]
            ],
            startArr: [
                {
                    imageUrl: require('../../assets/img/icon/3.png')
                },
                {
                    imageUrl: require('../../assets/img/icon/3.png')
                },
                {
                    imageUrl: require('../../assets/img/icon/1.png')
                },
                {
                    imageUrl: require('../../assets/img/icon/2.png')
                }
            ],
            startIcon: require('../../assets/img/icon/4.png')
        };
    },
    mounted () {
        this.drawMap();
        console.log(this.$route.query)
        this.type = this.$route.query.type
        window.addEventListener('resize', () => {
            this.drawMap();
        });
    },
    methods: {
        navClick(type) {
          if(type==='left') {
              this.rightActive = false
          }
          else {
              this.rightActive = true
          }
        },
        drawMap () {
            let me = this;
            let box = document.querySelector('.bei-dou-box');
            let container = document.querySelector('.bei-dou-container');
            container.style.width = box.offsetWidth - 40 + 'px';
            container.style.height = box.offsetHeight - 40 + 'px';
            this.$nextTick(() => {
                me._beiDouMap = new AMap.Map('beidouMapContainer', {
                    resizeEnable: true,
                    mapStyle: 'amap://styles/97dc37fba506b5695a546dfb165032d4',
                    center: [116.397428, 39.90923],
                    zoom: 13
                });
                me.drawLine();
                me.updateMarkerPosition();
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
            let me = this;
            let infoContent = document.createElement('div');
            infoContent.setAttribute('class', 'bei-dou-info');
            me._infoContent = infoContent;
            infoContent.innerHTML = `<div>米易县亿恒矿业有限责任公司摩梭河尾矿库</div>
            <div>传感器：W川AJH104R0009F4</div>
            <div><img src="${me.startIcon}"/>星座曲线</div>`;
            this.$nextTick(() => {
                me._infoWindow = new AMap.InfoWindow({
                    isCustom: true,  //使用自定义窗体
                    closed: true,
                    content: infoContent,
                    offset: new AMap.Pixel(16, -45)
                });
                document.querySelectorAll('.bei-dou-marker').forEach(item => item.remove());
                this.path.forEach(function (item, i) {
                    let content = document.createElement('div');
                    content.setAttribute('class', 'bei-dou-marker');
                    content.setAttribute('id', 'start-' + i);
                    content.innerHTML = `
                        <div>
                            <div>
                                <div>
                                    <img src="${me.startArr[i].imageUrl}"/>
                                </div>
                            </div>
                        </div>`;
                    let box = document.querySelector('.bei-dou-box');
                    box.appendChild(content);
                    setTimeout(() => {
                        let width = document.querySelector('#start-' + i).offsetWidth;
                        let height = document.querySelector('#start-' + i).offsetHeight;
                        let marker = new AMap.Marker({
                            map: me._beiDouMap,
                            content: content,
                            animation: 'AMAP_ANIMATION_DROP',
                            position: item,
                            offset: new AMap.Pixel(-width / 2, -height / 2)
                        });
                        marker.on('mouseover', (e) => me._markerOver(e, i));
                        marker.on('click', (e) => me._markerClick(e, i));
                        // marker.on('mouseout', (e) => me._markerLeave());
                        marker.emit('mouseover', { target: marker });
                    });
                });
            });
        },

        _markerOver (e, i) {
            let me = this;
            me._infoWindow.setContent(me._infoContent);
            me._infoWindow.open(me._beiDouMap, e.target.getPosition());
        } ,
        _markerClick (e, i) {
            console.log(e)
            console.log(i)
            this.dialogTableVisible = true;
        }
        // _markerLeave () {
        //     let me = this;
        //     setTimeout(()=>{
        //         me._infoWindow.close();
        //     })
        // }

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
            border: 1px solid rgba(255, 94, 84, 0.8);
            background: #ffffff;
            box-shadow: 0px 0px 8px 0px rgba(8, 33, 85, 0.2);
            div {
                border-radius: 50%;
                padding: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
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
                margin: 16px 0;

            }
            > div:last-child {
                width: 112px;
                height: 32px;
                background: #ffffff;
                border: 1px solid rgba(8, 33, 85, 0.29);
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                > img {
                    width: 18px;
                    height: 18px;
                    margin-right: 10px;
                }
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
                padding-top:10px;
            }
        }
    }

    .amap-logo {
        display: none !important;
    }

</style>
