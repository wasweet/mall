<template>
  <tab-bar>
     <tab-bar-item path="/home" activeColor="red">
       <img  slot="item-icon" src="../../assets/img/tabbar/smile.svg" alt="">
       <img  slot="item-icon-active" src="../../assets/img/tabbar/smile-active.svg" alt="">
       <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/viewlist">
      <img  slot="item-icon" src="../../assets/img/tabbar/viewlist.svg" alt="">
      <img  slot="item-icon-active" src="../../assets/img/tabbar/viewlist-active.svg" alt="">
      <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/cart">
       <img  slot="item-icon" src="../../assets/img/tabbar/cart- full.svg">
       <img  slot="item-icon-active" src="../../assets/img/tabbar/cart- full-active.svg" alt="">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile">
       <img  slot="item-icon" src="../../assets/img/tabbar/atm.svg" alt="">
       <img  slot="item-icon-active" src="../../assets/img/tabbar/atm-active.svg" alt="">
       <div slot="item-text">我的</div>
     </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'
  export default {
    name:'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
