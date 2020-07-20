<template>
    <div class="content coal-two-block">
        <div class="navigation hBox vh_content_between font-size-medium">
            <div class="navigation-item" @click="goTo('first')"><img src="../../assets/img/icon/home_icon.png"/>返回首页</div>
            <div class="navigation-item navigation-active"><img src="../../assets/img/icon/not-coal-white.png" />非煤矿山领域</div>
            <div class="navigation-item" @click="goTo('chemical')"><img src="../../assets/img/icon/chemical-white.png"/>危化领域</div>
        </div>
        <div class="rect-box">
            <oblique-angle class="mb6" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextLeft"></oblique-angle>
            <div class="rect-box-content hBox">
                <div style="flex:2" class="hBox rect-box-content-left">
                    <oblique-angle-rect class="font-size-base mb8" style="min-width:40%;flex:1" :rectHeight="rectHeight"
                                        :rectBorderTop="rectBorderTop">
                        <p>{{obliqueTextLeft}}</p>
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base ml8 mb8" style="min-width:40%;flex:1"
                                        :rectHeight="rectHeight">
                        {{obliqueTextLeft}}
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base" style="min-width:40%;flex:1" :rectHeight="rectHeight"
                                        :rectBorderTop="rectBorderTop">
                        {{obliqueTextLeft}}
                    </oblique-angle-rect>
                    <oblique-angle-rect class="font-size-base ml8" style="min-width:40%;flex:1"
                                        :rectHeight="rectHeight">
                        {{obliqueTextLeft}}
                    </oblique-angle-rect>
                </div>
                <div style="flex:1" class="ml8">
                    <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight2">
                        {{obliqueTextLeft}}
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


export default {
    name: 'two-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect,
        ObliqueIcon
    },
    data () {
        return {
            activeIndex:0,
            borderWidth1: 'two-block-title-width-1',
            borderWidth2: 'two-block-title-width-2',
            obliqueTextLeft: `ll`,
            obliqueTextRight: '预警手段',
            rectHeight: 'two-block-rect-height',
            rectHeight2: 'two-block-rect-height2',
            rectBorderTop: 'two-block-rect-border-top',
            rectHeight34: 'two-block-rect-height34'
        };
    },
    methods: {
        goTo (type) {
            if (type === 'chemical') {
                this.$router.push({ path: 'chemical' });
            }
            else if (type === 'first') {
                this.$router.push({ path: 'first' });
            }
        }
    }
};
</script>

<style lang="scss">
    .coal-two-block {
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
                >img {
                    width:30px;
                    height:30px;
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
            }
        }
    }

    .two-block-oblique-icon {
        left: 272px;
        top: 8px;
    }

    .two-block-title-width-2 {
        width: 801px;
    }

    .two-block-title-width-1 {
        width: 772px;
    }

    .two-block-rect-height {
        height: 180px;
    }

    .two-block-rect-height2 {
        height: 368px;
    }

    .two-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .two-block-rect-content-height34 {
        height: 396px;
    }


</style>