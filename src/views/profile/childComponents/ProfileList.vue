<template>
  <!-- 代码演示Icon图标：
  基本用法：
  <van-icon name="photo" info="2" color="#ccc" />
  name: 图标名称。如果是vant自带的图标，则可以官网上查找对应的名称；
  info: 图标右上角的数字提示；
  color：图标的颜色值，即可以是十六进制值也可以是颜色名。 -->
  <div class="profile-list">
      <div class="line"></div>    
     <div class="list-item">
       <van-icon name="manager" class="list-icon"/>
       <span>我的消息</span>
     </div>
     <div class="list-item">
       <van-icon name="gem"class="list-icon"/>
       <span>会员卡</span>
     </div>
     <div class="list-item">
       <van-icon name="point-gift"class="list-icon"/>
       <span>积分商城</span>
     </div>
     <div class="list-item">
       <van-icon name="shopping-cart"class="list-icon"/>
       <span>我的购物车</span>
     </div>
     <div class="list-item">
       <van-icon name="good-job"class="list-icon"/>
       <span>点赞购物APP</span>
     </div>
  </div>
</template>

<script>
  export default {
    name:"ProfileList"
  }
</script>

<style scoped>
  .list-item {
    line-height: 45px;
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 20px;
  }
  .list-icon {
    font-size: 28px;
    display: inline-block;
    margin-right: 7px;
  }
  .list-item span {
    font-size: 22px;
    display: inline-block;
    width: 100%;
    color: #333333;
    border-bottom: 1px solid #dddddd;
  }
  .line {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }
</style>
