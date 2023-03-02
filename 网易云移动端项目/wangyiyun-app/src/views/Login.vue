<template>
  <section class="login-wrap">
    <back-header title="手机号登录" color="red"></back-header>
    
      <div class="phone-number-container">
        <label>
          <i class="iconfont icon-shouji"></i>
        </label>
        <input
          class="tel-input"
          type="tel"
          autofocus
          name="phone"
          v-model="phone"
          placeholder="请输入手机号码"
        >
      </div>
      <div class="password-container">
        <label for>
          <i class="iconfont icon-suo"></i>
        </label>
        <input
          class="password-input"
          type="password"
          name="passworld"
          v-model="password"
          placeholder="请输入密码"
        >
      </div>
      <div class="login-btn-container">
        <button class="login-btn" @click="Login">登录</button>
      </div>
    
  </section>
</template>
<script>
import {getLoginUser} from '@/request/api/home.js'
import {showLogin} from '@/store/index.js'
export default {
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        Login:async function(){
          let res= await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
          console.log(res);
          if(res.data.code===200){//如果返回的code等于200，说明登录成功，就跳转个人中心页面
            this.$store.commit('updateIsLogin',true)
            this.$store.commit('updateToken',res.data.token)
            let result=await getLoginUser(res.data.account.id)
            console.log(result);
            this.$store.commit('updateUser',result)
            this.$router.push('/infoUser');

            // showLogin();

          }else{
              alert("手机号码或者密码错误")
              this.password=''
          }
        }
    }

}
</script>
<style scoped lang='less'>
.login-wrap {
  padding-top: 0.44rem;
  .phone-number-container,
  .password-container {
    position: relative;
    border-bottom: .0625rem solid #e4e4e4;
    padding: 0.05rem 0;
    margin: 0.2rem 0.2rem;
  }
  .tel-input,
  .password-input {
    width: 100%;
    height: 1rem;
    font-size: .4rem;
    margin: 0.1rem;
    border: none;
  }
  .iconfont {
    font-size: 1.125rem;
    color: gray;
  }
  .country-code {
    font-size: 1rem;
    margin: 0 0.1rem;
  }
  .clean-btn {
    position: absolute;
    right: .05rem;
  }
  .login-btn-container {
    text-align: center;
    .login-btn {
      background: #d44439;
      color: #f1f1f1;
      border: none;
      width: 90%;
      height: 1rem;
      border-radius: 0.2rem;
      font-size: .5rem;
    }
  }
}
</style>
