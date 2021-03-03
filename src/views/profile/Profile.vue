<template>
  <div>
  <nav-bar class="title">
    <!-- <div name="center-slot">我的</div> -->
    <template v-slot:center-slot>我的</template>
  </nav-bar>
  <profile-login></profile-login>
  <profile-wallet></profile-wallet>
  <profile-list></profile-list>
   </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import ProfileLogin from './childComponents/ProfileLogin.vue'
  import ProfileWallet from './childComponents/ProfileWallet.vue'
  import ProfileList from './childComponents/ProfileList.vue'
  export default {
    name:'Profile',
    components:{
      NavBar,
      ProfileLogin,
      ProfileWallet,
      ProfileList
    }
  }
</script>

<style scoped>
  .title {
    background-color: #FF8198;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
  }
</style>