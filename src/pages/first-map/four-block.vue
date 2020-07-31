<template>
    <div class="content pr30">
        <oblique-angle class="mb8" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                       :title="obliqueTextLeft"></oblique-angle>
        <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight" :rectContentHeight="rectContentHeight"
                            :rectBorderTop="rectBorderTop">
            <div class="content hBox vh_content_around vh_items_center">
                <div class="links-box" style="background-size: contain" v-for="(item,index) in thirdpartLinks" :key="item.url + index" :style="{background:`url(${item.bgUrl})`,backgroundSize:'contain'}" >
                    <div class="icon-title">
                        <img :src="item.iconUrl" alt="">
                        <div>{{item.name}}</div>
                    </div>
                </div>
                <div class="problem-statistics">
                    <div>8604</div>
                    <div>发现问题统计</div>
                </div>
            </div>

        </oblique-angle-rect>
    </div>
</template>
<script>

import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';
import FourBlockLine from '../../components/charts/four-block-line';


export default {
    name: 'four-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect,
        FourBlockLine
    },
    data () {
        return {
            borderWidth1: 'four-block-title-width-1',
            borderWidth2: 'four-block-title-width-2',
            obliqueTextLeft: '空天地一体化技术',
            rectHeight: 'four-block-rect-height',
            rectContentHeight: 'four-block-rect-content-height',
            rectBorderTop: 'four-block-rect-border-top',
            thirdpartLinks: [
                {
                    bgUrl: require('../../assets/img/radar-bg.png'),
                    iconUrl:require('../../assets/img/ic_ktd_pc_ld.png'),
                    name:'遥感',
                    url: 'http://baidu.com'
                },
                {
                    bgUrl: require('../../assets/img/radar-bg.png'),
                    iconUrl:require('../../assets/img/ic_ktd_xc_xy.png'),
                    name:'无人机',
                    url: 'http://baidu.com'
                },
                {
                    bgUrl: require('../../assets/img/radar-bg.png'),
                    iconUrl:require('../../assets/img/ic_ktd_hc_dj.png'),
                    name:'三维激光',
                    url: 'http://baidu.com'
                },

            ]
        };
    }
};
</script>

<style lang="scss">
    .links-box {
        width:232px;
        height:167px;
        position:relative;
        .icon-title {
            font-size: 12px;
            font-weight: 500;
            position:absolute;
            right:15px;
            top:107px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }
    }

    .problem-statistics {
        width:116px;
        height:167px;
        background: url("../../assets/img/index/14.png") center no-repeat;
        background-size: contain;
        position: relative;
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
            font-size:12px;
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