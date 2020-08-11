<template>
    <div class="content">
        <div class="chemical-nav">
            <div @click="click(0)" class="nav-left vh_content_end">
                <div  :class="{'pr':!RightActive}">
                    <img class="bg1" v-if="RightActive" src="../../assets/img/chemical/3.png"/>
                    <img class="bg2" v-else style="transform: rotate(180deg)" src="../../assets/img/chemical/5.png"/>
                </div>
            </div>
            <div  @click="click(1)" class="nav-right vh_content_start">
                <div :class="{'pl':RightActive}">
                    <img class="bg1" style="transform: rotate(180deg)" v-if="!RightActive"
                         src="../../assets/img/chemical/3.png"/>
                    <img class="bg2" v-else src="../../assets/img/chemical/5.png"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import SliderPie from '../../components/charts/slider-pie';
import MapMarker from '../../components/svgs/pie-bar-animation';
import bus from '../../common/bus'

export default {
    name: 'first-block',
    components: {
        SliderPie,
        MapMarker
    },
    data () {
        return {
            isSliderExpand: false,
            RightActive: false
        };
    },
    methods: {
        click (type) {
            this.RightActive = type !== 0;
            bus.$emit('chemicalChangeMap',type)
        }
    }
};
</script>

<style lang="scss" scoped>

    .pr {
        transform: translateX(15px);
    }

    .pl {
        transform: translateX(-15px);
    }

    .chemical-nav {
        position: absolute;
        cursor:pointer;
        top: 32px;
        right: 40px;
        display: flex;
        align-items: center;
        z-index: 1000;
        > div {
            width: 100px;
            height: 64px;
            display: flex;
            align-items: center;
            position: relative;
            .bg1 {
                width: 102px;
                height: 34px;
            }
            .bg2 {
                width: 132px;
                height: 64px;
            }
        }
        .nav-left {
            color:rgba(255,255,255,0.5);
            &:before {
                position: absolute;
                width: 100px;
                height: 68px;
                content: '企业分布';
                line-height: 64px;
                text-align: right;
                font-size: 14px;
                font-weight: 400;
                padding-right:20px;
                z-index: 1000;

            }
            :hover {
                color:rgba(255,255,255,1);
            }
        }
        .nav-right {
            color:rgba(255,255,255,0.5);
            &:before {
                position: absolute;
                width: 100px;
                height: 64px;
                content: '园区分布';
                padding-left:20px;
                line-height: 60px;
                text-align: left;
                opacity: 0.5;
                font-size: 14px;
                font-weight: 400;
                z-index: 1000;

            }
            :hover {
                color:rgba(255,255,255,1);
            }
        }
    }
</style>