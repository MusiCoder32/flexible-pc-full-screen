<template>
    <div class="content pr30">
        <oblique-angle class="mb8" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                       :title="obliqueTextLeft"></oblique-angle>
        <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight"
                            :rectBorderTop="rectBorderTop">
            <div class="hBox vh_content_center table-box emphasis-attention-company-chemical">
                <el-table
                        :data="tableData"
                        class="company-table font-size-small"
                        :header-cell-style="{backgroundColor:'#0847A1 !important',color:'white'}"
                        :row-class-name="tableRowClassName"
                        @cell-mouse-enter="enterTable"
                        @cell-mouse-leave="leaveTable"
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
</template>

<script>

import ObliqueAngle from '../../components/business_component/oblique-angle';
import ObliqueAngleRect from '../../components/business_component/oblique-angle-rect';


export default {
    name: 'four-block',
    components: {
        ObliqueAngle,
        ObliqueAngleRect
    },
    data () {
        return {
            borderWidth1: 'chemical-four-block-title-width-1',
            borderWidth2: 'chemical-four-block-title-width-2',
            obliqueTextLeft: '空天地一体化技术',
            rectHeight: 'chemical-four-block-rect-height',
            rectBorderTop: 'chemical-four-block-rect-border-top',
            tableData: [],
            isMouseEnter: false
        };
    },
    mounted () {
        let me = this;
        for (let i = 0; i < 19; i++) {
            let obj = {
                telephone: '13359322022',
                name: '王小虎' + i,
                companyName: '四川成伟矿业有限公司'
            };
            this.tableData.push(obj);
        }
        this.$nextTick(() => {
            me._tableDataLength = me.tableData.length;
            this.readyRoll();
        });
        window.addEventListener('resize', () => {
            me._tableSetInterval = clearInterval(me._tableSetInterval);
            me._rollSetTime && clearTimeout(me._rollSetTime)
            me._rollSetTime = setTimeout(() => {
                me.readyRoll();
            }, 2000);
        });
    },
    destroyed () {
        clearInterval(this._tableSetInterval);
    },
    methods: {
        enterTable () {
            this.isMouseEnter = true;
        },
        leaveTable () {
            this.isMouseEnter = false;
        },
        readyRoll () {
            this._trHeight = document.querySelector('div.emphasis-attention-company-chemical table  thead  tr').offsetHeight;
            let bodyHeight = document.querySelector('div.emphasis-attention-company-chemical').offsetHeight;

            let len = Math.floor(bodyHeight / this._trHeight);
            this._containBoxStyle = document.querySelector('div.emphasis-attention-company-chemical div.el-table__body-wrapper.is-scrolling-none').style;

            if (len < this.tableData.length) {
                this._containBoxStyle.transform = `translate(0,-${this._trHeight * 2 + 'px'})`;
                this._containBoxStyle.paddingTop = this._trHeight * 2 + 'px';
                this.beginRolling();
            }
        },
        beginRolling () {
            let me = this;
            this._tableSetInterval = setInterval(() => {

                if (!me.isMouseEnter) {
                    this.tableData.push(this.tableData[0]);
                    this.tableData.push(this.tableData[1]);
                    this._containBoxStyle.transition = 'all .5s';
                    this._containBoxStyle.paddingTop = this._trHeight + 'px';

                    setTimeout(() => {
                        this._containBoxStyle.transition = 'all .5s';
                        this._containBoxStyle.paddingTop = 0;
                    }, 2000);

                    setTimeout(() => {
                        this.tableData.shift();
                        this.tableData.shift();

                        this._containBoxStyle.transition = 'all 0s ease 0s';
                        this._containBoxStyle.paddingTop = this._trHeight * 2 + 'px';
                    }, 2500);
                }
            }, 4000);
        },

        tableRowClassName ({rowIndex }) {
            if ((rowIndex + 1) % 2 === 0) {
                return 'row-double';
            }
            else {
                return 'row-single';
            }
        }

    }
};
</script>

<style lang="scss">

    .chemical-four-block-title-width-2 {
        width: 696px;
    }

    .chemical-four-block-title-width-1 {
        width: 667px;
    }

    .chemical-four-block-rect-height {
        height: 274px;
    }

    .chemical-four-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .table-box {
        width: 100%;
        height: 240px;
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
            position: relative;
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

</style>