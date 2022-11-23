<template>
  <div class="login_Content">
     <div id="login_box">
       <h1>Login</h1>
       <div class="form">
         <div class="item">
           <span ><i class = "iconfont icon-yonghu"></i></span>
           <input type="text" placeholder="Username" v-model="username">
         </div>
         <div class="item">
           <span ><i class = "iconfont icon-yuechi"></i></span>
           <input type="password" placeholder="Password" v-model="password">
         </div>
       </div>
<<<<<<< HEAD
       <button @click="userLogin">login</button>
=======
       <button @click="login">login</button>
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4
     </div>
  </div>
</template>

<script>
<<<<<<< HEAD

import {login} from '../api/login'
export default {
  data(){
    return{
      username:'aa',
=======
export default {
  data(){
    return{
      username:'测试用户',
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4
      password:'123456'
    }
  },
  methods:{
<<<<<<< HEAD
    async userLogin(){
=======
    async login(){
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4
      if(this.username.length===0 || this.password.length===0){
        alert('用户名或者密码不能为空')
        return
      }else{
<<<<<<< HEAD
        console.log(this.username,this.password)
        let res = await login(this.username,this.password)
        if(res.data.code !== 20000) return this.$message.error('登录失败')
        this.$message.success('登录成功')
=======
        let jsons = {
          userName: this.username,
          passWord: this.password
        }
        const res = await this.$http.post('login',jsons)
        console.log(res)
>>>>>>> fda710d5cbe8dd1499169c2372616eaa79a948f4
      }
    }
  }
}
</script>

<style lang = "less" scoped>
  @import "../assets/css/login.css";
</style>
