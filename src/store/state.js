import {noValue} from '../utils/function-list';

let firstData = {};
let coalData = {};
let chemicalData = {};
let sensorTypes = {};

try {

    noValue(localStorage.getItem('firstData')) || (firstData = JSON.parse(localStorage.getItem('firstData')));
    noValue(localStorage.getItem('coalData')) || (coalData = JSON.parse(localStorage.getItem('coalData')));
    noValue(localStorage.getItem('chemicalData')) || (chemicalData = JSON.parse(localStorage.getItem('chemicalData')));
    noValue(localStorage.getItem('sensorTypes')) || (sensorTypes = JSON.parse(localStorage.getItem('sensorTypes')));

}
catch (e) {
    console.log(e);
}

const state = {
    firstData,
    coalData,
    chemicalData,
    sensorTypes
};

export default state;