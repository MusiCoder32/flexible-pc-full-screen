<template>
    <div class="header">
        <div class="logo">
            <img src="../../assets/img/logo.png"/>
        </div>
        <div class="" @click="handleFullScreen">
            <a src='http://baidu.com' class="font-size-medium">
                <i class="el-icon-rank"></i>金属非金属矿山安全生产风险智能监测系统
            </a>
        </div>
        <div class="" @click="handleFullScreen">
            <a src='http://baidu.com' class="font-size-medium">
                <i class="el-icon-rank"></i>化工园区危险化学品应急监控及事故预警
            </a>
        </div>
        <div class="" @click="handleFullScreen">
            <a src='http://baidu.com'>
                <i class="el-icon-rank"></i>
            </a>
        </div>
        <div class="">
            <div class="btn-fullscreen" @click="handleFullScreen">

                <i class="el-icon-rank"></i>2020年06月16日 星期二

            </div>
            <div class="btn-fullscreen" @click="handleFullScreen">
                <i class="el-icon-rank"></i>22:50:40
            </div>
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import bus from '../common/bus';
// import moment from 'moment';

export default {
    data () {
        return {
            fullscreen: false,
            name: 'admin',
        };
    },
    computed: {},
    methods: {
        // 全屏事件
        handleFullScreen () {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
    },
    mounted () {

    },
    destroyed () {
        bus.$off();
    }
};
</script>
<style lang="scss" scoped>
    .header {
        box-sizing: border-box;
        width: 100%;
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #999;
        background-image: linear-gradient(180deg, #007BFF, #005EFF);

        .logo {
            margin-left: 26px;
            img {
                height: 42px;
                width: 229px;
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
<style>

    ul.el-menu.el-menu--popup.el-menu--popup-right-start {
        background: #303133 !important;
    }

    .el-submenu__title:hover, .el-menu-item:focus, .el-menu-item:hover {
        background: #666 !important;
    }


</style>
