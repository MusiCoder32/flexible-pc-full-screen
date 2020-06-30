<template>
    <div class="content four-block-box">
            <oblique-angle class="mb8" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextLeft"></oblique-angle>
            <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight" :rectContentHeight="rectContentHeight"
                                :rectBorderTop="rectBorderTop">
                <div class="font-size-medium  rect-title">服务企业数量趋势</div>
                <div class="line-chart">
                    <four-block-line></four-block-line>
                </div>
                <div class="first-total">
                    <div>11590</div>
                    <div>监测报告统计</div>
                </div>
                <div class="first-total two-total-position">
                    <div>11590</div>
                    <div>发现问题统计</div>
                </div>
            </oblique-angle-rect>
        </div>
</template>

<script>

import ObliqueAngle from '../../components/business_component/oblique-angle'
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect'
import FourBlockLine from '../../components/charts/four-block-line'


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
        }
    }
}
</script>

<style lang="scss">
    .two-total-position {
        top:111px !important;
    }
    .first-total {
        width: 142px;
        height: 72px;
        position:absolute;
        top:22px;
        right:30px;
        background: url("../../assets/img/空天地_img.png") center center no-repeat;
        background-size: cover;
        >div:first-child {
            padding:10px 0 0 0;
            width:100%;
            text-align: center;
            font-size: 32px;
            font-family: BebasNeue;
        }
        >div:last-child {
            width:100%;
            text-align: center;
            font-size: 12px;
        }
    }
    .rect-title {
        font-weight: 400;
        height:20px;
        padding-left:24px;
    }
    .line-chart {
        width:85%;
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