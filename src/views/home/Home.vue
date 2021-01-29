<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center-slot>首页</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <popular-view></popular-view>
  </div>

</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComponents/HomeSwiper.vue'
  import RecommendView from './childComponents/RecommendView.vue'
  import PopularView from './childComponents/PopularView.vue'
  import {getHomeMultidata} from '../../network/home.js'

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      PopularView
    },
    data() {
      return {
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res => {

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style>
  #home {
    padding-top: 44px;
    padding-bottom: 1000px;
  }
  .home-nav-bar {
    background-color:#FF8198;
    color:#FFFFFF;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
