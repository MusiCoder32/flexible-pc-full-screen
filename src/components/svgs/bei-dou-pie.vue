<template>
    <div class="svg-content" :id="id">
        <svg width="0" height="0">
            <defs>
                <filter :id="id + '_filter'">
                    <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"/>
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2"/>
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
                </filter>
            </defs>
        </svg>
    </div>
</template>
<script>
import {d3, svgInit} from './svgs';

export default {
    name: 'BeiDouPie',
    data () {
        return {
            id: 'BeiDouPie',
            width: 140,
            height: 140,
            lineWidth: 15, // 进度条宽
            radius: 66, // 圆形进度条中心线的半径
            innerRadius: 27, // 圆形进度条中心线的半径
            padding: 6,//
            circleBackground: 'rgba(0,123,255,0.2)',
            stroke: '#00FFF3',
            titleFontSize:32,
            nameFontSize:10,
            strokeWidth: 1, // 进度条边框宽度
            startAngle: -Math.PI // 起始角度，0为3点钟方向
        };
    },
    mounted () {
        svgInit(this.drawSvg, this.id, [this.width, this.height, this.radius, this.innerRadius, this.padding,this.titleFontSize,this.nameFontSize]);
    },
    methods: {
        drawSvg (svg, id, width, height, r, ir, padding,f1,f2) {
            svg.attr('width', width);
            svg.attr('height', height);
            let rx = width / 2;
            let ry = height / 2;
            let me = this;
            var data = [
                {
                    value: 10, // 进度 100为满
                    fill: '#9631FF', // 进度条颜色
                    stroke: 'none' // 进度条边框颜色
                },
                {
                    value: 10, // 进度 100为满
                    fill: '#4E00FF', // 进度条颜色
                    stroke: 'none' // 进度条边框颜色
                },
                {
                    value: 10, // 进度 100为满
                    fill: '#007BFF', // 进度条颜色
                    stroke: 'none' // 进度条边框颜色
                }
            ];

            const arcGenerator1 = d3.arc().innerRadius(ir).outerRadius(r+padding/6);

            svg.append('path')
               .attr('transform', `translate(${rx},${ry})`)
               .attr('fill', me.circleBackground)
               .attr('stroke', 'none')
               .attr('d', arcGenerator1({ startAngle: 0, endAngle: 2 * Math.PI }));

            const arcGenerator3 = d3.arc().innerRadius(ir + padding).outerRadius(r - padding);
            svg.append('path')
               .attr('transform', `translate(${rx},${ry})`)
               .attr('fill', me.stroke)
               .attr('stroke', 'none')
               .attr('d', arcGenerator3({ startAngle: 0, endAngle: 2 * Math.PI }))
               .attr('filter', `url(#${me.id}_filter)`);


            let grounp = svg.append('g');
            const arcGenerator2 = d3.arc().innerRadius(ir + padding).outerRadius(r - padding);
            const pie = d3.pie()
                          .value(d => d.value);
            grounp.selectAll('path').data(pie(data)).join('path')
                  .attr('transform', `translate(${rx},${ry})`)
                  .attr('class', (d, i) => me.id + '_inner-circle_' + i)
                  .attr('fill', function (d) {
                      return d.data.fill;
                  })
                  .attr('stroke', me.stroke)
                  .attr('stroke-width', me.strokeWidth)
                  .attr('d', arcGenerator2);

            svg.append('text').text('426')
               .attr('style', `font-size:${f1}px;font-family:BebasNeue;fill:white;text-anchor: middle;dominant-baseline: middle`)
               .attr('transform', `translate(${rx},${ry*0.9})`);
            svg.append('text').text('总量')
               .attr('style', `font-size:${f2}px;font-family:PingFang;fill:white;font-weight: 400;text-anchor: middle;dominant-baseline: middle`)
               .attr('transform', `translate(${rx},${ry*1.25})`);
        }
    }
};
</script>
