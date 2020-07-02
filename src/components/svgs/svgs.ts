import * as d3 from 'd3';

let sizeRatio;

function computedSize() {
    let docEle = document.documentElement;
    let screenRatioByDesign = 16 / 9;
    let screenRatio = docEle.clientWidth / docEle.clientHeight;
    sizeRatio = docEle.clientWidth / 1920 * (screenRatio > screenRatioByDesign ? (screenRatioByDesign / screenRatio) : 1);
}


function draw(call: Function, id: string, allSize: Array<number>) {
    let svg = d3.select('#' + id).append('svg').attr('id', 'svg_' + id);
    computedSize();
    let newAllSize = allSize.map(item => {
        return sizeRatio * item;
    });
    call(svg,id, ...newAllSize);
}

function svgInit(call: Function, id: string, allSize: Array<number>) {
    draw(call, id, allSize);
    window.addEventListener('resize', () => {
        d3.select('#svg_' + id).remove();
        draw(call, id, allSize);
    });
}
export {
    d3,
    svgInit,
};


