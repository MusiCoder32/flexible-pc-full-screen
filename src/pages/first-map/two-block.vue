<template>
    <div class="content two-block-box hBox">
        <div class="two-block-1">
            <oblique-icon @icon-click="goto('coal')" class="two-block-oblique-icon"></oblique-icon>
            <oblique-angle
                    class="mb6"
                    :borderWidth1="borderWidth1"
                    :borderWidth2="borderWidth2"
                    :title="obliqueTextLeft"
            ></oblique-angle>
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight"
                    :rectContentHeight="rectContentHeight"
                    :rectBorderTop="rectBorderTop"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">覆盖企业</div>
                    <rect-border :total="1000" title="覆盖企业"></rect-border>
                    <div class="pie-container">
                        <div v-for="(item,key) in pieList" class="pie-box" :key="item.name+key">
                            <div class="two-block-pie">
                                <slider-pie
                                        :value="item.value/total"
                                        backgroundColor="#979797"
                                        :foregroundColor="item.foregroundColor"
                                ></slider-pie>
                            </div>
                            <div class="pie-box-left">
                                <div class="font-size-x2 font-weight-medium font-family-bebas">{{item.value}}</div>
                                <div class="font-weight-medium font-size-extra-small">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </oblique-angle-rect>
        </div>
        <div class="two-block-2">
            <oblique-icon @icon-click="goto('chemical')" class="two-block-oblique-icon"></oblique-icon>
            <oblique-angle
                    class="mb6"
                    :borderWidth1="borderWidth1"
                    :borderWidth2="borderWidth2"
                    :title="obliqueTextRight"
            ></oblique-angle>
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight"
                    :rectContentHeight="rectContentHeight"
                    :rectBorderTop="rectBorderTop"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">传感器布设数量统计</div>
                    <div class="hBox vh_content_around" style="width: 100%;flex-wrap:wrap">
                        <rect-border class="mb20" :total="100" title="生产企业(家)"></rect-border>
                        <rect-border class="mb20" :total="100" title="使用企业(家)"></rect-border>
                        <rect-border :total="100" title="经营企业(家)"></rect-border>
                        <rect-border :total="100" title="安委会企业(家)"></rect-border>
                    </div>
                </div>
            </oblique-angle-rect>
        </div>
        <div class="two-block-3">
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight34"
                    :rectContentHeight="rectContentHeight34"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">重点关注企业</div>

                </div>
            </oblique-angle-rect>
        </div>
        <div class="two-block-4">
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight34"
                    :rectContentHeight="rectContentHeight34"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">重点关注企业</div>
                </div>
                <div class="hBox vh_content_center table-box emphasis-attention-company">
                    <el-table
                            :data="tableData"
                            class="company-table font-size-small"
                            :header-cell-style="{backgroundColor:'#0847A1 !important',color:'white'}"
                            :row-class-name="tableRowClassName"
                    >
                        <el-table-column
                                prop="companyName"
                                show-overflow-tooltip
                                label="企业名称"
                                min-width="2">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                min-width="2">
                        </el-table-column>
                        <el-table-column
                                prop="telephone"
                                min-width="2"
                                label="联系电话">
                        </el-table-column>
                    </el-table>

                </div>
            </oblique-angle-rect>
        </div>
    </div>
</template>

<script>
import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueIcon from '../../components/business_component/oblique-icon';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';
import SliderPie from '../../components/charts/slider-pie';
import RectBorder from '../../components/business_component/rect-border';

export default {
    name: 'two-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect,
        ObliqueIcon,
        SliderPie,
        RectBorder
    },
    data () {
        return {
            total: 1000,
            pieList: [
                {
                    value: 427,
                    name: '尾矿库',
                    foregroundColor: '#007BFF'
                },
                {
                    value: 254,
                    name: '排土场',
                    foregroundColor: '#FFD600'
                },
                {
                    value: 332,
                    name: '露天矿场',
                    foregroundColor: '#FF5E54'
                }
            ],
            borderWidth1: 'two-block-title-width-1',
            borderWidth2: 'two-block-title-width-2',
            obliqueTextLeft: '金属非金属矿山领域',
            obliqueTextRight: '化工园区危险化学品领域',
            rectHeight: 'two-block-rect-height',
            rectContentHeight: 'two-block-rect-content-height',
            rectBorderTop: 'two-block-rect-border-top',
            rectHeight34: 'two-block-rect-height34',
            rectContentHeight34: 'two-block-rect-content-height34',
            tableData: [
                {
                    telephone: '13359322022',
                    name: '王小虎0',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎1',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎2',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎3',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎4',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }, {
                    telephone: '13359322022',
                    name: '王小虎',
                    companyName: '四川成伟矿业有限公司'
                }
            ]
        };
    },
    mounted () {
        this.$nextTick(() => {
            this.readyRoll();
        });
    },
    methods: {
        readyRoll () {
            this._trHeight = document.querySelector('div.emphasis-attention-company table  thead  tr').offsetHeight;
            let bodyHeight = document.querySelector('div.emphasis-attention-company').offsetHeight;
            this._containBoxStyle = document.querySelector('div.emphasis-attention-company div.el-table__body-wrapper.is-scrolling-none').style;
            this._containBoxStyle.transform = `translate(0,-${this._trHeight * 2 + 'px'})`;
            this._containBoxStyle.paddingTop = this._trHeight * 2 + 'px';

            if (bodyHeight < this._trHeight * this.tableData.length) {
                this.tableData.push(this.tableData[0]);
                this.tableData.push(this.tableData[1]);
                this.beginRolling();
            }
        },
        beginRolling () {
            this._tableSetInterval = setInterval(() => {
                this._containBoxStyle.transition = 'all .5s';
                this._containBoxStyle.paddingTop = this._trHeight + 'px';

                setTimeout(() => {
                    this._containBoxStyle.transition = 'all .5s';
                    this._containBoxStyle.paddingTop = 0;
                }, 2000);

                setTimeout(() => {
                    this.tableData.shift();
                    this.tableData.shift();

                    this.tableData.push(this.tableData[0]);
                    this.tableData.push(this.tableData[1]);

                    this._containBoxStyle.transition = 'all 0s ease 0s';
                    this._containBoxStyle.paddingTop = this._trHeight * 2 + 'px';
                }, 2500);

            }, 4000);
        },
        tableRowClassName ({ row, rowIndex }) {
            if ((rowIndex + 1) % 2 === 0) {
                return 'row-double';
            }
            else {
                return 'row-single';
            }
        },
        goto (type) {
            if (type === 'coal') {
                this.$router.push({ path: 'coal' });
            }
            else if (type === 'chemical') {
                this.$router.push({ path: 'chemical' });
            }
        }
    }
};
</script>

<style lang="scss">
    .two-block-oblique-icon {
        left: 272px;
        top: 8px;
    }

    .two-block-title-width-2 {
        width: 297px;
    }

    .two-block-title-width-1 {
        width: 268px;
    }

    .two-block-rect-height {
        height: 180px;
    }

    .two-block-rect-content-height {
        height: 150px;
    }

    .two-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .two-block-rect-height34 {
        height: 426px;
    }

    .two-block-rect-content-height34 {
        height: 396px;
    }

    .two-block-box {
        padding: 22px 0 0 15px;
        flex-wrap: wrap;
        > div {
            width: 50%;
            padding-right: 30px;
        }
        .two-block-1, .two-block-2, .two-block-3, .two-block-4 {
            position: relative;

            .two-rect-content {
                padding-left: 22px;

                .two-block-rect-title {
                    height: 36px;
                    line-height: 36px;
                    transform: translate(0, -7.5px);
                }
                .pie-container {
                    display: flex;
                    justify-content: space-between;
                    .pie-box {
                        height: 70px;
                        flex: 1;
                        display: flex;
                        align-items: center;
                        .two-block-pie {
                            width: 52px;
                            height: 52px;
                            margin-right: 7px;
                        }
                    }
                }
            }

            .table-box {
                width: 100%;
                height: 330px;
                padding: 0 20px;
                overflow: hidden;

                .el-table::before {
                    background-color: transparent;
                }

                .el-table td, .el-table th.is-leaf {
                    border: none;
                }
                .gutter {
                    background-color: rgba(19, 114, 255, 0.4);
                }

                .el-table--enable-row-hover .el-table__body tr:hover > td {
                    background-color: rgba(19, 114, 255, 0.4)
                }

                .el-table__header-wrapper {
                    position:relative;
                    z-index: 100;
                }

                .company-table {
                    background: transparent;

                    .row-double {
                        background-color: rgba(19, 114, 255, 0.2);
                        color: white;
                    }
                    .row-single {
                        background-color: transparent;
                        color: white;
                    }
                }
            }
        }
        .two-block-2 {

        }
        .two-block-3 {
            height: 464px;
            padding-top: 8px;
        }
        .two-block-4 {
            height: 464px;
            padding-top: 8px;
        }
    }
</style>