<template>
    <chart :auto-resize='true' :options='options'>
    </chart>
</template>

<script>
var xData = function () {
    var data = [];
    for (var i = 1; i < 31; i++) {
        data.push(i);
    }
    return data;
}();

let datadd = [];
for (let i = 0; i < 30; i++) {
    datadd.push(Math.floor(Math.random() * 30));
}
export default {
    data () {
        return {
            options: {
                backgroundColor: 'transparent',
                textStyle: {
                    fontSize: 12,
                    fontFamily: 'PingFang',
                    fontWeight: 500,
                    color: '#ffffff'
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
                    formatter: '{b}日  {a0}:{c0}',
                    backgroundColor:'rgba(0,123,255,1)'
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
                // dataZoom: [
                //     {
                //         show: true,
                //         realtime: true,
                //         start: 0,
                //         end: 60,
                //         bottom: 2,
                //         height: 10,
                //         backgroundColor:'rgba(19,114,255,0.2)',
                //         borderColor:'transparent',
                //         fillerColor:'rgba(19,114,255,0.2)',
                //         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                //         handleSize: '80%',
                //         handleStyle: {
                //             color: '#fff',
                //             shadowBlur: 3,
                //             shadowColor: 'rgba(0, 0, 0, 0.6)',
                //             shadowOffsetX: 2,
                //             shadowOffsetY: 2
                //         },
                //         borderRadius:5,
                //         textStyle: {
                //             height: '10px'
                //         }
                //     },
                //     {
                //         type: 'inside',
                //         realtime: true,
                //         start: 0,
                //         end: 60
                //     }
                // ],
                'xAxis': [
                    {
                        'type': 'category',
                        'axisLine': {
                            lineStyle: {
                                color: 'rgba(0,123,255,.5)',
                                width:2
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
                            formatter: function (value, index) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                if (index%5 === 1) {
                                    return index + '日'
                                }
                                return '';
                            }
                        },
                        'data': xData
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
                                        x1:0,
                                        y1:0,
                                        x2:0,
                                        y2:1,
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(0,94,255,1)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(0,123,255,0)' // 100% 处的颜色
                                        }]
                                    },
                                },

                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                color: 'rgba(0,255,243,1)'
                            }
                        },
                        'data': datadd,
                        smooth: true,
                    }
                ]
            }
        };
    }
};
</script>