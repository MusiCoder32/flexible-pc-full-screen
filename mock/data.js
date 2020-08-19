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
    if (api === 'api/Mine/GetMineStatistics') {
        return {
            'code': 200,
            'data': {
                'monitorCount': { 'monitoringCount': 1961, 'foucusCount': 16, 'coverPeopleCount': 1999 },
                'mapStatistics': [
                    {
                        'areaName': '泸州',
                        'areaCode': '510500',
                        'longitude': 105.643349,
                        'latitude': 27.889138,
                        'total': 66,
                        'lowRiskCount': 2,
                        'generalRiskCount': 14,
                        'highRiskCount': 50,
                        'significantRisk': 0
                    }, {
                        'areaName': '攀枝花',
                        'areaCode': '510400',
                        'longitude': 101.716008,
                        'latitude': 26.580446,
                        'total': 100,
                        'lowRiskCount': 42,
                        'generalRiskCount': 32,
                        'highRiskCount': 23,
                        'significantRisk': 3
                    }, {
                        'areaName': '阿坝州',
                        'areaCode': '513200',
                        'longitude': 103.135115,
                        'latitude': 32.283939,
                        'total': 13,
                        'lowRiskCount': 2,
                        'generalRiskCount': 5,
                        'highRiskCount': 0,
                        'significantRisk': 6
                    }, {
                        'areaName': '达州',
                        'areaCode': '511700',
                        'longitude': 107.468023,
                        'latitude': 31.209572,
                        'total': 131,
                        'lowRiskCount': 32,
                        'generalRiskCount': 74,
                        'highRiskCount': 25,
                        'significantRisk': 0
                    }, {
                        'areaName': '巴中',
                        'areaCode': '511900',
                        'longitude': 106.753669,
                        'latitude': 31.858809,
                        'total': 18,
                        'lowRiskCount': 1,
                        'generalRiskCount': 9,
                        'highRiskCount': 8,
                        'significantRisk': 0
                    }, {
                        'areaName': '凉山州',
                        'areaCode': '513400',
                        'longitude': 102.258746,
                        'latitude': 27.486762,
                        'total': 95,
                        'lowRiskCount': 20,
                        'generalRiskCount': 31,
                        'highRiskCount': 38,
                        'significantRisk': 6
                    }, {
                        'areaName': '自贡',
                        'areaCode': '510300',
                        'longitude': 104.773447,
                        'latitude': 28.952765,
                        'total': 34,
                        'lowRiskCount': 8,
                        'generalRiskCount': 16,
                        'highRiskCount': 9,
                        'significantRisk': 1
                    }, {
                        'areaName': '宜宾',
                        'areaCode': '511500',
                        'longitude': 104.730825,
                        'latitude': 28.360189,
                        'total': 170,
                        'lowRiskCount': 29,
                        'generalRiskCount': 48,
                        'highRiskCount': 82,
                        'significantRisk': 11
                    }, {
                        'areaName': '德阳',
                        'areaCode': '510600',
                        'longitude': 104.398651,
                        'latitude': 31.127991,
                        'total': 36,
                        'lowRiskCount': 0,
                        'generalRiskCount': 12,
                        'highRiskCount': 21,
                        'significantRisk': 3
                    }, {
                        'areaName': '广元',
                        'areaCode': '510800',
                        'longitude': 105.629757,
                        'latitude': 32.033668,
                        'total': 77,
                        'lowRiskCount': 3,
                        'generalRiskCount': 27,
                        'highRiskCount': 36,
                        'significantRisk': 11
                    }, {
                        'areaName': '成都',
                        'areaCode': '510100',
                        'longitude': 104.066143,
                        'latitude': 30.573095,
                        'total': 7,
                        'lowRiskCount': 2,
                        'generalRiskCount': 4,
                        'highRiskCount': 1,
                        'significantRisk': 0
                    }, {
                        'areaName': '内江',
                        'areaCode': '511000',
                        'longitude': 105.057987,
                        'latitude': 29.580148,
                        'total': 78,
                        'lowRiskCount': 1,
                        'generalRiskCount': 54,
                        'highRiskCount': 17,
                        'significantRisk': 6
                    }, {
                        'areaName': '眉山',
                        'areaCode': '511400',
                        'longitude': 103.631788,
                        'latitude': 30.048318,
                        'total': 46,
                        'lowRiskCount': 9,
                        'generalRiskCount': 12,
                        'highRiskCount': 23,
                        'significantRisk': 2
                    }, {
                        'areaName': '乐山',
                        'areaCode': '511100',
                        'longitude': 103.261263,
                        'latitude': 28.882024,
                        'total': 80,
                        'lowRiskCount': 3,
                        'generalRiskCount': 57,
                        'highRiskCount': 20,
                        'significantRisk': 0
                    }, {
                        'areaName': '雅安',
                        'areaCode': '511800',
                        'longitude': 102.661263,
                        'latitude': 29.682024,
                        'total': 56,
                        'lowRiskCount': 7,
                        'generalRiskCount': 13,
                        'highRiskCount': 36,
                        'significantRisk': 0
                    }, {
                        'areaName': '绵阳',
                        'areaCode': '510700',
                        'longitude': 104.741722,
                        'latitude': 31.46402,
                        'total': 47,
                        'lowRiskCount': 14,
                        'generalRiskCount': 13,
                        'highRiskCount': 19,
                        'significantRisk': 1
                    }, {
                        'areaName': '甘孜州',
                        'areaCode': '513300',
                        'longitude': 100.963815,
                        'latitude': 30.050663,
                        'total': 44,
                        'lowRiskCount': 1,
                        'generalRiskCount': 3,
                        'highRiskCount': 31,
                        'significantRisk': 9
                    }, {
                        'areaName': '广安',
                        'areaCode': '511600',
                        'longitude': 106.833369,
                        'latitude': 30.256398,
                        'total': 35,
                        'lowRiskCount': 2,
                        'generalRiskCount': 6,
                        'highRiskCount': 27,
                        'significantRisk': 0
                    }, {
                        'areaName': '遂宁',
                        'areaCode': '510900',
                        'longitude': 105.571331,
                        'latitude': 30.513311,
                        'total': 1,
                        'lowRiskCount': 1,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }
                ],
                'companyRiskCount': {
                    'total': 1961,
                    'lowRiskCount': 179,
                    'generalRiskCount': 430,
                    'highRiskCount': 466,
                    'significantRisk': 59
                },
                'mineWarnStatistics': [
                    { 'date': '12日', 'warnCount': 4 }, {
                        'date': '13日',
                        'warnCount': 3
                    }, { 'date': '14日', 'warnCount': 3 }, { 'date': '15日', 'warnCount': 0 }, {
                        'date': '16日',
                        'warnCount': 0
                    }, { 'date': '17日', 'warnCount': 0 }, { 'date': '18日', 'warnCount': 5 }, {
                        'date': '19日',
                        'warnCount': 1
                    }, { 'date': '20日', 'warnCount': 0 }, { 'date': '21日', 'warnCount': 1 }, {
                        'date': '22日',
                        'warnCount': 6
                    }, { 'date': '23日', 'warnCount': 3 }, { 'date': '24日', 'warnCount': 5 }, {
                        'date': '25日',
                        'warnCount': 0
                    }, { 'date': '26日', 'warnCount': 0 }, { 'date': '27日', 'warnCount': 0 }, {
                        'date': '28日',
                        'warnCount': 0
                    }, { 'date': '29日', 'warnCount': 0 }, { 'date': '30日', 'warnCount': 0 }, {
                        'date': '31日',
                        'warnCount': 0
                    }, { 'date': '1日', 'warnCount': 0 }, { 'date': '2日', 'warnCount': 0 }, {
                        'date': '3日',
                        'warnCount': 0
                    }, { 'date': '4日', 'warnCount': 0 }, { 'date': '5日', 'warnCount': 0 }, {
                        'date': '6日',
                        'warnCount': 2
                    }, { 'date': '7日', 'warnCount': 2 }, { 'date': '8日', 'warnCount': 0 }, {
                        'date': '9日',
                        'warnCount': 3
                    }, { 'date': '10日', 'warnCount': 0 }, { 'date': '11日', 'warnCount': 0 }
                ],
                'mineBDStatistics': {
                    'companyCount': 27,
                    'tailingPondCount': 11,
                    'dumpCount': 9,
                    'openPitMineCount': 7
                },
                'mineAirSpaceGround': { 'coveredCount': 159, 'currentWarnCount': 40, 'historyWarnCount': 255 },
                'mineSelfCheck': { 'hiddenDangerDoneCount': 1000, 'currentWarnCount': 40, 'historyWarnCount': 255 },
                'mineLicence': { 'alarmCount': 2, 'alertCount': 10 },
                'mineCompanyList': [
                    {
                        'name': '非煤矿山企业1',
                        'personName': '负责人1',
                        'tel': '1355182122',
                        'type': '尾矿库',
                        'riskLevel': '低风险'
                    }, {
                        'name': '非煤矿山企业2',
                        'personName': '负责人2',
                        'tel': '1355182122',
                        'type': '非金属矿山',
                        'riskLevel': '一般风险'
                    }, {
                        'name': '非煤矿山企业3',
                        'personName': '负责人3',
                        'tel': '1355182122',
                        'type': '尾矿库',
                        'riskLevel': '较大风险'
                    }, {
                        'name': '非煤矿山企业4',
                        'personName': '负责人5',
                        'tel': '1355182122',
                        'type': '尾矿库',
                        'riskLevel': '重大风险'
                    }, {
                        'name': '非煤矿山企业5',
                        'personName': '负责人5',
                        'tel': '1355182122',
                        'type': '非金属矿山',
                        'riskLevel': '低风险'
                    }, {
                        'name': '非煤矿山企业6',
                        'personName': '负责人6',
                        'tel': '1355182122',
                        'type': '非金属矿山',
                        'riskLevel': '低风险'
                    }
                ]
            }
        };
    }
    if (api === 'api/HazardChemical/GetHazardChemicalStatistics') {
        return {
            'code': 200,
            'data': {
                'monitorCount': { 'monitoringCount': 4987, 'foucusCount': 16, 'coverPeopleCount': 1999 },
                'mapStatistics': [
                    {
                        'areaName': '成都',
                        'areaCode': '510100',
                        'longitude': 104.066143,
                        'latitude': 30.573095,
                        'total': 752,
                        'lowRiskCount': 100,
                        'generalRiskCount': 131,
                        'highRiskCount': 491,
                        'significantRisk': 30
                    }, {
                        'areaName': '广元',
                        'areaCode': '510800',
                        'longitude': 105.629757,
                        'latitude': 32.033668,
                        'total': 198,
                        'lowRiskCount': 27,
                        'generalRiskCount': 37,
                        'highRiskCount': 111,
                        'significantRisk': 23
                    }, {
                        'areaName': '甘孜州',
                        'areaCode': '513300',
                        'longitude': 100.963815,
                        'latitude': 30.050663,
                        'total': 123,
                        'lowRiskCount': 0,
                        'generalRiskCount': 15,
                        'highRiskCount': 38,
                        'significantRisk': 70
                    }, {
                        'areaName': '德阳',
                        'areaCode': '510600',
                        'longitude': 104.398651,
                        'latitude': 31.127991,
                        'total': 291,
                        'lowRiskCount': 8,
                        'generalRiskCount': 41,
                        'highRiskCount': 203,
                        'significantRisk': 39
                    }, {
                        'areaName': '眉山',
                        'areaCode': '511400',
                        'longitude': 103.631788,
                        'latitude': 30.048318,
                        'total': 257,
                        'lowRiskCount': 17,
                        'generalRiskCount': 12,
                        'highRiskCount': 222,
                        'significantRisk': 6
                    }, {
                        'areaName': '绵阳',
                        'areaCode': '510700',
                        'longitude': 104.741722,
                        'latitude': 31.46402,
                        'total': 357,
                        'lowRiskCount': 33,
                        'generalRiskCount': 66,
                        'highRiskCount': 238,
                        'significantRisk': 20
                    }, {
                        'areaName': '内江',
                        'areaCode': '511000',
                        'longitude': 105.057987,
                        'latitude': 29.580148,
                        'total': 188,
                        'lowRiskCount': 57,
                        'generalRiskCount': 88,
                        'highRiskCount': 43,
                        'significantRisk': 0
                    }, {
                        'areaName': '达州',
                        'areaCode': '511700',
                        'longitude': 107.468023,
                        'latitude': 31.209572,
                        'total': 282,
                        'lowRiskCount': 56,
                        'generalRiskCount': 62,
                        'highRiskCount': 131,
                        'significantRisk': 33
                    }, {
                        'areaName': '攀枝花',
                        'areaCode': '510400',
                        'longitude': 101.716008,
                        'latitude': 26.580446,
                        'total': 58,
                        'lowRiskCount': 20,
                        'generalRiskCount': 27,
                        'highRiskCount': 10,
                        'significantRisk': 1
                    }, {
                        'areaName': '广安',
                        'areaCode': '511600',
                        'longitude': 106.833369,
                        'latitude': 30.256398,
                        'total': 180,
                        'lowRiskCount': 22,
                        'generalRiskCount': 60,
                        'highRiskCount': 94,
                        'significantRisk': 4
                    }, {
                        'areaName': '遂宁',
                        'areaCode': '510900',
                        'longitude': 105.571331,
                        'latitude': 30.513311,
                        'total': 161,
                        'lowRiskCount': 3,
                        'generalRiskCount': 40,
                        'highRiskCount': 86,
                        'significantRisk': 32
                    }, {
                        'areaName': '泸州',
                        'areaCode': '510500',
                        'longitude': 105.643349,
                        'latitude': 27.889138,
                        'total': 254,
                        'lowRiskCount': 46,
                        'generalRiskCount': 46,
                        'highRiskCount': 61,
                        'significantRisk': 101
                    }, {
                        'areaName': '凉山州',
                        'areaCode': '513400',
                        'longitude': 102.258746,
                        'latitude': 27.486762,
                        'total': 241,
                        'lowRiskCount': 86,
                        'generalRiskCount': 81,
                        'highRiskCount': 64,
                        'significantRisk': 10
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
                        'areaName': '巴中',
                        'areaCode': '511900',
                        'longitude': 106.753669,
                        'latitude': 31.858809,
                        'total': 148,
                        'lowRiskCount': 1,
                        'generalRiskCount': 81,
                        'highRiskCount': 61,
                        'significantRisk': 5
                    }, {
                        'areaName': '乐山',
                        'areaCode': '511100',
                        'longitude': 103.261263,
                        'latitude': 28.882024,
                        'total': 325,
                        'lowRiskCount': 36,
                        'generalRiskCount': 40,
                        'highRiskCount': 112,
                        'significantRisk': 137
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
                    }, {
                        'areaName': '雅安',
                        'areaCode': '511800',
                        'longitude': 102.661263,
                        'latitude': 29.682024,
                        'total': 32,
                        'lowRiskCount': 6,
                        'generalRiskCount': 10,
                        'highRiskCount': 12,
                        'significantRisk': 4
                    }, {
                        'areaName': '宜宾',
                        'areaCode': '511500',
                        'longitude': 104.730825,
                        'latitude': 28.360189,
                        'total': 36,
                        'lowRiskCount': 8,
                        'generalRiskCount': 13,
                        'highRiskCount': 15,
                        'significantRisk': 0
                    }, {
                        'areaName': '阿坝州',
                        'areaCode': '513200',
                        'longitude': 103.135115,
                        'latitude': 32.283939,
                        'total': 14,
                        'lowRiskCount': 8,
                        'generalRiskCount': 2,
                        'highRiskCount': 3,
                        'significantRisk': 1
                    }, {
                        'areaName': '自贡',
                        'areaCode': '510300',
                        'longitude': 104.773447,
                        'latitude': 28.952765,
                        'total': 73,
                        'lowRiskCount': 28,
                        'generalRiskCount': 22,
                        'highRiskCount': 16,
                        'significantRisk': 7
                    }
                ],
                'mapParkStatistics': [
                    {
                        'areaName': '达州',
                        'areaCode': '511700',
                        'longitude': 107.468023,
                        'latitude': 31.209572,
                        'total': 7,
                        'lowRiskCount': 7,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '广安',
                        'areaCode': '511600',
                        'longitude': 106.833369,
                        'latitude': 30.256398,
                        'total': 7,
                        'lowRiskCount': 7,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '凉山州',
                        'areaCode': '513400',
                        'longitude': 102.258746,
                        'latitude': 27.486762,
                        'total': 4,
                        'lowRiskCount': 4,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '宜宾',
                        'areaCode': '511500',
                        'longitude': 104.730825,
                        'latitude': 28.360189,
                        'total': 10,
                        'lowRiskCount': 10,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '眉山',
                        'areaCode': '511400',
                        'longitude': 103.631788,
                        'latitude': 30.048318,
                        'total': 23,
                        'lowRiskCount': 23,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '成都',
                        'areaCode': '510100',
                        'longitude': 104.066143,
                        'latitude': 30.573095,
                        'total': 13,
                        'lowRiskCount': 13,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '绵阳',
                        'areaCode': '510700',
                        'longitude': 104.741722,
                        'latitude': 31.46402,
                        'total': 5,
                        'lowRiskCount': 5,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '自贡',
                        'areaCode': '510300',
                        'longitude': 104.773447,
                        'latitude': 28.952765,
                        'total': 2,
                        'lowRiskCount': 2,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '德阳',
                        'areaCode': '510600',
                        'longitude': 104.398651,
                        'latitude': 31.127991,
                        'total': 5,
                        'lowRiskCount': 5,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '乐山',
                        'areaCode': '511100',
                        'longitude': 103.261263,
                        'latitude': 28.882024,
                        'total': 7,
                        'lowRiskCount': 7,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '攀枝花',
                        'areaCode': '510400',
                        'longitude': 101.716008,
                        'latitude': 26.580446,
                        'total': 7,
                        'lowRiskCount': 7,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '泸州',
                        'areaCode': '510500',
                        'longitude': 105.643349,
                        'latitude': 27.889138,
                        'total': 5,
                        'lowRiskCount': 5,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '资阳',
                        'areaCode': '512000',
                        'longitude': 104.641917,
                        'latitude': 30.122211,
                        'total': 1,
                        'lowRiskCount': 1,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '内江',
                        'areaCode': '511000',
                        'longitude': 105.057987,
                        'latitude': 29.580148,
                        'total': 3,
                        'lowRiskCount': 3,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '广元',
                        'areaCode': '510800',
                        'longitude': 105.629757,
                        'latitude': 32.033668,
                        'total': 4,
                        'lowRiskCount': 4,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '遂宁',
                        'areaCode': '510900',
                        'longitude': 105.571331,
                        'latitude': 30.513311,
                        'total': 9,
                        'lowRiskCount': 9,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '南充',
                        'areaCode': '511300',
                        'longitude': 106.082974,
                        'latitude': 30.795282,
                        'total': 1,
                        'lowRiskCount': 1,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '巴中',
                        'areaCode': '511900',
                        'longitude': 106.753669,
                        'latitude': 31.858809,
                        'total': 1,
                        'lowRiskCount': 1,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '阿坝州',
                        'areaCode': '513200',
                        'longitude': 103.135115,
                        'latitude': 32.283939,
                        'total': 5,
                        'lowRiskCount': 5,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }, {
                        'areaName': '雅安',
                        'areaCode': '511800',
                        'longitude': 102.661263,
                        'latitude': 29.682024,
                        'total': 2,
                        'lowRiskCount': 2,
                        'generalRiskCount': 0,
                        'highRiskCount': 0,
                        'significantRisk': 0
                    }
                ],
                'hazardCompanyTypeCount': {
                    'productionCount': 468,
                    'usingCount': 162,
                    'runningCount': 3365,
                    'safetyCommitteeCount': 9941
                },
                'majorHazardInstallation': { 'total': 784, 'one': 110, 'two': 52, 'three': 301, 'four': 321 },
                'hazardBDStatistics': {
                    'coveredCount': 4,
                    'equipmentCount': 150,
                    'currentWarnCount': 1,
                    'historyWarnCount': 110
                },
                'hazardAirSpaceGround': { 'coveredCount': 13, 'currentWarnCount': 2, 'historyWarnCount': 300 },
                'safetyCheck': { 'checkCount': 1000, 'hiddenDangerCount': 988, 'doneCount': 900 },
                'specialWork': { 'coveredCount': 3000, 'currentWarnCount': 40, 'historyWarnCount': 1000 },
                'hazardChemicalCompanyList': [
                    {
                        'name': '危化品企业1',
                        'personName': '负责人1',
                        'tel': '1355182122',
                        'type': '加油站',
                        'riskLevel': '低风险'
                    }, {
                        'name': '危化品企业2',
                        'personName': '负责人2',
                        'tel': '1355182122',
                        'type': '危化品仓库',
                        'riskLevel': '低风险'
                    }, {
                        'name': '危化品企业3',
                        'personName': '负责人3',
                        'tel': '1355182122',
                        'type': '加油站',
                        'riskLevel': '一般风险'
                    }, {
                        'name': '危化品企业4',
                        'personName': '负责人5',
                        'tel': '1355182122',
                        'type': '加油站',
                        'riskLevel': '较大风险'
                    }, {
                        'name': '危化品企业5',
                        'personName': '负责人5',
                        'tel': '1355182122',
                        'type': '加油站',
                        'riskLevel': '低风险'
                    }, {
                        'name': '危化品企业6',
                        'personName': '负责人6',
                        'tel': '1355182122',
                        'type': '加油站',
                        'riskLevel': '重大风险'
                    }
                ]
            }
        };
    }
    if (api === 'api/BDSatellite/GetBdSensorListByOrgId') {
        return {
            'success': true,
            'code': 200,
            'data': [
                {
                    'id': '921447bae5544e8bbe34b1359987035e',
                    'orgId': '63bd342666e94942b3c6a022f9492af2',
                    'alarmLevel': 0,
                    'alarmType': null,
                    'orgName': '星座1',
                    'orgParentName': '企业名称1',
                    'name': '川Jxxxxx001',
                    'number': 6181,
                    'hytDataId': null,
                    'type': 0,
                    'normalStatus': 0,
                    'abnormalStatus': 0,
                    'eqStatus': null,
                    'status': null,
                    'bdStatus': null,
                    'lastUploadTime': null,
                    'eqLastUploadTime': null,
                    'eqPower': null,
                    'eqVoltage': null,
                    'longitude': 103.83785,
                    'latitude': 29.378422,
                    'orderNumber': 1
                }, {
                    'id': '5a767935c7b7454f9f86029bcb843403',
                    'orgId': '63bd342666e94942b3c6a022f9492af2',
                    'alarmLevel': 1,
                    'alarmType': null,
                    'orgName': '星座1',
                    'orgParentName': '企业名称1',
                    'name': '川Jxxxxx002',
                    'number': 6182,
                    'hytDataId': null,
                    'type': 1,
                    'normalStatus': 0,
                    'abnormalStatus': 0,
                    'eqStatus': null,
                    'status': null,
                    'bdStatus': null,
                    'lastUploadTime': null,
                    'eqLastUploadTime': null,
                    'eqPower': null,
                    'eqVoltage': null,
                    'longitude': 103.84481,
                    'latitude': 29.37831,
                    'orderNumber': 2
                }, {
                    'id': '3496596d54c74556973fa60c18326926',
                    'orgId': '63bd342666e94942b3c6a022f9492af2',
                    'alarmLevel': 2,
                    'alarmType': null,
                    'orgName': '星座1',
                    'orgParentName': '企业名称1',
                    'name': '川Jxxxxx003',
                    'number': 6183,
                    'hytDataId': null,
                    'type': 1,
                    'normalStatus': 0,
                    'abnormalStatus': 0,
                    'eqStatus': null,
                    'status': null,
                    'bdStatus': null,
                    'lastUploadTime': null,
                    'eqLastUploadTime': null,
                    'eqPower': null,
                    'eqVoltage': null,
                    'longitude': 103.850945,
                    'latitude': 29.383863,
                    'orderNumber': 3
                }, {
                    'id': '81cbd54a52bb4771b57a571b9c398852',
                    'orgId': '63bd342666e94942b3c6a022f9492af2',
                    'alarmLevel': 3,
                    'alarmType': null,
                    'orgName': '星座1',
                    'orgParentName': '企业名称1',
                    'name': '川Jxxxxx004',
                    'number': 6184,
                    'hytDataId': null,
                    'type': 1,
                    'normalStatus': 0,
                    'abnormalStatus': 0,
                    'eqStatus': null,
                    'status': null,
                    'bdStatus': null,
                    'lastUploadTime': null,
                    'eqLastUploadTime': null,
                    'eqPower': null,
                    'eqVoltage': null,
                    'longitude': 103.84099,
                    'latitude': 29.376478,
                    'orderNumber': 4
                }, {
                    'id': '1dd191e058674e61ae36da3b4eeed817',
                    'orgId': '63bd342666e94942b3c6a022f9492af2',
                    'alarmLevel': 4,
                    'alarmType': null,
                    'orgName': '星座1',
                    'orgParentName': '企业名称1',
                    'name': '川Jxxxxx005',
                    'number': 6186,
                    'hytDataId': null,
                    'type': 1,
                    'normalStatus': 0,
                    'abnormalStatus': 0,
                    'eqStatus': null,
                    'status': null,
                    'bdStatus': null,
                    'lastUploadTime': null,
                    'eqLastUploadTime': null,
                    'eqPower': null,
                    'eqVoltage': null,
                    'longitude': 103.839294,
                    'latitude': 29.382391,
                    'orderNumber': 5
                }
            ]
        };
    }
    if (api === 'api/BDSatellite/GetSensBdSensorMenus') {
        return {
            'code': 200,
            'data': [
                {
                    'id': '52b8e017a5b74de784e68d4052d505aa',
                    'sensorId': '5a767935c7b7454f9f86029bcb843403',
                    'menuCode': 'SiHCl3',
                    'status': 1,
                    'menuName': '三氯氢硅(SiHCl3)',
                    'menuFatherCode': 'QITI',
                    'menuFatherName': null,
                    'sortNum': 0
                }, {
                    'id': '49834de6f7464bc19f06b394c15c4cfa',
                    'sensorId': '5a767935c7b7454f9f86029bcb843403',
                    'menuCode': 'WENDU',
                    'status': 1,
                    'menuName': '温度',
                    'menuFatherCode': 'XINGBIAN',
                    'menuFatherName': null,
                    'sortNum': 30
                }, {
                    'id': '96f2b141b2d541edac7e5832d97203cb',
                    'sensorId': '5a767935c7b7454f9f86029bcb843403',
                    'menuCode': 'SHIDU',
                    'status': 1,
                    'menuName': '湿度',
                    'menuFatherCode': 'XINGBIAN',
                    'menuFatherName': null,
                    'sortNum': 31
                }, {
                    'id': '96f2b141b2d541edac7e5832d97203cb',
                    'sensorId': '5a767935c7b7454f9f86029bcb843403',
                    'menuCode': 'SUDU',
                    'status': 1,
                    'menuName': '位移速度',
                    'menuFatherCode': 'XINGBIAN',
                    'menuFatherName': null,
                    'sortNum': 31
                }, {
                    'id': '96f2b141b2d541edac7e5832d97203cb',
                    'sensorId': '5a767935c7b7454f9f86029bcb843403',
                    'menuCode': 'SHUIPIN',
                    'status': 1,
                    'menuName': '水平散点分布',
                    'menuFatherCode': 'XINGBIAN',
                    'menuFatherName': null,
                    'sortNum': 31
                }, {
                    'id': '96f2b141b2d541edac7e5832d97203cb',
                    'sensorId': '5a767935c7b7454f9f86029bcb843403',
                    'menuCode': 'KONGJIAN',
                    'status': 1,
                    'menuName': '空间坐标分布',
                    'menuFatherCode': 'XINGBIAN',
                    'menuFatherName': null,
                    'sortNum': 31
                }
            ]
        };
    }
    if (api === 'api/BDSatellite/GetChartData') {
        if (params.SensorMenu === 'JIANGYULIANG') {
            return {
                'code': 200,
                'data': {
                    'label': '雨量传感器数据',
                    'unit': 'mm',
                    'name': 'W川AJH100FYZ0000',
                    'number': '816006181',
                    'start': '2020-08-12 17:00:00',
                    'end': '2020-08-13 17:59:59',
                    'max': 3.6,
                    'min': 0,
                    'upToDate': 0,
                    'x': ['18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    'y': [0, 0, 0.8, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8, 3.6, 2.8, 0.2, 0]
                }
            };
        }
        if (params.SensorMenu === 'SHIDU') {
            return {
                'code': 200,
                'data': {
                    'label': '湿度',
                    'unit': '%',
                    'name': 'W川AJH100FYZ0000',
                    'number': '816006181',
                    'start': '2020-08-12 17:00:00',
                    'end': '2020-08-13 17:59:59',
                    'max': 95.3,
                    'min': 52.9,
                    'upToDate': 90.7,
                    'x': ['18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    'y': [91.4, 92, 88.7, 94.4, 91.6, 93, 93.7, 93.2, 91.7, 92, 91.7, 93.9, 94.8, 95.3, 79.7, 56.4, 52.9, 54.2, 60.4, 66.3, 90, 90.8, 92, 90.7]
                }
            };
        }
        if (params.SensorMenu === 'WENDU') {
            return {
                'code': 200,
                'data': {
                    'label': '温度',
                    'unit': '°C',
                    'name': 'W川AJH100FYZ0000',
                    'number': '816006181',
                    'start': '2020-08-12 17:00:00',
                    'end': '2020-08-13 17:59:59',
                    'max': 30.5,
                    'min': 20.2,
                    'upToDate': 22.1,
                    'x': ['18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    'y': [24.7, 24.3, 23.6, 21.3, 21.3, 21.5, 21.7, 21.8, 21.6, 21.3, 21.1, 20.6, 20.2, 20.3, 25.5, 30.2, 30.5, 30.3, 29.1, 27, 21.4, 21, 21.2, 22.1]
                }
            };
        }
        if (params.SensorMenu === 'LPG') {
            return {
                'code': 200,
                'data': {
                    'sure': 'true',
                    'safaValue_ppm': '600.0',
                    'count': 48,
                    'windDirectionByC': '→ 西',
                    'todayCount': 0,
                    'yData': {
                        'ppm': {
                            'data': [15.1276, 15.1276, 15.1276, 15.1276, 15.1276, 16.3883, 15.1276, 15.1276, 15.1276, 16.3883, 16.3883, 16.3883, 17.6489, 16.3883, 16.3883, 17.6489, 16.3883, 17.6489, 17.6489, 16.3883, 16.3883, 16.3883, 16.3883, 16.3883, 17.6489, 17.6489, 17.6489, 17.6489, 16.3883, 16.3883, 16.3883, 17.6489, 17.6489, 17.6489, 17.6489, 18.9095, 18.9095, 18.9095, 17.6489, 18.9095, 18.9095, 18.9095, 18.9095, 17.6489, 18.9095, 18.9095, 18.9095, 18.9095],
                            'curr': 18.9095
                        },
                        'perLEL': {
                            'data': [0.0756, 0.0756, 0.0756, 0.0756, 0.0756, 0.0819, 0.0756, 0.0756, 0.0756, 0.0819, 0.0819, 0.0819, 0.0882, 0.0819, 0.0819, 0.0882, 0.0819, 0.0882, 0.0882, 0.0819, 0.0819, 0.0819, 0.0819, 0.0819, 0.0882, 0.0882, 0.0882, 0.0882, 0.0819, 0.0819, 0.0819, 0.0882, 0.0882, 0.0882, 0.0882, 0.0945, 0.0945, 0.0945, 0.0882, 0.0945, 0.0945, 0.0945, 0.0945, 0.0882, 0.0945, 0.0945, 0.0945, 0.0945],
                            'curr': 0.09455
                        },
                        'per': {
                            'data': [0.00151, 0.00151, 0.00151, 0.00151, 0.00151, 0.00164, 0.00151, 0.00151, 0.00151, 0.00164, 0.00164, 0.00164, 0.00176, 0.00164, 0.00164, 0.00176, 0.00164, 0.00176, 0.00176, 0.00164, 0.00164, 0.00164, 0.00164, 0.00164, 0.00176, 0.00176, 0.00176, 0.00176, 0.00164, 0.00164, 0.00164, 0.00176, 0.00176, 0.00176, 0.00176, 0.00189, 0.00189, 0.00189, 0.00176, 0.00189, 0.00189, 0.00189, 0.00189, 0.00176, 0.00189, 0.00189, 0.00189, 0.00189],
                            'curr': 0.00189
                        }
                    },
                    'safaValue_lel': '3.0',
                    'sensorGas': '液化石油气',
                    'safaValue_percent': 0.06,
                    'oneDay': 0,
                    'total': 2,
                    'safaValue': '3.0',
                    'name': '浓度',
                    'xData': ['2020-08-10 16:28:50', '2020-08-10 16:58:50', '2020-08-10 17:28:50', '2020-08-10 17:59:00', '2020-08-10 18:29:01', '2020-08-10 18:59:01', '2020-08-10 19:29:10', '2020-08-10 19:59:11', '2020-08-10 20:29:20', '2020-08-10 20:59:20', '2020-08-10 21:29:21', '2020-08-10 21:59:30', '2020-08-10 22:29:30', '2020-08-10 22:59:30', '2020-08-10 23:29:31', '2020-08-10 23:59:31', '2020-08-11 00:29:31', '2020-08-11 00:59:40', '2020-08-11 01:29:41', '2020-08-11 01:59:41', '2020-08-11 02:29:41', '2020-08-11 02:59:50', '2020-08-11 03:29:50', '2020-08-11 03:59:50', '2020-08-11 04:29:51', '2020-08-11 05:00:00', '2020-08-11 05:30:00', '2020-08-11 06:00:00', '2020-08-11 06:30:10', '2020-08-11 07:00:11', '2020-08-11 07:30:11', '2020-08-11 08:00:11', '2020-08-11 08:30:11', '2020-08-11 09:00:21', '2020-08-11 09:30:30', '2020-08-11 10:00:31', '2020-08-11 10:30:40', '2020-08-11 11:00:40', '2020-08-11 11:30:40', '2020-08-11 12:00:41', '2020-08-11 12:30:51', '2020-08-11 13:01:01', '2020-08-11 13:31:11', '2020-08-11 14:01:11', '2020-08-11 14:31:11', '2020-08-11 15:01:20', '2020-08-11 15:31:20', '2020-08-11 16:01:20'],
                    'chooseDateCount': 0,
                    'windDirection': '283',
                    'xMax': '2020-08-11 16:01:20',
                    'windSpeed': '0.24',
                    'status': 0
                }
            };
        }
        if (params.SensorMenu === 'SUDU') {
            return {"code":200,"data":{"min":-0.4098,"max":0.3382,"time":["2020-07-19 00:53:42","2020-07-19 01:54:42","2020-07-19 02:55:42","2020-07-19 03:56:42","2020-07-19 04:57:42","2020-07-19 05:49:37","2020-07-19 06:50:37","2020-07-19 07:52:42","2020-07-19 08:55:52","2020-07-19 09:57:57","2020-07-19 10:48:47","2020-07-19 11:51:57","2020-07-19 12:52:57","2020-07-19 13:53:58","2020-07-19 14:54:58","2020-07-19 15:55:58","2020-07-19 16:45:22","2020-07-19 17:51:47","2020-07-19 18:58:12","2020-07-19 19:59:12","2020-07-19 20:50:02","2020-07-19 21:51:02","2020-07-19 22:52:02","2020-07-19 23:55:12","2020-07-20 03:52:17","2020-07-20 04:53:17","2020-07-20 05:55:22","2020-07-20 06:56:22","2020-07-20 07:59:33","2020-07-20 08:52:32","2020-07-20 09:53:32","2020-07-20 10:54:32","2020-07-20 11:56:37","2020-07-20 12:58:43","2020-07-20 13:44:37","2020-07-20 14:53:17","2020-07-20 15:55:22","2020-07-20 16:56:22","2020-07-20 17:57:22","2020-07-20 18:58:22","2020-07-20 19:59:22","2020-07-20 20:50:12","2020-07-20 21:51:12","2020-07-20 22:52:12","2020-07-20 23:55:22","2020-07-21 00:59:37","2020-07-21 01:50:28","2020-07-21 02:52:32","2020-07-21 03:54:37","2020-07-21 04:55:38","2020-07-21 05:56:37","2020-07-21 06:57:37","2020-07-21 07:58:37","2020-07-21 08:59:37","2020-07-21 09:50:27","2020-07-21 10:51:27","2020-07-21 11:53:32","2020-07-21 12:54:32","2020-07-21 13:55:32","2020-07-21 14:57:37","2020-07-21 15:58:37","2020-07-21 16:59:37","2020-07-21 17:50:27","2020-07-21 18:51:27","2020-07-21 19:52:28","2020-07-21 20:53:28","2020-07-21 21:54:27","2020-07-21 22:55:27","2020-07-21 23:56:28","2020-07-22 00:58:32","2020-07-22 01:59:32","2020-07-22 02:50:22","2020-07-22 03:51:22","2020-07-22 04:52:22","2020-07-22 05:53:22","2020-07-22 06:54:22","2020-07-22 07:55:22","2020-07-22 08:56:22","2020-07-22 09:57:22","2020-07-22 10:58:22","2020-07-22 11:59:22","2020-07-22 12:51:17","2020-07-22 13:52:17","2020-07-22 14:53:17","2020-07-22 15:54:17","2020-07-22 16:55:18","2020-07-22 17:56:18","2020-07-22 18:57:18","2020-07-22 19:58:18","2020-07-22 20:59:17","2020-07-22 21:50:08","2020-07-22 22:51:08","2020-07-22 23:52:08","2020-07-23 00:53:08","2020-07-23 01:54:07","2020-07-23 02:44:57","2020-07-23 06:53:07","2020-07-23 07:54:07","2020-07-23 08:55:07","2020-07-23 09:56:07","2020-07-23 10:57:07","2020-07-23 11:58:07","2020-07-23 12:59:07","2020-07-23 13:49:57","2020-07-23 14:50:57","2020-07-23 15:51:57","2020-07-23 16:52:57","2020-07-23 17:55:02","2020-07-23 18:56:02","2020-07-23 19:57:02","2020-07-23 20:58:02","2020-07-23 21:59:02","2020-07-23 22:49:52","2020-07-23 23:50:52","2020-07-24 00:51:52","2020-07-24 01:52:52","2020-07-24 02:53:52","2020-07-24 03:54:52","2020-07-24 04:55:52","2020-07-24 05:49:57","2020-07-24 06:50:58","2020-07-24 07:51:57","2020-07-24 08:52:57","2020-07-24 09:55:02","2020-07-24 10:56:02","2020-07-24 11:58:07","2020-07-24 12:59:07","2020-07-24 13:49:57","2020-07-24 14:50:57","2020-07-24 15:51:57","2020-07-24 16:52:57","2020-07-24 17:55:02","2020-07-24 18:56:02","2020-07-24 19:57:02","2020-07-24 20:58:02","2020-07-24 21:59:02","2020-07-24 22:49:52","2020-07-24 23:42:07","2020-07-25 02:53:17","2020-07-25 03:54:17","2020-07-25 04:55:17","2020-07-25 05:57:22","2020-07-25 06:58:22","2020-07-25 07:59:22","2020-07-25 08:50:12","2020-07-25 09:51:12","2020-07-25 10:53:12","2020-07-25 11:54:12","2020-07-25 12:56:17","2020-07-25 13:57:17","2020-07-25 14:58:17","2020-07-25 15:59:17","2020-07-25 16:52:17","2020-07-25 17:53:17","2020-07-25 18:54:17","2020-07-25 19:55:17","2020-07-25 20:56:17","2020-07-25 21:57:17","2020-07-25 22:58:17","2020-07-26 00:51:12","2020-07-26 01:52:12","2020-07-26 02:53:12","2020-07-26 03:54:12","2020-07-26 04:55:12","2020-07-26 05:56:12","2020-07-26 06:57:12","2020-07-26 07:58:12","2020-07-26 08:59:12","2020-07-26 09:50:02","2020-07-26 10:51:02","2020-07-26 11:54:12","2020-07-26 12:55:12","2020-07-26 13:56:12","2020-07-26 14:57:12","2020-07-26 15:58:12","2020-07-26 16:50:07","2020-07-26 17:54:22","2020-07-26 18:55:22","2020-07-26 19:56:22","2020-07-26 20:57:22","2020-07-26 21:58:22","2020-07-26 22:59:22","2020-07-26 23:52:22","2020-07-27 00:53:22","2020-07-27 01:54:22","2020-07-27 02:25:57","2020-07-27 05:56:32","2020-07-27 06:57:32","2020-07-27 07:58:32","2020-07-27 08:59:32","2020-07-27 09:50:22","2020-07-27 10:51:22","2020-07-27 11:54:32","2020-07-27 12:55:32","2020-07-27 13:56:32","2020-07-27 14:57:32","2020-07-27 15:58:32","2020-07-27 16:59:32","2020-07-27 17:50:22","2020-07-27 18:51:22","2020-07-27 19:52:22","2020-07-27 20:53:22","2020-07-27 21:54:22","2020-07-27 22:55:22","2020-07-27 23:57:27","2020-07-28 00:59:32","2020-07-28 01:50:22","2020-07-28 02:51:22","2020-07-28 03:52:22","2020-07-28 04:53:22","2020-07-28 05:54:22","2020-07-28 06:55:22","2020-07-28 07:58:32","2020-07-28 08:59:32","2020-07-28 09:50:22","2020-07-28 10:51:22","2020-07-28 11:52:22","2020-07-28 12:53:22","2020-07-28 13:54:23","2020-07-28 14:55:22","2020-07-28 15:56:22","2020-07-28 16:57:22","2020-07-28 17:58:22","2020-07-28 18:59:22","2020-07-28 19:50:12","2020-07-28 20:51:12","2020-07-28 21:52:12","2020-07-28 22:53:12","2020-07-28 23:55:17","2020-07-29 00:56:17","2020-07-29 01:57:17","2020-07-29 02:58:17","2020-07-29 03:59:17","2020-07-29 04:50:07","2020-07-29 05:51:07","2020-07-29 06:52:07","2020-07-29 07:53:07","2020-07-29 08:54:07","2020-07-29 09:55:07","2020-07-29 10:56:07","2020-07-29 12:50:07","2020-07-29 13:51:07","2020-07-29 14:52:07","2020-07-29 15:53:07","2020-07-29 16:55:12","2020-07-29 17:56:12","2020-07-29 18:57:12","2020-07-29 19:58:12","2020-07-29 20:59:12","2020-07-29 21:50:02","2020-07-29 22:53:22","2020-07-29 23:54:22","2020-07-30 00:56:27","2020-07-30 01:57:27","2020-07-30 02:07:37","2020-07-30 04:23:57","2020-07-30 05:56:47","2020-07-30 06:57:47","2020-07-30 07:58:47","2020-07-30 08:49:37","2020-07-30 09:50:37","2020-07-30 10:51:37","2020-07-30 11:52:37","2020-07-30 12:53:37","2020-07-30 13:54:37","2020-07-30 14:55:37","2020-07-30 15:56:37","2020-07-30 16:51:47","2020-07-30 17:52:47","2020-07-30 18:53:47","2020-07-30 19:54:47","2020-07-30 20:55:47","2020-07-30 21:56:47","2020-07-30 22:57:47","2020-07-30 23:58:47","2020-07-31 00:49:37","2020-07-31 01:50:37","2020-07-31 02:10:57","2020-07-31 04:21:57","2020-07-31 05:56:58","2020-07-31 06:57:57","2020-07-31 07:58:57","2020-07-31 08:49:47","2020-07-31 09:50:47","2020-07-31 10:51:47","2020-07-31 11:52:47","2020-07-31 12:53:47","2020-07-31 13:54:47","2020-07-31 14:55:47","2020-07-31 14:55:48","2020-07-31 15:56:47","2020-07-31 16:58:52","2020-07-31 17:49:42","2020-07-31 18:50:42","2020-07-31 19:51:42","2020-07-31 20:52:42","2020-07-31 21:53:42","2020-07-31 22:54:42","2020-07-31 23:56:47","2020-08-01 00:57:47","2020-08-01 01:58:47","2020-08-01 02:49:37","2020-08-01 03:50:37","2020-08-01 04:51:37","2020-08-01 05:52:37","2020-08-01 06:53:37","2020-08-01 07:55:42","2020-08-01 08:56:42","2020-08-01 09:57:42","2020-08-01 10:58:42","2020-08-01 11:49:33","2020-08-01 12:50:32","2020-08-01 13:51:33","2020-08-01 14:52:32","2020-08-01 15:53:32","2020-08-01 16:54:32","2020-08-01 17:55:32","2020-08-01 18:56:32","2020-08-01 19:57:32","2020-08-01 20:58:32","2020-08-01 21:59:32","2020-08-01 22:50:22","2020-08-01 23:51:22","2020-08-02 00:52:22","2020-08-02 01:53:22","2020-08-02 02:54:22","2020-08-02 03:57:32","2020-08-02 04:58:32","2020-08-02 05:59:32","2020-08-02 06:51:27","2020-08-02 07:52:27","2020-08-02 08:53:27","2020-08-02 09:54:27","2020-08-02 10:55:27","2020-08-02 11:56:27","2020-08-02 12:06:37","2020-08-02 16:57:37","2020-08-02 17:58:37","2020-08-02 18:59:37","2020-08-02 19:50:27","2020-08-02 20:51:28","2020-08-02 21:52:27","2020-08-02 22:54:32","2020-08-02 23:04:47","2020-08-03 03:52:57","2020-08-03 04:53:57","2020-08-03 05:54:57","2020-08-03 06:55:57","2020-08-03 08:59:02","2020-08-03 09:49:52","2020-08-03 10:50:52","2020-08-03 11:51:52","2020-08-03 12:52:52","2020-08-03 13:53:52","2020-08-03 14:54:52","2020-08-03 15:55:52","2020-08-03 16:56:52","2020-08-03 17:57:52","2020-08-03 18:58:52","2020-08-03 19:50:47","2020-08-03 20:51:47","2020-08-03 21:53:52","2020-08-03 22:59:12","2020-08-03 23:50:02","2020-08-04 00:51:02","2020-08-04 01:52:02","2020-08-04 02:42:52","2020-08-04 03:47:57","2020-08-04 06:54:12","2020-08-04 07:55:12","2020-08-04 08:58:22","2020-08-04 09:59:22","2020-08-04 10:50:12","2020-08-04 11:51:12","2020-08-04 12:52:12","2020-08-04 13:53:12","2020-08-04 14:54:12","2020-08-04 15:55:12","2020-08-04 16:56:12","2020-08-04 17:57:12","2020-08-04 18:58:12","2020-08-04 19:50:07","2020-08-04 20:51:07","2020-08-04 21:52:07","2020-08-04 22:56:52","2020-08-05 02:55:47","2020-08-05 03:56:48","2020-08-05 04:57:48","2020-08-05 05:58:47","2020-08-05 06:49:37","2020-08-05 07:50:37","2020-08-05 08:51:37","2020-08-05 09:52:37","2020-08-05 10:53:37","2020-08-05 11:54:42","2020-08-05 12:55:42","2020-08-05 13:56:42","2020-08-05 14:57:42","2020-08-05 15:58:42","2020-08-05 16:49:32","2020-08-05 17:50:32","2020-08-05 18:51:32","2020-08-05 19:52:32","2020-08-05 20:53:32","2020-08-05 21:54:32","2020-08-05 22:55:32","2020-08-05 23:56:32","2020-08-06 00:57:32","2020-08-06 01:59:37","2020-08-06 02:50:27","2020-08-06 03:51:27","2020-08-06 04:52:27","2020-08-06 05:53:27","2020-08-06 06:54:27","2020-08-06 07:55:27","2020-08-06 08:56:27","2020-08-06 09:57:27","2020-08-06 10:58:28","2020-08-06 11:59:27","2020-08-06 12:50:17","2020-08-06 13:51:17","2020-08-06 13:51:18","2020-08-06 14:52:17","2020-08-06 15:53:17","2020-08-06 16:54:17","2020-08-06 17:55:17","2020-08-06 18:56:17","2020-08-06 19:57:17","2020-08-06 20:58:17","2020-08-06 21:50:12","2020-08-06 22:51:13","2020-08-06 23:55:27","2020-08-07 00:56:27","2020-08-07 01:57:27","2020-08-07 02:59:07","2020-08-07 03:49:57","2020-08-07 04:50:57","2020-08-07 05:51:57","2020-08-07 06:52:57","2020-08-07 07:53:57","2020-08-07 08:54:57","2020-08-07 09:55:57","2020-08-07 10:56:57","2020-08-07 11:57:57","2020-08-07 12:58:57","2020-08-07 13:49:47","2020-08-07 14:50:47","2020-08-07 15:51:47","2020-08-07 16:54:57","2020-08-07 17:55:57","2020-08-07 18:56:57","2020-08-07 19:57:57","2020-08-07 20:58:57","2020-08-07 21:49:47","2020-08-07 22:51:52","2020-08-07 23:52:52","2020-08-08 00:53:52","2020-08-08 01:54:52","2020-08-08 02:56:57","2020-08-08 03:59:02","2020-08-08 04:49:52","2020-08-08 05:50:52","2020-08-08 06:51:52","2020-08-08 07:52:52","2020-08-08 08:53:52","2020-08-08 09:54:52","2020-08-08 10:56:02","2020-08-08 11:57:02","2020-08-08 12:58:02","2020-08-08 13:59:02","2020-08-08 14:49:52","2020-08-08 15:50:52","2020-08-08 16:51:52","2020-08-08 17:52:52","2020-08-08 18:54:57","2020-08-08 19:55:57","2020-08-08 20:56:57","2020-08-08 21:57:57","2020-08-08 22:40:22","2020-08-09 02:49:47","2020-08-09 03:50:47","2020-08-09 04:56:07","2020-08-09 05:57:07","2020-08-09 06:58:07","2020-08-09 07:59:07","2020-08-09 08:49:57","2020-08-09 09:50:57","2020-08-09 10:51:57","2020-08-09 11:52:57","2020-08-09 12:53:57","2020-08-09 13:54:57","2020-08-09 14:55:57","2020-08-09 15:56:57","2020-08-09 16:57:57","2020-08-09 17:58:57","2020-08-09 18:49:47","2020-08-09 19:50:47","2020-08-09 20:51:47","2020-08-09 21:52:47","2020-08-09 22:54:52","2020-08-09 23:55:52","2020-08-10 00:56:52","2020-08-10 01:27:22","2020-08-10 03:48:17","2020-08-10 04:59:12","2020-08-10 05:50:02","2020-08-10 06:51:02","2020-08-10 07:52:02","2020-08-10 08:53:02","2020-08-10 09:54:02","2020-08-10 10:55:03","2020-08-10 11:56:02","2020-08-10 12:57:02","2020-08-10 13:58:02","2020-08-10 14:59:02","2020-08-10 15:49:52","2020-08-10 16:50:52","2020-08-10 17:51:52","2020-08-10 18:52:52","2020-08-10 19:53:52","2020-08-10 20:54:52","2020-08-10 21:55:52","2020-08-10 22:56:52","2020-08-10 23:57:52","2020-08-11 00:50:37","2020-08-11 01:52:42","2020-08-11 02:54:47","2020-08-11 03:56:52","2020-08-11 04:57:52","2020-08-11 05:58:52","2020-08-11 06:49:42","2020-08-11 07:50:42","2020-08-11 08:51:42","2020-08-11 09:52:42","2020-08-11 10:53:42","2020-08-11 11:54:42","2020-08-11 12:55:42","2020-08-11 13:56:42","2020-08-11 14:57:42","2020-08-11 15:58:42","2020-08-11 16:49:32","2020-08-11 17:50:32","2020-08-11 18:51:32","2020-08-11 19:52:32","2020-08-11 20:53:32","2020-08-11 21:54:32","2020-08-11 22:55:32","2020-08-11 22:55:33","2020-08-11 23:56:32","2020-08-12 00:57:32","2020-08-12 01:58:32","2020-08-12 02:59:32","2020-08-12 03:52:32","2020-08-12 04:53:32","2020-08-12 05:54:32","2020-08-12 06:55:32","2020-08-12 07:58:42","2020-08-12 08:49:33","2020-08-12 09:50:32","2020-08-12 10:51:32","2020-08-12 11:52:32","2020-08-12 12:53:32","2020-08-12 13:54:32","2020-08-12 14:55:32","2020-08-12 15:56:32","2020-08-12 16:57:32","2020-08-12 17:48:22","2020-08-12 18:52:37","2020-08-12 19:53:37","2020-08-12 20:54:37","2020-08-12 21:55:37","2020-08-12 22:56:37","2020-08-12 23:57:37","2020-08-13 00:58:37","2020-08-13 01:59:37","2020-08-13 02:50:27","2020-08-13 03:51:28","2020-08-13 04:52:27","2020-08-13 05:53:27","2020-08-13 06:54:27","2020-08-13 07:55:27","2020-08-13 08:56:27","2020-08-13 09:57:27","2020-08-13 10:58:27","2020-08-13 11:59:27","2020-08-13 12:50:17","2020-08-13 13:51:17","2020-08-13 14:52:17","2020-08-13 15:53:17","2020-08-13 16:54:17","2020-08-13 17:55:17","2020-08-13 18:56:17","2020-08-13 19:57:17","2020-08-13 20:59:22","2020-08-13 21:50:12","2020-08-13 22:51:12","2020-08-13 23:54:22","2020-08-14 00:55:22","2020-08-14 01:56:22","2020-08-14 02:57:22","2020-08-14 03:58:22","2020-08-14 04:59:22","2020-08-14 05:50:12","2020-08-14 06:51:12","2020-08-14 07:52:12","2020-08-14 08:53:12","2020-08-14 09:54:12","2020-08-14 10:55:12","2020-08-14 11:56:12","2020-08-14 12:57:12","2020-08-14 13:59:17","2020-08-14 14:50:07","2020-08-14 15:52:12","2020-08-14 16:53:12","2020-08-14 17:54:12","2020-08-14 18:56:02","2020-08-14 19:57:02","2020-08-14 20:58:02","2020-08-14 21:59:02","2020-08-14 22:49:52","2020-08-14 23:53:02","2020-08-15 00:54:02","2020-08-15 01:56:07","2020-08-15 02:57:07","2020-08-15 03:58:07","2020-08-15 04:59:07","2020-08-15 05:49:57","2020-08-15 06:50:57","2020-08-15 07:51:57","2020-08-15 08:54:02","2020-08-15 09:55:02","2020-08-15 10:56:02","2020-08-15 11:57:02","2020-08-15 12:58:02","2020-08-15 13:48:52","2020-08-15 14:50:57","2020-08-15 15:51:57","2020-08-15 16:52:57","2020-08-15 17:53:57","2020-08-15 18:54:57","2020-08-15 19:55:57","2020-08-15 20:56:57","2020-08-15 21:57:58","2020-08-15 22:11:42","2020-08-16 02:58:32","2020-08-16 03:50:27","2020-08-16 04:51:27","2020-08-16 05:52:27","2020-08-16 06:53:27","2020-08-16 07:54:27","2020-08-16 08:55:27","2020-08-16 09:56:27","2020-08-16 10:57:27","2020-08-16 11:58:27","2020-08-16 12:59:27","2020-08-16 13:50:17","2020-08-16 14:51:17","2020-08-16 15:52:17","2020-08-16 16:53:17","2020-08-16 17:54:17","2020-08-16 18:55:17","2020-08-16 19:56:17","2020-08-16 20:57:17","2020-08-16 21:58:17","2020-08-17 02:53:37","2020-08-17 03:54:37","2020-08-17 04:55:37","2020-08-17 05:56:37","2020-08-17 06:57:37","2020-08-17 07:58:37","2020-08-17 08:59:37","2020-08-17 09:50:27","2020-08-17 10:51:27","2020-08-17 11:52:27","2020-08-17 12:53:27","2020-08-17 13:54:27","2020-08-17 14:55:27","2020-08-17 15:57:32","2020-08-17 16:58:32","2020-08-17 17:59:32","2020-08-17 18:50:22","2020-08-17 19:51:22","2020-08-17 20:52:22","2020-08-17 20:52:23","2020-08-17 21:53:23","2020-08-17 22:54:22","2020-08-17 23:55:22","2020-08-18 00:56:22","2020-08-18 01:57:22","2020-08-18 02:52:32","2020-08-18 03:57:52","2020-08-18 04:58:52","2020-08-18 05:49:42","2020-08-18 06:50:42","2020-08-18 07:52:47","2020-08-18 08:53:47","2020-08-18 09:54:47","2020-08-18 10:55:47","2020-08-18 11:56:47","2020-08-18 12:57:47","2020-08-18 12:57:48","2020-08-18 13:58:47","2020-08-18 14:49:37","2020-08-18 15:50:37","2020-08-18 16:51:37","2020-08-18 17:52:37","2020-08-18 18:53:37","2020-08-18 19:54:38","2020-08-18 20:55:37","2020-08-18 21:56:37","2020-08-18 22:57:37","2020-08-18 23:58:37","2020-08-19 00:50:32","2020-08-19 01:51:32","2020-08-19 02:52:32","2020-08-19 03:53:32","2020-08-19 04:55:37","2020-08-19 05:56:37","2020-08-19 06:57:37","2020-08-19 07:58:37","2020-08-19 08:59:37","2020-08-19 09:50:27","2020-08-19 10:51:27","2020-08-19 11:52:27","2020-08-19 12:53:27","2020-08-19 13:54:27","2020-08-19 14:55:27","2020-08-19 15:56:27","2020-08-19 16:57:27"],"xSpeed":[0.0393,0.0787,0.0393,0,0.0197,0.0231,0,-0.058,-0.0665,-0.0483,0.1062,0.1045,0.0098,-0.0098,-0.0098,-0.0393,0,0.009,-0.0632,-0.1475,-0.0708,0,0.0197,0.0475,0.0051,0.0295,0.0193,0,-0.0285,-0.0226,0.059,-0.0098,-0.0773,-0.087,0,-0.0087,-0.0097,0.0295,0.0393,-0.0689,-0.0393,-0.0118,0.0787,0.0098,0,0.028,0.0118,0,0.0097,0.0197,0.0098,-0.0197,0.0098,0,0.0118,0,0,0.0098,0.0197,-0.0097,-0.0197,-0.0098,0,-0.0098,-0.0197,-0.0098,-0.0098,0.0098,0.0098,0.029,0,0.0118,-0.0098,0,-0.0197,-0.0197,-0.0197,-0.0098,0.0098,-0.0098,0,0.0116,0.0295,0,-0.0295,0,0,-0.0197,-0.0197,0.0098,0,0,0.0197,0.0393,0.0197,0,-0.0024,0.0098,0,0,0.0098,0,0,-0.0118,0,-0.0098,0,-0.0193,-0.0393,-0.0393,0,-0.0098,0,-0.0098,0.0197,0.0197,0.0098,0.0295,-0.0098,0,0,0,0.0197,0,-0.0098,-0.0193,0.0295,0.0236,-0.0098,-0.0197,-0.0098,0,-0.0197,-0.0197,0,-0.0098,-0.0118,-0.0115,0.0063,-0.0098,-0.0197,0.029,0.0295,0,-0.0236,0.0098,0.0194,-0.0295,0.0193,-0.0197,-0.0393,-0.0295,-0.0226,-0.0098,-0.0295,-0.0197,0,-0.0098,0,0.0053,0.0295,-0.0197,-0.0098,-0.0098,0.0197,-0.0197,-0.0197,0.0197,-0.0118,-0.0098,0,0.0197,0.0098,-0.0098,-0.0197,-0.0231,-0.0187,-0.0098,-0.0295,0.0098,0,0,0,0.0197,0.0295,0.038,0.0028,0.0098,-0.0197,0,0.0118,0.0197,-0.0095,-0.0197,-0.0098,-0.0098,-0.0098,0,-0.059,-0.0295,-0.0295,0,0,0.0098,0,0.0193,0.0354,0.0197,0,0.0098,0.0098,0,0,0.0197,-0.0236,0,0.0098,0.0098,0,0.0098,0,0,-0.0098,-0.0197,-0.0118,0.0098,0.0098,-0.0098,-0.0097,0,0.0295,0,-0.0197,0,0,-0.0295,-0.0098,0.0197,-0.0098,-0.0098,0.0105,-0.0197,-0.0098,-0.0098,-0.0097,-0.0295,0,0,0.0295,0.0118,0,0.0197,0.0097,0,0,0,-0.0065,0,-0.0197,0,0,0.0098,-0.0197,0,0.0098,-0.0098,-0.0197,-0.0109,0,-0.0098,-0.0295,0,0,-0.0197,0.0295,0.0236,0.0197,-0.0885,0,0,0.0197,-0.0197,0,0,-0.0098,-0.0295,-0.0098,0,0,0,0,0.0097,-0.0118,-0.0197,0.0197,0.0098,-0.0098,0.0098,0.0483,0.0197,0.0098,0,0.0098,-0.0197,0.0098,-0.0098,-0.0097,0,0,0,0.0236,0.0394,-0.0098,-0.0295,-0.0197,0,-0.0295,-0.0689,0,-0.0197,0,0,0.0295,0.0197,-0.0098,0.0393,0.0095,0.0098,-0.0098,0,0,0.0098,-0.0098,-0.0197,0.0295,0.118,0.0021,-0.0197,-0.0197,0,0.0098,0,0,0.0585,0,-0.0197,-0.0098,-0.0098,0.0097,-0.0118,-0.0098,0.0197,0.0197,0,0,0,-0.0197,-0.0197,-0.0295,-0.0231,-0.0098,-0.0097,0.0092,0.0354,0.0098,0.0098,0.0118,0,0,0.0197,0.0095,-0.0098,-0.0118,0,0.0197,-0.0197,-0.0295,0.0098,-0.0197,-0.0098,-0.0098,-0.0116,-0.0197,-0.0098,0.0185,0.005,-0.0098,0.0197,-0.0098,0,-0.0098,0.0197,0.0098,0.0098,0.0098,0.0098,-0.0197,-0.0197,0.0295,-0.0118,-0.0098,-0.0393,0,-0.0098,-0.0098,0,0.0197,-0.0098,-0.0097,-0.0236,0,0,-0.0098,0.0098,0.0098,0.0393,0.0197,0.0098,0.0394,0.0236,0,0,0,-0.0197,-0.0197,-0.0197,-0.0295,0,-0.0295,0,0.0098,0.0093,0,0,-0.0097,0,0,-0.0098,0,0,0.0098,0,-0.0295,0,0,0,-0.0295,-0.0098,0,-0.0295,-0.0393,0.0098,0.0197,-0.0118,0,0.0295,0.0098,0.0295,0.0387,0.0193,0,0,-0.0197,0,0,0,-0.0098,0.0197,0,-0.0098,-0.0118,0,-0.0295,-0.0295,-0.058,0,0,0.0098,0.0141,0.0048,0,0.0184,0.0197,0.0098,0.0295,0.0118,0.0098,-0.0098,0,0,-0.0098,-0.0295,-0.0295,-0.0492,-0.0689,-0.0472,-0.0098,0.0098,-0.0098,0.0193,0.0492,0.0492,0.059,0.0085,0.0169,0.0472,0,-0.0098,0,0.0197,0,0,0,-0.0197,-0.0098,-0.0118,-0.0098,-0.0197,-0.0197,-0.0098,-0.0098,0.0197,0,0.0197,0.0341,0.0387,0,0.0097,0,-0.0197,-0.0118,0.0295,0.0098,-0.0393,-0.0197,0.0492,0.0098,0,0.0197,0,-0.0236,-0.0098,0,-0.0098,-0.0197,0.0197,-0.0197,0,0,0.0098,0.0197,0,-0.0113,-0.0098,-0.0197,-0.0197,0.019,-0.0236,-0.0197,-0.0098,0.0098,0.0098,-0.0197,-0.0197,-0.0197,0,-0.0118,-0.0093,0.0098,-0.0197,0.0197,0.0295,0.0295,0.0098,0,-0.0118,0.0098,0.0098,-0.0098,-0.0197,0.0197,0,0.0098,0.0098,0.0295,-0.0118,-0.0098,-0.0197,-0.0098,-0.0393,-0.0295,-0.0197,0,-0.0097,-0.0118,0.0197,0.019,0.0197,0.0098,0.0098,0,-0.0197,-0.0236,0.0098,0.0098,0,0,0.0098,0.0098,0,0.0097,0.0118,-0.0193,-0.0393,-0.0295,-0.0097,0.0197,0,0.0098,0.0236,0.019,0.0197,0,0.0098,0.0098,-0.0295,0,-0.0098,0.0098,-0.0097,0,0,-0.0098,-0.0098,-0.0118,-0.0193,-0.0098,-0.0197,-0.0098,-0.0098,0.0197,0.0197,0.0098,0.1311,-0.0021,0.0116,-0.0098,0.0098,0,0.0295,0.0098,-0.0098,-0.0197,0.0197,-0.0197,-0.0354,-0.0197,-0.0295,-0.0295,-0.0393,-0.0197,0,0,0.0295,0.0081,0.0098,0.0098,0.0197,0.0492,0.0295,0,-0.0236,0,0,0.0098,-0.0295,-0.0295,-0.0387,-0.0295,-0.0393,-0.0118,0.0098,0.0098,0,0.0098,0.0394,0.0492,0,0.0295,0.0218,0.0092,-0.0295,-0.0118,0.0098,0.0097,0.0098,-0.0197,0.0197,0.0295,-0.0197,0,-0.0295,-0.0118,-0.0295,-0.0295,-0.0393,0,-0.0197,0,0.0197,0.0197,0.0197,0.0116,0.0295,0.0098,-0.0098,-0.0193,-0.0197,0.0098,0,-0.0295,-0.0236,0.0197,0.0295,0.0098,-0.0098,0.0098,-0.0197,-0.0197],"ySpeed":[0.0197,-0.0689,-0.0689,0,0,0,-0.0197,-0.0387,-0.019,0.058,0.0826,0.0095,-0.0197,-0.0098,-0.0393,0,-0.0121,-0.0723,-0.009,-0.0098,0.0236,0.0197,0.0492,0,-0.0076,0,0.0677,0.0197,0.0095,-0.0113,-0.0393,-0.0492,-0.0097,0,0.0131,0,0.0097,0,-0.0197,0.059,0.0393,-0.0354,0.0295,0.0197,0,-0.0374,0.0118,0.029,0,0,0.0098,-0.0197,0.0098,0.0098,0,0,0.0097,-0.0098,-0.0098,-0.0193,0,-0.0098,-0.0236,-0.0197,-0.0098,-0.0098,0.0394,0.0295,0.0295,0,0.0295,0.0354,0,-0.0098,0,-0.0393,-0.0098,-0.0197,-0.0098,-0.0098,0.0197,-0.0231,0.0295,-0.0197,0,0,0,-0.0098,0,0,0.0354,0,0,-0.0197,-0.0098,0,0,-0.0197,0,-0.0393,0,0.0098,0,0.0236,0.0197,0.0197,0.0098,0,-0.0098,-0.0197,0.0197,0,0,0,-0.0197,0.0098,0.0098,0.0197,0.0197,0.0111,0.0098,0.0098,0.0098,0,0,0.0097,-0.0393,-0.0236,-0.0492,-0.0098,-0.0197,-0.0097,-0.0098,0,-0.0098,0.0393,0.0236,0.0115,-0.0031,0,0,0.0387,0,0.0197,-0.0118,-0.0197,0.0194,0.0197,-0.0193,-0.0098,-0.0295,-0.0098,-0.034,-0.0295,-0.0295,-0.0295,0.0098,0.0492,0.0197,0,0.0098,0.0098,0.0295,0.0197,-0.0098,-0.0393,-0.0393,-0.0197,-0.0236,0.0197,0.0285,-0.0295,0.0197,0.0098,0.0393,0.0231,0,-0.0098,-0.0098,0.0098,0.0197,0.0197,-0.0226,-0.0295,0.0197,0.038,0,0,0,-0.0197,-0.0118,0.0197,0.038,-0.0098,0.0098,0,0.0098,-0.0197,-0.0118,-0.0098,-0.0492,0.0098,0,0,-0.0193,-0.0097,0.0354,0,0.0098,0.0098,0.0197,-0.0098,0,0.0197,0,0,-0.0098,-0.0098,0,-0.0197,-0.0295,0,-0.0098,-0.0197,-0.0118,0.0393,0.0295,0,0.029,0.0098,0.0197,0.0393,0.0098,-0.0118,-0.0098,-0.0492,0.0098,-0.0197,-0.0098,0,-0.0211,0,0,0,0.0097,0.0098,0.0098,-0.0098,0.0295,0.0118,0.0284,0,-0.0193,0,0.118,0,-0.0065,-0.0098,-0.0098,-0.0472,-0.0098,0.0098,0.0295,-0.0098,-0.0098,0.0098,0.0197,0.0109,0.0197,-0.0098,-0.0098,0.0197,0.0098,0.0098,0,0,0,-0.0295,0,0.0063,-0.0098,0.0197,-0.0236,-0.0098,-0.0098,-0.0197,-0.0098,0.0098,0.0098,0,0,0,0,-0.0098,0.0197,0.0197,0.0098,0,-0.0193,-0.0098,-0.0098,0.0118,0,-0.0197,0.0295,0,0,0.0197,0,0.0393,0,0.0197,0,-0.0098,0,0.0098,0.0098,0.0098,-0.0098,0.0098,0.0197,0.0236,-0.0197,0,0,-0.0197,-0.0095,0,-0.0098,-0.0347,0.0197,0.0197,0,0.0197,-0.0098,0.059,0.0041,-0.0197,-0.0197,0.0118,-0.0098,0.0197,0,-0.1171,0.0062,0.0197,0.0098,0.0197,0.0049,-0.0118,-0.0098,-0.0098,0,0,0.0098,0.0295,0,0,0.0098,-0.0116,0.0098,-0.0097,-0.0092,-0.0472,-0.0295,0,-0.0118,-0.0092,-0.0032,0.0098,-0.0285,-0.0098,0.0236,0.0197,0.0197,0,0,0.0295,0.0098,0.0098,0,-0.0231,0.0098,0.0098,0.0185,-0.0025,0,0.0098,0,0.0118,-0.0098,0,0,0,-0.0098,0,-0.0098,-0.0098,0.0098,-0.0236,0,-0.0098,-0.0098,0.0197,0.0098,0.0295,-0.0197,0,0,-0.0236,0.0098,0,-0.0197,-0.0098,0,0.0197,0.0197,0.0393,0,0,-0.0098,0,0,0,-0.0098,-0.0098,-0.0197,-0.0197,0.0295,0.0116,0.0098,-0.0187,0.0197,0.0098,-0.0097,-0.0118,0,-0.0197,0,0.0197,0,-0.0098,0.0098,0.0098,0,-0.0354,0,0,0.0095,0.0098,-0.0098,0,0.0098,0.0118,0.0097,-0.0098,0.0098,0,-0.0097,-0.0193,0,0,-0.0098,0.0098,-0.0098,-0.0098,0,0.0098,0.0197,-0.0098,0.0118,-0.0098,-0.0197,-0.0098,-0.0097,0.0197,0,0.0197,0.0283,0.0024,0.0098,0.0367,0.0197,0.0197,-0.0098,-0.0118,0,-0.0197,-0.0393,-0.0098,-0.0098,0.0295,0.0098,0.0197,0,-0.0236,0.0393,0.0295,0.0393,-0.0097,-0.059,-0.0098,0,-0.0043,-0.0085,0,0.0098,-0.0197,-0.0295,0.0098,0.0295,0,0.0098,0.0197,0,-0.0118,0,-0.0197,-0.0098,0,0.0295,0,0.0098,-0.0295,0.0114,-0.0097,0,-0.0097,-0.0098,-0.0098,0,0.0197,0,0.0197,0.0098,-0.0197,0.0098,-0.0098,0,-0.0197,-0.0118,0,-0.0393,0.0492,0.0295,0.0393,0.0295,0,0.0197,0.0492,0.0197,0.0295,0.0113,0,-0.0197,-0.0197,0,-0.0472,0.0098,0.0098,0.0098,-0.0098,0,0.0098,0,0.0197,-0.0236,-0.028,0,0.0098,0.0295,-0.0098,-0.0197,0.0098,0.0197,0.0118,0.0295,-0.0098,-0.0393,-0.0098,-0.0098,0,0,0.0098,-0.0098,0.0118,0.0098,0.0098,-0.0098,0.0197,-0.0197,-0.0098,0.0197,0.0097,0.0118,0,-0.0095,0.0098,0,0.0098,0,-0.0295,-0.0354,-0.0197,0.0098,0,0.0098,-0.0098,0,0,0.0097,0.0118,-0.0097,-0.0098,0,-0.0097,0.0197,0.0098,0.0197,0.0236,0.0095,0.0197,0.0193,0,0.0098,-0.0197,-0.0118,-0.0098,-0.0098,0,-0.0098,-0.0098,0,-0.0197,0.0236,0,-0.0197,-0.0197,-0.0098,-0.0197,0.0098,0.0197,0.0197,-0.0437,0,-0.0116,0.0098,0,0.0098,0.0098,-0.0295,0,0,0.0197,-0.0098,0.0236,0.0197,-0.0197,-0.0197,0,-0.0098,0,-0.0295,0.0197,-0.002,0.0098,0.0098,0.0197,0,-0.0098,0.0098,0.0118,-0.0098,-0.0098,0.0098,0.0098,0.0098,-0.0097,0.0197,0,-0.0354,0.0197,0,0,0.0197,-0.0197,0,-0.0098,0,0.0218,0.0184,0,-0.0118,-0.0098,-0.029,0,0.0295,-0.0295,0,-0.0098,0,0.0295,0.0354,0.0098,-0.0098,-0.0197,0,0.0295,0,0,-0.0295,0.0098,0.0231,0.0295,0.0197,0,-0.0193,-0.0098,-0.0197,-0.0197,0.0098,0.0236,-0.0295,0,-0.0098,0.0098,0.0098,0.0197,-0.0197],"hSpeed":[0,-0.3836,-0.0393,0.1279,-0.0393,-0.1387,0,-0.0193,0.0665,0.2223,-0.1889,-0.038,-0.0098,-0.1868,-0.0984,-0.0197,-0.0121,-0.009,0.0271,0.2656,-0.0354,0.0295,0.1377,-0.152,-0.043,0.0098,0.029,0.0689,0.1329,0.0113,-0.2164,0.0689,0.2319,0.3382,-0.0261,-0.0175,-0.0193,-0.0885,-0.0984,0.1279,-0.0295,0.0354,-0.0787,0.0787,-0.019,-0.0374,-0.0708,0.029,0.087,0.0197,-0.0689,0.0197,-0.0689,0.059,0.0354,0.0197,0,-0.0885,-0.0393,-0.0677,0.0098,0.0492,-0.0118,0.0393,0.059,0.0393,0.0197,0.0098,0.0098,-0.0193,-0.118,-0.059,0.059,0.0393,0.0492,0.0885,-0.0098,0.059,0.059,0.0689,-0.0098,-0.0578,-0.1672,-0.0984,-0.0098,0.0098,-0.0295,0,0.0197,-0.0197,0.0118,0.0393,-0.0393,-0.0492,-0.0787,0.0236,0.0073,0.0197,0,0.0197,0.0098,0.0885,0.0098,-0.0118,-0.0492,-0.0197,0,0.0483,0.0787,0.0984,0.0492,0.0787,0.0236,-0.0689,-0.0393,-0.1082,-0.0492,-0.0197,0.0197,-0.0444,0,0.0098,0.0689,0.0387,0.059,0,-0.0984,-0.0354,-0.0295,0.0098,0.0393,-0.087,-0.0197,0.0098,0.0295,0.0295,0.0118,-0.0344,-0.0157,0.059,0.0787,0.029,-0.0295,-0.1377,-0.0472,-0.0393,0.0387,0.0393,-0.0773,-0.0393,-0.059,0.059,0.0453,0.0393,0.0689,0.0492,0.0393,0,0.0393,-0.0053,-0.0393,0.0393,0.059,0.0393,-0.0295,0.0098,-0.0492,-0.0197,0.0472,0.0492,-0.0095,-0.118,-0.1082,-0.059,0.0098,0.104,-0.0093,0,-0.0098,0,0.0885,0.0393,-0.0566,-0.0098,-0.118,0.057,0,-0.0393,-0.0492,-0.0295,-0.0472,0.0492,0.038,0.0492,-0.0393,-0.0393,0.0295,0.0098,0.0354,0.0197,0.0393,0.0295,0.0984,-0.0098,-0.0483,-0.0677,-0.059,0.0393,0.0295,0.0393,-0.0295,0.0098,0.0475,0.059,0.0472,0,-0.0492,-0.0787,-0.0983,-0.0787,-0.0689,0,0.0393,0.0885,0.059,0.0197,0.0787,0.0492,0.0387,0.0689,-0.1279,0.0098,0.0393,0.0472,0.0098,0.0393,0.0393,-0.0393,0,0.0098,-0.0737,-0.0689,-0.0885,-0.0197,0,0.0098,0,0.0197,0.0492,-0.0236,-0.0095,-0.0393,0.0097,-0.0197,0.2361,0.0088,0.0129,-0.0492,-0.0689,0.1062,0.0393,0.0689,0.0393,0,-0.0393,-0.0197,0.059,0.0435,-0.0393,0,0.0295,0.0393,0.0295,0,-0.0885,-0.0826,-0.118,0.2066,0.0092,0.0189,-0.0492,-0.0295,0.0236,0,0.1377,0.0885,0.059,-0.0492,-0.0787,0,0.0295,-0.0097,-0.0118,0.059,-0.0295,0.0787,-0.0393,-0.0197,-0.1643,-0.059,0.0098,0.0944,0.0393,0.0098,-0.0197,0.0197,0.0677,0.0984,0.0295,-0.0295,-0.0944,-0.1377,-0.0688,0.0197,0.118,0.0098,-0.0197,0.0787,0.0393,0.1082,0.0492,0,-0.0885,-0.0787,-0.0197,0.0197,-0.0285,-0.059,-0.0295,-0.0347,0.0295,0.0492,0.0689,0.0197,0,-0.2361,-0.0062,0.0098,0.059,0.1062,0.0492,-0.0197,-0.029,-0.4098,-0.0062,-0.0098,0.0295,-0.0689,-0.0585,0.0354,0.0393,0.0492,-0.0787,-0.0295,-0.0295,0.0393,0.0787,0.0197,-0.0098,0.0231,0.0885,0.0483,-0.0367,-0.0472,-0.0885,-0.0787,0.0236,0,-0.0032,0.0197,-0.0855,0.0098,0.1062,0.0689,0,0.0393,0.0197,-0.0689,-0.0098,0.059,0.0393,0.0116,0.0393,0.0393,-0.0741,-0.0075,0.0492,-0.0295,-0.0197,-0.059,-0.0393,-0.0295,0,0.0393,-0.0098,-0.0689,-0.0098,0.0197,-0.0689,0.0118,-0.0197,0.0098,0.0492,0.1082,0.0787,-0.0295,0,0.0295,0.0387,0.059,-0.0098,-0.0885,-0.0197,-0.0197,0.0098,-0.0689,-0.0492,-0.0393,-0.1181,-0.0826,-0.059,0,-0.0295,0.0295,0.0492,0.0689,0.0787,0.059,0.0787,0.0693,-0.0295,-0.0093,-0.0393,-0.0098,0.0389,0.0354,-0.0098,-0.0098,-0.0689,0.0787,-0.0393,0.0295,0,-0.1082,-0.0885,-0.0236,0.0885,0.118,0.038,0.0984,0.1082,0.0295,0.0295,0.059,-0.0387,-0.1082,-0.1574,-0.0197,-0.0387,-0.0483,-0.0708,-0.0197,-0.0098,0.0885,0.0098,0.0197,-0.0294,-0.0885,-0.059,-0.0393,0.0472,-0.0098,0.0787,0.0885,0.0773,0.059,0.0689,0.0689,-0.0283,0,0.0197,-0.0551,-0.0098,-0.0689,-0.0295,-0.1062,-0.0393,0.0689,-0.0295,-0.059,-0.0295,0.0098,0.0197,0.0393,0.0689,0.0472,0.0295,0.0492,0.0393,-0.087,-0.0885,-0.1672,0.0197,0.0128,0.0085,-0.0708,-0.0492,0,0.0098,0.0393,0.059,-0.0098,0,-0.0197,0.0098,0.059,0.0197,-0.0098,0.0197,0.1377,0.1279,-0.0393,-0.059,-0.0689,-0.1251,0.0483,0.087,0,-0.0689,-0.0197,0.0118,0.0689,-0.0295,0.0393,-0.0295,-0.118,-0.0393,-0.0197,0.0393,-0.0098,0,-0.0492,-0.0787,0.0492,0.0787,-0.0098,-0.0492,0,0.0098,-0.0098,0.1672,0.1475,0.0226,-0.0393,0.0098,0.0689,0.0095,0.0236,-0.0197,-0.059,-0.0885,0.0197,0,0.0197,-0.0098,-0.0492,0.0118,0.0374,0.0197,-0.0098,-0.0393,-0.0787,0.0295,0.0197,0.118,0.0826,0.0197,0.0787,0.0393,0.0787,0.0689,-0.0197,-0.0098,-0.0787,-0.1475,-0.1416,-0.0984,0.0197,-0.059,-0.0984,-0.0197,-0.0393,0.059,0.058,0.0826,-0.0689,-0.019,0.0098,0.0787,0.118,0.0492,0.0492,0.059,0.0295,0.0295,-0.0098,0.0295,-0.0197,-0.1279,-0.0295,-0.0773,-0.0472,0.029,0.0197,0,-0.0485,0.0197,-0.0098,0.0098,-0.0236,-0.0095,0,0.0773,0.0393,-0.0197,0.0098,-0.059,-0.0098,0.0197,0,-0.0197,-0.0197,-0.0492,0.0197,-0.0236,0.0677,-0.0098,-0.0197,-0.0098,-0.0098,0.0295,-0.0197,-0.0197,-0.2184,0.0084,0.0578,0.0885,0.0295,0.0098,-0.0393,-0.0492,0.0197,0.0787,-0.059,0.0098,-0.0236,0.0098,0.0295,0,0.0295,0.0787,0.0393,-0.0098,-0.118,-0.0163,0.059,0.059,-0.0098,-0.0492,-0.0197,-0.0492,0.0944,0.118,0.0393,-0.0787,0.0393,0.0689,0.0193,0.0197,0.0492,0.0236,0.0295,-0.0098,0,-0.0689,-0.1673,-0.1967,-0.0098,-0.0098,0,-0.0551,-0.0295,-0.059,0.0885,0.0773,0,-0.0098,-0.0295,-0.0787,0.0197,0,0.0295,0.0708,0.0197,0.0984,0.0295,0.0393,0.0688,0,-0.059,-0.0197,-0.0984,-0.0116,0.0787,0.0492,-0.0295,0.0097,0,0.0295,0.0393,0.0984,-0.0236,-0.0984,-0.1279,-0.0393,-0.0393,0,0.0098,-0.0689]}}
        }
        if (params.SensorMenu === 'SHUIPIN') {
            return {"code":200,"data":[[0,-0.0213],[0.0008,-0.021999],[0.001199,-0.022699],[0.001199,-0.022699],[0.001399,-0.022699],[0.0016,-0.022699],[0.0016,-0.022899],[0.001,-0.0233],[0.000299,-0.0235],[-0.0002,-0.022899],[0.0007,-0.0222],[0.0018,-0.0221],[0.0019,-0.0223],[0.0018,-0.0224],[0.001699,-0.022799],[0.0013,-0.022799],[0.0013,-0.022899],[0.001399,-0.0237],[0.0007,-0.0238],[-0.0008,-0.0239],[-0.001399,-0.0237],[-0.001399,-0.0235],[-0.001199,-0.022999],[-0.0007,-0.022999],[-0.0005,-0.0233],[-0.0002,-0.0233],[0,-0.0226],[0,-0.0224],[-0.000299,-0.0223],[-0.0005,-0.0224],[9.9E-05,-0.022799],[0,-0.0233],[-0.0008,-0.0234],[-0.001699,-0.0234],[-0.001699,-0.0233],[-0.0018,-0.0233],[-0.0019,-0.023199],[-0.0016,-0.023199],[-0.001199,-0.0234],[-0.0019,-0.022799],[-0.002299,-0.0224],[-0.0024,-0.022699],[-0.0016,-0.0224],[-0.001499,-0.0222],[-0.001499,-0.0222],[-0.001199,-0.0226],[-0.001099,-0.0225],[-0.001099,-0.0222],[-0.001,-0.0222],[-0.0008,-0.0222],[-0.0007,-0.0221],[-0.000899,-0.0223],[-0.0008,-0.0222],[-0.0008,-0.0221],[-0.0007,-0.0221],[-0.0007,-0.0221],[-0.0007,-0.021999],[-0.000599,-0.0221],[-0.000399,-0.0222],[-0.0005,-0.0224],[-0.0007,-0.0224],[-0.0008,-0.0225],[-0.0008,-0.022699],[-0.000899,-0.022899],[-0.001099,-0.022999],[-0.001199,-0.023099],[-0.0013,-0.022699],[-0.001199,-0.0224],[-0.001099,-0.0221],[-0.0008,-0.0221],[-0.0008,-0.021799],[-0.0007,-0.021499],[-0.0008,-0.021499],[-0.0008,-0.021599],[-0.001,-0.021599],[-0.001199,-0.021999],[-0.001399,-0.0221],[-0.001499,-0.0223],[-0.001399,-0.0224],[-0.001499,-0.0225],[-0.001499,-0.0223],[-0.001399,-0.0225],[-0.001099,-0.0222],[-0.001099,-0.0224],[-0.001399,-0.0224],[-0.001399,-0.0224],[-0.001399,-0.0224],[-0.0016,-0.0225],[-0.0018,-0.0225],[-0.001699,-0.0225],[-0.001699,-0.0222],[-0.001699,-0.0222],[-0.001499,-0.0222],[-0.001099,-0.0224],[-0.000899,-0.0225],[-0.000899,-0.0225],[-0.001,-0.0225],[-0.000899,-0.022699],[-0.000899,-0.022699],[-0.000899,-0.023099],[-0.0008,-0.023099],[-0.0008,-0.022999],[-0.0008,-0.022999],[-0.000899,-0.022799],[-0.000899,-0.0226],[-0.001,-0.0224],[-0.001,-0.0223],[-0.001199,-0.0223],[-0.0016,-0.0224],[-0.001999,-0.0226],[-0.001999,-0.0224],[-0.0021,-0.0224],[-0.0021,-0.0224],[-0.002199,-0.0224],[-0.001999,-0.0226],[-0.0018,-0.0225],[-0.001699,-0.0224],[-0.001399,-0.0222],[-0.001499,-0.021999],[-0.001499,-0.021899],[-0.001499,-0.021799],[-0.001499,-0.021699],[-0.0013,-0.021599],[-0.0013,-0.021599],[-0.001399,-0.021599],[-0.0016,-0.021499],[-0.0013,-0.021899],[-0.001099,-0.0221],[-0.001199,-0.0226],[-0.001399,-0.022699],[-0.001499,-0.022899],[-0.001499,-0.022999],[-0.001699,-0.023099],[-0.0019,-0.023099],[-0.0019,-0.023199],[-0.001999,-0.022799],[-0.0021,-0.0226],[-0.002199,-0.0225],[-0.001999,-0.0226],[-0.0021,-0.0226],[-0.002299,-0.0226],[-0.001999,-0.0222],[-0.001699,-0.0222],[-0.001699,-0.021999],[-0.0019,-0.0221],[-0.0018,-0.0223],[-0.0016,-0.0221],[-0.0019,-0.021899],[-0.001699,-0.0221],[-0.0019,-0.0222],[-0.002299,-0.0225],[-0.002599,-0.0226],[-0.002799,-0.022899],[-0.0029,-0.023199],[-0.0032,-0.0235],[-0.003399,-0.0238],[-0.003399,-0.0237],[-0.0035,-0.023199],[-0.0035,-0.022999],[-0.003399,-0.022999],[-0.003099,-0.022899],[-0.003299,-0.022799],[-0.003399,-0.0225],[-0.0035,-0.0223],[-0.003299,-0.0224],[-0.0035,-0.022799],[-0.0037,-0.023199],[-0.0035,-0.0234],[-0.003599,-0.0236],[-0.0037,-0.0234],[-0.0037,-0.023099],[-0.0035,-0.0234],[-0.003399,-0.023199],[-0.0035,-0.023099],[-0.0037,-0.022699],[-0.003899,-0.0225],[-0.0041,-0.0225],[-0.004199,-0.0226],[-0.004499,-0.022699],[-0.004399,-0.0226],[-0.004399,-0.0224],[-0.004399,-0.0222],[-0.004399,-0.0224],[-0.004199,-0.022699],[-0.003899,-0.0225],[-0.0037,-0.0223],[-0.003599,-0.0223],[-0.0035,-0.0223],[-0.0037,-0.0223],[-0.0037,-0.0225],[-0.003599,-0.0226],[-0.003399,-0.0224],[-0.0035,-0.021999],[-0.0037,-0.0221],[-0.0038,-0.021999],[-0.003899,-0.021999],[-0.004,-0.021899],[-0.004,-0.0221],[-0.004499,-0.0222],[-0.0048,-0.0223],[-0.0051,-0.022799],[-0.0051,-0.022699],[-0.0051,-0.022699],[-0.004999,-0.022699],[-0.004999,-0.022899],[-0.0048,-0.022999],[-0.004499,-0.022699],[-0.0043,-0.022699],[-0.0043,-0.0226],[-0.004199,-0.0225],[-0.0041,-0.0223],[-0.0041,-0.0224],[-0.0041,-0.0224],[-0.003899,-0.0222],[-0.0041,-0.0222],[-0.0041,-0.0222],[-0.004,-0.0223],[-0.003899,-0.0224],[-0.003899,-0.0224],[-0.0038,-0.0226],[-0.0038,-0.022899],[-0.0038,-0.022899],[-0.003899,-0.022999],[-0.0041,-0.023199],[-0.004199,-0.0233],[-0.0041,-0.022899],[-0.004,-0.0226],[-0.0041,-0.0226],[-0.004199,-0.0223],[-0.004199,-0.0222],[-0.003899,-0.021999],[-0.003899,-0.021599],[-0.0041,-0.021499],[-0.0041,-0.021599],[-0.0041,-0.021699],[-0.004399,-0.0222],[-0.004499,-0.0221],[-0.0043,-0.0223],[-0.004399,-0.0224],[-0.004499,-0.0224],[-0.0043,-0.022799],[-0.004499,-0.022799],[-0.0046,-0.022799],[-0.004699,-0.022799],[-0.0048,-0.022699],[-0.0051,-0.0226],[-0.0051,-0.0225],[-0.0051,-0.0226],[-0.0048,-0.0223],[-0.004699,-0.0222],[-0.004699,-0.021899],[-0.004499,-0.021899],[-0.004399,-0.0221],[-0.004399,-0.0221],[-0.004399,-0.021899],[-0.004399,-0.021899],[-0.004499,-0.021999],[-0.004499,-0.0221],[-0.004699,-0.0222],[-0.004699,-0.0226],[-0.004699,-0.022699],[-0.0046,-0.0226],[-0.0048,-0.0223],[-0.0048,-0.0224],[-0.004699,-0.0225],[-0.0048,-0.0224],[-0.004999,-0.0222],[-0.0051,-0.0221],[-0.0051,-0.021899],[-0.0052,-0.021999],[-0.005499,-0.0221],[-0.005499,-0.021899],[-0.005499,-0.021799],[-0.0057,-0.021699],[-0.0054,-0.021699],[-0.0052,-0.021699],[-0.004999,-0.021699],[-0.005299,-0.021799],[-0.005299,-0.021799],[-0.005299,-0.021699],[-0.0051,-0.021799],[-0.005299,-0.021599],[-0.005299,-0.021799],[-0.005299,-0.021899],[-0.0054,-0.021999],[-0.0057,-0.0222],[-0.005799,-0.0223],[-0.005799,-0.0222],[-0.005799,-0.0221],[-0.005799,-0.0221],[-0.005799,-0.0221],[-0.0057,-0.0221],[-0.005799,-0.0221],[-0.006,-0.0222],[-0.005799,-0.021999],[-0.0057,-0.021799],[-0.005799,-0.021699],[-0.0057,-0.021699],[-0.0052,-0.021899],[-0.004999,-0.021999],[-0.0049,-0.0221],[-0.0049,-0.021999],[-0.0048,-0.021999],[-0.004999,-0.0222],[-0.0049,-0.021899],[-0.004999,-0.021899],[-0.0051,-0.021899],[-0.0051,-0.021699],[-0.0051,-0.021699],[-0.0051,-0.0213],[-0.0049,-0.0213],[-0.004499,-0.0211],[-0.0046,-0.0211],[-0.0049,-0.0212],[-0.0051,-0.0212],[-0.0051,-0.0211],[-0.0054,-0.021],[-0.006099,-0.0209],[-0.006099,-0.021],[-0.0063,-0.0209],[-0.0063,-0.020699],[-0.0063,-0.020499],[-0.006,-0.020699],[-0.005799,-0.020699],[-0.0059,-0.020699],[-0.005499,-0.0209],[-0.0054,-0.021],[-0.005299,-0.021],[-0.0054,-0.0211],[-0.0054,-0.0214],[-0.0054,-0.0212],[-0.005299,-0.021],[-0.0054,-0.021],[-0.005599,-0.020799],[-0.005299,-0.0209],[-0.0051,-0.020799],[-0.004999,-0.020599],[-0.0052,-0.020799],[-0.0054,-0.021],[-0.0054,-0.0209],[-0.005299,-0.021],[-0.005299,-0.020799],[-0.005299,-0.020799],[-0.0052,-0.021],[-0.0052,-0.020699],[-0.0054,-0.020499],[-0.005499,-0.020399],[-0.005599,-0.0202],[-0.0054,-0.0201],[-0.005499,-0.0202],[-0.005599,-0.020299],[-0.0054,-0.020399],[-0.0052,-0.020399],[-0.0052,-0.020399],[-0.0052,-0.020299],[-0.0052,-0.02],[-0.0054,-0.02],[-0.005599,-0.02],[-0.0059,-0.0199],[-0.006099,-0.02],[-0.0062,-0.0199],[-0.0063,-0.02],[-0.0062,-0.0201],[-0.0059,-0.020499],[-0.005799,-0.020799],[-0.0057,-0.020799],[-0.005599,-0.0209],[-0.005599,-0.021],[-0.005599,-0.0211],[-0.0054,-0.021],[-0.005299,-0.0213],[-0.0054,-0.0214],[-0.005499,-0.0212],[-0.005499,-0.021],[-0.005299,-0.020799],[-0.005499,-0.020799],[-0.005799,-0.020799],[-0.0057,-0.020499],[-0.0059,-0.020399],[-0.006,-0.020299],[-0.006099,-0.020299],[-0.0062,-0.020499],[-0.006399,-0.020399],[-0.0065,-0.020299],[-0.0063,-0.0201],[-0.006099,-0.0202],[-0.0062,-0.0202],[-0.006,-0.0201],[-0.006099,-0.0201],[-0.006099,-0.02],[-0.0062,-0.0201],[-0.006,-0.0201],[-0.0059,-0.0201],[-0.005799,-0.0201],[-0.0057,-0.0202],[-0.005599,-0.0202],[-0.005799,-0.020299],[-0.006,-0.020399],[-0.0057,-0.020299],[-0.005799,-0.020499],[-0.0059,-0.020499],[-0.0063,-0.020599],[-0.0063,-0.020699],[-0.006399,-0.020499],[-0.0065,-0.020399],[-0.0065,-0.0201],[-0.0063,-0.020299],[-0.006399,-0.020299],[-0.0065,-0.020299],[-0.006699,-0.020499],[-0.006699,-0.020399],[-0.006699,-0.020399],[-0.0068,-0.020599],[-0.006699,-0.020699],[-0.006599,-0.020699],[-0.0062,-0.020499],[-0.006,-0.020299],[-0.0059,-0.0199],[-0.005499,-0.0199],[-0.005299,-0.0199],[-0.005299,-0.02],[-0.005299,-0.02],[-0.005299,-0.02],[-0.005499,-0.02],[-0.0057,-0.0201],[-0.0059,-0.0202],[-0.0062,-0.020399],[-0.0062,-0.020599],[-0.0065,-0.020299],[-0.0065,-0.0202],[-0.006399,-0.0201],[-0.0063,-0.020299],[-0.0063,-0.0201],[-0.0063,-0.02],[-0.006399,-0.0201],[-0.006399,-0.0202],[-0.006399,-0.0202],[-0.0065,-0.020399],[-0.0065,-0.020399],[-0.0065,-0.0202],[-0.006399,-0.0202],[-0.006399,-0.020299],[-0.006699,-0.0202],[-0.006699,-0.0201],[-0.006699,-0.0201],[-0.006699,-0.020399],[-0.007,-0.020399],[-0.0071,-0.020399],[-0.0071,-0.020299],[-0.0074,-0.0202],[-0.007799,-0.020299],[-0.007699,-0.020299],[-0.007499,-0.0202],[-0.0076,-0.0201],[-0.0076,-0.02],[-0.0073,-0.0201],[-0.007199,-0.02],[-0.006899,-0.02],[-0.0065,-0.0201],[-0.0063,-0.020299],[-0.0063,-0.020299],[-0.0063,-0.020299],[-0.0065,-0.020399],[-0.0065,-0.020299],[-0.0065,-0.020399],[-0.0065,-0.020499],[-0.006599,-0.020499],[-0.006399,-0.020399],[-0.006399,-0.0202],[-0.0065,-0.020299],[-0.006599,-0.0202],[-0.006599,-0.020299],[-0.006899,-0.020499],[-0.007199,-0.020599],[-0.007799,-0.020699],[-0.007799,-0.020499],[-0.007799,-0.020499],[-0.007699,-0.020299],[-0.0076,-0.0201],[-0.0074,-0.02],[-0.0074,-0.0199],[-0.007199,-0.019499],[-0.007,-0.019299],[-0.006899,-0.019099],[-0.006599,-0.019199],[-0.0065,-0.019299],[-0.006399,-0.019299],[-0.0065,-0.019499],[-0.0065,-0.0199],[-0.0065,-0.02],[-0.006599,-0.0201],[-0.006899,-0.0198],[-0.007199,-0.0197],[-0.007699,-0.019499],[-0.0084,-0.019499],[-0.008799,-0.0197],[-0.008899,-0.019299],[-0.008799,-0.018999],[-0.008899,-0.0186],[-0.0087,-0.0187],[-0.0082,-0.019299],[-0.007699,-0.019399],[-0.0074,-0.019399],[-0.007199,-0.019499],[-0.007,-0.019599],[-0.006599,-0.019599],[-0.006599,-0.019499],[-0.006699,-0.0197],[-0.006699,-0.02],[-0.0065,-0.0199],[-0.0065,-0.019599],[-0.0065,-0.019599],[-0.0065,-0.019499],[-0.006699,-0.019299],[-0.0068,-0.019299],[-0.006899,-0.019399],[-0.007,-0.019399],[-0.007199,-0.019599],[-0.0074,-0.0197],[-0.007499,-0.0197],[-0.0076,-0.019399],[-0.0074,-0.019399],[-0.0074,-0.019299],[-0.007199,-0.019599],[-0.006899,-0.019499],[-0.0065,-0.019599],[-0.0065,-0.019599],[-0.006399,-0.0197],[-0.006399,-0.0198],[-0.006599,-0.0199],[-0.006699,-0.0199],[-0.006399,-0.0197],[-0.0063,-0.0197],[-0.006699,-0.019499],[-0.006899,-0.019399],[-0.006399,-0.019599],[-0.0063,-0.019499],[-0.0063,-0.019599],[-0.006099,-0.019599],[-0.006099,-0.0198],[-0.0063,-0.0199],[-0.006399,-0.0199],[-0.006399,-0.020299],[-0.0065,-0.0198],[-0.006699,-0.019499],[-0.0065,-0.019099],[-0.006699,-0.0188],[-0.006699,-0.0188],[-0.006699,-0.0186],[-0.006599,-0.018099],[-0.006399,-0.017899],[-0.006399,-0.0176],[-0.0065,-0.0175],[-0.006599,-0.0175],[-0.0068,-0.0177],[-0.007,-0.017899],[-0.0068,-0.017899],[-0.007,-0.018299],[-0.007199,-0.018199],[-0.0073,-0.018099],[-0.007199,-0.017999],[-0.0071,-0.018099],[-0.0073,-0.018099],[-0.007499,-0.017999],[-0.007699,-0.017999],[-0.007699,-0.017799],[-0.007799,-0.017999],[-0.0079,-0.018299],[-0.007799,-0.018299],[-0.007999,-0.018199],[-0.007799,-0.017899],[-0.007499,-0.017999],[-0.007199,-0.018199],[-0.0071,-0.018099],[-0.0071,-0.017899],[-0.007199,-0.017799],[-0.0071,-0.0175],[-0.007,-0.0176],[-0.0071,-0.017999],[-0.0073,-0.018099],[-0.0071,-0.018199],[-0.0071,-0.018199],[-0.007,-0.018199],[-0.006899,-0.018099],[-0.006599,-0.018199],[-0.006699,-0.018099],[-0.0068,-0.017999],[-0.007,-0.017899],[-0.0071,-0.017999],[-0.007499,-0.017799],[-0.007799,-0.017999],[-0.007999,-0.018099],[-0.007999,-0.017899],[-0.0081,-0.017799],[-0.0082,-0.0177],[-0.007999,-0.0177],[-0.007799,-0.017799],[-0.0076,-0.0177],[-0.007499,-0.0177],[-0.0074,-0.0176],[-0.0074,-0.0176],[-0.0076,-0.017899],[-0.007799,-0.018199],[-0.007699,-0.0184],[-0.0076,-0.018299],[-0.0076,-0.018299],[-0.0076,-0.018199],[-0.007499,-0.018299],[-0.0074,-0.018299],[-0.0074,-0.018299],[-0.0073,-0.018199],[-0.007199,-0.018099],[-0.0074,-0.018199],[-0.007799,-0.018299],[-0.0081,-0.018299],[-0.0082,-0.0184],[-0.007999,-0.018199],[-0.007999,-0.018099],[-0.0079,-0.017899],[-0.007699,-0.0177],[-0.007499,-0.0176],[-0.0073,-0.0174],[-0.0073,-0.0172],[-0.007199,-0.0172],[-0.0071,-0.017099],[-0.0074,-0.0173],[-0.0074,-0.0174],[-0.007499,-0.0175],[-0.0074,-0.0176],[-0.007499,-0.0176],[-0.007499,-0.0177],[-0.007499,-0.017799],[-0.0076,-0.017799],[-0.007699,-0.017999],[-0.007799,-0.017799],[-0.007999,-0.017799],[-0.0081,-0.017999],[-0.008299,-0.018199],[-0.0084,-0.018299],[-0.008499,-0.0185],[-0.008299,-0.0184],[-0.0081,-0.018199],[-0.007999,-0.017999],[-0.007699,-0.018099],[-0.007799,-0.018099],[-0.007699,-0.018199],[-0.007799,-0.018099],[-0.007699,-0.018099],[-0.007699,-0.017999],[-0.0074,-0.017899],[-0.0073,-0.018199],[-0.0074,-0.018199],[-0.0076,-0.018199],[-0.0074,-0.017999],[-0.0076,-0.018099],[-0.0079,-0.017899],[-0.0081,-0.0177],[-0.0084,-0.017899],[-0.0087,-0.018099],[-0.009099,-0.018099],[-0.0093,-0.018199],[-0.0093,-0.018199],[-0.0093,-0.0185],[-0.009,-0.018299],[-0.008599,-0.0184],[-0.008499,-0.018299],[-0.0084,-0.018199],[-0.0082,-0.017999],[-0.007699,-0.017999],[-0.0074,-0.018099],[-0.0074,-0.017999],[-0.0076,-0.017899],[-0.0076,-0.017999],[-0.0076,-0.018099],[-0.007499,-0.017999],[-0.007799,-0.017899],[-0.0081,-0.017799],[-0.008499,-0.017899],[-0.008799,-0.0177],[-0.0092,-0.0177],[-0.0093,-0.017999],[-0.0092,-0.017799],[-0.009099,-0.017799],[-0.009099,-0.017799],[-0.009,-0.0176],[-0.008599,-0.017799],[-0.0081,-0.017799],[-0.0081,-0.017899],[-0.007799,-0.017899],[-0.0076,-0.0177],[-0.007499,-0.0175],[-0.007799,-0.0175],[-0.0079,-0.0176],[-0.007799,-0.0177],[-0.007699,-0.017999],[-0.0076,-0.017999],[-0.007799,-0.0177],[-0.0076,-0.017999],[-0.0073,-0.017999],[-0.007499,-0.018099],[-0.007499,-0.018099],[-0.007799,-0.017799],[-0.0079,-0.0175],[-0.0082,-0.0174],[-0.008499,-0.0175],[-0.008899,-0.0177],[-0.008899,-0.0177],[-0.009099,-0.0174],[-0.009099,-0.0174],[-0.008899,-0.0174],[-0.0087,-0.0177],[-0.008499,-0.0176],[-0.0084,-0.0174],[-0.0081,-0.017099],[-0.007999,-0.016899],[-0.0081,-0.016899],[-0.008299,-0.017099],[-0.008499,-0.0172],[-0.0084,-0.0174],[-0.0084,-0.0176],[-0.0087,-0.0175],[-0.008899,-0.0173],[-0.0087,-0.0176],[-0.0084,-0.0176],[-0.008299,-0.0177],[-0.0084,-0.0176],[-0.008299,-0.0175],[-0.008499,-0.0173],[-0.0087,-0.0175]]}
        }
        if (params.SensorMenu === 'KONGJIAN') {
            return {"code":200,"data":[[0,-2.13,-0.22],[0.08,-2.19,-0.61],[0.11,-2.26,-0.65],[0.11,-2.26,-0.52],[0.13,-2.26,-0.56],[0.16,-2.26,-0.67],[0.16,-2.28,-0.67],[0.1,-2.33,-0.7],[0.02,-2.35,-0.63],[-0.02,-2.28,-0.39],[0.07,-2.22,-0.56],[0.18,-2.21,-0.59],[0.19,-2.23,-0.61],[0.18,-2.24,-0.79],[0.16,-2.27,-0.9],[0.13,-2.27,-0.91],[0.13,-2.28,-0.92],[0.13,-2.37,-0.93],[0.07,-2.38,-0.9],[-0.08,-2.39,-0.63],[-0.13,-2.37,-0.66],[-0.13,-2.35,-0.63],[-0.11,-2.29,-0.49],[-0.07,-2.29,-0.65],[-0.05,-2.33,-0.82],[-0.02,-2.33,-0.81],[0,-2.26,-0.79],[0,-2.24,-0.72],[-0.02,-2.23,-0.57],[-0.05,-2.24,-0.56],[0,-2.27,-0.79],[0,-2.33,-0.72],[-0.08,-2.34,-0.47],[-0.16,-2.34,-0.13],[-0.16,-2.33,-0.14],[-0.18,-2.33,-0.16],[-0.19,-2.31,-0.18],[-0.16,-2.31,-0.27],[-0.11,-2.34,-0.38],[-0.19,-2.27,-0.24],[-0.22,-2.24,-0.27],[-0.24,-2.26,-0.24],[-0.16,-2.24,-0.32],[-0.14,-2.22,-0.24],[-0.14,-2.22,-0.27],[-0.11,-2.26,-0.31],[-0.1,-2.25,-0.36],[-0.1,-2.22,-0.33],[-0.1,-2.22,-0.24],[-0.08,-2.22,-0.22],[-0.07,-2.21,-0.29],[-0.08,-2.23,-0.27],[-0.08,-2.22,-0.34],[-0.08,-2.21,-0.29],[-0.07,-2.21,-0.25],[-0.07,-2.21,-0.23],[-0.07,-2.19,-0.23],[-0.05,-2.21,-0.32],[-0.03,-2.22,-0.36],[-0.05,-2.24,-0.43],[-0.07,-2.24,-0.43],[-0.08,-2.25,-0.38],[-0.08,-2.26,-0.38],[-0.08,-2.28,-0.34],[-0.1,-2.29,-0.29],[-0.11,-2.3,-0.24],[-0.13,-2.26,-0.22],[-0.11,-2.24,-0.22],[-0.1,-2.21,-0.2],[-0.08,-2.21,-0.22],[-0.08,-2.17,-0.34],[-0.07,-2.14,-0.39],[-0.08,-2.14,-0.33],[-0.08,-2.15,-0.29],[-0.1,-2.15,-0.24],[-0.11,-2.19,-0.15],[-0.13,-2.21,-0.16],[-0.14,-2.23,-0.11],[-0.13,-2.24,-0.04],[-0.14,-2.25,0.02],[-0.14,-2.23,0.01],[-0.13,-2.25,-0.04],[-0.1,-2.22,-0.2],[-0.1,-2.24,-0.31],[-0.13,-2.24,-0.31],[-0.13,-2.24,-0.31],[-0.13,-2.24,-0.33],[-0.16,-2.25,-0.33],[-0.18,-2.25,-0.31],[-0.16,-2.25,-0.33],[-0.16,-2.22,-0.32],[-0.16,-2.22,-0.29],[-0.14,-2.22,-0.32],[-0.1,-2.24,-0.38],[-0.08,-2.25,-0.45],[-0.08,-2.25,-0.43],[-0.1,-2.25,-0.4],[-0.08,-2.26,-0.38],[-0.08,-2.26,-0.38],[-0.08,-2.3,-0.36],[-0.08,-2.3,-0.36],[-0.08,-2.29,-0.27],[-0.08,-2.29,-0.25],[-0.08,-2.27,-0.27],[-0.08,-2.26,-0.31],[-0.1,-2.24,-0.33],[-0.1,-2.23,-0.33],[-0.11,-2.23,-0.29],[-0.16,-2.24,-0.2],[-0.19,-2.26,-0.11],[-0.19,-2.24,-0.05],[-0.21,-2.24,0.02],[-0.21,-2.24,0.04],[-0.21,-2.24,-0.02],[-0.19,-2.26,-0.06],[-0.18,-2.25,-0.18],[-0.16,-2.24,-0.22],[-0.13,-2.22,-0.24],[-0.14,-2.19,-0.22],[-0.14,-2.18,-0.27],[-0.14,-2.17,-0.27],[-0.14,-2.16,-0.25],[-0.13,-2.15,-0.18],[-0.13,-2.15,-0.14],[-0.13,-2.15,-0.09],[-0.16,-2.14,-0.09],[-0.13,-2.18,-0.18],[-0.1,-2.21,-0.22],[-0.11,-2.26,-0.24],[-0.13,-2.26,-0.23],[-0.14,-2.28,-0.2],[-0.14,-2.29,-0.29],[-0.16,-2.3,-0.31],[-0.19,-2.3,-0.29],[-0.19,-2.31,-0.27],[-0.19,-2.27,-0.23],[-0.21,-2.26,-0.22],[-0.21,-2.25,-0.25],[-0.19,-2.26,-0.31],[-0.21,-2.26,-0.24],[-0.22,-2.26,-0.16],[-0.19,-2.22,-0.13],[-0.16,-2.22,-0.16],[-0.16,-2.19,-0.31],[-0.19,-2.21,-0.34],[-0.18,-2.23,-0.38],[-0.16,-2.21,-0.34],[-0.19,-2.18,-0.31],[-0.16,-2.21,-0.38],[-0.19,-2.22,-0.43],[-0.22,-2.25,-0.48],[-0.25,-2.26,-0.43],[-0.27,-2.28,-0.38],[-0.29,-2.31,-0.34],[-0.32,-2.35,-0.27],[-0.33,-2.38,-0.22],[-0.33,-2.37,-0.18],[-0.35,-2.31,-0.18],[-0.35,-2.29,-0.14],[-0.33,-2.29,-0.15],[-0.3,-2.28,-0.2],[-0.32,-2.27,-0.15],[-0.33,-2.25,-0.09],[-0.35,-2.23,-0.05],[-0.32,-2.24,-0.09],[-0.35,-2.27,-0.07],[-0.37,-2.31,-0.13],[-0.35,-2.34,-0.14],[-0.35,-2.36,-0.11],[-0.37,-2.34,-0.05],[-0.37,-2.3,-0.06],[-0.35,-2.34,-0.18],[-0.33,-2.31,-0.29],[-0.35,-2.3,-0.36],[-0.37,-2.26,-0.34],[-0.38,-2.25,-0.25],[-0.41,-2.25,-0.27],[-0.41,-2.26,-0.27],[-0.44,-2.26,-0.27],[-0.43,-2.26,-0.27],[-0.43,-2.24,-0.18],[-0.43,-2.22,-0.14],[-0.43,-2.24,-0.2],[-0.41,-2.26,-0.2],[-0.38,-2.25,-0.32],[-0.37,-2.23,-0.29],[-0.35,-2.23,-0.29],[-0.35,-2.23,-0.33],[-0.37,-2.23,-0.38],[-0.37,-2.25,-0.41],[-0.35,-2.26,-0.45],[-0.33,-2.24,-0.4],[-0.35,-2.19,-0.36],[-0.37,-2.21,-0.31],[-0.38,-2.19,-0.36],[-0.38,-2.19,-0.39],[-0.4,-2.18,-0.36],[-0.4,-2.21,-0.36],[-0.44,-2.22,-0.32],[-0.48,-2.23,-0.31],[-0.51,-2.27,-0.27],[-0.51,-2.26,-0.23],[-0.51,-2.26,-0.13],[-0.49,-2.26,-0.14],[-0.49,-2.28,-0.2],[-0.48,-2.29,-0.27],[-0.44,-2.26,-0.31],[-0.43,-2.26,-0.27],[-0.43,-2.26,-0.24],[-0.41,-2.25,-0.2],[-0.41,-2.23,-0.23],[-0.41,-2.24,-0.22],[-0.41,-2.24,-0.18],[-0.38,-2.22,-0.11],[-0.41,-2.22,-0.07],[-0.41,-2.22,-0.07],[-0.4,-2.23,-0.13],[-0.38,-2.24,-0.2],[-0.38,-2.24,-0.31],[-0.38,-2.26,-0.38],[-0.38,-2.28,-0.45],[-0.38,-2.28,-0.45],[-0.38,-2.29,-0.41],[-0.41,-2.31,-0.32],[-0.41,-2.33,-0.27],[-0.41,-2.28,-0.25],[-0.4,-2.26,-0.18],[-0.41,-2.26,-0.13],[-0.41,-2.23,-0.09],[-0.41,-2.22,-0.02],[-0.38,-2.19,-0.14],[-0.38,-2.15,-0.13],[-0.41,-2.14,-0.09],[-0.41,-2.15,-0.05],[-0.41,-2.16,-0.04],[-0.43,-2.22,-0],[-0.44,-2.21,0.03],[-0.43,-2.23,-0],[-0.43,-2.24,-0],[-0.44,-2.24,0],[-0.43,-2.27,-0.13],[-0.44,-2.27,-0.2],[-0.46,-2.27,-0.29],[-0.46,-2.27,-0.31],[-0.48,-2.26,-0.31],[-0.51,-2.26,-0.31],[-0.51,-2.25,-0.31],[-0.51,-2.26,-0.29],[-0.48,-2.23,-0.23],[-0.46,-2.22,-0.25],[-0.46,-2.18,-0.27],[-0.44,-2.18,-0.31],[-0.43,-2.21,-0.29],[-0.43,-2.21,-0.31],[-0.43,-2.18,-0.27],[-0.43,-2.18,-0.25],[-0.44,-2.19,-0.23],[-0.44,-2.21,-0.29],[-0.46,-2.22,-0.36],[-0.46,-2.26,-0.27],[-0.46,-2.26,-0.22],[-0.46,-2.26,-0.15],[-0.48,-2.23,-0.11],[-0.48,-2.24,-0.11],[-0.46,-2.25,-0.15],[-0.48,-2.24,-0.18],[-0.49,-2.22,-0.11],[-0.51,-2.21,-0.07],[-0.51,-2.18,-0.11],[-0.52,-2.19,-0.11],[-0.54,-2.21,-0.09],[-0.54,-2.18,-0.04],[-0.54,-2.17,-0.02],[-0.57,-2.16,-0.02],[-0.54,-2.16,-0.11],[-0.52,-2.16,-0.18],[-0.49,-2.16,-0.29],[-0.52,-2.17,-0.22],[-0.52,-2.17,-0.2],[-0.52,-2.16,-0.18],[-0.51,-2.17,-0.22],[-0.52,-2.15,-0.25],[-0.52,-2.17,-0.23],[-0.52,-2.18,-0.23],[-0.54,-2.19,-0.09],[-0.57,-2.22,-0],[-0.57,-2.23,0.04],[-0.57,-2.22,0],[-0.57,-2.21,-0.07],[-0.57,-2.21,-0.07],[-0.57,-2.21,-0.04],[-0.57,-2.21,-0.05],[-0.57,-2.21,-0.06],[-0.6,-2.22,-0],[-0.57,-2.19,-0.04],[-0.57,-2.17,0.04],[-0.57,-2.16,0],[-0.57,-2.16,-0.02],[-0.52,-2.18,-0.18],[-0.49,-2.19,-0.24],[-0.49,-2.21,-0.23],[-0.49,-2.19,-0.15],[-0.48,-2.19,-0.11],[-0.49,-2.22,-0.11],[-0.49,-2.18,-0.13],[-0.49,-2.18,-0.11],[-0.51,-2.18,-0.04],[-0.51,-2.16,0.06],[-0.51,-2.16,0.09],[-0.51,-2.13,0.06],[-0.49,-2.13,-0.02],[-0.44,-2.11,-0.15],[-0.46,-2.11,-0.22],[-0.49,-2.12,-0.2],[-0.51,-2.12,-0.09],[-0.51,-2.11,-0.07],[-0.54,-2.1,-0.09],[-0.6,-2.09,-0.02],[-0.6,-2.1,0.02],[-0.63,-2.09,0.13],[-0.63,-2.06,0.18],[-0.63,-2.04,0.18],[-0.6,-2.06,0.09],[-0.57,-2.06,0.01],[-0.59,-2.06,-0],[-0.54,-2.09,0.01],[-0.54,-2.1,-0.02],[-0.52,-2.1,-0.07],[-0.54,-2.11,-0.11],[-0.54,-2.14,-0.13],[-0.54,-2.12,-0.11],[-0.52,-2.1,-0.05],[-0.54,-2.1,0.01],[-0.55,-2.07,0.03],[-0.52,-2.09,0.03],[-0.51,-2.07,-0],[-0.49,-2.05,-0.04],[-0.52,-2.07,-0.02],[-0.54,-2.1,0.03],[-0.54,-2.09,0.11],[-0.52,-2.1,0.17],[-0.52,-2.07,0.15],[-0.52,-2.07,0.11],[-0.52,-2.1,0.04],[-0.52,-2.06,0.02],[-0.54,-2.04,0.01],[-0.54,-2.03,0.04],[-0.55,-2.02,-0.02],[-0.54,-2.01,-0.14],[-0.54,-2.02,-0.11],[-0.55,-2.02,-0.07],[-0.54,-2.03,-0.02],[-0.52,-2.03,-0.11],[-0.52,-2.03,-0.13],[-0.52,-2.02,-0.16],[-0.52,-2,-0.13],[-0.54,-2,-0.04],[-0.55,-2,-0.02],[-0.59,-1.99,-0.04],[-0.6,-2,-0.02],[-0.62,-1.99,0.06],[-0.63,-2,0.11],[-0.62,-2.01,0.08],[-0.59,-2.04,0.04],[-0.57,-2.07,-0.04],[-0.57,-2.07,-0.13],[-0.55,-2.09,-0.11],[-0.55,-2.1,-0.11],[-0.55,-2.11,-0.11],[-0.54,-2.1,-0.09],[-0.52,-2.13,-0.18],[-0.54,-2.14,-0.18],[-0.54,-2.12,-0.09],[-0.54,-2.1,-0.02],[-0.52,-2.07,-0.02],[-0.54,-2.07,0.02],[-0.57,-2.07,0.04],[-0.57,-2.04,-0.02],[-0.59,-2.03,-0.04],[-0.6,-2.02,0.02],[-0.6,-2.02,0.06],[-0.62,-2.04,0.06],[-0.63,-2.03,0.11],[-0.65,-2.02,0.15],[-0.63,-2.01,0.06],[-0.6,-2.02,0.04],[-0.62,-2.02,0.09],[-0.6,-2.01,0.06],[-0.6,-2.01,0.04],[-0.6,-2,-0],[-0.62,-2.01,-0.04],[-0.6,-2.01,-0.07],[-0.59,-2.01,-0.07],[-0.57,-2.01,-0.04],[-0.57,-2.02,-0.04],[-0.55,-2.02,-0.11],[-0.57,-2.02,-0.13],[-0.6,-2.03,-0.11],[-0.57,-2.02,-0.18],[-0.57,-2.04,-0.16],[-0.59,-2.04,-0.18],[-0.63,-2.05,-0.18],[-0.63,-2.06,-0.13],[-0.63,-2.04,-0.02],[-0.65,-2.03,0.06],[-0.65,-2.01,0.03],[-0.63,-2.02,0.03],[-0.63,-2.02,0.06],[-0.65,-2.02,0.1],[-0.66,-2.04,0.15],[-0.66,-2.03,0.13],[-0.66,-2.03,0.04],[-0.68,-2.05,0.03],[-0.66,-2.06,0.01],[-0.65,-2.06,0.02],[-0.62,-2.04,-0.04],[-0.6,-2.02,-0.09],[-0.59,-1.99,-0.13],[-0.54,-1.99,-0.25],[-0.52,-1.99,-0.32],[-0.52,-2,-0.38],[-0.52,-2,-0.38],[-0.52,-2,-0.41],[-0.54,-2,-0.38],[-0.57,-2.01,-0.33],[-0.59,-2.02,-0.27],[-0.62,-2.03,-0.18],[-0.62,-2.05,-0.13],[-0.65,-2.02,-0.04],[-0.65,-2.02,0.01],[-0.63,-2.01,-0.02],[-0.63,-2.02,-0.02],[-0.63,-2.01,-0.06],[-0.63,-2,-0.07],[-0.63,-2.01,-0.04],[-0.63,-2.02,-0],[-0.63,-2.02,-0.02],[-0.65,-2.03,-0.02],[-0.65,-2.03,-0.09],[-0.65,-2.02,-0.02],[-0.63,-2.02,-0.05],[-0.63,-2.02,-0.02],[-0.66,-2.02,-0.02],[-0.66,-2.01,-0.13],[-0.66,-2.01,-0.22],[-0.66,-2.03,-0.24],[-0.7,-2.03,-0.15],[-0.71,-2.03,-0.04],[-0.71,-2.02,0],[-0.74,-2.02,0.1],[-0.77,-2.02,0.2],[-0.76,-2.02,0.24],[-0.74,-2.02,0.27],[-0.76,-2.01,0.31],[-0.76,-2,0.28],[-0.73,-2.01,0.17],[-0.71,-2,0.01],[-0.68,-2,-0],[-0.65,-2.01,-0.04],[-0.63,-2.02,-0.09],[-0.63,-2.02,-0.15],[-0.63,-2.02,-0.18],[-0.65,-2.03,-0.18],[-0.65,-2.02,-0.09],[-0.65,-2.03,-0.09],[-0.65,-2.04,-0.06],[-0.65,-2.04,-0.09],[-0.63,-2.03,-0.18],[-0.63,-2.02,-0.24],[-0.65,-2.02,-0.29],[-0.65,-2.02,-0.24],[-0.65,-2.02,-0.25],[-0.68,-2.04,-0.18],[-0.71,-2.05,-0.09],[-0.77,-2.06,-0],[-0.77,-2.04,0.04],[-0.77,-2.04,0.11],[-0.76,-2.02,0.19],[-0.76,-2.01,0.17],[-0.74,-2,0.17],[-0.74,-1.99,0.19],[-0.71,-1.94,0.13],[-0.7,-1.92,0.11],[-0.68,-1.9,0.04],[-0.65,-1.91,0.02],[-0.65,-1.92,-0.06],[-0.63,-1.92,-0.11],[-0.65,-1.94,-0.04],[-0.65,-1.99,-0.06],[-0.65,-2,-0.13],[-0.65,-2.01,-0.15],[-0.68,-1.98,-0.14],[-0.71,-1.97,-0.13],[-0.76,-1.94,-0.09],[-0.84,-1.94,-0.02],[-0.87,-1.97,0.02],[-0.88,-1.92,0.04],[-0.87,-1.89,0.1],[-0.88,-1.86,0.13],[-0.87,-1.87,0.04],[-0.82,-1.92,-0.04],[-0.76,-1.93,-0.2],[-0.74,-1.93,-0.2],[-0.71,-1.94,-0.16],[-0.7,-1.95,-0.15],[-0.65,-1.95,-0.22],[-0.65,-1.94,-0.27],[-0.66,-1.97,-0.27],[-0.66,-2,-0.25],[-0.65,-1.99,-0.22],[-0.65,-1.95,-0.15],[-0.65,-1.95,-0.16],[-0.65,-1.94,-0.16],[-0.66,-1.92,-0.18],[-0.68,-1.92,-0.18],[-0.68,-1.93,-0.13],[-0.7,-1.93,-0.11],[-0.71,-1.95,-0.11],[-0.74,-1.97,-0.09],[-0.74,-1.97,0.04],[-0.76,-1.93,0.17],[-0.74,-1.93,0.13],[-0.74,-1.92,0.06],[-0.71,-1.95,0],[-0.68,-1.94,-0.11],[-0.65,-1.95,-0.05],[-0.65,-1.95,0.03],[-0.63,-1.97,0.03],[-0.63,-1.98,-0.04],[-0.65,-1.99,-0.05],[-0.66,-1.99,-0.04],[-0.63,-1.97,0.02],[-0.63,-1.97,-0],[-0.66,-1.94,0.03],[-0.68,-1.93,0],[-0.63,-1.95,-0.11],[-0.63,-1.94,-0.15],[-0.63,-1.95,-0.18],[-0.6,-1.95,-0.13],[-0.6,-1.98,-0.14],[-0.63,-1.99,-0.14],[-0.63,-1.99,-0.2],[-0.63,-2.02,-0.27],[-0.65,-1.98,-0.22],[-0.66,-1.94,-0.14],[-0.65,-1.9,-0.15],[-0.66,-1.88,-0.2],[-0.66,-1.88,-0.2],[-0.66,-1.86,-0.2],[-0.65,-1.8,-0.2],[-0.63,-1.78,-0.04],[-0.63,-1.76,0.11],[-0.65,-1.75,0.13],[-0.65,-1.75,0.09],[-0.68,-1.77,0.1],[-0.7,-1.78,0.17],[-0.68,-1.78,0.18],[-0.7,-1.82,0.2],[-0.71,-1.81,0.18],[-0.73,-1.8,0.11],[-0.71,-1.79,0.03],[-0.71,-1.8,0.04],[-0.73,-1.8,0.04],[-0.74,-1.79,0.06],[-0.76,-1.79,0.06],[-0.76,-1.77,0.01],[-0.77,-1.79,0.02],[-0.79,-1.82,0.06],[-0.77,-1.82,0.08],[-0.79,-1.81,0.06],[-0.77,-1.78,0.03],[-0.74,-1.79,-0.04],[-0.71,-1.81,-0.02],[-0.71,-1.8,0],[-0.71,-1.78,0.11],[-0.71,-1.77,0.19],[-0.71,-1.75,0.2],[-0.7,-1.76,0.29],[-0.71,-1.79,0.33],[-0.73,-1.8,0.4],[-0.71,-1.81,0.47],[-0.71,-1.81,0.46],[-0.7,-1.81,0.45],[-0.68,-1.8,0.37],[-0.65,-1.81,0.22],[-0.66,-1.8,0.1],[-0.68,-1.79,0],[-0.7,-1.78,0.02],[-0.71,-1.79,-0.04],[-0.74,-1.77,-0.13],[-0.77,-1.79,-0.15],[-0.79,-1.8,-0.2],[-0.79,-1.78,-0.13],[-0.81,-1.77,-0.07],[-0.82,-1.77,-0],[-0.79,-1.77,-0.07],[-0.77,-1.77,-0.09],[-0.76,-1.77,-0.09],[-0.74,-1.77,-0],[-0.74,-1.76,0.11],[-0.74,-1.76,0.15],[-0.76,-1.78,0.2],[-0.77,-1.81,0.26],[-0.76,-1.84,0.29],[-0.76,-1.82,0.31],[-0.76,-1.82,0.31],[-0.76,-1.81,0.33],[-0.74,-1.82,0.31],[-0.74,-1.82,0.19],[-0.74,-1.82,0.15],[-0.73,-1.81,0.08],[-0.71,-1.8,0.04],[-0.74,-1.81,0.06],[-0.77,-1.82,0.09],[-0.81,-1.82,0.09],[-0.82,-1.84,0.04],[-0.79,-1.81,0.06],[-0.79,-1.8,0.04],[-0.79,-1.78,0.06],[-0.76,-1.77,0.04],[-0.74,-1.76,0.03],[-0.73,-1.74,0.03],[-0.73,-1.72,0.11],[-0.71,-1.72,0.15],[-0.71,-1.7,0.13],[-0.74,-1.73,0.13],[-0.74,-1.74,0.09],[-0.74,-1.75,0.08],[-0.74,-1.76,0.1],[-0.74,-1.76,0.1],[-0.74,-1.77,0.08],[-0.74,-1.77,0.06],[-0.76,-1.77,0.01],[-0.76,-1.79,0.03],[-0.77,-1.77,0.01],[-0.79,-1.77,0.08],[-0.81,-1.79,0.06],[-0.82,-1.81,0.04],[-0.84,-1.82,0.04],[-0.84,-1.85,0.03],[-0.82,-1.84,0.06],[-0.81,-1.81,0.04],[-0.79,-1.79,0.02],[-0.76,-1.8,-0.02],[-0.77,-1.8,0.01],[-0.76,-1.81,0.06],[-0.77,-1.8,0.15],[-0.76,-1.8,0.18],[-0.76,-1.79,0.19],[-0.74,-1.78,0.15],[-0.73,-1.81,0.1],[-0.74,-1.81,0.11],[-0.76,-1.81,0.2],[-0.74,-1.79,0.13],[-0.76,-1.8,0.15],[-0.79,-1.78,0.13],[-0.81,-1.77,0.13],[-0.84,-1.78,0.17],[-0.87,-1.8,0.17],[-0.9,-1.8,0.2],[-0.93,-1.81,0.28],[-0.93,-1.81,0.31],[-0.93,-1.85,0.31],[-0.9,-1.82,0.19],[-0.85,-1.84,0.11],[-0.84,-1.82,0.17],[-0.84,-1.81,0.22],[-0.82,-1.79,0.22],[-0.76,-1.79,0.17],[-0.74,-1.8,0.15],[-0.74,-1.79,0.1],[-0.76,-1.78,0.18],[-0.76,-1.79,0.29],[-0.76,-1.8,0.33],[-0.74,-1.79,0.26],[-0.77,-1.78,0.29],[-0.81,-1.77,0.37],[-0.84,-1.78,0.38],[-0.87,-1.77,0.4],[-0.92,-1.77,0.46],[-0.93,-1.79,0.47],[-0.92,-1.77,0.51],[-0.9,-1.77,0.49],[-0.9,-1.77,0.49],[-0.9,-1.76,0.43],[-0.85,-1.77,0.26],[-0.81,-1.77,0.06],[-0.81,-1.78,0.04],[-0.77,-1.78,0.04],[-0.76,-1.77,0.04],[-0.74,-1.75,-0.02],[-0.77,-1.75,-0.04],[-0.79,-1.76,-0.09],[-0.77,-1.77,-0],[-0.76,-1.79,0.06],[-0.76,-1.79,0.06],[-0.77,-1.77,0.06],[-0.76,-1.79,0.03],[-0.73,-1.79,-0.04],[-0.74,-1.8,-0.02],[-0.74,-1.8,-0.02],[-0.77,-1.77,0],[-0.79,-1.75,0.06],[-0.82,-1.74,0.08],[-0.84,-1.75,0.18],[-0.88,-1.77,0.2],[-0.88,-1.77,0.24],[-0.9,-1.74,0.31],[-0.9,-1.74,0.31],[-0.88,-1.74,0.26],[-0.87,-1.77,0.24],[-0.84,-1.76,0.13],[-0.84,-1.74,0.13],[-0.81,-1.7,0.2],[-0.79,-1.68,0.26],[-0.81,-1.68,0.22],[-0.82,-1.7,0.24],[-0.84,-1.72,0.24],[-0.84,-1.74,0.27],[-0.84,-1.76,0.31],[-0.87,-1.75,0.4],[-0.88,-1.73,0.38],[-0.87,-1.76,0.29],[-0.84,-1.76,0.15],[-0.82,-1.77,0.11],[-0.84,-1.76,0.08],[-0.82,-1.75,0.08],[-0.84,-1.73,0.09],[-0.87,-1.75,0.02]]}
        }

    }


};
module.exports = mock;