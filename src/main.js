import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
// 按需导入element-ui组件库
<<<<<<< HEAD
import {Message} from 'element-ui'
// import {Input,Button}from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message
=======
// import {Input,Button}from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4
// Vue.use(Input);
// Vue.use(Button);

//导入iconfont字体样式
import './assets/fonts/font_login/iconfont.css'
// 导入axios库impact，并挂载在vue原型上
import axios from  'axios'
<<<<<<< HEAD
Vue.prototype.$axios = axios

//引入vuex
import store from './store'
=======
axios.defaults.baseURL = 'http://43.139.145.221:8081/api/user'
Vue.prototype.$http = axios
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4


Vue.config.productionTip = false

new Vue({
  router,
<<<<<<< HEAD
  store,
=======
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4
  render: h => h(App)
}).$mount('#app')
