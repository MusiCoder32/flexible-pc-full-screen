<template>
    <div :class=[rectHeight] class="rect">
        <div :class="[rectBorderTop]" class="sensor-right-border-1"></div>
        <div :class="[rectContentHeight]" class="sensor-right-content">
            <slot></slot>
        </div>
        <div :class="[rectBorderBottom]" class="sensor-right-border-2"></div>
    </div>
</template>

<script>
export default {
    name: 'oblique-angle-rect',
    props: {
        rectHeight: {
            type:String,
            default:'rect-height'
        },
        rectContentHeight: {
            type: String,
            default: 'rect-content-height'
        },
        rectBorderTop: {
            type: String,
            default: 'rect-border-top'
        },
        rectBorderBottom: {
            type: String,
            default: 'rect-border-bottom'
        }
    }
}
</script>

<style lang="scss" scoped>
    .rect-height {
        height: 204px;
    }
    .rect-content-height {
        height: 174px;
    }
    .rect-border-top {
        border-right-color: transparent !important;
        border-left-color: transparent !important;
    }

    .rect-border-bottom {
        border-right-color: transparent !important;
        border-left-color: transparent !important;
    }

    .rect {
        position: relative;
        width:100%;

        .sensor-right-content {
            background: rgba(0, 123, 255, 0.2);
            width: 100%;
        }

        .sensor-right-border-1 {
            width: 100%;
            border-bottom: 15px solid rgba(0, 123, 255, 0.2);
            border-right: 15px solid ;
            border-left: 15px solid ;

        }
        .sensor-right-border-2 {
            width: 100%;
            border-top: 15px solid rgba(0, 123, 255, 0.2);
            border-right: 15px solid ;
            border-left: 15px solid ;
        }
    }


</style>