<template>
    <div class="content chemical-two-block">
        <div class="navigation hBox vh_content_between font-size-medium">
            <div class="navigation-item" @click="goTo('first')"><img src="../../assets/img/icon/home_icon.png"/>返回首页
            </div>
            <div class="navigation-item"  @click="goTo('coal')"><img src="../../assets/img/icon/not-coal-white.png"/>非煤矿山领域
            </div>
            <div class="navigation-item navigation-active" ><img src="../../assets/img/icon/chemical-white.png"/>危化领域
            </div>
        </div>
        <div class="rect-box">
            <oblique-angle class="mb6" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextLeft"></oblique-angle>
            <div class="rect-box-content hBox">
                <div style="flex:2" class="hBox rect-box-content-left">
                    <oblique-angle-rect class="font-size-base mb8" style="min-width:40%;flex:1" :rectHeight="rectHeight"
                                        :rectBorderTop="rectBorderTop">
                        <div class="content ml20 vBox">
                            <div class="two-block-rect-title font-size-medium font-weight-medium">北斗+</div>
                            <div class="hBox vh_items_center vh_content_around" style="flex-grow: 1">
                                <div>
                                    <bei-dou-pie></bei-dou-pie>
                                </div>
                                <div class="mr20 vBox vh_content_between vh_items_center" style="height:100%">
                                    <div v-for="(item,index) in beiDouData" :key="item.name+index" class="bei-dou-item">
                                        <div>
                                            <img :src="item.icon"/>
                                        </div>
                                        <div>{{item.value}}</div>
                                        <div>{{item.name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base ml8 mb8" style="min-width:40%;flex:1"
                                        :rectHeight="rectHeight">
                        <div class="content ml20 vBox">
                            <div class="two-block-rect-title font-size-medium font-weight-medium">空天地</div>
                            <div class="hBox vh_items_center vh_content_around ktd-content" style="flex-grow: 1">
                                <div>
                                    <div>3288</div>
                                    <div>覆盖企业数量</div>
                                </div>
                                <div class="vBox vh_content_between mr20" style="height: 100%">
                                    <div>
                                        <div>88</div>
                                        <div>当前预警数量</div>
                                    </div>
                                    <div>
                                        <div>88</div>
                                        <div>历史预警数量</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base" style="min-width:40%;flex:1" :rectHeight="rectHeight"
                                        :rectBorderTop="rectBorderTop">
                        <div class="content ml20 vBox">
                            <div class="two-block-rect-title font-size-medium font-weight-medium">安全检查</div>
                            <div class="hBox vh_items_center vh_content_around ktd-content" style="flex-grow: 1">
                                <div>
                                    <div>3288</div>
                                    <div>隐患整改数量</div>
                                </div>
                                <div class="vBox vh_content_between mr20" style="height: 100%">
                                    <div>
                                        <div>88</div>
                                        <div>当前预警数量</div>
                                    </div>
                                    <div>
                                        <div>88</div>
                                        <div>历史预警数量</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base ml8" style="min-width:40%;flex:1"
                                        :rectHeight="rectHeight">
                        <div class="two-block-rect-title font-size-medium font-weight-medium">特殊作业</div>
                        <div class="hBox vh_items_center vh_content_around zz-content" style="flex-grow: 1">
                            <div>
                                <div>88</div>
                                <div>安证超期报警企业数</div>
                            </div>
                            <div>
                                <div>88</div>
                                <div>安证到期提醒企业数</div>
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
            beiDouData: [
                {
                    name: '排土场(家）',
                    value: 98,
                    icon:require('../../assets/img/coal/16.png')
                }, {
                    name: '露天矿场(家）',
                    value: 98,
                    icon:require('../../assets/img/coal/15.png')
                }, {
                    name: '尾矿库(家）',
                    value: 98,
                    icon:require('../../assets/img/coal/17.png')
                }
            ],
            activeIndex: 0,
            borderWidth1: 'chemical-two-block-title-width-1',
            borderWidth2: 'chemical-two-block-title-width-2',
            obliqueTextLeft: '预警手段',
            rectHeight: 'chemical-two-block-rect-height',
            rectBorderTop: 'chemical-two-block-rect-border-top'
        };
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
    .chemical-two-block {
        padding: 42px 30px 0 0;
        .navigation {
            width: 491px;
            margin-bottom: 40px;
            .navigation-item {
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
                }

                .bei-dou-item {
                    width: 238px;
                    height: 44px;
                    background: url("../../assets/img/coal/6.png") center  no-repeat;
                    background-size: contain;
                    position:relative;
                    &:hover {
                        background:url("../../assets/img/coal/5.png") center no-repeat;
                        background-size: contain;
                    }
                    > div {
                        position: absolute;
                        text-align: center;
                    }
                    > div:first-child {
                        height:26px;
                        width: 26px;
                        >img {
                            height:100%;
                            width: 100%;
                        }
                        left: 18px;
                        top:9px;
                    }
                    > div:nth-child(2) {
                        left: 78px;
                        font-size: 36px;
                        height: 44px;
                        line-height: 44px;
                        font-family: BebasNeue;
                    }
                    > div:last-child {
                        width: 91px;
                        height:28px;
                        line-height: 28px;
                        right: 10px;
                        top: 8px;
                        font-size: 12px;
                        background: url("../../assets/img/coal/10.png") center no-repeat;
                        background-size: contain;
                    }
                }

                .ktd-content {
                    >div:first-child {
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
                            left:19.5px;
                            font-size: 12px;
                            background: url("../../assets/img/coal/8.png") center center no-repeat;
                            background-size: contain;
                        }
                    }
                    >div:last-child {
                        >div {
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
                                right:0;
                                top:-2px;
                                font-family: BebasNeue;
                            }
                            > div:last-child {
                                width: 100%;
                                text-align: left;
                                top: 12px;
                                left:14px;
                                font-size: 14px;
                            }
                        }
                    }
                }

                                .zz-content {
                        >div {
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
                                top:23px;
                                font-family: BebasNeue;
                            }
                            > div:last-child {
                                width: 100%;
                                height:44px;
                                line-height:44px;
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