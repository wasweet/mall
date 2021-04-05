<template>
  <div class="bottom-bar">
      <!-- <div class="bar-item bar-left">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div> -->
      <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"></van-goods-action-icon>
      <van-goods-action-icon icon="cart-o"
                             text="购物车"
                             @click="$router.push('/cart')"></van-goods-action-icon>
      <van-goods-action-icon icon="star-o"
                             text="收藏"
                             :color="isCollect ? '#ff5000' : '#000000'"
                             :icon="isCollect ? 'star' : 'star-o'"
                             :text="isCollect ? '已收藏' : '收藏'"
                             @click="collectClick"></van-goods-action-icon>
      <van-goods-action-button text="加入购物车"
                               :info="1"
                               type="warning"
                               @click="addToCart"
                               ></van-goods-action-button>
      <van-goods-action-button text="立即购买"
                               type="danger"
                               @click="$router.push('/cart')"></van-goods-action-button>
       </van-goods-action>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name:"DetailBottomBar",
    data() {
      return {
        isCollect: false
        }
      },
      computed:{
        //对象形式写法
        // ...mapGetters({
        //   cartListLength:"cartListLength"
        // })
         ...mapGetters(['cartListLength'])
      },
    methods: {
      addToCart() {
        this.$emit('addCart')
      },
      collectClick() {
        if(!this.isCollect) {
          this.$toast.show("收藏成功",1500);
          this.isCollect = true;
        } else {
          this.$toast.show("取消收藏",1500);
          this.isCollect = false
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
      height: 58px;
      position: fixed;
      background-color: #fff;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      text-align: center;
    }
 /deep/ .van-goods-action {
   line-height: 50px;
   height: 50px;
   border-top: 1px solid #cccccc;
 }
 
 /deep/ .van-goods-action-icon {
   height: auto;
 }

</style>
