<template>
    <chart :auto-resize='true' :options='options'>
    </chart>
</template>

<script>

export default {
    data () {
        return {};
    },
    computed: {
        options () {
            let data = this.$store.state.coalData.mineWarnStatistics
            return {
                    backgroundColor: 'transparent',
                    textStyle: {
                        fontSize: 12,
                        fontFamily: 'PingFang',
                        fontWeight: 500,
                        color: '#ffffff'
                    },
                dataset: {
                  source:data
                },
                    title: {
                        text: '近30天预警次数',
                        textStyle: {
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 400
                        },
                        top: 0,
                        left: 20
                    },
                    'tooltip': {
                        'trigger': 'axis',
                        'axisPointer': {
                            'type': 'none',
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }

                        },
                        formatter: function (params,index) {
                            console.log(params,index)
                            return params[0].axisValue + '  '+ params[0].seriesName +':'+ params[0].data.warnCount
                        },
                        backgroundColor: 'rgba(0,123,255,1)'
                    },
                    'grid': {
                        'borderWidth': 0,
                        'top': 40,
                        left: 50,
                        'bottom': 20,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    'calculable': true,
                    'xAxis': [
                        {
                            'type': 'category',
                            dimensions:['date'],
                            'axisLine': {
                                lineStyle: {
                                    color: 'rgba(0,123,255,.5)',
                                    width: 2
                                }
                            },
                            'splitLine': {
                                'show': false
                            },
                            'axisTick': {
                                'show': false
                            },
                            'splitArea': {
                                'show': false
                            },
                            'axisLabel': {
                                'interval': 0,
                                color: 'rgba(255,255,255,0.7)',
                                formatter:function(value,index) {
                                    if (index%5 === 1) {
                                        return value
                                    }
                                    return '';
                                }
                            },
                        }
                    ],
                    'yAxis': [
                        {
                            'type': 'value',
                            'splitLine': {
                                'show': false
                            },
                            'axisLine': {
                                'show': false
                            },
                            'axisTick': {
                                'show': false
                            },
                            'axisLabel': {
                                'interval': 0,
                                color: 'rgba(255,255,255,0.5)',
                                align: 'left',
                                inside: false

                            },
                            offset: 20,
                            'splitArea': {
                                'show': false
                            }

                        }
                    ],
                    'series': [
                        {
                            'name': '次数',
                            'type': 'line',
                            symbolSize: 5,
                            symbol: 'circle',
                            showSymbol: false,
                            'itemStyle': {
                                'normal': {
                                    'color': 'rgba(0,123,255,1)',
                                    'barBorderRadius': 1,
                                    borderWidth: 1,
                                    borderColor: 'rgba(0,255,243,1)',
                                    areaStyle: {
                                        //color: '#94C9EC'
                                        color: {
                                            x1: 0,
                                            y1: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: 'rgba(0,94,255,1)' // 0% 处的颜色
                                                }, {
                                                    offset: 1,
                                                    color: 'rgba(0,123,255,0)' // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    }

                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 1,
                                    color: 'rgba(0,255,243,1)'
                                }
                            },
                            smooth: true,
                        }
                    ]
                }
        }
    }
};
</script>