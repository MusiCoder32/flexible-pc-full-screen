<template>
    <div class="slider" :class="{'slider-expand':isSliderExpand}">
        <img src="../assets/img/侧栏bg_img.png"/>
        <img src="../assets/img/正在检测企业icon_img.png"/>
        <img
                @click="sliderClick"
                style="cursor: pointer"
                :class="{'slider-icon-rotate':isSliderExpand}"
                src="../assets/img/left_icon_img.png"
        />
        <img src="../assets/img/覆盖人群icon_img.png"/>
        <div>
            <p>{{sliderData.monitoringCount}}</p>
            <p>正在监测企业</p>
        </div>
        <div>
            <p>{{sliderData.foucusCount}}</p>
            <p>重点关注企业</p>
        </div>
        <div>
            <p>{{sliderData.coverPeopleCount}}</p>
            <p>覆盖人群数（万）</p>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import SliderPie from '../components/charts/slider-pie';
import MapMarker from '../components/svgs/pie-bar-animation';
import {mapState} from 'vuex';

export default {
    name: 'first-block',
    components: {
        SliderPie,
        MapMarker
    },
    data () {
        return {
            isSliderExpand: false,
        };
    },
    computed: {
        ...mapState(['firstData']),
        sliderData() {
            let path = this.$route.path
            if (path.indexOf('first') > -1) {
                return this.$store.state.firstData.monitorCount || {};
            }
            else if (path.indexOf('coal') > -1) {
                return this.$store.state.coalData.monitorCount || {};
            }
            else if (path.indexOf('chemical') > -1) {
                return this.$store.state.chemicalData.monitorCount || {};
            }
        }
    },
    methods: {
        sliderClick () {
            this.isSliderExpand = !this.isSliderExpand;
        }
    }
};
</script>

<style lang="scss" scoped>

    .slider-expand {
        left: -188px !important;
        transition: left 2s;
    }

    .slider-icon-rotate {
        transform: translateX(21px) rotate(180deg);
        transition: transform 0s linear 2s;
    }

    .slider {
        position: absolute;
        top: 120px;
        left: -16px;
        height: 675px;
        width: 204px;
        z-index: 1000;
        > img {
            position: absolute;
        }
        > div {
            width: 100%;
            position: absolute;
            > p:first-child {
                width: 100%;
                font-size: 52px;
                font-family: "BebasNeue";
            }
            > p:last-child {
                width: 100%;
                font-size: 16px;
            }
        }
        img:first-child {
            height: 675px;
            width: 204px;
        }
        img:nth-child(2) {
            height: 56px;
            width: 56px;
            top: 42px;
            left: 24px;
        }
        img:nth-child(3) {
            height: 58px;
            width: 38px;
            top: 295px;
            left: 159px;
        }
        img:nth-child(4) {
            height: 56px;
            width: 56px;
            top: 485px;
            left: 24px;
        }
        div:nth-child(5) {
            top: 86px;
            left: 32px;
        }
        div:nth-child(6) {
            top: 325px;
            left: 32px;
        }
        div:nth-child(7) {
            top: 529px;
            left: 32px;
        }
        div:nth-child(8) {
            width: 56px;
            height: 56px;
            top: 280px;
            left: 24px;
            background: url("../assets/img/2.png") center center no-repeat;
            background-size: contain;
        }
    }

</style>