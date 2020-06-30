"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.svgInit = exports.d3 = void 0;
var d3 = require("d3");
exports.d3 = d3;
var sizeRatio;
function computedSize() {
    var docEle = document.documentElement;
    var screenRatioByDesign = 16 / 9;
    var screenRatio = docEle.clientWidth / docEle.clientHeight;
    sizeRatio = docEle.clientWidth / 1920 * (screenRatio > screenRatioByDesign ? (screenRatioByDesign / screenRatio) : 1);
}
function draw(call, id, allSize) {
    var svg = d3.select('#' + id).append('svg').attr('id', 'svg_' + id);
    computedSize();
    var newAllSize = allSize.map(function (item) {
        return sizeRatio * item;
    });
    call.apply(void 0, __spreadArrays([svg], newAllSize));
}
function svgInit(call, id, allSize) {
    draw(call, id, allSize);
    window.addEventListener('resize', function () {
        d3.select('#svg_' + id).remove();
        draw(call, id, allSize);
    });
}
exports.svgInit = svgInit;
