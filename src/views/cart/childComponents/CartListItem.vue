<template>
   <div class="product">{{product}}</div>
 <!-- <div>
    li{123}*100
  </div> -->
</template>

<script>
  export default{
    name:"CartListItem",
    props:{
      product:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  
  
</style>
