<template>
    <div class='first-map'>
        <div class='doughnut'>
            <doughnut></doughnut>
        </div>
        <div class='point'>
            <point></point>
        </div>
        <div class='line'>
            <line-chart></line-chart>
        </div>
        <div class='line-y-ca'></div>
        <div class='map'>
            <first-map></first-map>
        </div>
        <div class='bar'>
            <bar></bar>
        </div>
        <div class='pie-char'>
            <pie></pie>
        </div>
        <div class='gauge'>
            <gauge></gauge>
        </div>
        <div class='double-line'>
            <double-line></double-line>
        </div>
    </div>
</template>

<script>
import Doughnut from '@/components/charts/Doughnut'
import Point from '@/components/charts/Point'
import LineChart from '@/components/charts/Line'
// import Map from '@/components/charts/Map'
import Bar from '@/components/charts/Bar'
import Pie from '@/components/charts/Pie'
import Gauge from '@/components/charts/Gauge'
import DoubleLine from '@/components/charts/DoubleLine'
import FirstMap from './pie-bar-animation'

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
    },
    data () {
        return {
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>


    .title {
        top: 50px;
        left: 30px;
        font-size: 40px;
        color: white;
    }

    .doughnut {

        width: 400px;
        height: 300px;
        border: solid 1px rgba(255, 255, 255, 0.2);
    }

    .point {

        width: 400px;
        height: 370px;
        border: solid 1px rgba(255, 255, 255, 0.2);
    }

    .line {
        left: 30px;
        bottom: 35px;
        width: 555px;
        height: 148px;
    }

    .map {

        width: 850px;
        height: 715px;
    }

    .bar {

        width: 555px;
        height: 148px;
    }

    .pie-char {

        width: 390px;
        height: 300px;
        border: solid 1px rgba(255, 255, 255, 0.2);
    }

    .gauge {

        width: 390px;
        height: 420px;
        border: solid 1px rgba(255, 255, 255, 0.2);
    }

    .double-line {
;
        width: 555px;
        height: 148px;
    }

    .fullscreen-button {

        width: 200px;
        height: 40px;
        font-size: 25px;
        right: 30px;
        border-radius: 8px;
        color: #E9D70C;
    }

</style>

