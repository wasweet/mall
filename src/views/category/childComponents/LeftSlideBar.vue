<template>
  <div class="left-slide-bar">
    <scroll class="center">
  <div v-for="(item, index) in slideBarList" :key="index">
    <button class="list-item"
            :class="{active: index === currentIndex}"
            :key="index"
            @click="LeftSlideBarItem(item, index)"
            >{{item.title}}</button>
  </div>
  </scroll>
  </div>
</template>

<script>
  import Scroll from '../../../components/common/scroll/Scroll.vue'
  export default {
    name:"LeftSlideBar",
    components:{
      Scroll
    },
    props:{
      slideBarList:{
        type:Array,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      LeftSlideBarItem(item, index) {
        this.currentIndex = index;
        const obj = {
          maitKey: item.maitKey,
          index
        }
        this.$emit('slideBarItemClick', obj)
      }
    }
  }
</script>

<style scoped>
  .center {
    position: fixed;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
    overflow: hidden;
    width: 100px;
    background-color: #f6f6f6;
  }
  .list-item {
    font-size: 14px;
    line-height: 45px;
    width: 100px;
    height: 45px;
    user-select: none;
    text-align: center;
    color: #666666;
    border: 0;
    outline: none;
    background: none;
  }
  .active {
    font-weight: 700;
    color: #ff5777;
    border-left: 3px solid #ff5777;
    background-color: #ffffff;
  }
</style>
