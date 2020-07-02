<template>
    <div class="svg-content" :id="svgId">
        <div class="title">78</div>
    </div>
</template>
<script>
import {d3, svgInit} from './svgs';

export default {
    name: 'test-svgs',
    props: {
        svgId: {
            require: true,
            type: String
        },
        primaryColor: {
            require:true,
            type:String
        },
        secondaryColor: {
            require:true,
            type:String
        },
        thirdColor: {
            require:true,
            type:String
        },
        fourthColor: {
            require:true,
            type:String
        }
    },
    data () {
        return {
            stdDeviation: 3,
            width: 60,
            height: 60,
            rx: 22,
            ry: 9,
            h: 4,
            rx3: 27,
            ry3: 10,
            h3:12,
            strokeWidth: 8,
        };
    },
    mounted () {
        svgInit(this.pieCircleDraw, this.svgId, [this.width, this.height, this.rx, this.ry, this.h, this.rx3,this.ry3,this.h3,this.strokeWidth, 16, 22]);

    },
    destroyed () {

    },
    methods: {
        barDraw (svg, id, x, y, h, b1, bWidth) {
            d3.select(`#g_bar_${id}`) && (d3.select(`#g_bar${id}`).remove());
            let bars = svg.append('g').attr('id', 'g_bar' + id).attr('transform', `translate(${x},${y-2*h})`);
            let fd = [b1];
            bars.selectAll('.bar').data(fd).enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', () => {
                    return -(bWidth / 2);
                })
                .attr('y', function (d) {
                    return -d;
                })
                .attr('width', bWidth)
                .attr('height', function (d) {
                    return d;
                })
                .attr('fill', `url(#g_bar_linerGradient_${id})`);
            this.bars = bars.selectAll('.bar').data(fd);
        },
        pieCircleDraw (svg, id, cw, ch, rx, ry, h, rx3, ry3, h3,strokeWidth, b1, bWidth) {
            let x = cw / 2;
            let y = ch / 2;
            svg.attr('width', cw).attr('height', ch);
            //绘制底部特效

            //绘制饼图

            let slices = svg.append('g').attr('id', 'g_pie' + id).attr('transform', 'translate(' + x + ',' + y + ')')
                            .attr('class', 'slices');

            slices.append('ellipse')
                  .attr('rx', rx3)
                  .attr('ry', ry3)
                  .attr('cy',h3)
                  .attr('fill', this.thirdColor)
                  .attr('stroke', 'none')
            slices.append('ellipse')
                  .attr('rx', rx)
                  .attr('ry', ry)
                  .attr('cy',h)
                  .attr('fill', 'none')
                  .attr('stroke', this.secondaryColor)
                  .attr('stroke-width', strokeWidth);

            slices.append('ellipse')
                  .attr('rx', rx)
                  .attr('ry', ry)
                  .attr('fill', 'none')
                  .attr('stroke', this.primaryColor)
                  .attr('stroke-width', strokeWidth);


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
                          .attr('style', `stop-color:${this.fourthColor};stop-opacity:1`);
            linearGradient.append('stop')
                          .attr('offset', '100%')
                          .attr('style', `stop-color:${this.fourthColor};stop-opacity:0`);
            this.barDraw(svg, id, x, y, h, b1, bWidth);
        }

    }
};
</script>

<style scoped>
    .svg-content {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        position: relative;
        overflow:auto;
    }
    .title {
        position: absolute;
        left:50%;
        transform: translate(-50%,0);
        top:10%;
        width: 15px;
        height: 19px;
        font-size: 16px;
        font-family: BebasNeue;
        text-align: left;
        color: #ffffff;
        line-height: 19px;
        letter-spacing: 1px;
    }

</style>