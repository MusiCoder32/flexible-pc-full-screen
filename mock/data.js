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
                }
            ]
        };
    }
    if (api === 'api/BDSatellite/GetSensBdSensorMenus') {
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

    }


};
module.exports = mock;