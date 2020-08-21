<template>
    <div class="content pr30">
        <oblique-angle class="mb8" :borderWidth1="borderWidth1" :borderWidth2="borderWidth2"
                       :title="obliqueTextLeft"></oblique-angle>
        <oblique-angle-rect class="font-size-base" :rectHeight="rectHeight"
                            :rectBorderTop="rectBorderTop">
            <div v-if="tableData.length>0" class="hBox vh_content_center table-box emphasis-attention-company-coal">
                <el-table
                        :data="tableData"
                        class="company-table font-size-small"
                        :header-cell-style="{backgroundColor:'#0847A1 !important',color:'white'}"
                        :row-class-name="tableRowClassName"
                        @cell-mouse-enter="enterTable"
                        @cell-mouse-leave="leaveTable"
                >
                    <el-table-column
                            prop="name"
                            show-overflow-tooltip
                            label="重点关注企业名称"
                            min-width="2">
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="企业类型"
                            min-width="1">
                    </el-table-column>
                    <el-table-column
                            prop="personName"
                            label="企业负责人"
                            min-width="1">
                    </el-table-column>
                    <el-table-column
                            prop="tel"
                            min-width="2"
                            label="联系电话">
                    </el-table-column>
                    <el-table-column
                            prop="riskLevel"
                            min-width="1"
                            label="风险等级">
                        <template v-slot="level">
                            <div class="icon-class"
                                 :class="{'high-risk':level.row.riskLevel==4,'medium-risk':level.row.riskLevel==3,'general-risk':level.row.riskLevel==2,'low-risk':level.row.riskLevel==1}"></div>
                        </template>
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
            borderWidth1: 'coal-four-block-title-width-1',
            borderWidth2: 'coal-four-block-title-width-2',
            obliqueTextLeft: '重点关注企业',
            rectHeight: 'coal-four-block-rect-height',
            rectBorderTop: 'coal-four-block-rect-border-top',
            isMouseEnter: false,
            tableData: []
        };
    },
    computed: {},
    mounted () {
        let me = this;
        this.tableData = this.$store.state.coalData.mineCompanyList || [];
        me._rollSetTime = setTimeout(() => {
            this.readyRoll();
        }, 2000);
        window.addEventListener('resize', me.coalResize);
    },
    destroyed () {
        let me = this;
        clearInterval(this._tableSetInterval);
        clearTimeout(me._rollSetTime);
        window.removeEventListener('resize',me.coalResize)
    },
    methods: {
        coalResize() {
            let me = this;
            me._tableSetInterval = clearInterval(me._tableSetInterval);
            me._rollSetTime && clearTimeout(me._rollSetTime);
            me._rollSetTime = setTimeout(() => {
                me.readyRoll();
            }, 2000);
        },
        enterTable () {
            this.isMouseEnter = true;
        },
        leaveTable () {
            this.isMouseEnter = false;
        },
        readyRoll () {
            this._trHeight = document.querySelector('div.emphasis-attention-company-coal table  tbody  tr').offsetHeight;
            let bodyHeight = document.querySelector('div.emphasis-attention-company-coal').offsetHeight;

            this._containBoxStyle = document.querySelector('div.emphasis-attention-company-coal div.el-table__body-wrapper.is-scrolling-none').style;

            if ((this.tableData.length + 1) * this._trHeight > bodyHeight) {
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

        tableRowClassName ({ rowIndex }) {
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

    .coal-four-block-title-width-2 {
        width: 696px;
    }

    .coal-four-block-title-width-1 {
        width: 667px;
    }

    .coal-four-block-rect-height {
        height: 274px;
    }

    .coal-four-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .table-box {
        width: 100%;
        height: 240px;
        padding: 0 20px;
        overflow: hidden;

        .icon-class {
            width: 26px;
            height: 26px;
            background-image: url("../../assets/img/icon/3.png");
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
            background-size: contain;
        }
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