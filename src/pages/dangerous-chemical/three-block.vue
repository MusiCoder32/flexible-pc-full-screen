<template>
    <div class="content three-block">
        <oblique-angle title="覆盖企业情况"></oblique-angle>
        <div class="sensor">
            <div class="sensor-left">
                <div class="sensor-left-border-1"></div>
                <div class="sensor-left-content">
                    <div class="sensor-left-title font-size-medium">危险化学品企业数量</div>
                    <div class="sensor-chart hBox vh_content_around vh_items_center">
                        <div v-for="(item,index) in chemicalCompany" :key="item.name + index"
                             class="vBox vh_content_between vh_items_center">
                            <div>{{item.value}}</div>
                            <div>{{item.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="sensor-left-border-2">
                </div>
            </div>
            <div class="sensor-right">
                <oblique-angle-rect>
                    <div class="content ml20 vBox bigger-dangerous-box">
                        <div class="two-block-rect-title font-size-medium font-weight-medium">重大风险源总量</div>
                        <div class="hBox vh_items_center vh_content_around ktd-content pr20" style="flex-grow: 1">
                            <div>
                                <div>{{total}}</div>
                                <div>累计总数</div>
                            </div>
                            <div class="vBox vh_content_between mr20" style="height: 100%">
                                <div v-for="(item,index) in dangerousTotal" :key="item.name + index"
                                     class="dangerous-class-box">
                                    <div>{{item.name}}</div>
                                    <div>
                                        <div :style="{background:item.bgColor,width:`${item.value/dangerousTotalNumber*200}px`}"></div>
                                        {{item.value}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </oblique-angle-rect>
            </div>
        </div>
    </div>
</template>

<script>
import PreWarningBar from '../../components/charts/pre-warning-bar';
import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';
import DangerousCircle from '../../components/svgs/dangerous-circle';

export default {
    name: 'three-block',
    components: {
        PreWarningBar,
        ObliqueAngle,
        ObliqueAngleRect,
        DangerousCircle
    },
    data () {
        return {
            dangerousTotalNumber: 400
        };
    },
    computed: {
        chemicalCompany () {
            let obj = this.$store.state.chemicalData.hazardCompanyTypeCount || {};
            return [
                {
                    value: obj.productionCount || 0,
                    name: '生产企业（家）'
                }, {
                    value: obj.usingCount || 0,
                    name: '使用企业（家）'
                }, {
                    value: obj.runningCount || 0,
                    name: '经营企业（家）'
                }, {
                    value: obj.safetyCommitteeCount || 0,
                    name: '安委会企业（家）'
                }
            ];
        }
        ,
        total () {
            let obj = this.$store.state.chemicalData.majorHazardInstallation || {};
            return obj.total || 0;
        },
        dangerousTotal () {
            let obj = this.$store.state.chemicalData.majorHazardInstallation || {};

            return [
                {
                    value: obj.one || 0,
                    name: '一级',
                    bgColor: 'rgba(255,94,84,1)'
                },
                {
                    value: obj.two || 0,
                    name: '二级',
                    bgColor: 'rgba(255,115,46,1)'
                }, {
                    value: obj.three || 0,
                    name: '三级',
                    bgColor: 'rgba(255,214,0,1)'
                }, {
                    value: obj.four || 0,
                    name: '四级',
                    bgColor: 'rgba(0,123,255,1)'
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
    @keyframes chemical-rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .bigger-dangerous-box {
        height: 174px;
    }

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
                        > div {
                            > div:first-child {
                                width: 94px;
                                height: 82px;
                                line-height: 82px;
                                font-size: 32px;
                                font-family: BebasNeue;
                                text-align: center;
                                background: url("../../assets/img/chemical/17.png") center no-repeat;
                                background-size: contain;
                                margin-bottom: 19px;
                                position: relative;

                                &:before {
                                    content: "";
                                    width: 76px;
                                    height: 76px;
                                    left: 9.5px;
                                    top: 2.5px;
                                    position: absolute;
                                    background: url("../../assets/img/chemical/9.png") center no-repeat;
                                    background-size: contain;
                                    animation: chemical-rotate 20s infinite linear;
                                }

                            }
                            > div:last-child {
                                text-align: center;
                                height: 17px;
                                line-height: 17px;
                                opacity: 0.7;
                                font-size: 12px;
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
                width: 49%;
                .ktd-content {
                    > div:first-child {
                        width: 110px;
                        height: 132px;
                        background: url("../../assets/img/chemical/2.png") center center no-repeat;
                        background-size: contain;
                        position: relative;

                        > div {
                            width: 100%;
                            position: absolute;
                            text-align: center;
                        }
                        > div:first-child {
                            top: 40px;
                            font-size: 36px;
                            font-family: BebasNeue;
                        }
                        > div:last-child {
                            width: 100%;
                            height: 36px;
                            line-height: 36px;
                            text-align: center;
                            bottom: 20px;
                            font-size: 12px;

                        }
                    }
                    > div:last-child {
                        > div.dangerous-class-box {
                            width: 305px;
                            height: 40px;
                            background: url("../../assets/img/chemical/15.png") center center no-repeat;
                            background-size: contain;
                            position: relative;
                            &:hover {
                                background: url("../../assets/img/chemical/16.png") center center no-repeat;
                                background-size: contain;
                            }
                            > div {
                                width: 100%;
                                position: absolute;
                                text-align: center;
                            }
                            > div:first-child {
                                font-size: 12px;
                                height: 40px;
                                line-height: 40px;
                                text-align: left;
                                left: 28px;
                                top: 2px;
                                font-family: BebasNeue;
                            }
                            > div:last-child {
                                width: 100%;
                                height: 40px;
                                text-align: left;
                                top: 1px;
                                left: 78px;
                                font-size: 14px;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                > div {
                                    width: 200px;
                                    height: 14px;
                                    background: red;
                                    border-radius: 3px;
                                    margin-right: 5px;
                                }
                            }
                        }

                    }
                }
            }
        }
    }

</style>