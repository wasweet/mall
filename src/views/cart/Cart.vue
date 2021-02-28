<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center-slot" >购物车({{cartListLength}})</div>
    </NavBar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import CartList from './childComponents/CartList.vue'
  import CartBottomBar from './childComponents/CartBottomBar.vue'

  import { mapGetters } from 'vuex'
  export default {
    name:'Cart',
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed:{
      // cartListLength() {
      //  return  this.$store.state.cartList.length
      // }
      ...mapGetters(['cartListLength'])
    },
    activated() {
       this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color:#FF8198;
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
  .cart {
    height: 100vh;
  }
 .content {
    height: calc(100% - 134px);
     overflow: hidden;
  }
/*  .content {
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
    overflow: hidden;
  } */
</style>
