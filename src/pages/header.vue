<template>
    <div class="vBox vh_content_start">
        <div class="header font-size-medium">
            <div class="logo">
                <img class="margin8" src="../assets/img/logo.png"/>
            </div>
            <div @click="goto('coal')" class="menu hBox vh_items_center header-not-coal-icon">
                <img class="margin8" src="../assets/img/web1x_非煤logo_img.png"/>
                金属非金属矿山安全生产风险智能监测系统
            </div>
            <div @click="goto('chemical')" class="menu hBox vh_items_center header-chemical-icon">
                <img class="margin8" src="../assets/img/web1x_化工logo_img.png"/>
                化工园区危险化学品应急监控及事故预警
            </div>
            <div class=" hBox vh_content_between vh_items_center header-left">
                <div class="hBox vh_items_center header-left-date">
                    <img class="margin8" src="../assets/img/web1x_日期icon_img.png"/>
                    2020年06月16日 星期二
                </div>
                <div class=" hBox vh_items_center header-left-time">
                    <img class="margin8" src="../assets/img/web1x_时间icon_img.png" height="20" width="20"/>
                    22:50:40
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
// import moment from 'moment';
let _this;
export default {
    data () {
        return {
            fullscreen: false,
            name: 'admin'
        };
    },
    computed: {},
    mounted () {
        _this = this;
        window.addEventListener('resize', () => {
            _this.fullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
        })
    },
    methods: {
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
            if (type === 'coal') {
                this.$router.push({ path: 'coal' })
            }
            else if (type === 'chemical') {
                this.$router.push({ path: 'chemical' })
            }
        }
    },
    destroyed () {
        bus.$off();
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
        position:relative;
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
                img {
                    height: 18px;
                    width: 18px;
                }
            }
        }

        .logo {
            padding-left: 26px;
            padding-top:17px;
            img {
                height: 42px;
                width: 229px;
            }
        }
        .header-not-coal-icon {
            img {
                height: 22px;
                width: 24px;
                margin-right: 8px;
            }
        }
        .header-chemical-icon {
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

