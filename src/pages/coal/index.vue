<template>
    <div class='content hBox first-map'>
        <div class="first-block">
            <first-block></first-block>
        </div>
        <div class="two-block">
            <two-block></two-block>
        </div>
        <div class="three-block">
            <three-block></three-block>
        </div>
        <div class="four-block">
            <four-block></four-block>
        </div>
    </div>
</template>

<script>
import FirstMap from '../../components/svgs/pie-bar-animation'
import FirstBlock from './first-block'
import TwoBlock from './two-block'
import ThreeBlock from './three-block'
import FourBlock from './four-block'

export default {
    components: {
        FirstMap,
        FirstBlock,
        TwoBlock,
        ThreeBlock,
        FourBlock
    },
    data () {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
    .first-map {
        flex-wrap: wrap;
        align-items: center;
        > div {
            width: 50%;
        }
        .first-block {
            height: 716px;
            position: relative;
        }
        .two-block {
            height: 716px;
        }
        .three-block {
            height: 286px;
        }
        .four-block {
            height: 286px;
        }
    }
</style>

