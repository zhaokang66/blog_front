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
       <button @click="login">login</button>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'测试用户',
      password:'123456'
    }
  },
  methods:{
    async login(){
      if(this.username.length===0 || this.password.length===0){
        alert('用户名或者密码不能为空')
        return
      }else{
        let jsons = {
          userName: this.username,
          passWord: this.password
        }
        const res = await this.$http.post('login',jsons)
        console.log(res)
      }
    }
  }
}
</script>

<style lang = "less" scoped>
  @import "../assets/css/login.css";
</style>
