<template>
    <div class="content chemical-two-block">
        <div class="navigation hBox vh_content_between font-size-medium" style="position:relative;z-index: 1000">
            <div class="navigation-item" @click="goTo('first')"><img src="../../assets/img/icon/home_icon.png"/>返回首页
            </div>
            <div class="navigation-item" @click="goTo('coal')"><img src="../../assets/img/icon/not-coal-white.png"/>非煤矿山领域
            </div>
            <div class="navigation-item navigation-active"><img src="../../assets/img/icon/chemical-white.png"/>危化领域
            </div>
        </div>
        <div class="rect-box">
            <oblique-angle class="mb6" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextLeft"></oblique-angle>
            <div class="rect-box-content hBox">
                <div style="flex:2" class="hBox rect-box-content-left">
                    <oblique-angle-rect class="font-size-base mb8" style="min-width:40%;flex:1" :rectHeight="rectHeight"
                                        :rectBorderTop="rectBorderTop">
                        <div class="content  vBox rect-bei-dou">
                            <div class="ml20 two-block-rect-title font-size-medium font-weight-medium">北斗+</div>
                            <div class="hBox vh_items_center vh_content_around">
                                <div class="chemical-bei-dou" style="height:100%">
                                    <div>{{total}}</div>
                                    <div>覆盖企业数</div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="mr20 vBox vh_content_between vh_items_center" style="height:100%">
                                    <div v-for="(item,index) in beiDouData" :key="item.name+index" class="bei-dou-item">
                                        <div>{{item.value}}</div>
                                        <div>{{item.name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base ml8 mb8" style="min-width:40%;flex:1"
                                        :rectHeight="rectHeight">
                        <div class="content  vBox">
                            <div class="ml20 two-block-rect-title font-size-medium font-weight-medium">空天地</div>
                            <div class="hBox vh_items_center vh_content_around ktd-content" style="flex-grow: 1">
                                <div>
                                    <div>{{skyGround.coveredCount}}</div>
                                    <div>覆盖园区数量</div>
                                </div>
                                <div>
                                    <div>{{skyGround.currentWarnCount}}</div>
                                    <div>当前预警数量</div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base" style="min-width:40%;flex:1" :rectHeight="rectHeight"
                                        :rectBorderTop="rectBorderTop">
                        <div class="content vBox">
                            <div class=" ml20 two-block-rect-title font-size-medium font-weight-medium">安全检查</div>
                            <div class="hBox vh_items_center vh_content_around safe-check" style="flex-grow: 1">
                                <div>
                                    <div>{{checkSelf.checkCount}}</div>
                                    <div>检查次数</div>
                                </div>
                                <div>
                                    <div>{{checkSelf.hiddenDangerCount}}</div>
                                    <div>隐患个数</div>
                                </div>
                                <div>
                                    <div>{{checkSelf.doneCount}}</div>
                                    <div>闭环个数</div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base ml8" style="min-width:40%;flex:1"
                                        :rectHeight="rectHeight">
                        <div class="ml20 two-block-rect-title font-size-medium font-weight-medium">特殊作业</div>
                        <div class="hBox vh_items_center vh_content_around tszy-content" style="flex-grow: 1">
                            <div>
                                <div>{{special.coveredCount}}</div>
                                <div>覆盖企业数量</div>
                            </div>
                            <div class="vBox vh_content_between mr20" style="height: 100%">
                                <div>
                                    <div>{{special.currentWarnCount}}</div>
                                    <div>当前预警数量</div>
                                </div>
                                <div>
                                    <div>{{special.historyWarnCount}}</div>
                                    <div>历史预警数量</div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueIcon from '../../components/business_component/oblique-icon';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';
import BeiDouPie from '../../components/svgs/bei-dou-pie';


export default {
    name: 'two-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect,
        ObliqueIcon,
        BeiDouPie
    },
    data () {
        return {
            activeIndex: 0,
            borderWidth1: 'chemical-two-block-title-width-1',
            borderWidth2: 'chemical-two-block-title-width-2',
            obliqueTextLeft: '预警手段',
            rectHeight: 'chemical-two-block-rect-height',
            rectBorderTop: 'chemical-two-block-rect-border-top'
        };
    },
    computed: {
        skyGround: function () {
            return this.$store.state.chemicalData.hazardAirSpaceGround || {};
        },
        checkSelf() {
            return this.$store.state.chemicalData.safetyCheck || {};
        },
        special() {
            return this.$store.state.chemicalData.specialWork || {};

        },
        total() {
            let obj = this.$store.state.chemicalData.hazardBDStatistics || {};
            return obj.coveredCount || 0
        },
        beiDouData () {
            let obj = this.$store.state.chemicalData.hazardBDStatistics || {};

            return [
                {
                    name: '投入装置数量',
                    value: obj.equipmentCount || 0,
                }, {
                    name: '当前预警数量',
                    value: obj.currentWarnCount || 0,
                }, {
                    name: '历史预警数量',
                    value: obj.historyWarnCount || 0,
                }
            ];
        }
    },
    methods: {
        goTo (type) {
            if (type === 'coal') {
                this.$router.push({ path: 'coal' });
            }
            else if (type === 'first') {
                this.$router.push({ path: 'first' });
            }
        }
    }
};
</script>

<style lang="scss">
    @keyframes bei-rotate1 {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes bei-rotate2 {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .chemical-two-block {
        padding: 42px 30px 0 0;
        .navigation {
            width: 491px;
            margin-bottom: 40px;
            .navigation-item {
                cursor:pointer;
                width: 150px;
                height: 40px;
                opacity: 0.5;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                line-height: 40px;
                background: url("../../assets/img/navigation-button-bg.png") center center no-repeat;
                background-size: cover;

                &:hover {
                    background: url("../../assets/img/navigation-button-bg-active.png") center center no-repeat;
                    background-size: cover;
                    opacity: 1;
                }
                > img {
                    width: 30px;
                    height: 30px;
                }
            }
            .navigation-active {
                background: url("../../assets/img/navigation-button-bg-active.png") center center no-repeat;
                background-size: cover;
                opacity: 1;
            }
        }
        .rect-box {

            .rect-box-content {
                .rect-box-content-left {
                    flex-wrap: wrap;

                    .rect-bei-dou {
                        height: 186px;
                    }
                }

                .chemical-bei-dou {
                    position: relative;
                    width: 159px;
                    height: 159px;
                    margin: 35px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    > div:nth-child(3) {
                        width: 140px;
                        height: 140px;
                        position: absolute;
                        top: 50%;
                        left:50%;
                        transform: translate(-50%,-50%);
                        &:before {
                            content: "";
                            width: 140px;
                            height: 140px;
                            position: absolute;
                            background: url("../../assets/img/chemical/19.png") center no-repeat;
                            background-size: contain;
                            animation: bei-rotate1 20s infinite linear;
                        }
                    }
                    > div:nth-child(4) {
                        width: 137px;
                        height: 136px;
                        position: absolute;
                        top: 50%;
                        left:50%;
                        transform: translate(-50%,-50%);
                        &:after {
                            content: "";
                            background: url("../../assets/img/chemical/6.png") center no-repeat;
                            background-size: contain;
                            width: 137px;
                            height: 137px;
                            position: absolute;
                            animation: bei-rotate2 10s infinite linear;
                        }
                    }
                    > div:first-child {
                        font-size: 36px;
                        height: 35px;
                        text-align: center;
                        font-family: BebasNeue;
                        width: 100%;
                        position: relative;
                        z-index: 1000;
                    }
                    > div:nth-child(2) {
                        width: 100%;
                        text-align: center;
                        font-size: 10px;
                        position: relative;
                        z-index: 1000;
                    }
                }

                .bei-dou-item {
                    height: 57px;
                    width: 238px;
                    position: relative;
                    &:first-child {
                        width: 238px;
                        height: 58px;
                        background: url("../../assets/img/chemical/8.png") right center no-repeat;
                        background-size: contain;
                        &:hover {
                            background: url("../../assets/img/chemical/20.png") right center no-repeat;
                            background-size: contain;
                        }
                    }
                    &:nth-child(2) {
                        width: 214px;
                        background: url("../../assets/img/chemical/12.png") right center no-repeat;
                        background-size: contain;
                        left: 12px;
                        &:hover {
                            background: url("../../assets/img/chemical/21.png") right center no-repeat;
                            background-size: contain;
                        }
                        > div:first-child {
                            left: 26px;
                        }
                    }
                    &:last-child {
                        background: url("../../assets/img/chemical/1.png") right center no-repeat;
                        background-size: contain;
                        &:hover {
                            background: url("../../assets/img/chemical/22.png") right center no-repeat;
                            background-size: contain;
                        }
                    }
                    > div {
                        position: absolute;
                        text-align: center;
                    }
                    > div:first-child {
                        left: 50px;
                        top: 2px;
                        font-size: 36px;
                        height: 57px;
                        line-height: 57px;
                        font-family: BebasNeue;
                    }
                    > div:last-child {
                        width: 91px;
                        height: 57px;
                        line-height: 57px;
                        right: 16px;
                        text-align: left;
                        font-size: 12px;
                    }
                }

                .safe-check {
                    > div {
                        width: 141px;
                        height: 146px;
                        background: url("../../assets/img/chemical/11.png") center center no-repeat;
                        background-size: contain;
                        position: relative;

                        &:hover {
                            background: url("../../assets/img/chemical/10.png") center center no-repeat;
                            background-size: contain;
                        }

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
                            width: 102px;
                            height: 36px;
                            line-height: 36px;
                            bottom: 12px;
                            left: 19.5px;
                            font-size: 14px;

                        }
                    }
                }
                .ktd-content {
                    > div {
                        width: 191px;
                        height: 146px;
                        background: url("../../assets/img/chemical/14.png") center center no-repeat;
                        background-size: contain;
                        position: relative;

                        &:hover {
                            background: url("../../assets/img/chemical/13.png") center center no-repeat;
                            background-size: contain;
                        }

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
                            bottom: 25px;
                            font-size: 14px;

                        }
                    }
                }
                .tszy-content {
                    > div:first-child {
                        width: 141px;
                        height: 146px;
                        background: url("../../assets/img/coal/4.png") center center no-repeat;
                        background-size: contain;
                        position: relative;

                        &:hover {
                            background: url("../../assets/img/coal/3.png") center center no-repeat;
                            background-size: contain;
                        }

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
                            width: 102px;
                            height: 36px;
                            line-height: 36px;
                            bottom: 18px;
                            left: 19.5px;
                            font-size: 12px;
                            background: url("../../assets/img/coal/8.png") center center no-repeat;
                            background-size: contain;
                        }
                    }
                    > div:last-child {
                        > div {
                            width: 236px;
                            height: 65px;
                            background: url("../../assets/img/coal/1.png") center center no-repeat;
                            background-size: contain;
                            position: relative;
                            &:hover {
                                background: url("../../assets/img/coal/18.png") center center no-repeat;
                                background-size: contain;
                            }
                            > div {
                                width: 100%;
                                position: absolute;
                                text-align: center;
                            }
                            > div:first-child {
                                font-size: 36px;
                                width: 77px;
                                height: 70px;
                                line-height: 70px;
                                right: 0;
                                top: -2px;
                                font-family: BebasNeue;
                            }
                            > div:last-child {
                                text-align: left;
                                top: 12px;
                                left: 14px;
                                font-size: 14px;
                            }
                        }
                    }
                }

                .zz-content {
                    > div {
                        width: 190px;
                        height: 148px;
                        background: url("../../assets/img/coal/7.png") center center no-repeat;
                        background-size: contain;
                        position: relative;
                        &:hover {
                            background: url("../../assets/img/coal/2.png") center center no-repeat;
                            background-size: contain;
                        }
                        > div {
                            width: 100%;
                            position: absolute;
                            text-align: center;
                        }
                        > div:first-child {
                            font-size: 50px;
                            width: 100%;
                            top: 23px;
                            font-family: BebasNeue;
                        }
                        > div:last-child {
                            width: 100%;
                            height: 44px;
                            line-height: 44px;
                            text-align: center;
                            bottom: 12px;
                            font-size: 14px;
                            background: url("../../assets/img/coal/14.png") center center no-repeat;
                            background-size: contain;
                        }
                    }

                }

            }
        }
    }

    .two-block-oblique-icon {
        left: 272px;
        top: 8px;
    }

    .chemical-two-block-title-width-2 {
        width: 801px;
    }

    .chemical-two-block-title-width-1 {
        width: 772px;
    }

    .chemical-two-block-rect-height {
        height: 216px;
    }

    .chemical-two-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }


</style>