<template>
    <div class="content four-block-box">
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
                <div class="problem-statistics"></div>
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
                    name:'雷达',
                    url: 'http://baidu.com'
                },
                {
                    bgUrl: require('../../assets/img/radar-bg.png'),
                    iconUrl:require('../../assets/img/ic_ktd_xc_xy.png'),
                    name:'旋翼',
                    url: 'http://baidu.com'
                },
                {
                    bgUrl: require('../../assets/img/radar-bg.png'),
                    iconUrl:require('../../assets/img/ic_ktd_hc_dj.png'),
                    name:'短焦',
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
            left:168px;
            top:107px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }

    .problem-statistics {
        width:108px;
        height:159px;
        background: rebeccapurple;
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

    .four-block-box {
        padding-right: 30px;

    }

</style>