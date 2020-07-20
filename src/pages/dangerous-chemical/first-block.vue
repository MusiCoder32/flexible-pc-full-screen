<template>
    <div class="content">

    </div>
</template>

<script>
import SliderPie from '../../components/charts/slider-pie';
import MapMarker from '../../components/svgs/pie-bar-animation'

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