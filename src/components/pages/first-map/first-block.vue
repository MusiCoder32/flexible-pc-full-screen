<template>
    <div class="content">
        <div class="slider" :class="{'slider-expand':isSliderExpand}">
            <img src="../../../assets/img/侧栏bg_img.png"/>
            <img src="../../../assets/img/正在检测企业icon_img.png"/>
            <img @click="sliderClick" :class="{'slider-icon-rotate':isSliderExpand}"
                 src="../../../assets/img/left_icon_img.png"/>
            <img src="../../../assets/img/覆盖人群icon_img.png"/>
            <div>
                <p>234969</p>
                <p>正在监测企业</p>
            </div>
            <div>
                <p>4326</p>
                <p>重点关注企业</p>
            </div>
            <div>
                <p>2349.6</p>
                <p>覆盖人群数（万）</p>
            </div>
            <div>
                <slider-pie></slider-pie>
            </div>
        </div>
        <div class="legend">
            <div class="top-corner"></div>
            <div class="center-content">
                <div class="title-icon">
                    <div class="icon left-top"></div>
                    <pre>低风险  </pre>
                </div>
                <div class="title-icon">
                    <div class="icon right-top"></div>
                    <div>一般风险</div>
                </div>
                <div class="title-icon">
                    <div class="icon left-bottom"></div>
                    <div>较大风险</div>
                </div>
                <div class="title-icon">
                    <div class="icon right-bottom"></div>
                    <pre>低风险  </pre>
                </div>
            </div>
            <div class="bottom-corner"></div>
        </div>
        <div class="map">
            <map-marker class="first-marker"></map-marker>
        </div>
    </div>
</template>

<script>
import SliderPie from '../../charts/slider-pie';
import MapMarker from '../pie-bar-animation'

export default {
    name: 'first-block',
    components: {
        SliderPie,
        MapMarker
    },
    data () {
        return {
            isSliderExpand: false
        };
    },
    methods: {
        sliderClick () {
            this.isSliderExpand = !this.isSliderExpand;

        }
    }
};
</script>

<style lang="scss" scoped>
    .map {
        width: 100%;
        height: 100%;
        .first-marker {
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }

    .slider-expand {
        left: -166px !important;
        transition: left 2s;
    }

    .slider-icon-rotate {
        transform: rotate(180deg);
    }

    .slider {
        position: absolute;
        top: 27px;
        left: -16px;
        height: 675px;
        width: 204px;
        > img {
            position: absolute;
        }
        > div {
            width: 100%;
            position: absolute;
            > p:first-child {
                width: 100%;
                font-size: 52px;
                font-family: 'BebasNeue'
            }
            > p:last-child {
                width: 100%;
                font-size: 16px;
            }
        }
        img:first-child {
            height: 675px;
            width: 204px;
        }
        img:nth-child(2) {
            height: 56px;
            width: 56px;
            top: 42px;
            left: 24px;
        }
        img:nth-child(3) {
            height: 58px;
            width: 38px;
            top: 295px;
            left: 159px;
        }
        img:nth-child(4) {
            height: 56px;
            width: 56px;
            top: 485px;
            left: 24px;
        }
        div:nth-child(5) {
            top: 86px;
            left: 32px;
        }
        div:nth-child(6) {
            top: 325px;
            left: 32px;
        }
        div:nth-child(7) {
            top: 529px;
            left: 32px;
        }
        div:nth-child(8) {
            width: 80px;
            height: 80px;
            top: 243px;
            left: 36px;
        }
    }

    .legend {
        position: absolute;
        bottom: 30px;
        right: 15px;
        height: 80px;
        width: 200px;
        box-shadow: 0px 0px 16px 0px rgba(8, 33, 85, 0.2);
        .top-corner {
            height: 0;
            width: 200px;
            border-bottom: 15px solid rgba(0, 123, 255, 0.2);
            border-right: 15px solid transparent;
            border-left: 15px solid transparent;
        }
        .center-content {
            width: 200px;
            height: 50px;
            background: rgba(0, 123, 255, 0.2);
            font-size: 10px;
            display: flex;
            flex-wrap: wrap;
            .title-icon {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon {
                    width: 10px;
                    height: 10px;
                    margin-right: 6px;
                    border-radius: 50%;
                    box-shadow: 0px 0px 8px 0px #007bff;
                }
                .left-top {
                    background: #007bff;
                    border: 1px solid #005eff;
                }
                .left-bottom {
                    background: #FF732E;
                    border: 1px solid #FF732E;
                }
                .right-top {
                    background: #FFD600;
                    border: 1px solid #FFD600;

                }
                .right-bottom {
                    background: #FF5E54;
                    border: 1px solid #FF5E54;

                }
            }

        }
        .bottom-corner {
            width: 200px;
            height: 0;
            border-top: 15px solid rgba(0, 123, 255, 0.2);
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
        }
    }
</style>