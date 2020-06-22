<template>
    <div :id="id" class="map-point">
    </div>
</template>
<script>
import * as d3 from "d3"

let _this

export default {
    name: "first-map",
    data () {
        return {
            originWidth: 193,
            originHeight: 165,
            originRx: 40,
            originRy: 18,
            originRh: 4,
            originInnerRadius: 0.4,
            width: 193,
            height: 165,
            rx: 40,
            ry: 18,
            h: 4,
            innerRadius: 0.4,
            salesData: [
                { label: "Basic", color: "#007BFF", value: 6 },
                { label: "Plus", color: "#FFD600", value: 3 },
                { label: "Lite", color: "#FF732E", value: 2 },
                { label: "Elite", color: "#FF5E54", value: 1 },
            ],
            animationInterval: null,
            svg: {},
            id: 'mapPoint'
        }
    },
    mounted () {
        _this = this
        this.computedSize()
        this.pieCircleDraw(this.id, this.salesData, this.width, this.height, this.rx, this.ry, this.h, this.innerRadius, false)
        window.addEventListener('resize', _this.onResize)

    },
    destroyed () {
        this.animationInterval && clearInterval(this.animationInterval)
    },
    methods: {
        onResize () {
            this.computedSize()
            this.svg.attr('width', this.width).attr('height', this.height)
            this.pieDraw(this.svg)
        },
        computedSize () {
            let docEle = document.documentElement
            let screenRatioByDesign = 16 / 9;
            let screenRatio = docEle.clientWidth / docEle.clientHeight;
            let sizeRatio = docEle.clientWidth / 1920 * (screenRatio > screenRatioByDesign ? (screenRatioByDesign / screenRatio) : 1)
            this.width = sizeRatio * this.originWidth
            this.height = sizeRatio * this.originHeight
            this.rx = sizeRatio * this.originRx
            this.ry = sizeRatio * this.originRy
            this.innerRadius = sizeRatio * this.originInnerRadius

        },
        animationCircle (svg) {
            let animationColor = '#007BFF'
            let animation = svg.append("g")
                .attr("id", "g_animation" + this.id).attr("transform", "translate(" + _this.width / 2 + "," + _this.height / 2 + ")")
                .on('mouseover', () => {
                    animationColor = '#00FFF3'
                })
                .on('mouseout', () => {
                    animationColor = '#007BFF'
                })
            let circleData = [0.80, 0.60, 0.40, 0.20]
            this.updateCircle(animation.selectAll('ellipse').data(circleData).enter().append('ellipse'), animationColor, _this.rx, _this.ry, _this.h)

            let i = 0
            this.animationInterval = setInterval(() => {
                let j = i / 25
                this.updateCircle(animation.selectAll('ellipse').data(circleData), animationColor, _this.rx, _this.ry, _this.h, j)
                i++
                i = i % 101
            }, 100)

            animation.append('ellipse')
                .attr('cx', 0)
                .attr('cy', 3)
                .attr('rx', this.rx + 2)
                .attr('ry', this.ry + 3)
                .style("fill", '#082155')
                .attr('filter', 'url(#pieShadow)')
            // .style("fill", '#00B9FF')
        },
        pieDraw (svg) {
            let _data = d3.pie().sort(null).value(function (d) {
                return d.value;
            })(this.salesData);
            let id = this.id
            let rx = this.rx;
            let ry = this.ry;
            let h = this.h;
            let ir = this.innerRadius;
            svg.select(`g_pie${id}`) && (svg.select(`g_pie${id}`).remove())
            let slices = svg.append("g").attr("id", "g_pie" + id).attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")")
                .attr("class", "slices");
            slices.selectAll().data(_data).enter().append('g').attr("id", function (d, i) {
                return `${id}_pie_group_${_data.length - 1 - i}`
            }).each(function (d, i) {
                let item = d3.select(`#${id}_pie_group_${i}`).on('mouseover', () => _this.mouseover(id, item))
                    .on('mouseout', () => _this.mouseout(id))


                item.append("path").attr("class", "innerSlice")
                    .style("fill", '#005EFF')
                    .attr("d", () => {
                        return _this.pieInner(d, rx + 0.5, ry + 0.5, h, ir);
                    })


                item.append("path").attr("class", "topSlice")
                    .style("fill", function () {
                        return d.data.color;
                    })
                    .style("stroke", '#005EFF')
                    .attr("d", () => {
                        return _this.pieTop(d, rx, ry, ir);
                    })

                item.append("path").attr("class", "outerSlice")
                    .style("fill", '#005EFF')
                    .attr("d", () => {
                        return _this.pieOuter(d, rx - .5, ry - .5, h);
                    })
            })
        },
        pieCircleDraw (id, data, cw , ch) {

            let x , y;
            x = cw / 2;
            y = ch / 2;
            let svg = d3.select("#" + id).append('svg')
            this.svg = svg
            svg.attr('width', cw).attr('height', ch)
            //定义过滤器生成阴影
            let defs = svg.append("defs");

            let filter = defs.append("filter")
                .attr("id", "pieShadow")
                .attr("width", "200%")
                .attr("height", "200%")

            filter.append("feGaussianBlur")
                .attr("in", "SourceGraphic")
                .attr("result", "blurOut")
                .attr("stdDeviation", "3");
            //绘制底部特效
            this.animationCircle(svg, x, y)

            //绘制饼图

            this.pieDraw(svg)

            //绘制中心直方图
            //定义渐变
            let linearGradient = svg.append('defs')
                .append('linearGradient')
                .attr('id', 'g_bar_linerGradient')
                .attr('x1', '0%')
                .attr('y1', '0%')
                .attr('x2', '0%')
                .attr('y2', '100%')

            linearGradient.append('stop')
                .attr('offset', '0%')
                .attr('style', 'stop-color:#007BFF;stop-opacity:1')
            linearGradient.append('stop')
                .attr('offset', '100%')
                .attr('style', 'stop-color:#007BFF;stop-opacity:0')

            let bars = svg.append("g").attr("id", "g_bar" + id).attr("transform", `translate(${x},${y + 3})`)
            // Create bars for histogram to contain rectangles and freq labels.
            let fd = [33, 40, 29]
            // create function for x-axis mapping.


            bars.selectAll(".bar").data(fd).enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function (d, i) {
                    return i * 11 - 15;
                })
                .attr("y", function (d) {
                    return -d;
                })
                .attr("width", 8)
                .attr("height", function (d) {
                    return d;
                })
                .attr('fill', 'url(#g_bar_linerGradient)')
        },
        pieTop (d, rx, ry, ir) {
            if (d.endAngle - d.startAngle == 0) return "M 0 0";
            var sx = rx * Math.cos(d.startAngle),
                sy = ry * Math.sin(d.startAngle),
                ex = rx * Math.cos(d.endAngle),
                ey = ry * Math.sin(d.endAngle);

            var ret = [];
            ret.push("M", sx, sy, "A", rx, ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "1", ex, ey, "L", ir * ex, ir * ey);
            ret.push("A", ir * rx, ir * ry, "0", (d.endAngle - d.startAngle > Math.PI ? 1 : 0), "0", ir * sx, ir * sy, "z");
            return ret.join(" ");
        },

        pieOuter (d, rx, ry, h) {
            var startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle);
            var endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle);

            var sx = rx * Math.cos(startAngle),
                sy = ry * Math.sin(startAngle),
                ex = rx * Math.cos(endAngle),
                ey = ry * Math.sin(endAngle);

            var ret = [];
            ret.push("M", sx, h + sy, "A", rx, ry, "0 0 1", ex, h + ey, "L", ex, ey, "A", rx, ry, "0 0 0", sx, sy, "z");
            return ret.join(" ");
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
            ret.push("M", sx, sy, "A", ir * rx, ir * ry, "0 0 1", ex, ey, "L", ex, h + ey, "A", ir * rx, ir * ry, "0 0 0", sx, h + sy, "z");
            console.log(ret.join(" "))
            return ret.join(" ");
        },

        getPercent (d) {
            return (d.endAngle - d.startAngle > 0.2 ?
                Math.round(1000 * (d.endAngle - d.startAngle) / (Math.PI * 2)) / 10 + '%' : '');
        },

        mouseover (id, current) {
            let selectString = `g[id^=${id}_pie_group_]`
            let gArray = d3.selectAll(selectString)._groups[0]
            for (let j = 0; j < gArray.length; j++) {
                gArray[j].style = 'opacity:0.5'
            }
            current.attr('style', 'opacity:1')
        },

        mouseout (id) {
            let selectString = `g[id^=${id}_pie_group_]`
            let gArray = d3.selectAll(selectString)._groups[0]
            for (let j = 0; j < gArray.length; j++) {
                gArray[j].style = 'opacity:1'
            }
        },

        updateCircle (circleArr, color, rx, ry, h, scale = 1) {
            circleArr.attr('cx', 0)
                .attr('cy', (d, i) => {
                        let res = i + scale
                        if (res > 4) {
                            res = res - 4
                        }
                        return h * res + 3
                    }
                )
                .attr('rx', (d, i) => {
                    let res = i + scale
                    if ((i + scale) > 4) {
                        res = res - 4
                    }
                    return rx + 10 * res
                })
                .attr('ry', (d, i) => {
                        let res = i + scale
                        if (res > 4) {
                            res = res - 4
                        }
                        return ry + 5 * res
                    }
                )
                .style("fill", color)
                .style("opacity", (d, i) => {
                    let res = 4 - i - scale
                    if (res < 0) {
                        res = 4 + res
                    }
                    return 0.2 * res
                })
        },
    }
}
</script>

<style scoped>
    .map-point {
        width: 193px;
        height: 165px;
    }
</style>