<template>
    <div class="content bei-dou-sensor-dialog" v-loading="loading">
        <el-menu :default-active="activeIndex" style="width: 100%" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,i) in sensorArr" :index="i+''" :key="item.name + i">{{item.name}}
            </el-menu-item>
        </el-menu>
        <div class="bei-dou-sensor-chart-box">
            <div class="chart-box-head hBox vh_content_between vh_items_start">
                <el-date-picker
                        v-model="value1"
                        class="mr30"
                        :type="datePickerType"
                        size="large"
                        @change="dateChange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        placeholder="选择日期"
                        :picker-options="pickerOptions"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        align="right">
                </el-date-picker>
                <div v-if="type==='sssss' && type==='xsss'" class="button-box">
                    <div @click="dayTimeChange('day')" :class="{'active':buttonIndex==='accordingDay'}">按天排列</div>
                    <div @click="dayTimeChange('time')" :class="{'active':buttonIndex==='accordingTime'}">按时排列</div>
                </div>
                <div v-if="type==='LPG' || type==='NH3'|| type==='SiHCl3'|| type==='CH4'"
                     class="hBox vh_content_start vh_items_start">

                    <div class="el2" style="background: rgba(0,189,153,0.2)">
                        <div style="font-size: 16px;">{{lpgObj.windSpeed}}m/s</div>
                        <div style="font-size: 12px">实时风速</div>
                    </div>
                    <div class="el2" style="background: rgba(232,95,134,0.2)">
                        <div style="font-size: 16px;">{{lpgObj.windDirection}}</div>
                        <div style="font-size: 12px">实时风向</div>
                    </div>
                    <div class="el2" style="background:rgba(255,214,0,0.2) ">
                        <div style="font-size: 16px;">{{lpgObj.todayCount}}</div>
                        <div style="font-size: 12px">今日泄漏次数</div>
                    </div>
                    <div class="el2">
                        <div style="font-size: 16px;">{{lpgObj.total}}</div>
                        <div style="font-size: 12px">历史泄露次数</div>
                    </div>
                    <div class="el2" style="background: rgba(8,33,85,0.2)">
                        <div style="font-size: 16px;" class="hBox vh_content_center vh_items_center">
                            <div style="width: 10px;height: 10px;border-radius: 50%;background: #007BFF;margin-right: 5px"></div>
                            正常状态
                        </div>
                        <div style="font-size: 12px">整体风险等级</div>
                    </div>
                </div>

            </div>

            <div class="chart-container">
                <chart v-for="(item,i) in sensorArr" :key="item.type + i" v-show="activeIndex==i && chartDateReady"
                       :auto-resize='true' :options='optionsGroup[i]' :ref="item.type"></chart>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data () {
        return {
            activeIndex: '0',
            type: '',
            chartDateReady: false,
            value1: '',//设置默认时间
            lpgObj: {},
            loading: false,
            BeginDate: '',
            buttonIndex: 'accordingDay',
            optionsGroup: [],
            sensorArr: [],
            pickerOptions: {
                disabledDate (time) {
                    return time.getTime() > Date.now();
                }
            }
        };
    },
    computed: {
        datePickerType () {
            let dateType = '';
            switch (this.type) {
                case 'JIANGYULIANG':
                    dateType = 'date';
                    break;
                case 'LPG':
                case 'NH3':
                case 'SiHCl3':
                case 'CH4':
                case 'WEIYI':
                case 'SUDU':
                case 'JIASUDU':
                case 'SHUIPING':
                case 'KONGJIAN':
                case 'GANTAN':
                    dateType = 'daterange';
                    break;
                default :
                    dateType = 'date';
                    break;
            }
            return dateType;
        }
    },
    mounted () {
        let me = this;
        this.setSensorArr();
        if(this.$route.path.indexOf())
        window.addEventListener('message', function (event) {
            console.log('我收到了数据')
            console.log(event);
            if (event.origin.indexOf('yzt.scdem.cn') < 0) {
                return '';
            }
            else {
                console.log(event.data);
                sessionStorage.setItem('sensorTypesData', JSON.stringify(event.data.sensorTypesData));
                sessionStorage.setItem('sensorNumber', JSON.stringify(event.data.sensorNumber));
                me.setSensorArr();
            }
        });
    },
    methods: {
        setSensorArr () {
            let sensorTypesData = sessionStorage.getItem('sensorTypesData');
            if (sensorTypesData) {
                let arr = JSON.parse(sensorTypesData) || [];
                let data = [];
                arr.forEach(item => {
                    data.push({
                        type: item.menuCode,
                        name: item.menuName
                    });
                });
                if (data[0]) {
                    this.getSensorData(data[0].type, 0, false, true);
                    this.type = data[0].type;
                }
                this.sensorArr =  data;
            }
        },
        dateChange (e) {
            console.log(e);
            if (Array.isArray(e)) {
                this.getSensorData(this.type, this.activeIndex, { BeginDate: e[0], EndDate: e[1] }, true);
            }
            else {
                this.getSensorData(this.type, this.activeIndex, { BeginDate: e }, true);
            }
        },
        seriesFunction (arr) {
            let series = [];

            arr.forEach(item => {
                if (item.type === 'line') {
                    series.push({
                        'name': item.name,
                        'type': item.type,
                        symbolSize: 10,
                        symbol: 'circle',
                        showSymbol: true,
                        'itemStyle': {
                            'normal': {
                                color: item.itemStyle.normalColor,
                                'barBorderRadius': 1,
                                borderWidth: 1,
                                borderColor: 'white',
                                areaStyle: item.itemStyle.areaShow ? {
                                    //color: '#94C9EC'
                                    color: {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: item.itemStyle.colorStart // 0% 处的颜色
                                            }, {
                                                offset: 1,
                                                color: item.itemStyle.colorEnd  // 100% 处的颜色
                                            }
                                        ]
                                    }
                                } : ''

                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: item.itemStyle.normalColor
                            }
                        },
                        'data': item.data,
                        smooth: true
                    });

                }
                else if (item.type === 'bar') {
                    series.push(
                        {
                            data: item.data,
                            type: item.type,
                            name: item.name,
                            showBackground: true,
                            itemStyle: {
                                color: item.itemStyle.color
                            }
                        }
                    );

                }
                else {
                    series.push(item);
                }
            });

            return series;
        },
        optionFunction (data, type) {
            console.log(data);
            let itemStyleArr = [
                {
                    normalColor: 'rgba(0,189,153,1)',
                    colorStart: 'rgba(0,189,153,0.1)',
                    colorEnd: 'rgba(0,189,153,0)',
                    areaShow: true
                },
                {
                    normalColor: 'rgba(140,113,255,1)',
                    colorStart: 'rgba(140,113,255,0.1)',
                    colorEnd: 'rgba(140,113,255,0)',
                    areaShow: true

                },
                {
                    normalColor: 'rgba(0,123,255,1)',
                    colorStart: 'rgba(0,123,255,0.1)',
                    colorEnd: 'rgba(0,123,255,0)',
                    areaShow: true
                }

            ];
            if (type === 'KONGJIAN') {
                let startPoint = data.shift();
                let arr = [-0.88, -1.76, 0.37];
                data.forEach((item, index) => {
                    if (item.join() == arr.join()) {
                        console.log(index);
                    }
                });
                let endPoint = data.pop();
                console.log(startPoint);
                console.log(endPoint);
                return {
                    grid3D: {},
                    legend: {
                        icon: 'circle',
                        top: 28,
                        left: 'center',
                        itemWidth: 10,
                        itemGap: 20,
                        textStyle: {
                            color: '#556677',
                            fontSize: 16
                        },
                        backgroundColor: 'rgba(0,123,255,0.1)',
                        borderRadius: 5
                    },
                    xAxis3D: {},
                    yAxis3D: {},
                    zAxis3D: {},
                    series: [
                        {
                            type: 'scatter3D',
                            name: '起始点',
                            data: [startPoint],
                            itemStyle: {
                                color: 'rgba(8,33,85,1)'
                            },
                            symbolSize: 16
                        },
                        {
                            type: 'scatter3D',
                            name: '结束点',
                            itemStyle: {
                                color: 'rgba(255,94,84,1)'
                            },
                            symbolSize: 16,
                            data: [endPoint]
                        },
                        {
                            type: 'scatter3D',
                            itemStyle: {
                                color: 'rgba(0,123,255,0.3)'
                            },
                            symbolSize: 8,
                            data
                        }


                    ]
                };
            }
            else if (type === 'GANTAN') {
                return {
                    backgroundColor: 'transparent',
                    textStyle: {
                        fontSize: 12,
                        fontFamily: 'PingFang',
                        fontWeight: 600,
                        color: '#1E2C41'
                    },
                    legend: {
                        icon: 'circle',
                        top: 28,
                        left: 'center',
                        itemWidth: 10,
                        itemGap: 20,
                        textStyle: {
                            color: '#556677',
                            fontSize: 16
                        },
                        backgroundColor: 'rgba(0,123,255,0.1)',
                        borderRadius: 5
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#017bff'
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }
                        },
                        formatter: function (series) {
                            let str = '';
                            series.forEach((item, index) => {
                                let type = item.seriesName;
                                if (index === 0) {
                                    str += item.axisValueLabel;
                                }
                                if (str.length > 0) {
                                    str += '<br>';
                                }
                                str += type + ':' + item.data;
                            });
                            return str;
                        }
                    },
                    grid: {
                        'borderWidth': 0,
                        top: 100,
                        left: 80,
                        right: 50,
                        bottom: 100,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    'calculable': true,
                    dataZoom: [
                        {
                            realtime: true,
                            bottom: 10,
                            height: 32,
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
                            start: 0,
                            end: 100,
                            borderRadius: 5,
                            textStyle: {
                                height: '10px'
                            }
                        },
                        {
                            type: 'inside'
                        }

                    ],
                    'xAxis': [
                        {
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

                            'data': data.xData
                        }
                    ],
                    'yAxis': [
                        {
                            'type': 'value',
                            name: '干摊长度',
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
                                align: 'right',
                                inside: false,
                                formatter: function (value) {
                                    // 格式化成月/日，只在第一个刻度显示年份
                                    return value + 'm';
                                }

                            },
                            offset: 20,
                            'splitArea': {
                                'show': false
                            }


                        },
                        {
                            'type': 'value',
                            name: '水位沉降',
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
                                align: 'right',
                                inside: false,
                                formatter: function (value) {
                                    // 格式化成月/日，只在第一个刻度显示年份
                                    return value + 'm';
                                }

                            },
                            offset: 20,
                            'splitArea': {
                                'show': false
                            }

                        }
                    ],
                    series: [
                        {
                            name: '干摊长度',
                            type: 'line',
                            itemStyle: itemStyleArr.shift(),
                            data: data.yData,
                            symbol: 'none',
                            yAxisIndex: 0
                        }, {
                            name: '水位沉降',
                            type: 'line',
                            symbol: 'none',
                            itemStyle: itemStyleArr.shift(),
                            data: data.hData,
                            yAxisIndex: 1
                        }
                    ]
                };
            }
            else {
                let obj = this.setOptionObj(data, type);

                //散点图时，去掉trigger与axispointer
                let tooltip = {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#017bff'
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    },
                    formatter: obj.tooltip.formatter
                    // backgroundColor: 'rgba(0,123,255,1)'
                };
                if (obj.tooltip.noTrigger) {
                    delete tooltip.trigger;
                    delete tooltip.axisPointer;
                }
                return {
                    backgroundColor: 'transparent',
                    textStyle: {
                        fontSize: 12,
                        fontFamily: 'PingFang',
                        fontWeight: 600,
                        color: '#1E2C41'
                    },
                    title: [
                        {
                            text: obj.title.text,
                            show: obj.title.show,
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 400,
                                fontFamily: 'PingFang'
                            },
                            top: 62,
                            left: obj.title.left || 'center'
                            // backgroundColor: 'rgba(0,123,255,0.1)'
                        }
                    ],
                    legend: {
                        icon: 'circle',
                        top: obj.legend ? obj.legend.top ? obj.legend.top : 28 : 28,
                        left: obj.legend ? obj.legend.left ? obj.legend.left : 'center' : 'center',
                        itemWidth: 10,
                        itemGap: 20,
                        textStyle: {
                            color: '#556677',
                            fontSize: 16
                        },
                        backgroundColor: 'rgba(0,123,255,0.1)',
                        borderRadius: 5,
                        data: obj.legend ? obj.legend.data : ''
                    },
                    tooltip,
                    'grid': {
                        'borderWidth': 0,
                        top: obj.grid ? obj.grid.top ? obj.grid.top : 100 : 100,
                        left: obj.grid ? obj.grid.left ? obj.grid.left : 50 : 50,
                        right: obj.grid ? obj.grid.right ? obj.grid.right : 20 : 20,
                        bottom: obj.grid ? obj.grid.bottom ? obj.grid.bottom : 100 : 100,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    'calculable': true,
                    dataZoom: [
                        {
                            show: obj.dataZoomShow,
                            realtime: true,
                            bottom: 10,
                            height: 32,
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
                            start: obj.dataZoomStart || 0,
                            end: obj.dataZoomEnd || 100,
                            borderRadius: 5,
                            textStyle: {
                                height: '10px'
                            }
                        },
                        {
                            type: 'inside'
                        }

                    ],
                    'xAxis': [
                        {
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
                                formatter: obj.xAxis.formatter
                            },
                            'data': obj.xAxis.data
                        }
                    ],
                    'yAxis': [
                        {
                            'type': 'value',
                            name: obj.yAxis.name,
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
                                align: 'right',
                                inside: false,
                                formatter: function (value) {
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
                    'series': this.seriesFunction(obj.series)
                };
            }

        },
        setOptionObj (data, type) {
            let xData = data.x || data.xData;
            let seriesData = data.y || data.yData;
            let itemStyleArr = [
                {
                    normalColor: 'rgba(0,189,153,1)',
                    colorStart: 'rgba(0,189,153,0.1)',
                    colorEnd: 'rgba(0,189,153,0)',
                    areaShow: true
                },
                {
                    normalColor: 'rgba(140,113,255,1)',
                    colorStart: 'rgba(140,113,255,0.1)',
                    colorEnd: 'rgba(140,113,255,0)',
                    areaShow: true

                },
                {
                    normalColor: 'rgba(0,123,255,1)',
                    colorStart: 'rgba(0,123,255,0.1)',
                    colorEnd: 'rgba(0,123,255,0)',
                    areaShow: true
                }

            ];

            let obj = {};
            switch (type) {
                case 'SHUIPIN':
                    let startPoint = data.shift();
                    let endPoint = data.pop();
                    obj = {
                        title: {
                            show: false
                        },
                        tooltip: {
                            noTrigger: true,
                            formatter: function (series) {
                                return series.data[1];
                            }
                        },
                        legend: {
                            top: 25,
                            left: 'center',
                            data: ['起始点', '结束点']
                        },
                        grid: {
                            top: 80,
                            right: 20,
                            left: 80,
                            bottom: 30
                        },
                        dataZoomShow: false,

                        xAxis: {},
                        yAxis: {},
                        series: [
                            {
                                type: 'scatter',
                                itemStyle: {
                                    color: 'rgba(0,123,255,0.3)',
                                    borderColor: 'white',
                                    borderWidth: 1
                                },
                                data: data
                            },
                            {
                                name: '起始点',
                                type: 'scatter',
                                itemStyle: {
                                    color: 'rgba(8,33,85,1)',
                                    borderColor: 'white',
                                    borderWidth: 1
                                },
                                symbolSize: 16,
                                data: [
                                    startPoint
                                ]
                            },
                            {
                                name: '结束点',
                                type: 'scatter',
                                itemStyle: {
                                    color: 'rgba(255,94,84,1)',
                                    borderColor: 'white',
                                    borderWidth: 1
                                },
                                symbolSize: 16,
                                data: [
                                    endPoint
                                ]
                            }
                        ]
                    };
                    break;
                case 'SUDU':
                case 'JIASUDU':
                    let sx, sy, sh, yAxisName;
                    if (type === 'SUDU') {
                        sx = data.xSpeed;
                        sy = data.ySpeed;
                        sh = data.hSpeed;
                        yAxisName = '速度(cm/d)';
                    }
                    else {
                        sx = data.xacceleration;
                        sy = data.yacceleration;
                        sh = data.hacceleration;
                        yAxisName = '加速度(cm/d²)';
                    }
                    obj = {
                        title: {
                            show: true,
                            text: 'X：-X西/X东     Y：-Y南/Y北     H：沉降'
                        },
                        tooltip: {
                            formatter: function (series) {
                                let str = '';
                                series.forEach((item, index) => {
                                    let type = item.seriesName;
                                    if (index === 0) {
                                        str += item.axisValueLabel;
                                    }
                                    if (str.length > 0) {
                                        str += '<br>';
                                    }
                                    str += type + ':' + item.data;
                                });
                                return str;
                            }
                        },
                        legend: {
                            top: 25,
                            left: 'center'
                        },
                        grid: {
                            top: 100,
                            right: 20,
                            left: 80
                        },
                        dataZoomShow: true,
                        dataZoomStart: 95,
                        dataZoomEnd: 100,
                        xAxis: {
                            data: data.time,
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value;
                            }
                        },
                        yAxis: {
                            name: yAxisName
                        },
                        series: [
                            {
                                name: `X`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: sx
                            },
                            {
                                name: `Y`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: sy
                            },
                            {
                                name: `H`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: sh
                            }
                        ]
                    };
                    break;
                case 'SHUIJIN':
                    obj = {
                        title: {
                            show: false,
                            text: ''
                        },
                        tooltip: {
                            formatter: function (series) {
                                let str = '';
                                series.forEach((item, index) => {
                                    let type = item.seriesName;
                                    if (index === 0) {
                                        str += item.axisValueLabel;
                                    }
                                    if (str.length > 0) {
                                        str += '<br>';
                                    }
                                    str += type + ':' + item.data;
                                });
                                return str;
                            }
                        },
                        legend: {
                            top: 25,
                            left: 'center'
                        },
                        grid: {
                            top: 100,
                            right: 20,
                            left: 80
                        },
                        dataZoomShow: true,
                        dataZoomStart: 0,
                        dataZoomEnd: 100,
                        xAxis: {
                            data: data.xData
                        },
                        yAxis: {},
                        series: [
                            {
                                name: `红色预警(${data.redLine})`,
                                type: 'line',
                                itemStyle: {
                                    color: 'rgba(255,94,84,1)'
                                },
                                data: data.redData
                            },
                            {
                                name: `橙色预警(${data.orangeLine})`,
                                type: 'line',
                                itemStyle: {
                                    color: 'rgba(255,115,46,1)'
                                },
                                data: data.orangeData
                            }
                        ]
                    };
                    break;
                case 'WEIYI':
                    obj = {
                        title: {
                            show: true,
                            text: '空间偏移量: 三维空间XYH的位移偏移量  水平偏移量: 平面XY方位的位移偏移量  沉降: 垂直H方位的位移偏移量'
                        },
                        tooltip: {
                            formatter: function (series) {
                                let str = '';
                                series.forEach((item, index) => {
                                    let type = item.seriesName;
                                    if (index === 0) {
                                        str += item.axisValueLabel;
                                    }
                                    if (str.length > 0) {
                                        str += '<br>';
                                    }
                                    str += type + ':' + item.data;
                                });
                                return str;
                            }
                        },
                        legend: {
                            top: 25,
                            left: 'center'
                        },
                        grid: {
                            top: 100,
                            right: 20,
                            left: 80
                        },
                        dataZoomShow: true,
                        dataZoomStart: 95,
                        dataZoomEnd: 100,
                        xAxis: {
                            data: data.time,
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value;
                            }
                        },
                        yAxis: {},
                        series: [
                            {
                                name: `空间偏移量`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: data.space
                            },
                            {
                                name: `水平偏移量`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: data.level
                            },
                            {
                                name: `沉降`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: data.h
                            }
                        ]
                    };
                    break;
                case 'LPG':
                case 'NH3':
                case 'SiHCl3':
                case "JIAWAN":

                    let series = [];
                    for (let key in seriesData) {
                        if (seriesData[key]) {
                            let obj = {
                                name: `${data.name}(${seriesData[key].unit}):  ${seriesData[key].curr}`,
                                type: 'line',
                                itemStyle: itemStyleArr.shift(),
                                data: seriesData[key].data

                            };
                            series.push(obj);
                        }
                    }

                    obj = {
                        title: {
                            show: false
                        },
                        tooltip: {
                            formatter: function (series) {
                                let str = '';

                                series.forEach((item, index) => {
                                    let type = item.seriesName.split(':')[0];
                                    if (index === 0) {
                                        str += item.axisValueLabel;
                                    }
                                    if (str.length > 0) {
                                        str += '<br>';
                                    }
                                    str += type + ':' + item.data;
                                });
                                return str;
                            }
                        },
                        legend: {
                            top: 80,
                            left: 30
                        },
                        grid: {
                            top: 120,
                            right: 20,
                            left: 80
                        },
                        dataZoomShow: true,
                        xAxis: {
                            data: xData,
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value;
                            }
                        },
                        yAxis: {},
                        series
                    };
                    break;
                case 'SHIDU':
                case 'WENDU':
                    obj = {
                        title: {
                            show: false
                        },
                        tooltip: {
                            formatter: '{b}  {c}' + data.unit
                        },
                        dataZoomShow: true,
                        xAxis: {
                            data: xData,
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value;
                            }
                        },
                        yAxis: {
                            name: data.unit
                        },
                        series: [
                            {
                                name: data.currValue + data.unit + '  最新' + data.label,
                                type: 'line',
                                itemStyle: {
                                    normalColor: 'rgba(0,123,255,1)',
                                    colorStart: 'rgba(0,123,255,0.1)',
                                    colorEnd: 'rgba(0,123,255,0)',
                                    areaShow: true
                                },
                                data: seriesData
                            }
                        ]
                    };
                    break;
                case 'JIANGYULIANG':
                    obj = {
                        title: {
                            show: false
                        },
                        tooltip: {
                            formatter: '{b}日  {a0}:{c0}'
                        },
                        dataZoomShow: true,
                        xAxis: {
                            data: xData,
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value + '日';
                            }
                        },
                        yAxis: {
                            name: data.unit
                        },
                        series: [
                            {
                                name: '降雨量',
                                type: 'bar',
                                itemStyle: {
                                    color: 'rgba(0,123,255,1)',
                                    areaShow: true
                                },
                                data: seriesData
                            }
                        ]
                    };
                    break;
                default:
                    obj = {
                        title: {
                            show: false
                        },
                        tooltip: {
                            formatter: '{b}  {c}' + data.unit
                        },
                        dataZoomShow: true,
                        xAxis: {
                            data: xData,
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return value;
                            }
                        },
                        yAxis: {
                            name: data.unit
                        },
                        series: [
                            {
                                name: '',
                                type: 'line',
                                itemStyle: {
                                    normalColor: 'rgba(0,123,255,1)',
                                    colorStart: 'rgba(0,123,255,0.1)',
                                    colorEnd: 'rgba(0,123,255,0)',
                                    areaShow: true
                                },
                                data: seriesData
                            }
                        ]
                    };
                    break;
            }
            return obj;
        },
        async getSensorData (type, i, params = false, showLoading = false) {
            if (showLoading) {
                this.loading = true;
            }
            let res = {};
            let queryObj = {
                SensorMenu: type,
                Id: sessionStorage.getItem('sensorNumber')
            };
            if (params && typeof params === 'object') {
                Object.assign(queryObj, params);
            }
            try {
                res = await this.$req.get(this.$url.start.sensorData, queryObj) || {};
                console.log(res);
            }
            catch (e) {
                console.log(e);
            }
            this.loading = false;
            let data = res.data;
            if (type === 'LPG' || type === 'NH3' || type === 'SiHCl3' || type === 'CH4') {
                this.lpgObj = {
                    windSpeed: data.windSpeed,
                    windDirection: data.windDirectionByC,
                    todayCount: data.todayCount,
                    total: data.total,
                    status: data.status
                };
            }
            if (!data) {
                this.optionsGroup[i] = {
                    title: {
                        text: '未查询到数据',
                        textStyle: {
                            fontSize: 32,
                            fontWeight: 600,
                            fontFamily: 'PingFang'
                        },
                        top: 'center',
                        left: 'center',
                        backgroundColor: 'rgba(0,123,255,0.1)'
                    }
                };
            }
            else {
                let option = this.optionFunction(data, type);
                console.log(type);
                console.log(option);
                this.$set(this.optionsGroup, i, option);
                // this.optionsGroup[i] = option;
            }
            if (!this.chartDateReady) {
                this.chartDateReady = true;
                this.sensorArr.forEach((item, index) => {
                    if (index > 0) {
                        this.getSensorData(item.type, index);
                    }
                });
            }
            console.log(5);
        },
        dayTimeChange (type) {
            if (type === 'day') {
                this.buttonIndex = 'accordingDay';
            }
            else if (type === 'time') {
                this.buttonIndex = 'accordingTime';
            }
        },
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
            this.activeIndex = keyPath[0];
            this.value1 = '';
            this.type = this.sensorArr[key]['type'];
            let type = this.type;
            console.log(type);
            this.$nextTick(() => {
                console.log(this.$refs);
                this.$refs[type][0].resize();
            });
        }
    }
};
</script>

<style lang="scss">
    .bei-dou-sensor-dialog {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .el-menu-item {
            padding: 0 30px;
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
            flex: 1;
            position: relative;
            .chart-box-head {
                width: 100%;
                height: 84px;
                padding: 20px 30px 0 27px;
                position: absolute;
                z-index: 100;
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
                    width: 160px;
                    height: 70px;
                    margin-right: 20px;
                    background: #00bd99;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
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
                .button-box {
                    display: flex;
                    > div {
                        width: 90px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                        border: 1px solid #007bff;
                        border-radius: 5px 0px 0px 5px;
                        background: white;
                        font-size: 12px;
                        font-family: PingFang;
                        font-weight: 600;
                        color: #082155;
                        &:hover {
                            opacity: 0.5;
                        }
                    }
                    > div:last-child {
                        border-radius: 0px 5px 5px 0px;
                    }
                    .active {
                        background: #007bff;
                    }
                }

                .el-date-editor .el-range-separator {
                    padding:0;
                }
            }
            .chart-container {
                width: 100%;
                height: 100%;
            }
        }
    }


</style>