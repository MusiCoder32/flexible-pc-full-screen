<template>
    <chart class='line-chart' :auto-resize='true' :options='options'>
    </chart>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
        };
    },
    computed: {
        ...mapGetters(['getBdSensorStatistics']),
        options() {
            console.log(this.getBdSensorStatistics)
            return {
                textStyle: {
                    color: '#ffffff',
                    fontFamily: 'PingFang'
                },
                title: {
                    text: 289,
                    subtext: '总计',
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                        lineHeight: 24
                    },
                    subtextStyle: {
                        fontSize: 10,
                        color: ['#fff']
                    },
                    textAlign: 'center',
                    itemGap: 0,
                    x: '19%',
                    y: '35%'
                },
                grid: {
                    bottom: 150,
                    left: 100,
                    right: '10%'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/> 数量：{c}'
                },
                legend: {
                    orient: 'vertical',
                    itemWidth: 10,
                    itemHeight: 10,
                    icon: 'circle',
                    left: '38%',
                    data: this.getBdSensorStatistics,
                    formatter: (name, value, ss) => {
                        let obj = this.getBdSensorStatistics.filter(item => {
                            return item.name === name;
                        });
                        return `{value|${obj[0].value}}{unit|${name}}`;
                    },
                    textStyle: {
                        rich: {
                            value: {
                                fontSize: 20,
                                fontWeight: 600,
                                padding: [0, 0, 3, 0],
                                fontFamily: 'BebasNeue',
                                width: 30
                            },
                            unit: {
                                fontSize: 10
                            }
                        }
                    }
                },
                series: [
                    // 主要展示层的
                    {
                        radius: ['90%', '95%'],
                        center: ['20%', '50%'],
                        type: 'pie',
                        hoverAnimation: false,
                        label: {
                            show: false
                        },
                        data: [
                            {
                                'value': 32,
                                itemStyle: {
                                    color: 'rgba(0,123,255,0.3)'
                                }
                            }
                        ]
                    },
                    {
                        radius: ['45%', '50%'],
                        center: ['20%', '50%'],
                        type: 'pie',
                        hoverAnimation: false,
                        label: {
                            show: false
                        },
                        data: [
                            {
                                'value': 32,
                                itemStyle: {
                                    color: 'rgba(0,123,255,0.3)'
                                }
                            }
                        ]
                    }, {
                        radius: ['50%', '90%'],
                        center: ['20%', '50%'],
                        type: 'pie',
                        hoverOffset: 2,
                        label: {
                            show: false
                        },
                        data: this.getBdSensorStatistics

                    }
                    // 边框的设置
                    // {
                    //     radius: ['50%', '50%'],
                    //     center: ['20%', '50%'],
                    //     type: 'pie',
                    //     label: {
                    //         normal: {
                    //             show: false
                    //         },
                    //         emphasis: {
                    //             show: false
                    //         }
                    //     },
                    //
                    //     animation: false,
                    //     tooltip: {
                    //         show: false
                    //     },
                    //     data: [
                    //         {
                    //             value: 1,
                    //             name: '',
                    //             itemStyle: {
                    //                 normal: {
                    //                     borderWidth: 8,
                    //                     borderColor: 'rgba(0,123,255,0.4)'
                    //                 }
                    //             }
                    //         }
                    //     ]
                    // },
                    // {
                    //     name: '外边框',
                    //     type: 'pie',
                    //     clockWise: false, //顺时加载
                    //     hoverAnimation: false, //鼠标移入变大
                    //     center: ['20%', '50%'],
                    //     radius: ['90%', '90%'],
                    //     label: {
                    //         normal: {
                    //             show: false
                    //         }
                    //     },
                    //     data: [
                    //         {
                    //             value: 9,
                    //             name: '',
                    //             itemStyle: {
                    //                 normal: {
                    //                     borderWidth: 4,
                    //                     borderColor: 'rgba(0,123,255,0.4)'
                    //                 }
                    //             }
                    //         }
                    //     ]
                    // }
                ]
            }
        }
    },
    mounted() {
    }
};
</script>
