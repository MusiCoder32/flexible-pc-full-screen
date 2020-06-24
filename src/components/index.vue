<template>
    <div class='dashboard'>
        <v-header></v-header>
        <div class="child-content hBox vh_content_center vh_items_center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vHeader from './pages/header'
import Doughnut from '@/components/charts/Doughnut'
import Point from '@/components/charts/Point'
import LineChart from '@/components/charts/Line'
// import Map from '@/components/charts/Map'
import Bar from '@/components/charts/Bar'
import Pie from '@/components/charts/Pie'
import Gauge from '@/components/charts/Gauge'
import DoubleLine from '@/components/charts/DoubleLine'

import FirstMap from './pages/pie-bar-animation'

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

