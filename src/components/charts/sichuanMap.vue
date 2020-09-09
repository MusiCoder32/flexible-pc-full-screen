<template>
  <chart :autoresize='true' :options='options'></chart>
</template>

<script>

let geoCoordMap = {
    '成都市':[104.0815300000,30.6558230000],
    '绵阳市':[104.6855600000,31.4736630000],
    '自贡市':[104.7844450000,29.3455850000],
    '攀枝花市':[101.7255440000,26.5880340000],
    '泸州市':[105.4485260000,28.8776680000],
    '德阳市':[104.4044170000,31.1331160000],
    '广元市':[105.8504190000,32.4416170000],
    '遂宁市':[105.5994240000,30.5390970000],
    '内江市':[105.0645910000,29.5858860000],
    '乐山市':[103.7725400000,29.5579400000],
    '资阳市':[104.6344370000,30.1349560000],
    '宜宾市':[104.6494030000,28.7580070000],
    '南充市':[106.1175040000,30.8437830000],
    '达州市':[107.4745920000,31.2143070000],
    '雅安市':[103.0495390000,30.0167920000],
    '阿坝藏族羌族自治州':[102.2311860000,31.9056090000],
    '甘孜藏族自治州':[101.9685450000,30.0552780000],
    '凉山彝族自治州':[102.2735020000,27.8877520000],
    '广安市':[106.6395540000,30.4617470000],
    '巴中市':[106.7515820000,31.8728890000],
    '眉山市':[103.8565670000,30.0825270000],
}
let data = [
    {name: '成都市', value: 390},
    {name: '绵阳市', value: 158},
    {name: '自贡市', value: 252},
    {name: '攀枝花市', value: 99},
    {name: '泸州市', value: 189},
    {name: '德阳市', value: 52},
    {name: '广元市', value: 158},
    {name: '遂宁市', value: 152},
    {name: '内江市', value: 189},
    {name: '乐山市', value: 160},
    {name: '资阳市', value: 80},
    {name: '宜宾市', value: 180},
    {name: '南充市', value: 190},
    {name: '达州市', value: 290},
    {name: '阿坝藏族羌族自治州', value: 190},
    {name: '甘孜藏族自治州', value: 190},
    {name: '凉山彝族自治州', value: 290},
    {name: '广安市', value: 290},
    {name: '巴中市', value: 290},
    {name: '眉山市', value: 290},
];
function convertData(data) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

export default {
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'item'
        },
        geo: {
          map: 'map',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'transparent',
              borderColor: '#3fdaff',
              borderWidth: 1,
              shadowColor: 'rgba(63, 218, 255, 0.5)',
              shadowBlur: 30
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: val => val[2] / 10,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 10)),
            symbolSize: val => val[2] / 10,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }
        ]
      }
    }
  }
}
</script>
