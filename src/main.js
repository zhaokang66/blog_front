import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
// 按需导入element-ui组件库
import {Message} from 'element-ui'
// import {Input,Button}from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message
// Vue.use(Input);
// Vue.use(Button);

//导入iconfont字体样式
import './assets/fonts/font_login/iconfont.css'
// 导入axios库impact，并挂载在vue原型上
import axios from  'axios'
Vue.prototype.$axios = axios

//引入vuex
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
