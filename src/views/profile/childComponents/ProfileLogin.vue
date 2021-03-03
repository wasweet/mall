<template>
  <div class="login">
    <img :src="personalPic" alt="" class="personal-pic">
    <div class="user-info">
      <p>登陆/注册</p>
      <div class="phone-info">
        <img src="@/assets/img/profile/phone.svg" alt="" class="phone-pic">
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="arrow-right">
      <img src="@/assets/img/profile/arrow_right.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:"Profilelogin",
    data() {
      return {
        personalPic: require("@/assets/img/profile/user.png")
      }
    }
  }
</script>

<style scoped>
  .login {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #FF8198;
    width: 100%;
    height: 100px;
    padding: 0 20px;
  }
  .personal-pic {
    width: 80px;
    height: 80px;
    background-color: #FFFFFF;
    border-radius: 50%;
  }
  .user-info {
    color: #FFFFFF;
    margin-left: 40px;
    font-size: 20px;
  }
  .phone-info {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .phone-pic {
    display: inline-block;
    width: 20px;
    height: 20px;
    /* background-color: #42B983; */
  }
  .arrow-right {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
  }
</style>
