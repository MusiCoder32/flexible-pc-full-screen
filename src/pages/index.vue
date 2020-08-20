<template>
    <div class="dashboard">
        <v-header></v-header>
        <div class="child-content hBox vh_content_center vh_items_center">
            <router-view></router-view>
        </div>
        <slider></slider>
        <div class="map">
            <div class="county-box">
                <div v-for="(item,index) in mapMarkers" :class="'map-'+item.class" :key="item.name+index" @mouseover="hoverIndex=index" @mouseout="hoverIndex=-1">
                    <map-marker
                            :id="'marker'+item.name+index"
                            :number="item.total"
                            :name="item.name"
                            :hover="index===hoverIndex"
                            :lowRiskCount="item.lowRiskCount"
                            :generalRiskCount="item.generalRiskCount"
                            :highRiskCount="item.highRiskCount"
                            :significantRisk="item.significantRisk"
                            class="map-marker-normal"
                    ></map-marker>
                    <img :src="item.src" alt/>
                </div>
            </div>
            <div class="legend">
                <div class="top-corner"></div>
                <div class="center-content">
                    <div class="title-icon">
                        <div class="icon left-top"></div>
                        <pre>低风险  </pre>
                    </div>
                    <div class="title-icon">
                        <div class="icon right-top"></div>
                        <div>一般风险</div>
                    </div>
                    <div class="title-icon">
                        <div class="icon left-bottom"></div>
                        <div>较大风险</div>
                    </div>
                    <div class="title-icon">
                        <div class="icon right-bottom"></div>
                        <pre>重大风险  </pre>
                    </div>
                </div>
                <div class="bottom-corner"></div>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from './header';
import Slider from './slider';
import Doughnut from '@/components/charts_demo/Doughnut';
import Point from '@/components/charts_demo/Point';
import LineChart from '@/components/charts_demo/Line';

// import Map from '@/components/charts_demo/Map'
import Bar from '@/components/charts_demo/Bar';
import Pie from '@/components/charts_demo/Pie';
import Gauge from '@/components/charts_demo/Gauge';
import DoubleLine from '@/components/charts_demo/DoubleLine';

import FirstMap from '../components/svgs/pie-bar-animation';
import mapMarker from '../components/svgs/pie-bar-animation';

import bus from '../common/bus'

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
        vHeader,
        Slider,
        mapMarker
    },
    data () {
        return {
            isFullScreen: false,
            chemicalType:0,
            hoverIndex:-1
        };
    },
    computed: {
        mapMarkers () {
            let all = [
                {
                    name: '阿坝州',
                    class: 'abz',

                    src: require('../assets/img/map/阿坝州_img.png')
                },
                {
                    name: '巴中市',
                    class: 'bzs',
                    src: require('../assets/img/map/巴中市_img.png')
                },
                {
                    name: '成都市',
                    class: 'cds',

                    src: require('../assets/img/map/成都市_img.png')
                },
                {
                    name: '达州市',
                    class: 'dzs',

                    src: require('../assets/img/map/达州市_img.png')
                },
                {
                    name: '德阳市',
                    class: 'dys',

                    src: require('../assets/img/map/德阳市_img.png')
                },
                {
                    name: '甘孜州',
                    class: 'gzz',

                    src: require('../assets/img/map/甘孜州_img.png')
                },
                {
                    name: '广安市',
                    class: 'gas',

                    src: require('../assets/img/map/广安市_img.png')
                },
                {
                    name: '广元市',
                    class: 'gys',

                    src: require('../assets/img/map/广元市_img.png')
                },
                {
                    name: '乐山市',
                    class: 'lss',

                    src: require('../assets/img/map/乐山市_img.png')
                },
                {
                    name: '凉山州',
                    class: 'lsz',

                    src: require('../assets/img/map/凉山州_img.png')
                },
                {
                    name: '泸州市',
                    class: 'lzs',
                    src: require('../assets/img/map/泸州市_img.png'),
                },
                {
                    name: '南充市',
                    class: 'ncs',
                    src: require('../assets/img/map/南充市_img.png')
                },
                {
                    name: '眉山市',
                    class: 'mss',

                    src: require('../assets/img/map/眉山市_img.png')
                },
                {
                    name: '遂宁市',
                    class: 'sns',

                    src: require('../assets/img/map/遂宁市_img.png')
                },
                {
                    name: '绵阳市',
                    class: 'mys',
                    src: require('../assets/img/map/绵阳市_img.png')
                },
                {
                    name: '资阳市',
                    class: 'zys',

                    src: require('../assets/img/map/资阳市_img.png')
                },
                {
                    name: '攀枝花',
                    class: 'pzh',

                    src: require('../assets/img/map/攀枝花_img.png')
                },
                {
                    name: '内江市',
                    class: 'njs',
                    src: require('../assets/img/map/内江市_img.png')
                },
                {
                    name: '自贡市',
                    class: 'zgs',
                    src: require('../assets/img/map/自贡市_img.png')
                },
                {
                    name: '雅安市',
                    class: 'yas',
                    src: require('../assets/img/map/雅安市_img.png')
                },
                {
                    name: '宜宾市',
                    class: 'ybs',
                    src: require('../assets/img/map/宜宾市_img.png')
                },

            ];
            let path = this.$route.path;
            let data = [];

            if (path.indexOf('first') > -1) {
                data = this.$store.state.firstData.mapStatistics || [];
            }
            else if (path.indexOf('coal') > -1) {
                data = this.$store.state.coalData.mapStatistics || [];
            }
            else if (path.indexOf('chemical') > -1) {
                if(this.chemicalType===0) {
                    data = this.$store.state.chemicalData.mapStatistics || [];
                } else {
                    data = this.$store.state.chemicalData.mapParkStatistics || [];
                }
            }
            let al = data.map(item => {
                let obj = all.filter(AItem => {
                    return AItem.name.indexOf(item.areaName) > -1;
                });
                return { ...item, ...obj[0] };
            });
            console.log(al)
            return al;
        }
    },
    mounted () {
        bus.$on('chemicalChangeMap',(type)=>{
            this.chemicalType = type
        })
    },
    methods: {
        toggleFullscreen () {
            if (this.isFullScreen) {
                this.exitFullScreen();
            }
            else {
                this.launchFullScreen(document.documentElement);
            }
            this.isFullScreen = !this.isFullScreen;
        },
        launchFullScreen (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            }
            else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
            else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        },
        exitFullScreen () {
            if (document.exitFullscreen) {
                document.exitFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .dashboard {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        position: relative;
    }

    .map {
        width: 1066px;
        height: 849px;
        background: url("../assets/img/map/四川地图.png") center center no-repeat;
        background-size: contain;
        position: absolute;
        top: 19px;
        left: -20px;
        .county-box {
            height: 721px;
            width: 878px;
            position: absolute;
            left: 70px;
            > div {
                position: absolute;

                &:hover {
                    img {
                        opacity: 1;
                    }
                }
            }
            img {
                width: 100%;
                height: 100%;
                opacity: 0;
            }
            .map-marker-normal {
                position: absolute;
                top: 50%;
                left: 50%;
                opacity: 1;
                transform: translate(-50%, -60%) scale(0.8);
            }
            .map-lzs {
                width: 119px;
                height: 137px;
                left: 631px;
                top: 417px;
                z-index:1000
            }
            .map-gas {
                width: 108px;
                height: 53px;
                left: 692px;
                top: 311px;
                z-index: 999;
            }
            .map-dzs {
                width: 132px;
                height: 120px;
                left: 746px;
                top: 225px;
                z-index: 998;
            }
            .map-ybs {
                width: 162px;
                height: 115px;
                left: 488px;
                top: 421px;
                z-index: 997;
            }
            .map-zgs {
                width: 108px;
                height: 53px;
                left: 530px;
                top: 393px;
                z-index: 996;
            }
            .map-njs {
                width: 102px;
                height: 64px;
                left: 548px;
                top: 361px;
                z-index: 995;
            }
            .map-zys {
                width: 108px;
                height: 62px;
                left: 565px;
                top: 325px;
                z-index: 994;
            }

            .map-sns {
                width: 79px;
                height: 63px;
                left: 613px;
                top: 291px;
                z-index: 993;
            }
            .map-ncs {
                width: 120px;
                height: 81px;
                left: 644px;
                top: 253px;
                z-index: 992;
            }
            .map-bzs {
                width: 100px;
                height: 82px;
                left: 714px;
                top: 204px;
                z-index: 991;
            }
            .map-mss {
                width: 147px;
                height: 79px;
                left: 421px;
                top: 343px;
                z-index: 990;
            }
            .map-lss {
                width: 125px;
                height: 115px;
                left: 423px;
                top: 371px;
                z-index: 990;
            }
            .map-cds {
                width: 155px;
                height: 86px;
                left: 446px;
                top: 275px;
                z-index: 899;
            }
            .map-dys {
                width: 110px;
                height: 70px;
                left: 513px;
                top: 260px;
                z-index: 898;
            }
            .map-mys {
                width: 155px;
                height: 131px;
                left: 513px;
                top: 187px;
                z-index: 897;
            }
            .map-gys {
                width: 160px;
                height: 74px;
                left: 579px;
                top: 195px;
                z-index: 896;
            }
            .map-yas {
                width: 132px;
                height: 147px;
                left: 342px;
                top: 305px;
                z-index: 895;
            }
            .map-gzz {
                width: 348px;
                height: 393px;
                top: 133px;
                left: 55px;
                z-index: 697;
            }
            .map-abz {
                width: 287px;
                height: 198px;
                top: 128px;
                left: 274px;
            }
            .map-lsz {
                width: 364px;
                height: 304px;
                left: 145px;
                top: 417px;
                z-index: 698;
            }
            .map-pzh {
                width: 115px;
                height: 128px;
                left: 218px;
                top: 585px;
                z-index: 699;
            }
        }
        .legend {
            position: absolute;
            bottom: 104px;
            right: 126px;
            height: 80px;
            width: 200px;
            box-shadow: 0px 0px 16px 0px rgba(8, 33, 85, 0.2);
            .top-corner {
                height: 0;
                width: 200px;
                border-bottom: 15px solid rgba(0, 123, 255, 0.2);
                border-right: 15px solid transparent;
                border-left: 15px solid transparent;
            }
            .center-content {
                width: 200px;
                height: 50px;
                padding-left:15px;
                background: rgba(0, 123, 255, 0.2);
                font-size: 10px;
                display: flex;
                flex-wrap: wrap;
                .title-icon {
                    width: 50%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .icon {
                        width: 10px;
                        height: 10px;
                        margin-right: 6px;
                        border-radius: 50%;
                        box-shadow: 0px 0px 8px 0px #007bff;
                    }
                    .left-top {
                        background: #007bff;
                        border: 1px solid #005eff;
                    }
                    .left-bottom {
                        background: #ff732e;
                        border: 1px solid #ff732e;
                    }
                    .right-top {
                        background: #ffd600;
                        border: 1px solid #ffd600;
                    }
                    .right-bottom {
                        background: #ff5e54;
                        border: 1px solid #ff5e54;
                    }
                }
            }
            .bottom-corner {
                width: 200px;
                height: 0;
                border-top: 15px solid rgba(0, 123, 255, 0.2);
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
            }
        }
    }

    .child-content {
        width: 100%;
        height: calc(100% - 78px);
    }
</style>

