<template>
    <div class="content pr30">
        <oblique-angle class="mb8" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                       :title="obliqueTextLeft"></oblique-angle>
        <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight" :rectContentHeight="rectContentHeight"
                            :rectBorderTop="rectBorderTop">
            <div class="content hBox vh_content_around vh_items_center">
                <div class="links-box" style="background-size: contain" v-for="(item,index) in thirdpartLinks"
                     :key="item.url + index" :style="{background:`url(${item.bgUrl})`,backgroundSize:'contain'}">
                    <!--<div class="thumbnails" :style="{background:`url(${item.thumbnails}) 0% 0% / contain`}"></div>-->
                    <el-carousel :interval="5000" class="thumbnails">
                        <el-carousel-item v-for="bg in item.thumbnails" :key="bg" style="width:100%;height:100%"
                                          :style="{background:`url(${bg}) no-repeat center / cover`}">
                        </el-carousel-item>
                    </el-carousel>
                    <div class="icon-title">
                        <img :src="item.iconUrl" alt="">
                        <div>{{item.name}}</div>
                    </div>
                </div>
                <div class="problem-statistics">
                    <div>{{airSpaceGround.problemCount}}</div>
                    <div>发现问题统计</div>
                </div>
            </div>

        </oblique-angle-rect>
    </div>
</template>
<script>

import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';


export default {
    name: 'four-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect
    },
    data () {
        return {
            borderWidth1: 'four-block-title-width-1',
            borderWidth2: 'four-block-title-width-2',
            obliqueTextLeft: '空天地一体化技术',
            rectHeight: 'four-block-rect-height',
            rectContentHeight: 'four-block-rect-content-height',
            rectBorderTop: 'four-block-rect-border-top'

        };
    },
    computed: {
        airSpaceGround () {
            return this.$store.state.firstData.airSpaceGround || {};
        },

        thirdpartLinks () {
            let thirdpartLinks = [
                {
                    bgUrl: require('../../assets/img/radar-bg0.png'),
                    iconUrl: require('../../assets/img/ic_ktd_pc_ld.png'),
                    name: '遥感',
                    thumbnails: '',
                    url: 'http://baidu.com'
                },
                {
                    bgUrl: require('../../assets/img/radar-bg1.png'),
                    iconUrl: require('../../assets/img/ic_ktd_xc_xy.png'),
                    name: '无人机',
                    thumbnails: '',
                    url: 'http://baidu.com'
                },
                {
                    bgUrl: require('../../assets/img/radar-bg2.png'),
                    iconUrl: require('../../assets/img/ic_ktd_hc_dj.png'),
                    name: '三维激光',
                    thumbnails: '',
                    url: 'http://baidu.com'
                }

            ];
            thirdpartLinks[0].thumbnails = this.airSpaceGround.remoteSensingImg || [];
            thirdpartLinks[1].thumbnails = this.airSpaceGround.uavImg || [];
            thirdpartLinks[2].thumbnails = this.airSpaceGround.threeDImg || [];
            return thirdpartLinks;
        }
    },
    mounted () {

    }
};
</script>

<style lang="scss">
    .links-box {
        width: 232px;
        height: 167px;
        position: relative;
        .thumbnails {
            width: 210px;
            height: 118px;
            position: absolute;
            right: 11px;
            top: 11px;
            .el-carousel__container {
                width: 210px;
                height: 118px;
            }
            .el-carousel__indicators {
                display: none;
            }
            .el-carousel__arrow {
                display: none;
            }

        }
        .icon-title {
            font-size: 12px;
            font-weight: 500;
            position: absolute;
            width: 210px;
            padding:0 5px 0 0;
            right: 11px;
            top: 108px;
            display: flex;
            justify-content: flex-end;
            background: linear-gradient(0deg,rgba(12,19,26,0.8),rgba(12,19,26,0.5),rgba(12,19,26,0));
            align-items: center;
            z-index: 1000;
        }
    }

    .problem-statistics {
        width: 116px;
        height: 167px;
        background: url("../../assets/img/index/17.png") center no-repeat;
        background-size: contain;
        position: relative;
        &:hover {
            background: url("../../assets/img/index/14.png") center no-repeat;
            background-size: contain;
        }
        > div {
            width: 100%;
            position: absolute;
            text-align: center;
        }
        > div:first-child {
            top: 55px;
            font-size: 36px;
            font-family: BebasNeue;
        }
        > div:last-child {
            height: 30px;
            line-height: 30px;
            background: url("../../assets/img/index/15.png") center no-repeat;
            background-size: contain;
            top: 110px;
            font-size: 12px;
        }
    }

    .two-total-position {
        top: 111px !important;
    }

    .rect-title {
        font-weight: 400;
        height: 20px;
        padding-left: 24px;
    }

    .line-chart {
        width: 85%;
        height: calc(100% - 20px);
    }

    .four-block-title-width-2 {
        width: 696px;
    }

    .four-block-title-width-1 {
        width: 667px;
    }

    .four-block-rect-height {
        height: 204px;
    }

    .four-block-rect-content-height {
        height: 174px;
    }

    .four-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

</style>