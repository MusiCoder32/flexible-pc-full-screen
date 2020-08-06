import Api from '../utils/function-list';

const getters = {
    getBdSensorStatistics:(state)=>{
        let bdSensorStatistics = state.firstData.bdSensorStatistics
        let data = [
            {
                'name': '北斗位移传感器',
                'value': bdSensorStatistics.bd,
                itemStyle: {
                    color: '#FFD1D1'
                }
            },
            {
                'name': '温度湿度传感器',
                'value': bdSensorStatistics.wsd,
                itemStyle: {
                    color: '#FD8EAD'
                }
            }, {
                'name': '震动传感器',
                'value': bdSensorStatistics.wz,
                itemStyle: {
                    color: '#E3FF73'
                }
            }, {
                'name': '降雨量传感器',
                'value': bdSensorStatistics.yl,
                itemStyle: {
                    color: '#2BD700'
                }
            }, {
                'name': '气体传感器',
                'value': bdSensorStatistics.qt,
                itemStyle: {
                    color: '#00BD99'
                }
            }, {
                'name': '浸润线传感器',
                'value': bdSensorStatistics.jrx,
                itemStyle: {
                    color: '#8C71FF'
                }
            }, {
                'name': '风速风向传感器',
                'value': bdSensorStatistics.fsfx,
                itemStyle: {
                    color: '#4E00FF'
                }
            }, {
                'name': '拉线位移传感器',
                'value': bdSensorStatistics.lx,
                itemStyle: {
                    color: '#007BFF'
                }
            }
        ];
        return data
    }
};
export default getters;