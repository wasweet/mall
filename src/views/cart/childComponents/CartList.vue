<template>
  <div>
    <CartListItem v-for="(item, index) in cartList"
                  :key="index"
                  :itemInfo="item"
                  ></CartListItem>
  </div>
</template>

<script>
  import CartListItem from './CartListItem.vue'
  import { mapGetters } from 'vuex'
  export default {
    name:"CartList",
    components:{
      CartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style>
</style>
