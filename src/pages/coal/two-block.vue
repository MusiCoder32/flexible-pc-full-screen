<template>
    <div class="content two-block-box hBox">
        <div class="two-block-1">
            <oblique-icon class="two-block-oblique-icon"></oblique-icon>
            <oblique-angle class="mb6" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextLeft"></oblique-angle>
            <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight" :rectContentHeight="rectContentHeight"
                                :rectBorderTop="rectBorderTop">
                {{obliqueTextLeft}}
            </oblique-angle-rect>
        </div>
        <div class="two-block-2">
            <oblique-icon class="two-block-oblique-icon"></oblique-icon>
            <oblique-angle class="mb6" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextRight"></oblique-angle>
            <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight" :rectContentHeight="rectContentHeight"
                                :rectBorderTop="rectBorderTop">
                {{obliqueTextRight}}
            </oblique-angle-rect>
        </div>
        <div class="two-block-3">
            <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight34"
                                :rectContentHeight="rectContentHeight34">
                3
            </oblique-angle-rect>
        </div>
        <div class="two-block-4">
            <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight34"
                                :rectContentHeight="rectContentHeight34">
                4
            </oblique-angle-rect>
        </div>
    </div>
</template>

<script>
import ObliqueAngle from '../../components/business_component/oblique-angle'
import ObliqueIcon from '../../components/business_component/oblique-icon'
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect'


export default {
    name: 'two-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect,
        ObliqueIcon
    },
    data () {
        return {
            borderWidth1: 'two-block-title-width-1',
            borderWidth2: 'two-block-title-width-2',
            obliqueTextLeft: '金属非金属矿山领域',
            obliqueTextRight: '化工园区危险化学品领域',
            rectHeight: 'two-block-rect-height',
            rectContentHeight: 'two-block-rect-content-height',
            rectBorderTop: 'two-block-rect-border-top',
            rectHeight34: 'two-block-rect-height34',
            rectContentHeight34: 'two-block-rect-content-height34'
        }
    }
}
</script>

<style lang="scss">
    .two-block-oblique-icon {
        left:272px;
        top:8px;
    }
    .two-block-title-width-2 {
        width: 297px;
    }

    .two-block-title-width-1 {
        width: 268px;
    }

    .two-block-rect-height {
        height: 180px;
    }

    .two-block-rect-content-height {
        height: 150px;
    }

    .two-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .two-block-rect-height34 {
        height: 426px;
    }

    .two-block-rect-content-height34 {
        height: 396px;
    }

    .two-block-box {
        padding: 22px 0 0 15px;
        flex-wrap: wrap;
        > div {
            width: 50%;
            padding-right: 30px;
        }
        .two-block-1 {
            height: 230px;
            position:relative;
        }
        .two-block-2 {
            height: 230px;
            position:relative;
        }
        .two-block-3 {
            height: 464px;
            padding-top:8px;
        }
        .two-block-4 {
            height: 464px;
            padding-top:8px;

        }
    }

</style>