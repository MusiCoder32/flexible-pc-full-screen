<template>
    <div class="two-block-company-number">
        <span class="font-size-x8 font-family-bebas mr12">{{total}}</span>{{title}}
        <div class="number-horizontal-border"></div>
    </div>
</template>

<script>
export default {
    name: 'rect-border',
    props: {
        total: Number,
        title: String
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
    .two-block-company-number {
        padding: 0 0 5px 16px;
        height: 40px;
        width: 180px;
        position: relative;
        border: 1px solid #1372ff;
        line-height: 45px;

        &::before {
            border-top: 12px solid #1372ff;
            border-right: 12px solid transparent;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
        }
        &::after {
            border-left: 12px solid transparent;
            border-bottom: 12px solid #1372ff;
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .number-horizontal-border {
            width: 100%;
            height: 100%;
            position: absolute;
            background: transparent;
            top: 0;
            left: 0;
            z-index: 100;
            &::before {
                border-top: 3px solid #1372ff;
                border-right: 3px solid transparent;
                content: "";
                width: 30px;
                position: absolute;
                top: 0;
                left: 0;
            }
            &::after {
                width: 30px;
                border-left: 3px solid transparent;
                border-bottom: 3px solid #1372ff;
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 100;
            }
        }
    }
</style>