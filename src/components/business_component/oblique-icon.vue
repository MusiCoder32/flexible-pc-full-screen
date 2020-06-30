<template>
    <div @click="iconClick" class="oblique-icon">
        <div class="left-oblique"></div>
        <div class="icon"></div>
        <div class="right-oblique"></div>
    </div>
</template>

<script>
export default {
    name: 'oblique-icon',
    methods: {
        iconClick () {
            this.$emit('icon-click')
        }
    }
}
</script>

<style lang="scss" scoped>
    .oblique-icon {
        position: absolute;
        z-index: 100;
        display: flex;
        width: 106px;
        height: 36px;
        .left-oblique {
            border-top: 36px solid rgba(0, 123, 255, 0.2);
            border-left: 36px solid transparent;
        }
        .right-oblique {
            border-bottom: 36px solid rgba(0, 123, 255, 0.2);
            border-right: 36px solid transparent;
        }
        .icon {
            flex-grow: 1;
            background: rgba(0, 123, 255, 0.2) url("../../assets/img/查看更多icon_img.png") center center no-repeat;
            background-size: cover;
        }
    }
</style>