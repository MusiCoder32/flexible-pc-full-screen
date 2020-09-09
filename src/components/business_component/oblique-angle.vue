<template>
    <div :class="[borderWidth2]" class="caption">
        {{title}}
    </div>
</template>

<script>
export default {
    name: 'oblique-angle',
    props: {
        title: {
            type:String,
            default:'北斗+技术'
        },
        borderWidth2: {
            type: String,
            default: 'border-width'
        },
    }
}
</script>

<style lang="scss" scoped>

    .border-width {
        width: 790px;
    }
    .caption {
        position: relative;
        height: 44px;
        background: rgba(0, 123, 255, 0.2);
        clip-path:polygon(0 15px, 15px 0 , calc(100% - 44px) 0, 100% 100% ,0 100%);
        padding-left:16px;

        font-size: 20px;
        text-align: left;
        color: #ffffff;
        line-height: 44px;

    }

</style>