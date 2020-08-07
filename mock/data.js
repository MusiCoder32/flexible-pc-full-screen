mock = function (api, params) {

    if (api === 'api/Auth/Login') {
        return {
            code: 200,
            data: '08a201d9-81a3-4655-ab83-41176b27af97',
            success: true
        };
    }
    if (api === 'api/Home/GetHomeStatistics') {
        return {
            'code': 200,
            'data': {
                'monitorCount': { 'monitoringCount': 2140, 'foucusCount': 16, 'coverPeopleCount': 1999 },
                'mapStatistics': [
                    {
                        'areaName': '泸州',
                        'areaCode': '510500',
                        'longitude': 105.643349,
                        'latitude': 27.889138,
                        'total': 320,
                        'lowRiskCount': 48,
                        'generalRiskCount': 60,
                        'highRiskCount': 111,
                        'significantRisk': 101
                    }, {
                        'areaName': '攀枝花',
                        'areaCode': '510400',
                        'longitude': 101.716008,
                        'latitude': 26.580446,
                        'total': 158,
                        'lowRiskCount': 62,
                        'generalRiskCount': 59,
                        'highRiskCount': 33,
                        'significantRisk': 4
                    }, {
                        'areaName': '阿坝州',
                        'areaCode': '513200',
                        'longitude': 103.135115,
                        'latitude': 32.283939,
                        'total': 27,
                        'lowRiskCount': 10,
                        'generalRiskCount': 7,
                        'highRiskCount': 3,
                        'significantRisk': 7
                    }, {
                        'areaName': '达州',
                        'areaCode': '511700',
                        'longitude': 107.468023,
                        'latitude': 31.209572,
                        'total': 413,
                        'lowRiskCount': 88,
                        'generalRiskCount': 136,
                        'highRiskCount': 156,
                        'significantRisk': 33
                    }, {
                        'areaName': '巴中',
                        'areaCode': '511900',
                        'longitude': 106.753669,
                        'latitude': 31.858809,
                        'total': 166,
                        'lowRiskCount': 2,
                        'generalRiskCount': 90,
                        'highRiskCount': 69,
                        'significantRisk': 5
                    }, {
                        'areaName': '凉山州',
                        'areaCode': '513400',
                        'longitude': 102.258746,
                        'latitude': 27.486762,
                        'total': 336,
                        'lowRiskCount': 106,
                        'generalRiskCount': 112,
                        'highRiskCount': 102,
                        'significantRisk': 16
                    }, {
                        'areaName': '自贡',
                        'areaCode': '510300',
                        'longitude': 104.773447,
                        'latitude': 28.952765,
                        'total': 107,
                        'lowRiskCount': 36,
                        'generalRiskCount': 38,
                        'highRiskCount': 25,
                        'significantRisk': 8
                    }, {
                        'areaName': '宜宾',
                        'areaCode': '511500',
                        'longitude': 104.730825,
                        'latitude': 28.360189,
                        'total': 206,
                        'lowRiskCount': 37,
                        'generalRiskCount': 61,
                        'highRiskCount': 97,
                        'significantRisk': 11
                    }, {
                        'areaName': '德阳',
                        'areaCode': '510600',
                        'longitude': 104.398651,
                        'latitude': 31.127991,
                        'total': 327,
                        'lowRiskCount': 8,
                        'generalRiskCount': 53,
                        'highRiskCount': 224,
                        'significantRisk': 42
                    }, {
                        'areaName': '广元',
                        'areaCode': '510800',
                        'longitude': 105.629757,
                        'latitude': 32.033668,
                        'total': 275,
                        'lowRiskCount': 30,
                        'generalRiskCount': 64,
                        'highRiskCount': 147,
                        'significantRisk': 34
                    }, {
                        'areaName': '成都',
                        'areaCode': '510100',
                        'longitude': 104.066143,
                        'latitude': 30.573095,
                        'total': 759,
                        'lowRiskCount': 102,
                        'generalRiskCount': 135,
                        'highRiskCount': 492,
                        'significantRisk': 30
                    }, {
                        'areaName': '内江',
                        'areaCode': '511000',
                        'longitude': 105.057987,
                        'latitude': 29.580148,
                        'total': 266,
                        'lowRiskCount': 58,
                        'generalRiskCount': 142,
                        'highRiskCount': 60,
                        'significantRisk': 6
                    }, {
                        'areaName': '眉山',
                        'areaCode': '511400',
                        'longitude': 103.631788,
                        'latitude': 30.048318,
                        'total': 303,
                        'lowRiskCount': 26,
                        'generalRiskCount': 24,
                        'highRiskCount': 245,
                        'significantRisk': 8
                    }, {
                        'areaName': '乐山',
                        'areaCode': '511100',
                        'longitude': 103.261263,
                        'latitude': 28.882024,
                        'total': 405,
                        'lowRiskCount': 39,
                        'generalRiskCount': 97,
                        'highRiskCount': 132,
                        'significantRisk': 137
                    }, {
                        'areaName': '雅安',
                        'areaCode': '511800',
                        'longitude': 102.661263,
                        'latitude': 29.682024,
                        'total': 88,
                        'lowRiskCount': 13,
                        'generalRiskCount': 23,
                        'highRiskCount': 48,
                        'significantRisk': 4
                    }, {
                        'areaName': '绵阳',
                        'areaCode': '510700',
                        'longitude': 104.741722,
                        'latitude': 31.46402,
                        'total': 404,
                        'lowRiskCount': 47,
                        'generalRiskCount': 79,
                        'highRiskCount': 257,
                        'significantRisk': 21
                    }, {
                        'areaName': '甘孜州',
                        'areaCode': '513300',
                        'longitude': 100.963815,
                        'latitude': 30.050663,
                        'total': 167,
                        'lowRiskCount': 1,
                        'generalRiskCount': 18,
                        'highRiskCount': 69,
                        'significantRisk': 79
                    }, {
                        'areaName': '广安',
                        'areaCode': '511600',
                        'longitude': 106.833369,
                        'latitude': 30.256398,
                        'total': 215,
                        'lowRiskCount': 24,
                        'generalRiskCount': 66,
                        'highRiskCount': 121,
                        'significantRisk': 4
                    }, {
                        'areaName': '遂宁',
                        'areaCode': '510900',
                        'longitude': 105.571331,
                        'latitude': 30.513311,
                        'total': 162,
                        'lowRiskCount': 4,
                        'generalRiskCount': 40,
                        'highRiskCount': 86,
                        'significantRisk': 32
                    }, {
                        'areaName': '南充',
                        'areaCode': '511300',
                        'longitude': 106.082974,
                        'latitude': 30.795282,
                        'total': 280,
                        'lowRiskCount': 68,
                        'generalRiskCount': 51,
                        'highRiskCount': 126,
                        'significantRisk': 35
                    }, {
                        'areaName': '资阳',
                        'areaCode': '512000',
                        'longitude': 104.641917,
                        'latitude': 30.122211,
                        'total': 95,
                        'lowRiskCount': 7,
                        'generalRiskCount': 36,
                        'highRiskCount': 49,
                        'significantRisk': 3
                    }
                ],
                'bdSensorStatistics': {
                    'jrx': 19,
                    'bd': 19,
                    'yl': 8,
                    'wz': 8,
                    'wsd': 44,
                    'gt': 9,
                    'fsfx': 4,
                    'lx': 0,
                    'qt': 29
                },
                'warningCount': {
                    'gasCount': 0,
                    'gasRed': 0,
                    'gasOrange': 0,
                    'gasYellow': 0,
                    'gasBlue': 0,
                    'disCount': 2,
                    'disRed': 0,
                    'disOrange': 0,
                    'disYellow': 0,
                    'disBlue': 2
                },
                'mineCover': {
                    'companyCount': 1961,
                    'tailingPondCount': 203,
                    'dumpCount': 0,
                    'openPitMineCount': 1758
                },
                'hazardChemicalCover': {
                    'companyCount': 4987,
                    'majorHazardCount': 814,
                    'chemicalIndustryParkCount': 121,
                    'keySupervisionProcessCount': 12
                },
                'mineCompanyList': [
                    {
                        'name': '非煤矿山企业1',
                        'personName': '负责人1',
                        'tel': '1355182122'
                    }, { 'name': '非煤矿山企业2', 'personName': '负责人2', 'tel': '1355182122' }, {
                        'name': '非煤矿山企业3',
                        'personName': '负责人3',
                        'tel': '1355182122'
                    }, { 'name': '非煤矿山企业4', 'personName': '负责人5', 'tel': '1355182122' }, {
                        'name': '非煤矿山企业5',
                        'personName': '负责人5',
                        'tel': '1355182122'
                    }, { 'name': '非煤矿山企业6', 'personName': '负责人6', 'tel': '1355182122' }
                ],
                'hazardChemicalCompanyList': [
                    {
                        'name': '危化品企业1',
                        'personName': '负责人1',
                        'tel': '1355182122'
                    }, { 'name': '危化品企业2', 'personName': '负责人2', 'tel': '1355182122' }, {
                        'name': '危化品企业3',
                        'personName': '负责人3',
                        'tel': '1355182122'
                    }, { 'name': '危化品企业4', 'personName': '负责人5', 'tel': '1355182122' }, {
                        'name': '危化品企业5',
                        'personName': '负责人5',
                        'tel': '1355182122'
                    }, { 'name': '危化品企业6', 'personName': '负责人6', 'tel': '1355182122' }
                ],
                'airSpaceGround': {
                    'remoteSensingImg': 'http://api.data.scaqjg.com/Attachment/pxh/pc/small/30-1-摩梭河尾矿库-地质隐患遥感普查图.jpg',
                    'uavImg': 'http://api.data.scaqjg.com/Attachment/pxh/xc/small/30-2-摩梭河尾矿库-地质隐患无人机详查图.jpg',
                    'threeDImg': 'http://api.data.scaqjg.com/Attachment/pxh/hc/small/30-3-摩梭河尾矿库-地质隐患现场核查照片.jpg',
                    'problemCount': 899
                }
            }
        };
    }


};
module.exports = mock;