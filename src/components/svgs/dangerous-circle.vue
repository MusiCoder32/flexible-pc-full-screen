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
            height: 120,
            lineWidth: 15, // 进度条宽
            radius: 90, // 圆形进度条中心线的半径
            spaceBetween: 20, // 圆形进度条中心线的半径
            circleBackground: 'rgba(0,123,255,0.2)',
            startAngle: -Math.PI // 起始角度，0为3点钟方向
        };
    },
    mounted () {
        svgInit(this.drawSvg, this.id, [this.width, this.height, this.radius, this.lineWidth, this.spaceBetween]);
    },
    methods: {
        drawSvg (svg, id, width, height, r, lineWidth, spaceBetween) {
            svg.attr('width',width)
            svg.attr('height',height)
            let rx = width/2
            let ry = height-12
            let me = this;
            var data = [
                {
                    process: 10, // 进度 100为满
                    fill: '#007BFF', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 2, // 进度条边框宽度
                }, {
                    process: 20, // 进度 100为满
                    fill: '#FFD600', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 2, // 进度条边框宽度
                }, {
                    process: 40, // 进度 100为满
                    fill: '#FF732E', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 0, // 进度条边框宽度
                }, {
                    process: 30, // 进度 100为满
                    fill: '#FF5E54', // 进度条颜色
                    stroke: 'none', // 进度条边框颜色
                    strokeWidth: 0, // 进度条边框宽度
                }
            ];

            let grounp = svg.selectAll('g')
                            .data(data)
                            .enter()
                            .append('g');

            grounp.append('path')
                  .attr('fill', me.circleBackground)
                  .attr('stroke', 'none')
                  .attr('d', drawBackground);

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

            data.forEach((item, index) => {
                let process = 0;
                let t = setInterval(function () {
                    process += 0.5;
                    let path = svg.select('.'+me.id + '_inner-circle_' + index);
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
                    y: ry+ Math.sin(startAngle) * (radius)
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
