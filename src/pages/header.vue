<template>
    <div class="vBox vh_content_start">
        <div class="header font-size-medium">
            <div class="logo">
                <img class="mr8" src="../assets/img/logo.png"/>
            </div>
            <div @click="goto('coal')" class="menu hBox vh_items_center header-not-coal-icon">
                <img class="mr8" src="../assets/img/web1x_非煤logo_img.png"/>
                金属非金属矿山安全生产风险智能监测系统
            </div>
            <div @click="goto('chemical')" class="menu hBox vh_items_center header-chemical-icon">
                <img class="mr8" src="../assets/img/web1x_化工logo_img.png"/>
                化工园区危险化学品应急监控及事故预警系统
            </div>
            <div class=" hBox vh_content_between vh_items_center header-left">
                <div class="hBox vh_items_center header-left-date">
                    <img class="mr8" src="../assets/img/web1x_日期icon_img.png"/>
                    {{date}}
                </div>
                <div class=" hBox vh_items_center header-left-time">
                    <img class="mr8" src="../assets/img/web1x_时间icon_img.png" height="20" width="20"/>
                    {{time}}
                </div>
                <!-- 全屏显示 -->
                <div class="header-left-full-screen hBox vh_items_center" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <img class="mr8" v-if="fullscreen" src="../assets/img/web1x_退出全屏icon_img.png"/>
                        <img class="mr8" v-if="!fullscreen" src="../assets/img/web1x_全屏展示icon_img.png"/>
                    </el-tooltip>
                    {{!fullscreen? '全屏展示':'取消全屏'}}
                </div>

            </div>
        </div>
        <div class="hBox vh_content_between header-border">
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
import bus from '../common/bus';
import moment from 'moment';
import {mapMutations} from 'vuex';

export default {
    data () {
        return {
            fullscreen: false,
            name: 'admin',
            time: '',
            date: ''
        };
    },
    computed: {},
    mounted () {
        let me = this;
        window.addEventListener('resize', () => {
            me.fullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
        });
        this.init();
        me.initInterval = setInterval(() => {
            this.init();
        }, 1000 * 60 * 2);

        this.setTime()
        me._timeInterval = setInterval(() => {
            me.setTime()
        }, 1000);
    },
    methods: {
        ...mapMutations(['setFirstData','setCoalData','setChemicalData']),
        setTime () {
            let time = new Date();
            this.date = moment(time).format('YYYY年MM月DD日');
            this.time = moment(time).format('HH:mm:ss');
            let week = moment(time).day();
            switch (week) {
                case 1:
                    week = '星期一';
                    break;
                case 2:
                    week = '星期二';
                    break;
                case 3:
                    week = '星期三';
                    break;
                case 4:
                    week = '星期四';
                    break;
                case 5:
                    week = '星期五';
                    break;
                case 6:
                    week = '星期六';
                    break;
                case 0:
                    week = '星期日';
                    break;
                default:
                    break;
            }
            this.date+='  '+ week
        },
        // 全屏事件
        handleFullScreen () {
            let element = document.documentElement;

            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                }
                else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                }
                else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                }
                else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        goto (type) {
            let token = localStorage.getItem('Authorization');
            if (type === 'coal') {
                window.open('http://fm.yzt.scdem.cn?Authorization=' + token);
            }
            else if (type === 'chemical') {
                window.open('http://wh.yzt.scdem.cn/auth-redirect?Authorization=' + token);
            }
        },
        init () {
            this.getFirstData();
            this.getCoalData();
            this.getChemicalData();
        },
        async getFirstData () {
            let me = this;
            let res;
            try {
                res = await this.$req.get(this.$url.first);
                console.log(res);
                if (res.code == 200) {
                    me.setFirstData({ data: res.data });
                }
                else {
                    console.log(res);
                }
            }
            catch (err) {
                console.log(err);
            }
        } ,
        async getCoalData () {
            let me = this;
            let res;
            try {
                res = await this.$req.get(this.$url.coal);
                console.log(res);
                if (res.code == 200) {
                    me.setCoalData({ data: res.data });
                }
                else {
                    console.log(res);
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        async getChemicalData () {
            let me = this;
            let res;
            try {
                res = await this.$req.get(this.$url.chemical);
                console.log(res);
                if (res.code == 200) {
                    me.setChemicalData({ data: res.data });
                }
                else {
                    console.log(res);
                }
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    destroyed () {
        let me = this
        bus.$off();
        clearInterval(me._timeInterval)
    }
};
</script>
<style lang="scss" scoped>
    .menu {
        padding: 0 10px;
        height: 100%;
        opacity: 0.6;
        &:hover {
            /*background:rgb(0,25,64)*/
            opacity: 1;
        }
    }

    .header-border {
        div:first-child {
            width: 313px;
            border-top: 18px solid #005eff;
            border-right: 36px solid transparent;
        }
        div:last-child {
            width: 100px;
            border-top: 18px solid #005eff;
            border-left: 36px solid transparent;
        }
    }

    .header {
        box-sizing: border-box;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        background-image: linear-gradient(180deg, #007BFF, #005EFF);
        position: relative;
        z-index: 1000;

        .header-left {
            width: 465px;
            margin-right: 39px;
            opacity: 0.6;
            .header-left-date {
                img {
                    height: 21px;
                    width: 20px;
                }
            }
            .header-left-time {
                img {
                    height: 20px;
                    width: 20px;
                }
            }
            .header-left-full-screen {
                cursor: pointer;
                img {
                    height: 18px;
                    width: 18px;
                }
            }
        }

        .logo {
            padding-left: 26px;
            padding-top: 17px;
            img {
                height: 42px;
                width: 229px;
            }
        }
        .header-not-coal-icon {
            cursor: pointer;
            img {
                height: 22px;
                width: 24px;
                margin-right: 8px;
            }
        }
        .header-chemical-icon {
            cursor: pointer;
            img {
                height: 24px;
                width: 15px;
            }
        }

        .header-right {
            padding-right: 30px;

            .header-user-con {
                display: flex;
                height: 70px;
                align-items: center;

                .btn-fullscreen, .btn-bell {
                    width: 20px;
                    height: 20px;
                    font-size: 20px;
                    text-align: center;
                    border-radius: 15px;
                    cursor: pointer;
                    position: relative;
                    .el-icon-bell {
                        color: #999;
                    }
                }
                .user-avator {
                    img {
                        display: block;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    .collapse-btn {
        position: absolute;
        left: 213px;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }

    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }

    .btn-bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }

    .user-name {
        margin-left: 10px;
    }

    .user-avator {
        margin-left: 20px;
    }

    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>

