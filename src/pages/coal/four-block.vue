<template>
    <div class="content four-block-box">
            <oblique-angle class="mb8" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                           :title="obliqueTextLeft"></oblique-angle>
            <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight"
                                :rectBorderTop="rectBorderTop">
                4
            </oblique-angle-rect>
        </div>
</template>

<script>

import ObliqueAngle from '../../components/business_component/oblique-angle'
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect'


export default {
    name: 'four-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect,
    },
    data () {
        return {
            borderWidth1: 'four-block-title-width-1',
            borderWidth2: 'four-block-title-width-2',
            obliqueTextLeft: '空天地一体化技术',
            rectHeight: 'four-block-rect-height',
            rectBorderTop: 'four-block-rect-border-top',
        }
    }
}
</script>

<style lang="scss">

    .four-block-title-width-2 {
        width: 696px;
    }

    .four-block-title-width-1 {
        width: 667px;
    }

    .four-block-rect-height {
        height: 274px;
    }


    .four-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .four-block-box {
        padding-right: 30px;

    }

</style>