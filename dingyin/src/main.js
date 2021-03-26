import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store'
import ElementUI from 'element-ui';
import echarts from 'echarts';  //echarts
import 'echarts-wordcloud'
import Cookies from "js-cookie"
import httpRequest from '@/utils/http.js'     //http
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
// 字体图标
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import '@/assets/iconfont/iconfont.css'  // Icon
import '@/assets/css/animation.css'   // 公共动画css
import '@/assets/css/swiper.css';      //  Swiper
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.use(ElementUI, {
    size: 'small'
});

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     console.log(to)
//     // document.title = `${to.meta.title} | vue-manage-system`;
//     document.title = `${to.meta.title}`;
//     const role = localStorage.getItem('ms_username');
//     console.log(role)
//     if (!role && to.path !== '/home') {
//         next('/home');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         } else {
//             next();
//         }
//     }
// });
router.beforeEach((to, from, next) => {
    // wrrkbenchHeader 更改工作台头部 title 
    if(to.meta.title != '工作台'){
        store.commit('worktitlechange',to.meta.title);
    }else{
        store.commit('worktitlechange','大数据查询平台-工作台');
    }
    // let token = Cookies.get('token')
    // if(!navigator.onLine && from.name){
    //     ElementUI.Message({
    //         message: '网络错误',
    //         type: 'error',
    //         duration: 2000,
    //     })
    // }else if(!token){
    //     next()
    // }else{
    //     next()
    // }
    document.title = `${to.meta.title}`;
    const token = Cookies.get('token');
    const role = localStorage.getItem('ms_username');
    if (token,role) {
    //如果用户信息存在则往下执行。
        next()
    } else {
    //如果用户token不存在则跳转到login页面
        if (to.path === '/') {
            next()
        } else {
            next()
        }
    }
})
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = httpRequest; // ajax请求方法
Vue.prototype.$cookie = Cookies;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');



/**
 * 过滤器
 */
/**
 * 按数字大小转换为 万 或者 亿 为单位的数字
 */
Vue.filter('NumToUnitNum', function (value) {
    if (!value) return '0.00'
        if (value > 100000000 || value < -100000000) {
    return Number(value/100000000).toFixed(1)+"亿"
        }else if (value > 10000 || value < -10000) {
    return Number(value/10000).toFixed(1)+"W"
        }else {
    return Number(value).toFixed(0)
        }
})
    
/**
 * 通过数字获取到数字转换后的单位
 */
Vue.filter('GetUnit', function (value) {
    if (!value) " "
value = Math.abs(value)
    if (value > 100000000) {
return
    }else if (value > 10000) {
return
    }else {
    return "元"
    }
})
Vue.filter('money', function(val) {
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
        val = "0";  
    } 
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
        cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
        val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }

    return (((sign)?'':'-') + val + '.' + cents);
})
Vue.filter('capitalize', function(value) {
    if(value < 10){
        value = '0' + value;
    }
    return value
})