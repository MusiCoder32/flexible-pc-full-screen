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
                    :rectBorderTop="rectBorderTop"
            >
                <div class="two-rect-content">

                    <div class="two-block-rect-title font-size-medium font-weight-medium">覆盖企业</div>
                    <div class="company-statistics-box">
                        <div class="total-box">
                            <div class="total-number">
                                <img src="../../assets/img/index/13.png"/>
                                <img src="../../assets/img/index/12.png"/>
                                <div class="icon-box">
                                    <img src="../../assets/img/index/9.png"/>
                                    <img src="../../assets/img/index/8.png"/>
                                    <img src="../../assets/img/index/11.png"/>
                                    <img src="../../assets/img/index/10.png"/>
                                </div>
                                <div class="number">242</div>
                            </div>
                            <div class="total-title">
                                企业总数
                            </div>
                        </div>
                        <div class="item-box">
                            <div>
                                <div>
                                    <div>412</div>
                                    <div>尾矿库</div>
                                </div>
                                <div>
                                    <div>524</div>
                                    <div>排土场</div>
                                </div>
                            </div>
                            <div>
                                <div>露天广场</div>
                                <div>54</div>
                            </div>
                        </div>
                    </div>


                    <!--<rect-border :total="1000" title="覆盖企业"></rect-border>-->
                    <!--<div class="pie-container">-->
                    <!--<div v-for="(item,key) in pieList" class="pie-box" :key="item.name+key">-->
                    <!--<div class="two-block-pie">-->
                    <!--<slider-pie-->
                    <!--:value="item.value/total"-->
                    <!--backgroundColor="#979797"-->
                    <!--:foregroundColor="item.foregroundColor"-->
                    <!--&gt;</slider-pie>-->
                    <!--</div>-->
                    <!--<div class="pie-box-left">-->
                    <!--<div class="font-size-x2 font-weight-medium font-family-bebas">{{item.value}}</div>-->
                    <!--<div class="font-weight-medium font-size-extra-small">{{item.name}}</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
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
                <div class="two-rect-content vBox" style="height: 100%;">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">传感器布设数量统计</div>
                    <div class="hBox vh_content_around " style="width: 100%;flex-wrap:wrap;flex-grow: 1">
                        <!--<rect-border class="mb20" :total="100" title="生产企业(家)"></rect-border>-->
                        <!--<rect-border class="mb20" :total="100" title="使用企业(家)"></rect-border>-->
                        <!--<rect-border :total="100" title="经营企业(家)"></rect-border>-->
                        <!--<rect-border :total="100" title="安委会企业(家)"></rect-border>-->
                        <div v-for="(item,index) in chemicalCompanyArr" :key="item.name + index"
                             class="chemical-company-item">
                            <div>
                                <div>{{item.value}}</div>
                                <div>{{item.name}}</div>
                            </div>
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
                    <div class="two-block-rect-title font-size-medium font-weight-medium">重点关注企业</div>
                </div>
                <div class="hBox vh_content_center table-box emphasis-attention-company3">
                    <el-table
                            :data="tableData3"
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
        <div class="two-block-4">
            <oblique-angle-rect
                    class="font-size-base"
                    :rectHeight="rectHeight34"
            >
                <div class="two-rect-content">
                    <div class="two-block-rect-title font-size-medium font-weight-medium">重点关注企业</div>
                </div>
                <div class="hBox vh_content_center table-box emphasis-attention-company4">
                    <el-table
                            :data="tableData4"
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
            isMouseEnter: false,
            chemicalCompanyArr: [
                {
                    name: '危险化学品企业数量',
                    value: 98
                }, {
                    name: '重大危险源数量',
                    value: 98
                }, {
                    name: '化工园区数量',
                    value: 98
                }, {
                    name: '重点监管工艺数量',
                    value: 98
                }
            ],
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
            rectBorderTop: 'two-block-rect-border-top',
            rectHeight34: 'two-block-rect-height34',
            tableData3: [],
            tableData4: [],
            tableData: []
        };
    },
    mounted () {
        let me = this;
        this.$nextTick(() => {
            this.readyRoll();
        });
        window.addEventListener('resize', () => {
            clearInterval(me._tableSetInterval);
            me._rollSetTime && clearTimeout(me._rollSetTime)
            me._rollSetTime = setTimeout(() => {
                me.readyRoll();
            }, 2000);
        });
        for (let i = 0; i < 19; i++) {
            let obj = {
                telephone: '13359322022',
                name: '王小虎' + i,
                companyName: '四川成伟矿业有限公司'
            };
            this.tableData.push(obj);
        }
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
            this._trHeight = document.querySelector('div.emphasis-attention-company3 table  thead  tr').offsetHeight;
            let bodyHeight = document.querySelector('div.emphasis-attention-company3').offsetHeight;

            let len = Math.floor(bodyHeight / this._trHeight);
            this.tableData3 = this.tableData.slice(0, len + 2);
            this.tableData4 = this.tableData.slice(len, this.tableData.length);
            this._containBoxStyle3 = document.querySelector('div.emphasis-attention-company3 div.el-table__body-wrapper.is-scrolling-none').style;
            this._containBoxStyle4 = document.querySelector('div.emphasis-attention-company4 div.el-table__body-wrapper.is-scrolling-none').style;

            if (len < this.tableData4.length) {
                this._containBoxStyle3.transform = `translate(0,-${this._trHeight * 2 + 'px'})`;
                this._containBoxStyle3.paddingTop = this._trHeight * 2 + 'px';
                this._containBoxStyle4.transform = `translate(0,-${this._trHeight * 2 + 'px'})`;
                this._containBoxStyle4.paddingTop = this._trHeight * 2 + 'px';
                this.beginRolling();
            }
        },
        beginRolling () {
            let me = this;
            this._tableSetInterval = setInterval(() => {

                if (!me.isMouseEnter) {
                    this.tableData4.push(this.tableData3[0],this.tableData3[1]);
                    this._containBoxStyle3.transition = 'all .5s';
                    this._containBoxStyle3.paddingTop = this._trHeight + 'px';
                    this._containBoxStyle4.transition = 'all .5s';
                    this._containBoxStyle4.paddingTop = this._trHeight + 'px';

                    setTimeout(() => {
                        this._containBoxStyle3.transition = 'all .5s';
                        this._containBoxStyle3.paddingTop = 0;
                        this._containBoxStyle4.transition = 'all .5s';
                        this._containBoxStyle4.paddingTop = 0;
                    }, 2000);

                    setTimeout(() => {
                        this.tableData3.splice(0,2);
                        this.tableData4.splice(0,2);

                        this.tableData3.push(this.tableData4[0],this.tableData4[1]);

                        this._containBoxStyle3.transition = 'all 0s ease 0s';
                        this._containBoxStyle3.paddingTop = this._trHeight * 2 + 'px';
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
        }          25% {
            transform: translateY(2px);
        }          50% {
            transform: translateY(0px);
        }          75% {
            transform: translateY(-2px);
        }          100% {
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
                                    animation: scanRotate 10s infinite linear;
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
                                    animation: iconDebounce 2s infinite linear;

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
                                position: absolute;
                                top: 3px;
                                left: -2px;
                                z-index: 1000;
                                font-size: 36px;
                                font-family: BebasNeue;
                            }
                        }
                        .total-title {
                            width: 80px;
                            height: 30px;
                            background: url("../../assets/img/index/7.png") center no-repeat;
                            background-size: contain;
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
                        > div:first-child {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            > div {
                                background: url("../../assets/img/index/5.png") no-repeat;
                                background-size: contain;
                                width: 98px;
                                height: 102px;
                                position: relative;
                                &:hover {
                                    background: url("../../assets/img/index/4.png") no-repeat;
                                    background-size: contain;
                                }
                                > div:first-child {
                                    width: 100%;
                                    text-align: center;
                                    position: absolute;
                                    top: 15px;
                                    font-size: 36px;
                                    font-family: BebasNeue;
                                }
                                > div:last-child {
                                    width: 100%;
                                    text-align: center;
                                    position: absolute;
                                    top: 64px;
                                    font-size: 12px;
                                    font-weight: 400;
                                }
                            }
                        }
                        > div:last-child {
                            background: url("../../assets/img/index/6.png") no-repeat;
                            background-size: contain;
                            width: 214px;
                            height: 58px;
                            position: relative;
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
                                line-height: 60px;
                                text-align: center;
                                position: absolute;
                                left: 59px;
                                font-size: 12px;
                                font-weight: 400;
                            }
                        }
                    }
                }

                .chemical-company-item {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:nth-child(n + 3) {
                        align-items: flex-end;
                    }
                    > div {
                        width: 190px;
                        height: 67px;
                        background: url("../../assets/img/index/2.png") center no-repeat;
                        background-size: contain;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        &:hover {
                            background: url("../../assets/img/index/1.png") center no-repeat;
                            background-size: contain;
                        }
                        > div {
                            width: 100%;
                            position: absolute;
                            text-align: center;
                        }
                        > div:first-child {
                            top: 2px;
                            font-size: 36px;
                            font-family: BebasNeue;
                        }
                        > div:last-child {
                            top: 45px;
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