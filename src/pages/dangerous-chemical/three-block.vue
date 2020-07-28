<template>
    <div class="content three-block">
        <oblique-angle title="覆盖企业情况"></oblique-angle>
        <div class="sensor">
            <div class="sensor-left">
                <div class="sensor-left-border-1"></div>
                <div class="sensor-left-content">
                    <div class="sensor-left-title font-size-medium">固态风险</div>
                    <div class="sensor-chart hBox vh_content_around vh_items_center">
                        <dangerous-circle></dangerous-circle>
                        <div>
                            <div>
                                <p class="font-size-x6 font-family-bebas ">4326</p>
                                <p class="font-weight-medium">重点关注企业</p>
                            </div>
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
                        </div>
                    </div>
                </div>
                <div class="sensor-left-border-2">
                </div>
            </div>
            <div class="sensor-right">
                <oblique-angle-rect>
                    <div style="width: 100%;height: 100%">
                        <pre-warning-bar></pre-warning-bar>
                    </div>
                </oblique-angle-rect>
            </div>
        </div>
    </div>
</template>

<script>
    import PreWarningBar from '../../components/charts/pre-warning-bar'
    import ObliqueAngle from '../../components/business_component/oblique-angle'
    import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect'
    import DangerousCircle from '../../components/svgs/dangerous-circle'
    export default {
        name: 'three-block',
        components: {
            PreWarningBar,
            ObliqueAngle,
            ObliqueAngleRect,
            DangerousCircle
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
                        .center-content {
                            margin-top:17px;
                            width: 200px;
                            height: 50px;
                            font-size: 10px;
                            display: flex;
                            flex-wrap: wrap;
                            .title-icon {
                                width: 50%;
                                display: flex;
                                justify-content: flex-start;
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
                                    background: #ff732e;
                                    border: 1px solid #ff732e;
                                }
                                .right-top {
                                    background: #ffd600;
                                    border: 1px solid #ffd600;
                                }
                                .right-bottom {
                                    background: #ff5e54;
                                    border: 1px solid #ff5e54;
                                }
                            }
                        }
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