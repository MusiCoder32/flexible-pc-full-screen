<template>
    <div class="content bei-dou-sensor-dialog">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">液化石油气</el-menu-item>
            <el-menu-item index="2"> 温度</el-menu-item>
            <el-menu-item index="3"> 湿度</el-menu-item>
        </el-menu>
        <div class="bei-dou-sensor-chart-box"></div>
    </div>
</template>

<script>
export default {
    name: 'sensor',
    data () {
        return {
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="scss" scoped>
    .bei-dou-sensor-dialog {
        .el-menu-item {
            width: 120px;
            text-align: center;
            border-bottom: 4px solid rgba(0,123,255,1);
            transform: translate(0,1px);
            font-size: 16px;
        }
        .el-menu.el-menu--horizontal {
            border-bottom: 1px solid rgba(0,123,255,0.4);

        }
        .bei-dou-sensor-chart-box {
            width: 1200px;
            height: 613px;
        }
    }


</style>