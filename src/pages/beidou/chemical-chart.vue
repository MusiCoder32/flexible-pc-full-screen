<template>
    <div class="content bei-dou-sensor-dialog">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,i) in sensorArr" :index="item.type" :key="item.name + i">{{item.name}}
            </el-menu-item>
        </el-menu>
        <div class="bei-dou-sensor-chart-box">
            <div v-show="activeIndex === 'petroleum'" class="chart-box-head hBox vh_content_start">
                <el-date-picker
                        v-model="value1"
                        class="mr30"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        size="large"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
                </el-date-picker>
                <div class="el">
                    <div style="font-size: 16px;">0.08824%LEL</div>
                    <div style="font-size: 12px">当前监测点气体浓度</div>
                </div>
                <div class="el2" style="background: rgba(0,189,153,0.2)">
                    <div style="font-size: 16px;">0.23m/s</div>
                    <div style="font-size: 12px">实时风速</div>
                </div>
                <div class="el2" style="background: rgba(232,95,134,0.2)">
                    <div style="font-size: 16px;">&#8594 西</div>
                    <div style="font-size: 12px">实时风向</div>
                </div>
                <div class="el2" style="background:rgba(255,214,0,0.2) ">
                    <div style="font-size: 16px;">0</div>
                    <div style="font-size: 12px">今日泄漏次数</div>
                </div>
                <div class="el2" style="background: rgba(8,33,85,0.2)">
                    <div style="font-size: 16px;" class="hBox vh_content_center vh_items_center">
                        <div style="width: 10px;height: 10px;border-radius: 50%;background: #007BFF;margin-right: 5px"></div>
                        正常状态
                    </div>
                    <div style="font-size: 12px">整体风险等级</div>
                </div>
            </div>
            <div v-show="activeIndex === 'temperature'" class="chart-box-head hBox vh_content_start">
                <el-date-picker
                        v-model="value2"
                        class="mr30"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        size="large"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
                </el-date-picker>
                <div style="font-size: 16px;" class="hBox  current-temperature">
                    <div style="width: 10px;height: 10px;border-radius: 50%;background: #007BFF;margin-right: 5px"></div>
                    <div class="mr8">24.5℃</div>
                    <div class="mr12">最新温度</div>
                </div>
            </div>
            <div v-show="activeIndex === 'humidity'" class="chart-box-head hBox vh_content_start">
                <el-date-picker
                        v-model="value3"
                        class="mr30"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        size="large"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
                </el-date-picker>
                <div style="font-size: 16px" class="current-temperature hBox">
                    <div style="width: 10px;height: 10px;border-radius: 50%;background: #007BFF;margin-right: 5px;"></div>
                    <div class="mr12">73.8%</div>
                    <div class="mr12">最新湿度</div>
                </div>
            </div>


            <div class="chart-container">
                <chart v-show="activeIndex==='petroleum'" :auto-resize='true' :options='options'></chart>
                <chart v-show="activeIndex==='temperature'" :auto-resize='true' :options='options'></chart>
                <chart v-show="activeIndex==='humidity'" :auto-resize='true' :options='options'></chart>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import {shuffle, cloneDeep} from '../../utils/function-list';

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
    components: {},
    data () {
        return {
            sensorArr: [
                {
                    type: 'petroleum',
                    name: '液化石油气'
                }, {
                    type: 'temperature',
                    name: '温度'
                }, {
                    type: 'humidity',
                    name: '湿度'
                }
            ],
            activeIndex: 'petroleum',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now() - 24 * 60 * 60 * 1000
                }
            },
            value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],//设置默认时间
            value2: '',
            value3: '',
            options: {
                backgroundColor: 'transparent',
                textStyle: {
                    fontSize: 12,
                    fontFamily: 'PingFang',
                    fontWeight: 600,
                    color: '#1E2C41'
                },
                title: [
                    {
                        text: '浓度%LEL',
                        textStyle: {
                            fontSize: 12
                        },
                        top: 10,
                        left: 20
                    },
                    {
                        text: '上一次数据刷新时间： 2020-06-21 16:37:18',
                        textAlign: 'center',
                        textStyle: {
                            fontSize: 12
                        },
                        top: 10,
                        right: 0
                    }
                ],
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
                    backgroundColor: 'rgba(0,123,255,1)'
                },
                'grid': {
                    'borderWidth': 0,
                    'top': 50,
                    left: 50,
                    right: 20,
                    'bottom': 100,
                    textStyle: {
                        color: '#fff'
                    }
                },
                'calculable': true,
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        bottom: 0,
                        height: 32,
                        start: 30,
                        end: 60,
                        backgroundColor: 'rgba(19,114,255,0.2)',
                        borderColor: 'transparent',
                        fillerColor: 'rgba(19,114,255,0.2)',
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        },
                        borderRadius: 5,
                        textStyle: {
                            height: '10px'
                        }
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 60
                    }
                ],
                'xAxis': [
                    {
                        'type': 'category',
                        'axisLine': {
                            lineStyle: {
                                color: '#A5BFE2',
                                width: 1
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
                            formatter: function (value, index) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return '2020-04-0' + index + '日' + '\n' + '12:30:0' + index;
                            }
                        },
                        'data': xData
                    }
                ],
                'yAxis': [
                    {
                        'type': 'value',
                        'splitLine': {
                            'show': true,
                            lineStyle: {
                                color: 'rgba(165,191,226,0.2)'
                            }
                        },
                        'axisLine': {
                            'show': false
                        },
                        'axisTick': {
                            'show': false
                        },
                        'axisLabel': {
                            'interval': 0,
                            align: 'left',
                            inside: false,
                            formatter: function (value, index) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value;
                            }

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
                        symbolSize: 10,
                        symbol: 'circle',
                        showSymbol: true,
                        'itemStyle': {
                            'normal': {
                                'color': 'rgba(0,123,255,1)',
                                'barBorderRadius': 1,
                                borderWidth: 1,
                                borderColor: 'white',
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
                                                color: 'rgba(0,94,255,0.3)' // 0% 处的颜色
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
                                width: 2,
                                color: '#007BFF'
                            }
                        },
                        'data': datadd,
                        smooth: true
                    }
                ]
            }
        };
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
            this.activeIndex = keyPath[0];
            this.updateChart(this.activeIndex);
        },
        updateChart (type) {
            this.options.title[1].text = '上一次数据刷新时间：' + moment().format('YYYY.MM.DD HH:MM:SS');
            // this.options.title[1].text =  '上一次数据刷新时间：' + moment().format('YYYY.MM.DD hh:mm:ss a')

            this.options.series[0].data = shuffle(datadd);
            this.options = cloneDeep(this.options);
            if (type === 'humidity') {
                this.options.title[0].text = '';
                this.options.yAxis[0].axisLabel.formatter = function (value, index) {
                    console.log(value, index);
                    // 格式化成月/日，只在第一个刻度显示年份
                    return value + '%';
                };
            }
            else if (type === 'temperature') {
                this.options.title[0].text = '';
                this.options.yAxis[0].axisLabel.formatter = function (value, index) {
                    console.log(value, index);
                    // 格式化成月/日，只在第一个刻度显示年份
                    return value + '℃';
                };
            }
            else {
                this.options.title[0].text = '浓度%LEL';

            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .bei-dou-sensor-dialog {
        .el-menu-item {
            width: 120px;
            text-align: center;
            border-bottom: 4px solid rgba(0, 123, 255, 1);
            transform: translate(0, 1px);
            font-size: 16px;
        }
        .el-menu.el-menu--horizontal {
            border-bottom: 1px solid rgba(0, 123, 255, 0.4);

        }
        .bei-dou-sensor-chart-box {
            width: 100%;
            height: 613px;
            position: relative;
            .chart-box-head {
                height: 84px;
                width: 100%;
                padding-top: 20px;
                align-items: center;
                padding-left: 20px;
                .el {
                    width: 180px;
                    height: 64px;
                    background: rgba(0, 123, 255, 0.2);
                    border-radius: 5px;
                    margin-right: 20px;
                    > div:first-child {
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        font-weight: 400;
                        text-align: center;
                        color: #082155;
                    }
                    > div:last-child {
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        font-weight: 400;
                        text-align: center;
                        color: black;

                    }
                }

                .el2 {
                    width: 120px;
                    height: 64px;
                    margin-right: 20px;
                    background: #00bd99;
                    border-radius: 5px;
                    > div:first-child {
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        font-size: 16px;
                        font-weight: 400;
                        text-align: center;
                        color: #082155;
                    }
                    > div:last-child {
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        font-size: 12px;
                        font-weight: 400;
                        text-align: center;
                        color: black;
                    }
                }

                .current-temperature {
                    height: 32px;
                    border-radius: 5px;
                    background: rgba(0, 123, 255, 0.2);
                    justify-content: flex-start;
                    align-items: center;
                    color: #082155;
                    padding-left: 5px;
                }
            }
            .chart-container {
                width: 100%;
                height: 529px;
            }
        }
    }


</style>