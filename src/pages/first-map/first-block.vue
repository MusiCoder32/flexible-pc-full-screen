<template>
  <div class="content">

  </div>
</template>

<script>
import SliderPie from "../../components/charts/slider-pie";
import MapMarker from "../../components/svgs/pie-bar-animation";

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

</style>