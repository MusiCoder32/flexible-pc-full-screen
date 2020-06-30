<template>
    <div class='dashboard'>
        <v-header></v-header>
        <div class="child-content hBox vh_content_center vh_items_center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vHeader from './header'
import Doughnut from '@/components/charts_demo/Doughnut'
import Point from '@/components/charts_demo/Point'
import LineChart from '@/components/charts_demo/Line'
// import Map from '@/components/charts_demo/Map'
import Bar from '@/components/charts_demo/Bar'
import Pie from '@/components/charts_demo/Pie'
import Gauge from '@/components/charts_demo/Gauge'
import DoubleLine from '@/components/charts_demo/DoubleLine'

import FirstMap from '../components/svgs/pie-bar-animation'

export default {
    components: {
        Doughnut,
        Point,
        FirstMap,
        LineChart,
        Bar,
        Pie,
        Gauge,
        DoubleLine,
        vHeader
    },
    data () {
        return {
            isFullScreen: false,
        }
    },
    methods: {
        toggleFullscreen () {
            if (this.isFullScreen) {
                this.exitFullScreen()
            } else {
                this.launchFullScreen(document.documentElement)
            }
            this.isFullScreen = !this.isFullScreen
        },
        launchFullScreen (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen()
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen()
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen()
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen()
            }
        },
        exitFullScreen () {
            if (document.exitFullscreen) {
                document.exitFullScreen()
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .dashboard {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
    }

    .child-content {
        width: 100%;
        height: calc(100% - 78px);
    }


</style>

