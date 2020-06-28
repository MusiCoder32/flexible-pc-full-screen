<template>
    <div class="content three-block">
        <div class="caption">
            <div class="caption-border-1"></div>
            <div class="caption-border-2"></div>
            <div class="caption-content font-size-x">北斗+技术</div>
        </div>
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
                <div class="sensor-right-border-1"></div>
                <div class="sensor-right-content"></div>
                <div class="sensor-right-border-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import SensorPie from '../../charts/sensor-pie'
    export default {
        name: 'three-block',
        components: {
            SensorPie
        }
    };
</script>

<style lang="scss" scoped>
    .three-block {
        padding-left: 30px;
        padding-right: 15px;
        .caption {
            height: 44px;
            position: relative;
            .caption-border-1 {
                position: absolute;
                width: 761px;
                border-bottom: 15px solid rgba(0, 123, 255, 0.2);
                border-right: 15px solid transparent;
                border-left: 15px solid transparent;
            }
            .caption-border-2 {
                position: absolute;
                top: 15px;
                width: 790px;
                border-bottom: 29px solid rgba(0, 123, 255, 0.2);
                border-right: 29px solid transparent;
            }
            .caption-content {
                height: 44px;
                line-height: 44px;
                margin-left: 15px;
                font-weight: 600;

            }
        }
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
                position: relative;
                width: 49%;
                height: 204px;

                .sensor-right-content {
                    background: rgba(0, 123, 255, 0.2);
                    width: 100%;
                    height: 174px;
                }

                .sensor-right-border-1 {
                    width: 100%;
                    border-bottom: 15px solid rgba(0, 123, 255, 0.2);
                    border-right: 15px solid transparent;
                    border-left: 15px solid transparent;
                }
                .sensor-right-border-2 {
                    width: 100%;
                    border-top: 15px solid rgba(0, 123, 255, 0.2);
                    border-right: 15px solid transparent;
                    border-left: 15px solid transparent;
                }
            }
        }
    }

</style>