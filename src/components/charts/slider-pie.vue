<template>
    <chart class='line-chart' :auto-resize='true' :options='options'>
    </chart>
</template>

<script>
export default {
    data () {
        return {
            options: {
                series: [
                    // 主要展示层的
                    {
                        radius: ['50%', '90%'],
                        center: ['50%', '50%'],
                        type: 'pie',
                        hoverAnimation: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        data: [
                            {
                                value: 30,
                                itemStyle: {
                                    color: '#00FFF3'
                                }
                            },
                            {
                                value: 70,
                                itemStyle: {
                                    color: '#007BFF'
                                }
                            },

                        ]

                    },
                    // 边框的设置
                    {
                        radius: ['40%', '50%'],
                        center: ['50%', '50%'],
                        name: '内边框',
                        type: 'pie',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        animation: false,
                        tooltip: {
                            show: false
                        },
                        data: [{
                            value: 1,
                            itemStyle: {
                                color: 'rgba(0,123,255,0.4)',
                            },
                        }],
                    }, {
                        name: '外边框',
                        type: 'pie',
                        clockWise: false, //顺时加载
                        hoverAnimation: false, //鼠标移入变大
                        center: ['50%', '50%'],
                        radius: ['90%', '100%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            value: 9,
                            name: '',
                            itemStyle: {
                                color: 'rgba(0,123,255,0.4)'
                            }
                        }]
                    },
                ]
            }
        }
    }
}
</script>
