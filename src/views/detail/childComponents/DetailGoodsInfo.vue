<template>
  <div v-if="Object.keys(goodsinfo).length !== 0" class="goods-info">
    <div class="start"></div>
    <div class="goodsinfo-desc">{{goodsinfo.desc}}</div>
    <div class="end"></div>
    <div class="detail-goods-imageinfo" v-for="item in goodsinfo.detailImage">
      <div class="key">{{item.key}}</div>
      <img v-for="(item, index) in item.list"
           :src="item" alt=""
           :key="index"
           @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailGoodsInfo",
    props:{
      goodsinfo:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    data() {
        return {
          count: 0,
          imagesLength: 0
        }
      },
      methods: {
          imgLoad() {
             // if (++this.count === this.imagesLength) {
              this.$emit("imgLoad");
             // }
          }
        },
        watch: {
          imagesInfo() {
            this.imagesLength = this.imagesInfo.detailImage[0].list.length;
          }
        }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .start {

  }
  .key {
   margin: 10px 0 10px 15px;
    font-size: 20px;
    color: black;
  }
  .detail-goods-imageinfo img {
    width: 100%;
  }
</style>
