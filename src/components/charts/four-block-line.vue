<template>
    <chart class='line-chart' :autoresize='true' :options='options'>
    </chart>
</template>

<script>
import {graphic} from 'echarts/lib/export';

let categoryData = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

let data = categoryData.map(() => {
    return parseInt(Math.random() * 200);
});
console.log(data);
export default {
    data () {
        return {
            options: {
                textStyle: {
                    color: '#ffffff',
                    fontFamily: 'PingFang'
                },

                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    axisPointer: {
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#007BFF'
                                    }, {
                                        offset: 1,
                                        color: '#007BFF'
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    data: categoryData
                },
                grid: {
                    bottom: 20,
                    left: 60,
                    top: 20
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        fontSize: 10
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            width: 0.5,
                            opacity: 0.5

                        }

                    },
                    splitNumber: 5,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff',
                            width: 0.5
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    min: 0,
                    max: 200
                },
                series: [
                    {
                        data: data,
                        type: 'line',
                        lineStyle: { // 系列级个性化折线样式
                            width: 2,
                            type: 'solid',
                            color: '#007BFF'
                        },
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                color: '#007BFF'
                            }
                        },

                        itemStyle: {
                            color: '#FFF',
                            borderColor: '#007BFF',
                            borderWidth: 2
                        },
                        areaStyle: {
                            normal: {
                                color: new graphic.LinearGradient(0, 0, 0, 1.5, [
                                    {
                                        offset: 0,
                                        color: '#007BFF'
                                    }, {
                                        offset: 1,
                                        color: 'transparent'
                                    }
                                ])
                            }
                        }
                    }
                ]
            }
        };
    }
};
</script>
