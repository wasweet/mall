<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title-info"> {{goods.title}}</div>
    <div class="price-info">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service-info">
      <span class="service-info-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
  export default {
    name:"DetailBaseinfo",
    props:{
      goods:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color:#666666;
    border-bottom:  5px solid #666666;
  }
  .title-info {
    color: #222;
  }
  .price-info {
    margin-top: 10px;
  }
  .new-price {
    font-size: 24px;
    color: #FF5777;
  }
  .old-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    font-size: 15px;
    padding: 2px 5px ;
    color:#EEEEEE;
    background-color:#FF8198;
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -8px;
  }
  .other-info {
    margin-top: 10px;
    line-height: 30px;
    display: flex;
    font-size: 15px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .service-info {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .service-info-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .service-info-item span {
    font-size: 15px;
    color: #333;
  }
</style>
