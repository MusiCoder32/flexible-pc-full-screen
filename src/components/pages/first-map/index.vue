<template>
    <div class='content hBox first-map'>
        <div class="first-block">
            <first-block></first-block>
        </div>
        <div class="two-block">

        </div>
        <div class="three-block">

        </div>
        <div class="four-block">

        </div>
    </div>
</template>

<script>
import FirstMap from '../pie-bar-animation'
import FirstBlock from './first-block'

export default {
    components: {
        FirstMap,
        FirstBlock
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
            background: green;
        }
        .three-block {
            height: 286px;
            background: white;
        }
        .four-block {
            background: orange;
            height: 286px;
        }
    }
</style>

