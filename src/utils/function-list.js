// 并集
export const union = (a, b) => a.concat(b.filter(v => !a.includes(v))); // [1,2,3,4,5]
// 交集
export const intersection = (a, b) => a.filter(v => b.includes(v)); // [2]
// 差集
export const difference = (a, b) => a.concat(b).filter(v => a.includes(v) && !b.includes(v)); // [1,3]
//深拷贝
export const cloneDeep = (a) => JSON.parse(JSON.stringify(a));

//使用递归的方式实现数组、对象的深拷贝
export const cloneDeepForSimpleObj = (obj) => {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是
    if (obj && typeof obj === 'object') {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = cloneDeepForSimpleObj(obj[key]);
                }
                else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
};

export const noValue = (ele) => {
    if (typeof ele === 'undefined') {//先判断类型
        return true;
    }
    else if (ele === '') {
        return true;
    }
    else if (ele == null) {
        return true;
    }
    else if (typeof(ele) == 'object') {
        var a = JSON.stringify(ele);
        if (a == '[]') return true;
        else if (a == '{}') return true;
    }
    return false;
};
/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    };
};


/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        }
        else {
            last = now;
            fn.apply(this, args);
        }
    };
};

/**
 sessionStorage
 */
export const setSessionStorage = (key, val) => {
    let obj = {};
    obj.data = val;
    sessionStorage.setItem(key, JSON.stringify(obj));

};
export const getSessionStorage = (key) => {
    let obj = JSON.parse(sessionStorage.getItem(key));
    return obj.data;

};
/**
 localStorage
 */
export const timeFormat = (date, fmt = 'YYYY-mm-dd HH:MM') => {
    let ret;
    let opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
        }
    }
    return fmt;
};
/**
 localStorage
 */

export const setUniqueName = (baseName, arr, len = arr.length) => {
    let name = baseName + len;
    let isRepeat = false;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (name === item.name) {
            isRepeat = true;
            break;
        }
    }
    if (isRepeat) {
        return setUniqueName(baseName, arr, len + 1);
    }
    else {
        return name;
    }
};
export const setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toGMTString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
};
export const getCookie = (cname) => {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};
export const shuffle = (array)=> {
    let len = array.length;
    for (let i = len - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
