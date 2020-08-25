<template>
    <div :id="id" class="map-point">
        <div class="text-value">{{number}}</div>
        <div class="text-name">{{name}}</div>
    </div>
</template>
<script>
import {d3, svgInit} from './svgs';

let _this;

export default {
    name: 'first-map',
    props: {
        hover: {
            default: false,
            required: true,
            type: Boolean
        },
        number: {
            required: true,
            type: Number
        },
        lowRiskCount: {
            require: true,
            type: Number
        },
        generalRiskCount: {
            require: true,
            type: Number
        },
        highRiskCount: {
            require: true,
            type: Number
        },
        significantRisk: {
            require: true,
            type: Number
        },
        name: {
            required: true,
            type: String
        },
        id: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            stdDeviation: 3,
            width: 193,
            height: 125,
            rx: 30,
            ry: 13.5,
            h: 4,
            innerRadius: 0.4,
            animationInterval: null,
            svg: {}
        };
    },
    computed: {
        salesData () {
            return [
                { label: 'Basic', color: '#007BFF', value: this.lowRiskCount },
                { label: 'Plus', color: '#FFD600', value: this.generalRiskCount },
                { label: 'Lite', color: '#FF732E', value: this.highRiskCount },
                { label: 'Elite', color: '#FF5E54', value: this.significantRisk }
            ];
        }
    },
    mounted () {
        _this = this;
        svgInit(this.pieCircleDraw, this.id, [this.width, this.height, this.rx, this.ry, this.h, 33, 40, 29, 8, 3]);

    },
    destroyed () {
        this.animationInterval && clearInterval(this.animationInterval);
    },
    watch: {
      hover(boolean) {
          if(boolean) {
              this.svg.attr('transform','scale(1.2)')
          }else {
              this.svg.attr('transform','scale(1)')
          }
      }
    },
    methods: {

        animationCircle (svg, id, rx, ry, x, y, h) {
            let me = this;
            me._animationColor = '#007BFF';
            let animation = svg.append('g')
                               .attr('id', 'g_animation' + id).attr('transform', `translate(${x},${y})`);

            let circleData = [0.80, 0.60, 0.40, 0.20];
            this.updateCircle(animation.selectAll('ellipse').data(circleData).enter().append('ellipse'), me._animationColor, rx, ry, h);

            let i = 0;
            this.animationInterval = setInterval(() => {
                if (this.hover) {
                    me._animationColor = '#00FFF3';
                }
                else {
                    me._animationColor = '#007BFF';
                }
                let j = i / 25;
                this.updateCircle(animation.selectAll('ellipse').data(circleData), me._animationColor, rx, ry, h, j);
                i++;
                i = i % 101;
            }, 100);

            animation.append('ellipse')
                     .attr('cx', 0)
                     .attr('cy', 3)
                     .attr('rx', (rx + 2) * me.innerRadius)
                     .attr('ry', (ry + 3) * me.innerRadius)
                     .attr('stroke-width', (rx + 2) * (1 - me.innerRadius))
                     .style('stroke', '#082155')
                     .style('fill', 'none')
                     .attr('filter', 'url(#pieShadow)');
        },
        pieDraw (svg, id, rx, ry, h, ir, x, y) {
            let _data = d3.pie().sort(null).value(function (d) {
                return d.value;
            })(this.salesData);
            d3.select(`#g_pie${id}`) && (d3.select(`#g_pie${id}`).remove());
            let slices = svg.append('g').attr('id', 'g_pie' + id).attr('transform', 'translate(' + x + ',' + y + ')')
                            .attr('class', 'slices');
            slices.selectAll().data(_data).enter().append('g').attr('id', function (d, i) {
                return `${id}_pie_group_${_data.length - 1 - i}`;
            }).each(function (d, i) {
                let item = d3.select(`#${id}_pie_group_${i}`)


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
                    .attr('d', () => {
                        return _this.pieTop(d, rx, ry, ir);
                    });

                item.append('path').attr('class', 'outerSlice')
                    .style('fill', '#005EFF')
                    .attr('d', () => {
                        return _this.pieOuter(d, rx - .5, ry - .5, h);
                    });
            });
        },
        barDraw (svg, id, x, y, h, b1, b2, b3, bWidth, bPadding) {
            d3.select(`#g_bar${id}`) && (d3.select(`#g_bar${id}`).remove());
            let bars = svg.append('g').attr('id', 'g_bar' + id).attr('transform', `translate(${x},${y + h})`);
            let fd = [b1, b2, b3];
            bars.selectAll('.bar').data(fd).enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', function (d, i) {
                    return (i * (bWidth + bPadding) - (fd.length * bWidth + bPadding * 2) / 2);
                })
                .attr('y', function (d) {
                    return -d;
                })
                .attr('width', bWidth)
                .attr('height', function (d) {
                    return d;
                })
                .attr('fill', `url(#g_bar_linerGradient_${id})`);
        },
        pieCircleDraw (svg, id, cw, ch, rx, ry, h, b1, b2, b3, bWidth, bPadding) {
            let me = this;
            let ir = this.innerRadius;
            let x, y;
            x = cw / 2;
            y = ch / 2;
            this.svg = svg;
            svg.attr('width', cw).attr('height', ch)
               .on('mouseover', () => {
                   me._animationColor = '#00FFF3';
               })
               .on('mouseout', () => {
                   me._animationColor = '#007BFF';
               });
            //定义过滤器生成阴影
            let defs = svg.append('defs');

            let filter = defs.append('filter')
                             .attr('id', 'pieShadow')
                             .attr('width', rx * 2)
                             .attr('height', ry * 2)
                             .attr('x', -rx)
                             .attr('y', -ry);
            filter.append('feGaussianBlur')
                  .attr('in', 'SourceGraphic')
                  .attr('result', 'blurOut')
                  .attr('stdDeviation', '15');
            //绘制底部特效
            this.animationCircle(svg, id, rx, ry, x, y, h);

            //绘制饼图

            this.pieDraw(svg, id, rx, ry, h, ir, x, y);

            //绘制中心直方图
            //定义渐变
            let linearGradient = svg.append('defs')
                                    .append('linearGradient')
                                    .attr('id', 'g_bar_linerGradient_' + id)
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
            this.barDraw(svg, id, x, y, h, b1, b2, b3, bWidth, bPadding);

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

        updateCircle (circleArr, color, rx, ry, h, scale = 1) {
            circleArr.attr('cx', 0)
                     .attr('cy', (d, i) => {
                             let res = i + scale;
                             if (res > 4) {
                                 res = res - 4;
                             }
                             return 1.5 * h * res;
                         }
                     )
                     .attr('rx', (d, i) => {
                         let res = i + scale;
                         if ((i + scale) > 4) {
                             res = res - 4;
                         }
                         return rx + rx / 4 * res;
                     })
                     .attr('ry', (d, i) => {
                             let res = i + scale;
                             if (res > 4) {
                                 res = res - 4;
                             }
                             return ry + ry / 3 * res;
                         }
                     )
                     .style('fill', color)
                     .style('opacity', (d, i) => {
                         let res = 4 - i - scale;
                         if (res < 0) {
                             res = 4 + res;
                         }
                         return 0.2 * res;
                     });
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
        position: absolute;
        top: -30px;
        z-index: 1000;
    }

    .text-name {
        font-size: 12px;
        font-family: 'BebasNeue';
        text-align: left;
        position: absolute;
        z-index: 1000;
    }

    .map-point {
        width: 110px;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>