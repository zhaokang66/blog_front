import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
// 按需导入element-ui组件库
// import {Input,Button}from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// Vue.use(Input);
// Vue.use(Button);

//导入iconfont字体样式
import './assets/fonts/font_login/iconfont.css'
// 导入axios库impact，并挂载在vue原型上
import axios from  'axios'
axios.defaults.baseURL = 'http://43.139.145.221:8081/api/user'
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
