<template>
    <div class="content three-block">
        <oblique-angle></oblique-angle>
        <div class="sensor">
            <div class="sensor-left">
                <div class="sensor-left-border-1"></div>
                <div class="sensor-left-content">
                    <div class="sensor-left-title font-size-medium">传感器布设数量统计</div>
                    <div class="sensor-chart">
                        <sensor-pie></sensor-pie>
                    </div>
                </div>
                <div class="sensor-left-border-2"></div>
            </div>
            <div class="sensor-right">
                <oblique-angle-rect></oblique-angle-rect>
            </div>
        </div>
    </div>
</template>

<script>
    import SensorPie from '../../components/charts/sensor-pie'
    import ObliqueAngle from '../../components/business_component/oblique-angle'
    import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect'
    export default {
        name: 'three-block',
        components: {
            SensorPie,
            ObliqueAngle,
            ObliqueAngleRect
        }
    };
</script>

<style lang="scss" scoped>
    .three-block {
        padding-left: 30px;
        padding-right: 15px;

        .sensor {
            height: 242px;
            padding-top: 8px;
            display: flex;
            justify-content: space-between;
            .sensor-left {
                position: relative;
                width: 49%;
                height: 204px;
                .sensor-left-content {
                    background: rgba(0, 123, 255, 0.2);
                    width: 100%;
                    height: 174px;

                    .sensor-left-title {
                        width: 144px;
                        height: 22px;
                        font-weight: 400;
                        margin-left:15px;
                        line-height: 22px;
                    }
                    .sensor-chart {
                        height: 152px;
                        width: 100%;
                    }
                }
                .sensor-left-border-1 {
                    width: 100%;
                    border-bottom: 15px solid rgba(0, 123, 255, 0.2);
                    border-right: 15px solid transparent;
                }
                .sensor-left-border-2 {
                    width: 100%;
                    border-top: 15px solid rgba(0, 123, 255, 0.2);
                    border-right: 15px solid transparent;
                    border-left: 15px solid transparent;
                }

            }

            .sensor-right {
                width:49%;
            }
        }
    }

</style>