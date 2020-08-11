<template>
    <div class="svg-content" :id="id">
    </div>
</template>
<script>
import {d3, svgInit} from './svgs';

export default {
    name: 'DangerousCircle',
    data () {
        return {
            id: 'DangerousCircle',
            width: 220,
            height: 150,
            lineWidth: 15, // 进度条宽
            radius: 90, // 圆形进度条中心线的半径
            spaceBetween: 20, // 圆形进度条中心线的半径
            circleBackground: 'rgba(0,123,255,0.2)',
            tickSize: 7,
            tickTitlePadding: -25,
            tickStrokeWidth: 1,
            tickFontSize: 14,
            backgroundCirclePadding: 42,
            tickPadding: 21,
            startAngle: -Math.PI // 起始角度，0为3点钟方向
        };
    },
    mounted () {
        svgInit(this.drawSvg, this.id, [this.width, this.height, this.radius, this.lineWidth, this.spaceBetween, this.tickSize, this.tickTitlePadding, this.tickStrokeWidth, this.tickFontSize, this.backgroundCirclePadding, this.tickPadding]);
    },
    computed: {
        percent() {
            let obj = this.$store.state.coalData.companyRiskCount || {};
            let total = obj.total||0
            let lowRiskCount = obj.lowRiskCount||0
            let generalRiskCount = obj.generalRiskCount||0
            let highRiskCount = obj.highRiskCount||0
            let significantRisk = obj.significantRisk||0
            lowRiskCount = lowRiskCount/total*100
            generalRiskCount = generalRiskCount/total*100
            highRiskCount = highRiskCount/total*100
            significantRisk = significantRisk/total*100
            return {
                lowRiskCount,
                generalRiskCount,
                highRiskCount,
                significantRisk,
            }
        }
    },
    methods: {
        drawSvg (svg, id, width, height, r, lineWidth, spaceBetween, tickSize, tickTitlePadding, tickStrokeWidth, tickFontSize, backgroundCirclePadding, tickPadding) {
            let me = this;
            svg.attr('width', width);
            svg.attr('height', height);
            let rx = width / 2;
            let ry = height - backgroundCirclePadding;

            let data = [
                {
                    process: me.percent.lowRiskCount, // 进度 100为满
                    fill: '#007BFF', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 2 // 进度条边框宽度
                }, {
                    process: me.percent.generalRiskCount, // 进度 100为满
                    fill: '#FFD600', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 2 // 进度条边框宽度
                }, {
                    process: me.percent.highRiskCount, // 进度 100为满
                    fill: '#FF732E', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 0 // 进度条边框宽度
                }, {
                    process: me.percent.significantRisk, // 进度 100为满
                    fill: '#FF5E54', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 0 // 进度条边框宽度
                }
            ];

            let grounp = svg.selectAll('g')
                            .data(data)
                            .enter()
                            .append('g');

            // 画圆环背景
            grounp.append('path')
                  .attr('fill', me.circleBackground)
                  .attr('stroke', 'none')
                  .attr('d', drawBackground);

            // 画底部坐标

            const xScale = d3.scaleLinear().domain([0, 6]).range([0, 3 * spaceBetween])
                             .nice();
            const xAxios = d3.axisTop(xScale).ticks(3).tickSize(tickSize).tickPadding(tickTitlePadding).tickFormat((d, i) => {
                let value = '蓝';
                switch (i) {
                    case 0:
                        value = '蓝';
                        break;
                    case 1:
                        value = '黄';

                        break;
                    case 2:
                        value = '橙';
                        break;
                    case 3:
                        value = '红';
                        break;
                }
                return value;
            });

            let xAxiosLeft = grounp.append('g').call(xAxios)
                                   .attr('transform', `translate(${width / 2 - r - lineWidth / 2},${height - tickPadding})`);

            const xAxios2 = d3.axisTop(xScale).ticks(3).tickSize(tickSize).tickPadding(tickTitlePadding).tickFormat((d, i) => {
                let value = '';
                switch (i) {
                    case 0:
                        value = '红';
                        break;
                    case 1:
                        value = '橙';

                        break;
                    case 2:
                        value = '黄';
                        break;
                    case 3:
                        value = '蓝';
                        break;
                }
                return value;
            });

            let xAxiosRight = grounp.append('g').call(xAxios2)
                                    .attr('transform', `translate(${width / 2 + r - 3 * spaceBetween + lineWidth / 2},${height - tickPadding})`);

            xAxiosRight.selectAll('line').attr('stroke', 'rgba(0,123,255,1)').attr('stroke-width', tickStrokeWidth).attr('fill', 'rgba(0,123,255,1)');
            xAxiosRight.selectAll('text')
                       .attr('style', `fill:rgba(255,255,255,0.2);font-family:PingFang;font-size:${tickFontSize}px;font-weight:400`);
            xAxiosRight.select('path').remove();
            xAxiosLeft.selectAll('line').attr('stroke', 'rgba(0,123,255,1)').attr('stroke-width', tickStrokeWidth).attr('fill', 'rgba(0,123,255,1)');
            xAxiosLeft.selectAll('text')
                      .attr('style', `fill:rgba(255,255,255,0.2);font-family:PingFang;font-size:${tickFontSize}px;font-weight:400`);
            xAxiosLeft.select('path').remove();

            grounp.append('g')
                  .attr('transform', `translate(${width / 2},${height - tickPadding})`)
                  .append('path')
                  .attr('d', `m-${r + lineWidth / 2},0 l${r * 2 + lineWidth},0`)
                  .attr('stroke', 'rgba(0,123,255,1)')
                  .attr('stroke-width', tickStrokeWidth);

            //画圆环内
            grounp.append('path')
                  .attr('class', (d, i) => me.id + '_inner-circle_' + i)
                  .attr('fill', function (d) {
                      return d.fill;
                  })
                  .attr('stroke', function (d) {
                      return d.stroke;
                  })
                  .attr('stroke-width', function (d) {
                      return d.strokeWidth;
                  })
                  .attr('d', (d, i) => draw(d, i, 0));

            //更新圆环内，产生动画效果
            data.forEach((item, index) => {
                let process = 0;
                let t = setInterval(function () {
                    process += 0.5;
                    let path = svg.select('.' + me.id + '_inner-circle_' + index);
                    path.attr('d', (d) => draw(d, index, process));
                    if (process >= data[index].process) {
                        clearInterval(t);
                    }
                });
            });


            function drawBackground (d, i) {
                let radius = r - i * spaceBetween;
                let startAngle = me.startAngle;
                let endAngle = Math.PI;
                var start_point = {
                    x: rx + Math.cos(startAngle) * (radius),
                    y: ry + Math.sin(startAngle) * (radius)
                };
                var end_point = {
                    x: rx + Math.cos(endAngle + startAngle) * (radius),
                    y: ry + Math.sin(endAngle + startAngle) * (radius)
                };

                var path = d3.path();
                path.arc(start_point.x, start_point.y, lineWidth / 2, startAngle - Math.PI, startAngle);
                path.arc(rx, ry, radius + lineWidth / 2, startAngle, startAngle + endAngle);
                path.arc(end_point.x, end_point.y, lineWidth / 2, startAngle + endAngle, startAngle + endAngle + Math.PI);
                path.arc(rx, ry, radius - lineWidth / 2, startAngle + endAngle, startAngle, true);
                path.closePath();
                return path;
            }

            function draw (d, i, process) {
                let radius = r - i * spaceBetween;
                let startAngle = me.startAngle;
                var processAngle = (process / 100) * 2 * Math.PI;
                var start_point = {
                    x: rx + Math.cos(startAngle) * (radius),
                    y: ry + Math.sin(startAngle) * (radius)
                };
                var end_point = {
                    x: rx + Math.cos(processAngle + startAngle) * (radius),
                    y: ry + Math.sin(processAngle + startAngle) * (radius)
                };

                var path = d3.path();
                path.arc(start_point.x, start_point.y, lineWidth / 2, startAngle - Math.PI, startAngle);
                path.arc(rx, ry, radius + lineWidth / 2, startAngle, startAngle + processAngle);
                path.arc(end_point.x, end_point.y, lineWidth / 2, startAngle + processAngle, startAngle + processAngle + Math.PI);
                path.arc(rx, ry, radius - lineWidth / 2, startAngle + processAngle, startAngle, true);
                path.closePath();
                return path;
            }
        }
    }
};
</script>
