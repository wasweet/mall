<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:center-slot>首页</template>
    </nav-bar>
    <scroll class="content"  ref="scroll" :probe-type="3" @scroll="contentScroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <popular-view></popular-view>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabControl="TabControl" >
      </tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top  @click.native="backClick" v-show="isAcive"></back-top>

  </div>

</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComponents/HomeSwiper.vue'
  import RecommendView from './childComponents/RecommendView.vue'
  import PopularView from './childComponents/PopularView.vue'
  import TabControl from '../../components/content/tabcontrol/TabControl.vue'
  import GoodsList from '../../components/content/goods/GoodsList.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import BackTop from '../../components/content/backTop/BackTop.vue'

  import {getHomeMultidata} from '../../network/home.js'
  import {getHomeGoods} from '../../network/home.js'


  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      PopularView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop': {page: 0,list:[]},
          'new': {page: 0,list:[]},
          'sell': {page: 0,list:[]},
        },
        currentType:'pop',
        isAcive:false
      }
    },

    created() {

      this.getHomeMultidata();

      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
       backClick() {
              this.$refs.scroll.scrollTo(0, 0)
            },
    contentScroll(position) {
              // console.log(position);
              this.isAcive = -position.y > 1000
            },
      TabControl(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },


      getHomeMultidata() {
        getHomeMultidata().then(res => {

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type) {
        const page = this.goods.[type].page + 1;
      getHomeGoods(type, page).then(res => {
      this.goods.[type].list.push(...res.data.list);
      this.goods.[type].page += 1;
      })
      },

    }
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px;
    /* height: 100vh; */
     /* position: relative; */
     /*padding-top: 44px;*/
         height: 100vh;
         position: relative;

  }
  .home-nav-bar {
   background-color:#FF8198;
    color:#FFFFFF;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 11;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

/* .content {
    height: calc(100% - 93px);
   overflow: hidden;
    margin-top: 44px;
  } */
  .content {
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
    overflow: hidden;
  }

</style>
