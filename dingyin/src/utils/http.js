import axios from 'axios'
import router from '@/router'
import Cookies from "js-cookie"
import {Message, Loading} from 'element-ui' 
var qs = require('qs');
var merge = require('webpack-merge');

let loading
//开始 加载loading
let startLoading=()=>{
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.9)'
      })
  }  
  //结束 取消loading加载
  let endLoading=()=>{
      loading.close()
  }  
  //showFullScreenLoading() 与 tryHideFullScreenLoading() 目的是合并同一页面多个请求触发loading
 
let needLoadingRequestCount = 0 //声明一个变量
 
let showFullScreenLoading=()=> {
    if (needLoadingRequestCount === 0) { //当等于0时证明第一次请求 这时开启loading
        startLoading()
    }
    needLoadingRequestCount++ //全局变量值++ 
}
 
let tryHideFullScreenLoading=()=> {
    if (needLoadingRequestCount <= 0) return //小于等于0 证明没有开启loading 此时return
    needLoadingRequestCount-- //正常响应后 全局变量 --
    if (needLoadingRequestCount === 0) {  //等于0 时证明全部加载完毕 此时结束loading 加载
        endLoading()
    }
}
// //开发线上全局baseUrl
// axios.defaults.baseURL = 'http://test.hyzn0755.com/rayframework-1.0.5/api';
// //开发本地全局baseUrl
axios.defaults.baseURL = 'mock';

const http = axios.create({
    timeout: 200000,
    // withCredentials: false,
    headers: {
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

// }
http.interceptors.request.use(config => { //请求之前
    // config.headers['Authorization'] = Cookies.get('token') // 请求头带上token
    let token = Cookies.get('token');
    if(!config.headers.hasOwnProperty('rayAccessToken') && token){
        config.headers['rayAccessToken'] = token;
    }
    //开启loading加载
    showFullScreenLoading()
    return config
}, error => {
    return Promise.reject(error)
})
// /**
//  * 响应拦截
//  */
http.interceptors.response.use(response => { //请求之后
    console.log(response)
    //关闭loading加载
    setTimeout(function(){
        tryHideFullScreenLoading()
    },500)
    return response
}, error => {
    return Promise.reject(new Error(
        error.response ? error.response.data : '网络错误'
    ))
})

 /**
  * 请求地址处理
  * @param {*} actionName action方法名称
  */

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
    var defaults = {
        User_ID: '2',
        SessionID: Cookies.get('GCheckStr'),
        State: '3',
    }
    return openDefultParams ? merge(params,defaults) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8' 
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    var defaults = {
    //     't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

// this.$http({
//     url: "/doctor/getYZM",
//     method: "get",
//     params: {
//         'phone': 15673595013,
// }

// }).then(({
//     data
// }) => {


// }).catch(err => {

// })


// this.$http({
//     url: "/staff/findAllStaff",
//     method: "POST",
//     data: {
//         // staffId:
//         accountNumber : '444',
//         password : '444',
//         repeatPassword : '444',
//         doctorNumber : '321',
//         rights : '3'

//     }

// }).then(({data}) => {
//     console.log(data)

// }).catch(err => {
//     console.log(err)
// })
export default http