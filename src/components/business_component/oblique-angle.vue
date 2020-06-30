<template>
    <div :class="[captionHeight]" class="caption">
        <div :class="[borderWidth1]" class="caption-border-1"></div>
        <div :class="[borderWidth2]" class="caption-border-2"></div>
        <div :class="[captionHeight]" class="caption-content font-size-x">{{title}}</div>
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
        captionHeight: {
            type: String,
            default: 'content-height'
        },
        borderWidth1: {
            type: String,
            default: 'border-width-1'
        },
        borderWidth2: {
            type: String,
            default: 'border-width-2'
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-height {
        height: 44px;
    }

    .border-width-1 {
        width: 761px;

    }

    .border-width-2 {
        width: 790px;

    }

    .caption {
        position: relative;

        .caption-border-1 {
            position: absolute;
            border-bottom: 15px solid rgba(0, 123, 255, 0.2);
            border-right: 15px solid transparent;
            border-left: 15px solid transparent;
        }

        .caption-border-2 {
            position: absolute;
            top: 15px;
            border-bottom: 29px solid rgba(0, 123, 255, 0.2);
            border-right: 29px solid transparent;
        }

        .caption-content {
            line-height: 44px;
            margin-left: 15px;
            font-weight: 600;

        }
    }

</style>