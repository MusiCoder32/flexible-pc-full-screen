import {noValue} from '../utils/function-list';

let firstData = {}

try {

    noValue(localStorage.getItem('firstData')) || (firstData = JSON.parse(localStorage.getItem('firstData')));

} catch (e) {
    console.log(e);
}

const state =  {
    firstData
}

export default state