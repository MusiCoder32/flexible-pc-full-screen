<template>
    <div class="content two-block-box hBox">
        <div class="two-block-1">
            <oblique-icon @icon-click="goto('coal')" class="two-block-oblique-icon"></oblique-icon>
            <oblique-angle
                    class="mb6"
                    :borderWidth2="borderWidth2"
                    :title="obliqueTextLeft"
            ></oblique-angle>
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight"
                    :rectBorderTop="rectBorderTop"
            >
                <div class="two-rect-content">

                    <div class="two-block-rect-title font-size-medium font-weight-medium">覆盖企业</div>
                    <div class="company-statistics-box">
                        <div class="total-box">
                            <div class="total-number">
                                <img src="../../assets/img/index/96.png"/>
                                <img src="../../assets/img/index/95.png"/>
                                <div class="icon-box">
                                    <img src="../../assets/img/index/9.png"/>
                                    <img src="../../assets/img/index/8.png"/>
                                    <img src="../../assets/img/index/11.png"/>
                                    <img src="../../assets/img/index/10.png"/>
                                </div>
                                <div class="number">
                                    <div>
                                        {{coalStatistics.pilotCount||0}}
                                    </div>
                                    <div class="font-size-small font-weight-medium">试点企业</div>
                                </div>

                            </div>
                            <div class="total-title">
                                基础信息数量:{{coalStatistics.companyCount}}
                            </div>
                        </div>
                        <div class="item-box">
                            <div>
                                <div>
                                    <div>{{coalStatistics.tailingPondCount||0}}</div>
                                    <div>尾矿库</div>
                                </div>
                                <div>
                                    <div>{{coalStatistics.dumpCount||0}}</div>
                                    <div>排土场</div>
                                </div>
                            </div>
                            <div>
                                <div>露天矿场</div>
                                <div>{{coalStatistics.openPitMineCount||0}}</div>
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
                    :rectBorderTop="rectBorderTop"
            >
                <div class="two-rect-content vBox vh_content_start" style="height: 100%;">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">覆盖企业</div>
                    <div style="width: 100%;flex: 1" class="hBox">
                        <div style="width: 40%" class="vBox vh_content_around vh_items_center">
                            <div class="test-company">
                                <div>{{chemicalCompanyArr[4].value}}</div>
                                <div>{{chemicalCompanyArr[4].name}}</div>
                            </div>
                            <div class="base-info font-size-small font-weight-medium">基础信息数量:231</div>
                        </div>
                        <div class="vBox vh_content_around " style="width: 60%;flex-wrap:wrap;flex-grow: 1">
                            <template v-for="(item,index) in chemicalCompanyArr">
                                <div v-if="index<3" class="chemical-company-item"  :key="item.name + index">
                                    <div>
                                        <div>{{item.value}}</div>
                                        <div>{{item.name}}</div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </oblique-angle-rect>
        </div>

        <div class="two-block-3">
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight34"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">金属非金属矿山领域重点关注企业</div>
                </div>
                <div class="hBox vh_content_center table-box emphasis-attention-company3">
                    <el-table
                            :data="tableData3"
                            class="company-table font-size-small"
                            :header-cell-style="{backgroundColor:'#0847A1 !important',color:'white'}"
                            :row-class-name="tableRowClassName"
                            @cell-mouse-enter="enterTable3"
                            @cell-mouse-leave="leaveTable3"
                    >
                        <el-table-column
                                prop="name"
                                show-overflow-tooltip
                                label="企业名称"
                                min-width="2">
                        </el-table-column>
                        <el-table-column
                                prop="personName"
                                label="姓名"
                                min-width="2">
                        </el-table-column>
                        <el-table-column
                                prop="tel"
                                min-width="2"
                                label="联系电话">
                        </el-table-column>
                    </el-table>

                </div>
            </oblique-angle-rect>
        </div>
        <div class="two-block-4">
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight34"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">化工园区危险化学品领域重点关注企业</div>
                </div>
                <div class="hBox vh_content_center table-box emphasis-attention-company4">
                    <el-table
                            :data="tableData4"
                            class="company-table font-size-small"
                            :header-cell-style="{backgroundColor:'#0847A1 !important',color:'white'}"
                            :row-class-name="tableRowClassName"
                            @cell-mouse-enter="enterTable4"
                            @cell-mouse-leave="leaveTable4"
                    >
                        <el-table-column
                                prop="name"
                                show-overflow-tooltip
                                label="企业名称"
                                min-width="2">
                        </el-table-column>
                        <el-table-column
                                prop="personName"
                                label="姓名"
                                min-width="2">
                        </el-table-column>
                        <el-table-column
                                prop="tel"
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
            isMouseEnter3: false,
            isMouseEnter4: false,
            borderWidth1: 'two-block-title-width-1',
            borderWidth2: 'two-block-title-width-2',
            obliqueTextLeft: '金属非金属矿山领域',
            obliqueTextRight: '化工园区危险化学品领域',
            rectHeight: 'two-block-rect-height',
            rectBorderTop: 'two-block-rect-border-top',
            rectHeight34: 'two-block-rect-height34',
            tableData3: [],
            tableData4: []
        };
    },
    mounted () {
        let me = this;

        me._rollSetTime = setTimeout(() => {
            this.readyRoll();
        }, 2000);
        window.addEventListener('resize', me.firstResize);
    },
    computed: {
        coalStatistics () {
            (this.tableData3.length === 0) && (this.tableData3 = this.$store.state.firstData.mineCompanyList || []);
            (this.tableData4.length === 0) && (this.tableData4 = this.$store.state.firstData.hazardChemicalCompanyList || []);
            return this.$store.state.firstData.mineCover || {};
        },
        chemicalCompanyArr () {
            let chemicalStatistics = this.$store.state.firstData.hazardChemicalCover || {};
            let chemicalCompanyArr = [
                {
                    name: '重大危险源',
                    value: 0
                }, {
                    name: '重点监管企业',
                    value: 0
                }, {
                    name: '化工园区',
                    value: 0
                }, {
                    name: '基础信息数量',
                    value: 0
                },{
                    name: '试点企业',
                    value: 0
                }
            ];
            chemicalCompanyArr[0].value = chemicalStatistics.majorHazardCount || 0;
            chemicalCompanyArr[1].value = chemicalStatistics.companyCount || 0;
            chemicalCompanyArr[2].value = chemicalStatistics.chemicalIndustryParkCount || 0;
            chemicalCompanyArr[3].value = chemicalStatistics.keySupervisionProcessCount || 0;
            chemicalCompanyArr[4].value = chemicalStatistics.pilotCount || 0;
            return chemicalCompanyArr;
        }
    },
    destroyed () {
        let me = this;
        clearInterval(this._tableSetInterval3);
        clearInterval(this._tableSetInterval4);
        clearTimeout(this._rollSetTime);
        window.removeEventListener('resize', me.firstResize);
    },
    methods: {
        firstResize () {
            let me = this;
            clearInterval(me._tableSetInterval3);
            clearInterval(me._tableSetInterval4);
            me._rollSetTime && clearTimeout(me._rollSetTime);
            me._rollSetTime = setTimeout(() => {
                me.readyRoll();
            }, 2000);
        },
        enterTable3 () {
            this.isMouseEnter3 = true;
        },
        leaveTable3 () {
            this.isMouseEnter3 = false;
        },
        enterTable4 () {
            this.isMouseEnter4 = true;
        },
        leaveTable4 () {
            this.isMouseEnter4 = false;
        },
        readyRoll () {
            this._trHeight = document.querySelector('div.emphasis-attention-company3 table  thead  tr').offsetHeight;
            let bodyHeight = document.querySelector('div.emphasis-attention-company3').offsetHeight;

            this._containBoxStyle3 = document.querySelector('div.emphasis-attention-company3 div.el-table__body-wrapper.is-scrolling-none').style;
            this._containBoxStyle4 = document.querySelector('div.emphasis-attention-company4 div.el-table__body-wrapper.is-scrolling-none').style;

            if ((this.tableData3.length + 1) * this._trHeight > bodyHeight) {
                this._containBoxStyle3.transform = `translate(0,-${this._trHeight * 2 + 'px'})`;
                this._containBoxStyle3.paddingTop = this._trHeight * 2 + 'px';
                this.beginRolling3();
            }
            if ((this.tableData4.length + 1) * this._trHeight > bodyHeight) {
                this._containBoxStyle4.transform = `translate(0,-${this._trHeight * 2 + 'px'})`;
                this._containBoxStyle4.paddingTop = this._trHeight * 2 + 'px';
                this.beginRolling4();
            }
        },
        beginRolling3 () {
            let me = this;
            this._tableSetInterval3 = setInterval(() => {
                if (!me.isMouseEnter3) {
                    this.tableData3.push(this.tableData3[0], this.tableData3[1]);
                    this._containBoxStyle3.transition = 'all .5s';
                    this._containBoxStyle3.paddingTop = this._trHeight + 'px';

                    setTimeout(() => {
                        this._containBoxStyle3.transition = 'all .5s';
                        this._containBoxStyle3.paddingTop = 0;
                    }, 2000);

                    setTimeout(() => {
                        this.tableData3.splice(0, 2);
                        this._containBoxStyle3.transition = 'all 0s ease 0s';
                        this._containBoxStyle3.paddingTop = this._trHeight * 2 + 'px';
                    }, 2500);
                }
            }, 4000);
        },
        beginRolling4 () {
            let me = this;
            this._tableSetInterval4 = setInterval(() => {
                if (!me.isMouseEnter4) {
                    this.tableData4.push(this.tableData4[0], this.tableData4[1]);
                    this._containBoxStyle4.transition = 'all .5s';
                    this._containBoxStyle4.paddingTop = this._trHeight + 'px';

                    setTimeout(() => {
                        this._containBoxStyle4.transition = 'all .5s';
                        this._containBoxStyle4.paddingTop = 0;
                    }, 2000);

                    setTimeout(() => {
                        this.tableData4.splice(0, 2);
                        this._containBoxStyle4.transition = 'all 0s ease 0s';
                        this._containBoxStyle4.paddingTop = this._trHeight * 2 + 'px';
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
    @keyframes scanRotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes iconDebounce {

        0% {
            transform: translateY(0px);
        }
        25% {
            transform: translateY(2px);
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(-2px);
        }
        100% {
            transform: translateY(0px);
        }

    }

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
        height: 242px;
    }

    .two-block-rect-border-top {
        border-right-color: transparent !important;
        border-left: none !important;
    }

    .two-block-rect-height34 {
        height: 366px;
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

                .company-statistics-box {
                    display: flex;
                    width: 100%;
                    height: 166px;
                    justify-content: space-around;
                    .total-box {
                        width: 127px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        .total-number {
                            width: 127px;
                            height: 130px;
                            position: relative;
                            margin-bottom: 9px;
                            > img {
                                position: absolute;
                                &:first-child {
                                    width: 127px;
                                    height: 130px;
                                }
                                &:nth-child(2) {
                                    width: 120px;
                                    height: 120px;
                                    top: 7.5px;
                                    left: 2px;
                                    animation: scanRotate 20s infinite linear;
                                }
                            }
                            > div.icon-box {
                                width: 100%;
                                height: 100%;
                                position: relative;
                                > img {
                                    position: absolute;
                                    width: 13px;
                                    height: 14px;
                                    animation: iconDebounce 3s infinite linear;

                                    &:nth-child(1) {
                                        right: 0;
                                        top: 0;

                                    }
                                    &:nth-child(2) {
                                        left: 0;
                                        top: 0;
                                    }
                                    &:nth-child(3) {
                                        left: 0;
                                        bottom: 0;
                                    }
                                    &:nth-child(4) {
                                        right: 0;
                                        bottom: 0;
                                    }
                                }

                            }

                            > div.number {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;
                                position: absolute;
                                top: 2px;
                                left: -2px;
                                z-index: 1000;
                                font-size: 36px;
                                font-family: BebasNeue;
                                >div:first-child {
                                    height: 34px;
                                }
                            }
                        }
                        .total-title {
                            width: 138px;
                            height: 30px;
                            background: url("../../assets/img/index/94.png") center no-repeat;
                            background-size: cover;
                            line-height: 30px;
                            text-align: center;
                            font-size: 12px;
                            font-family: PingFangSC, PingFangSC-Regular;
                            font-weight: 400
                        }
                    }
                    .item-box {
                        width: 214px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        & > div:first-child {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            & > div {
                                background: url("../../assets/img/index/5.png") no-repeat;
                                background-size: contain;
                                width: 98px;
                                height: 102px;
                                position: relative;
                                &:hover {
                                    background: url("../../assets/img/index/4.png") no-repeat;
                                    background-size: contain;
                                }
                                & > div:first-child {
                                    width: 100%;
                                    text-align: center;
                                    position: absolute;
                                    top: 15px;
                                    font-size: 36px;
                                    font-family: BebasNeue;
                                }
                                & > div:last-child {
                                    width: 100%;
                                    text-align: center;
                                    position: absolute;
                                    top: 63px;
                                    font-size: 12px;
                                    font-weight: 400;
                                }
                            }
                        }
                        & > div:last-child {
                            background: url("../../assets/img/index/6.png") no-repeat;
                            background-size: contain;
                            width: 214px;
                            height: 58px;
                            position: relative;
                            &:hover {
                                background: url("../../assets/img/index/16.png") no-repeat;
                                background-size: contain;
                            }
                            > div:last-child {
                                height: 58px;
                                line-height: 60px;
                                position: absolute;
                                left: 130px;
                                font-size: 36px;
                                font-family: BebasNeue;
                            }
                            > div:first-child {
                                height: 100%;
                                line-height: 58px;
                                text-align: center;
                                position: absolute;
                                left: 57px;
                                font-size: 12px;
                                font-weight: 400;
                            }
                        }
                    }
                }
                .test-company {
                    background: url("../../assets/img/index/93.png") center no-repeat;
                    background-size: contain;
                    width: 170px;
                    height: 124px;
                    &:hover {
                        background: url("../../assets/img/index/92.png") center no-repeat;
                        background-size: contain;
                    }
                    >div:first-child {
                        width:100%;
                        height:92px;
                        line-height: 92px;
                        text-align: center;
                        font-size: 36px;
                        font-family: BebasNeue;
                    }
                    >div:last-child {
                        width:100%;
                        height:32px;
                        line-height: 32px;
                        text-align: center;
                    }
                }
                .base-info {
                    background: url("../../assets/img/index/94.png") center no-repeat;
                    background-size: contain;
                    width: 138px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                }
                .chemical-company-item {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:nth-child(n + 3) {
                        align-items: flex-end;
                    }
                    & > div {
                        width: 196px;
                        height: 52px;
                        background: url("../../assets/img/index/91.png") center no-repeat;
                        background-size: contain;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        &:hover {
                            background: url("../../assets/img/index/97.png") center no-repeat;
                            background-size: contain;
                        }
                        & > div {
                            width: 100%;
                            position: absolute;
                        }
                        & > div:first-child {
                            top: 8px;
                            right:6px;
                            font-size: 36px;
                            text-align: right;
                            font-family: BebasNeue;
                        }
                        & > div:last-child {
                            top: 12px;
                            left:16px;
                            font-size: 12px;
                        }
                    }
                }
            }

            .table-box {
                width: 100%;
                height: 290px;
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