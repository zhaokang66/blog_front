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
       <button @click="userLogin">login</button>
     </div>
  </div>
</template>

<script>

import {login} from '../api/login'
export default {
  data(){
    return{
      username:'aa',
      password:'123456'
    }
  },
  methods:{
    async userLogin(){
      if(this.username.length===0 || this.password.length===0){
        alert('用户名或者密码不能为空')
        return
      }else{
        console.log(this.username,this.password)
        let res = await login(this.username,this.password)
        if(res.data.code !== 20000) return this.$message.error('登录失败')
        this.$message.success('登录成功')
      }
    }
  }
}
</script>

<style lang = "less" scoped>
  @import "../assets/css/login.css";
</style>
