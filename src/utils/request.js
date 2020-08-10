import axios from 'axios';
import router from '../router/router';
import { Notification } from 'element-ui';

axios.defaults.withCredentials = true
var baseUrl = '';
let timeout = 60 * 1000;
if (process.env.NODE_ENV !== 'development') {
    baseUrl = 'http://api.yzt.scdem.cn/';
    timeout = 60 * 1000;
}
var params;
let notice;
let hostNotUsed = false; //因为是在请求失败后，才将请求转发到mock，而请求超时时间为60s,故为节约调试时间，在第一次检测到主机不可用时，便将所有请求转发到mock,

if (process.env.NODE_ENV !== 'development') {
    hostNotUsed = false;
}

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    timeout: timeout
});

service.interceptors.request.use(
    config => {
        config.url = baseUrl + config.url;
        //使用mock时，将请求转发到table.json,再用mock替换请求结果
        // 之所以要先请请求转到table.json，是因为若不转，会出现请求错误，走不到mock替换数据那一步
        //由于请求是成功的，只是最后替换了值，故在浏览器中看到的值为table.json中的值
        //但在前端代码中拿到的值，为替换后的值

        // 访问主机时，将请求与响应拦截处的development屏蔽
        if (process.env.NODE_ENV === 'development') {
            if (config.method === 'get') {
                params = config.params;
            } else {
                params = config.data;
            }
        }
        // config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
        // config.url = url;
        config.headers = {
            'content-type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        };
        let token = localStorage.getItem('Authorization');
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        return Promise.reject(error);
    }
);

function whenErr(url, resolve, reject, error = '') {
    console.log(url)
    if (process.env.NODE_ENV === 'development' || hostNotUsed) {
        // hostNotUsed = true;
        let errorString = error.toLocaleString();
        let message = '请重试或联系主机管理员';
        if (errorString.indexOf('500') > -1) {
            router.push({ name: 'login' });
            Notification({
                message: `服务器错误，${message}`,
                type: 'error',
                duration: 5000
            });
        } else if (errorString.indexOf('timeout') > -1) {
            router.push({ name: 'login' });
            Notification({
                message: `连接超时`,
                type: 'error',
                duration: 5000
            });
        } else {
            Notification({
                message: `连接主机失败，报错接口：${url}`,
                type: 'error',
                duration: 5000
            });
        }
        if (!notice) {
            notice = Notification({
                message: `连接主机失败，将使用模拟数据`,
                type: 'error',
                duration: 5000
            });
        }
        const mock = require('../../mock/data.js');
        console.log(url);
        return resolve(mock(url, params));
    }
    else {
        return reject(error);
    }
}

function get(url, data) {
    if (hostNotUsed) {
        return new Promise((resolve, reject) => {
            whenErr(url, resolve, reject);
        });
    } else {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url: url,
                params: data || ''
            }).then(res => {
                resolve(res);
            }).catch(e => {
                whenErr(url, resolve, reject, e);
            });
        });
    }

}

function post(url, data) {
    if (hostNotUsed) {
        return new Promise((resolve, reject) => {
            whenErr(url, resolve, reject);
        });
    } else {
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url: url,
                data: JSON.stringify(data)
            }).then(res => {
                resolve(res);
            }).catch(e => {
                whenErr(url, resolve, reject, e);
            });
        });
    }

}

export default {
    post,
    get
};
