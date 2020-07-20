<template>
    <div class="slider" :class="{'slider-expand':isSliderExpand}">
      <img src="../assets/img/侧栏bg_img.png" />
      <img src="../assets/img/正在检测企业icon_img.png" />
      <img
        @click="sliderClick"
        :class="{'slider-icon-rotate':isSliderExpand}"
        src="../assets/img/left_icon_img.png"
      />
      <img src="../assets/img/覆盖人群icon_img.png" />
      <div>
        <p>234969</p>
        <p>正在监测企业</p>
      </div>
      <div>
        <p>4326</p>
        <p>重点关注企业</p>
      </div>
      <div>
        <p>2349.6</p>
        <p>覆盖人群数（万）</p>
      </div>
      <div>
        <slider-pie></slider-pie>
      </div>
    </div>
</template>

<script>
import SliderPie from "../components/charts/slider-pie";
import MapMarker from "../components/svgs/pie-bar-animation";

export default {
  name: "first-block",
  components: {
    SliderPie,
    MapMarker
  },
  data() {
    return {
      isSliderExpand: false
    };
  },
  methods: {
    sliderClick() {
      this.isSliderExpand = !this.isSliderExpand;
    }
  }
};
</script>

<style lang="scss" scoped>

.slider-expand {
  left: -166px !important;
  transition: left 2s;
}

.slider-icon-rotate {
  transform: rotate(180deg);
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
    width: 80px;
    height: 80px;
    top: 243px;
    left: 36px;
  }
}

</style>