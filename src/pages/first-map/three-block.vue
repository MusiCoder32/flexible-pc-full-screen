<template>
    <div class="content three-block">
        <oblique-angle></oblique-angle>
        <div v-if="firstData.warningCount && firstData.bdSensorStatistics" class="sensor">
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
                <oblique-angle-rect>
                    <div class="right-rect-content vBox vh_content_between">

                        <div style="width:100%" class="font-size-small hBox vh_items_center"><div class="warining-item-width">北斗位移预警</div><div class="title-right-border"></div></div>
                        <div style="width:100%" class="hBox vh_content_between vh_items_center beidou-warning-box">
                            <div class="beidou-warning-total">{{warningCount.disCount}}</div>
                            <div class="beidou-warning-describe">累计预警次数</div>
                            <pre-warning-statistics-svg
                                    svg-id="preWarningStatisticsSvg0"
                                    third-color="rgba(255,94,84,0.25)"
                                    secondary-color="#B34D53"
                                    primary-color="#FF5E54"
                                    fourth-color=" #FE4C40"
                                    :value="warningCount.disRed"
                            ></pre-warning-statistics-svg>
                            <pre-warning-statistics-svg
                                    svg-id="preWarningStatisticsSvg1"
                                    third-color="rgba(255,115,46,0.25)"
                                    secondary-color="#995239"
                                    primary-color="#FF732E"
                                    fourth-color=" #FF732E"
                                    :value="warningCount.disOrange"
                            ></pre-warning-statistics-svg>
                            <pre-warning-statistics-svg
                                    svg-id="preWarningStatisticsSvg2"
                                    third-color="rgba(255,214,0,0.25)"
                                    secondary-color="#998F1E"
                                    primary-color="#FFD600"
                                    fourth-color="#FFD600"
                                    :value="warningCount.disYellow"
                            ></pre-warning-statistics-svg>
                            <pre-warning-statistics-svg
                                    svg-id="preWarningStatisticsSvg3"
                                    third-color="rgba(0,123,255,0.25)"
                                    secondary-color="#0059BC"
                                    primary-color="#007BFF"
                                    fourth-color=" #007BFF"
                                    :value="warningCount.disBlue"
                            ></pre-warning-statistics-svg>
                        </div>


                        <div style="width:100%;" class="font-size-small hBox vh_items_center"><div class="warining-item-width">气体预警</div><div class="title-right-border"></div></div>
                        <div style="width:100%" class="hBox vh_content_between vh_items_center beidou-warning-box">
                            <div class="beidou-warning-total">{{warningCount.gasCount}}</div>
                            <div class="beidou-warning-describe">累计预警次数</div>
                            <pre-warning-statistics-svg
                                    svg-id="gasPreWarningStatisticsSvg0"
                                    third-color="rgba(255,94,84,0.25)"
                                    secondary-color="#B34D53"
                                    primary-color="#FF5E54"
                                    fourth-color=" #FE4C40"
                                    :value="warningCount.gasRed"
                            ></pre-warning-statistics-svg>
                                <pre-warning-statistics-svg
                                    svg-id="gasPreWarningStatisticsSvg1"
                                    third-color="rgba(255,115,46,0.25)"
                                    secondary-color="#995239"
                                    primary-color="#FF732E"
                                    fourth-color=" #FF732E"
                                    :value="warningCount.gasOrange"
                            ></pre-warning-statistics-svg>
                            <pre-warning-statistics-svg
                                    svg-id="gasPreWarningStatisticsSvg2"
                                    third-color="rgba(255,214,0,0.25)"
                                    secondary-color="#998F1E"
                                    primary-color="#FFD600"
                                    fourth-color=" #FFD600"
                                    :value="warningCount.gasYellow"
                            ></pre-warning-statistics-svg>
                            <pre-warning-statistics-svg
                                    svg-id="gasPreWarningStatisticsSvg3"
                                    third-color="rgba(0,123,255,0.25)"
                                    secondary-color="#0059BC"
                                    primary-color="#007BFF"
                                    fourth-color=" #007BFF"
                                    :value="warningCount.gasBlue"
                            ></pre-warning-statistics-svg>
                        </div>

                    </div>
                </oblique-angle-rect>
            </div>
        </div>
    </div>
</template>

<script>
import SensorPie from '../../components/charts/sensor-pie';
import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';
import PreWarningStatisticsSvg from '../../components/svgs/pre-warning-statistics-svg';
import {mapState} from 'vuex'

export default {
    name: 'three-block',
    components: {
        SensorPie,
        ObliqueAngle,
        ObliqueAngleRect,
        PreWarningStatisticsSvg
    },
    data() {
      return   {
      }
    },
    computed: {
        ...mapState(['firstData']),
        warningCount() {return this.firstData.warningCount || {}}
},
    mounted() {
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
                        margin-left: 15px;
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
                width: 49%;
                .right-rect-content {
                    width:100%;
                    height:100%;
                    padding-left: 16px;
                    padding-right:20px;
                    .warining-item-width {
                        width:85px;
                    }

                    .title-right-border {
                        flex: 1;
                        height:15px;
                        background: rgba(0,94,255,0.37);
                        margin-left:4px;
                        clip-path: polygon(0 0 ,5px 0,19px 14px ,100% 14px,100% 15px,0 100%);

                    }
                    .sensor-right-title {
                        transform: translate(0,-3px);
                    }

                    .beidou-warning-total {
                        width: 70px;
                        height: 40px;
                        font-size: 40px;
                        font-family: BebasNeue;
                        text-align: left;
                        color: #ffffff;
                        line-height: 40px;
                        letter-spacing: 0px;
                    }
                    .beidou-warning-describe {
                        height: 12px;
                        opacity: 0.7;
                        font-size: 12px;
                        text-align: left;
                        color: #ffffff;
                        line-height: 12px;
                    }
                }

            }
        }
    }

</style>