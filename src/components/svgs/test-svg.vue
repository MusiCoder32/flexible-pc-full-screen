<template>
    <div :id="svgId" class="map-point">
    </div>
</template>
<script>
import {d3, init} from './svgs';

let _this;
export default {
    name: 'test-svgs',
    props: {
        svgId: {
            require: true,
            type: String
        }
    },
    data () {
        return {
            stdDeviation: 3,
            width: 193,
            height: 125,
            rx: 40,
            ry: 18,
            h: 10,
            strokeWidth: 0.5,
            innerRadius: 0.4,
            salesData: [
                { label: 'Basic', color: '#007BFF', value: 6 },
                { label: 'Plus', color: '#FFD600', value: 3 },
                { label: 'Lite', color: '#FF732E', value: 2 },
                { label: 'Elite', color: '#FF5E54', value: 1 }
            ],
            animationInterval: null,
            svg: {},
            feGaussianBlur: {},
            shadow: {},
            bars: {},
            sizeRatio: 0
        };
    },
    mounted () {
        _this = this;
        init(this.pieCircleDraw, this.svgId, [this.width, this.height, this.rx, this.ry, this.h, this.strokeWidth]);

    },
    destroyed () {

    },
    methods: {
        // barDraw (svg) {
        //     let id = this.id;
        //     let x = this.width / 2;
        //     let y = this.height / 2;
        //     d3.select(`#g_bar${id}`) && (d3.select(`#g_bar${id}`).remove());
        //     let bars = svg.append('g').attr('id', 'g_bar' + id).attr('transform', `translate(${x},${y + 3 * _this.sizeRatio})`);
        //     let fd = [33, 40, 29];
        //     bars.selectAll('.bar').data(fd).enter()
        //         .append('rect')
        //         .attr('class', 'bar')
        //         .attr('x', function (d, i) {
        //             return (i * 11 - 15) * _this.sizeRatio;
        //         })
        //         .attr('y', function (d) {
        //             return -d * _this.sizeRatio;
        //         })
        //         .attr('width', 8 * _this.sizeRatio)
        //         .attr('height', function (d) {
        //             return d * _this.sizeRatio;
        //         })
        //         .attr('fill', 'url(#g_bar_linerGradient)');
        //     this.bars = bars.selectAll('.bar').data(fd);
        // },
        pieCircleDraw (svg, cw, ch, rx, ry, h, strokeWidth) {
            let id = this.svgId;
            let ir = this.innerRadius;
            let data = this.salesData;
            svg.attr('width', cw).attr('height', ch);
            //定义过滤器生成阴影
            let defs = svg.append('defs');

            let filter = defs.append('filter')
                             .attr('id', 'pieShadow' + id)
                             .attr('width', '200%')
                             .attr('height', '200%');
            this.feGaussianBlur = filter.append('feGaussianBlur');
            this.feGaussianBlur
                .attr('in', 'SourceGraphic')
                .attr('result', 'blurOut')
                .attr('stdDeviation', '3');
            //绘制底部特效

            //绘制饼图

            let _data = d3.pie().sort(null).value(function (d) {
                return d.value;
            })(data);

            d3.select(`#g_pie${id}`) && (d3.select(`#g_pie${id}`).remove());
            let slices = svg.append('g').attr('id', 'g_pie' + id).attr('transform', 'translate(' + cw / 2 + ',' + ch / 2 + ')')
                            .attr('class', 'slices');
            slices.selectAll().data(_data).enter().append('g').attr('id', function (d, i) {
                return `${id}_pie_group_${_data.length - 1 - i}`;
            }).each(function (d, i) {
                let item = d3.select(`#${id}_pie_group_${i}`).on('mouseover', () => _this.mouseover(id, item))
                             .on('mouseout', () => _this.mouseout(id));


                item.append('path').attr('class', 'innerSlice')
                    .style('fill', '#005EFF')
                    .attr('d', () => {
                        return _this.pieInner(d, rx + 0.5, ry + 0.5, h, ir);
                    });


                item.append('path').attr('class', 'topSlice')
                    .style('fill', function () {
                        return d.data.color;
                    })
                    .style('stroke', '#005EFF')
                    .style('stroke-width', strokeWidth)
                    .attr('d', () => {
                        return _this.pieTop(d, rx, ry, ir);
                    });

                item.append('path').attr('class', 'outerSlice')
                    .style('fill', '#005EFF')
                    .attr('d', () => {
                        return _this.pieOuter(d, rx - .5, ry - .5, h);
                    });
            });

            //绘制中心直方图
            //定义渐变
            let linearGradient = svg.append('defs')
                                    .append('linearGradient')
                                    .attr('id', 'g_bar_linerGradient' + id)
                                    .attr('x1', '0%')
                                    .attr('y1', '0%')
                                    .attr('x2', '0%')
                                    .attr('y2', '100%');

            linearGradient.append('stop')
                          .attr('offset', '0%')
                          .attr('style', 'stop-color:#007BFF;stop-opacity:1');
            linearGradient.append('stop')
                          .attr('offset', '100%')
                          .attr('style', 'stop-color:#007BFF;stop-opacity:0');
            // this.barDraw(svg);

        },
        pieTop (d, rx, ry, ir) {
            if (d.endAngle - d.startAngle == 0) return 'M 0 0';
            var sx = rx * Math.cos(d.startAngle),
                sy = ry * Math.sin(d.startAngle),
                ex = rx * Math.cos(d.endAngle),
                ey = ry * Math.sin(d.endAngle);

            var ret = [];
            ret.push('M', sx, sy, 'A', rx, ry, '0', (d.endAngle - d.startAngle > Math.PI ? 1 : 0), '1', ex, ey, 'L', ir * ex, ir * ey);
            ret.push('A', ir * rx, ir * ry, '0', (d.endAngle - d.startAngle > Math.PI ? 1 : 0), '0', ir * sx, ir * sy, 'z');
            return ret.join(' ');
        },

        pieOuter (d, rx, ry, h) {
            var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
            var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);

            var sx = rx * Math.cos(startAngle),
                sy = ry * Math.sin(startAngle),
                ex = rx * Math.cos(endAngle),
                ey = ry * Math.sin(endAngle);

            var ret = [];
            ret.push('M', sx, h + sy, 'A', rx, ry, '0 0 1', ex, h + ey, 'L', ex, ey, 'A', rx, ry, '0 0 0', sx, sy, 'z');
            return ret.join(' ');
        },

        pieInner (d, rx, ry, h, ir) {
            var startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle);
            var endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle);

            var sx = ir * rx * Math.cos(startAngle),
                sy = ir * ry * Math.sin(startAngle),
                ex = ir * rx * Math.cos(endAngle),
                ey = ir * ry * Math.sin(endAngle);

            var ret = [];
            // rx ry 两个半轴长度
            ret.push('M', sx, sy, 'A', ir * rx, ir * ry, '0 0 1', ex, ey, 'L', ex, h + ey, 'A', ir * rx, ir * ry, '0 0 0', sx, h + sy, 'z');
            return ret.join(' ');
        },

        mouseover (id, current) {
            let selectString = `g[id^=${id}_pie_group_]`;
            let gArray = d3.selectAll(selectString)._groups[0];
            for (let j = 0; j < gArray.length; j++) {
                gArray[j].style = 'opacity:0.5';
            }
            current.attr('style', 'opacity:1');
        },

        mouseout (id) {
            let selectString = `g[id^=${id}_pie_group_]`;
            let gArray = d3.selectAll(selectString)._groups[0];
            for (let j = 0; j < gArray.length; j++) {
                gArray[j].style = 'opacity:1';
            }
        }

    }
};
</script>

<style scoped>
    .marker-content {
        width: 193px;
        height: 204px;
    }

    .text-value {
        font-size: 30px;
        font-family: 'BebasNeue';
        text-align: left;
    }

    .text-name {
        font-size: 12px;
        font-family: 'BebasNeue';
        text-align: left;
    }

    .map-point {
        width: 193px;
        height: 204px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>