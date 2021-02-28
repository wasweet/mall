<template>
  <div id="detaill">
    <detail-nav-bar @titleClick="titleClick"  class="detail-nav-bar"  ref="detailNavBar"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            @scroll="detailScroll"
            :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goodsinfo="goodsinfo" @imgLoad="imgLoad" ></detail-goods-info>
      <detail-params-info ref="params" :params-info="paramsInfo"></detail-params-info>
      <DetailCommentInfo ref="comment" :comment-info="commentInfo"></DetailCommentInfo>
      <GoodsList ref="recommend" :goods="recommendInfo"></GoodsList>
    </scroll>
    <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
    <back-top  @click.native="backClick" v-show="isAcive"></back-top>
    <!-- <toast :isMessage="message" :isShow="show"></toast> -->
  </div>
</template>

<script>
    import DetailNavBar from './childComponents/DetailNavBar.vue'
    import DetailSwiper from './childComponents/DetailSwiper.vue'
    import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
    import DetailShopInfo from './childComponents/DetailShopInfo.vue'
    import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
    import DetailParamsInfo from './childComponents/DetailParamsInfo.vue'
    import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
    import DetailBottomBar from './childComponents/DetailBottomBar.vue'

    import Scroll from '../../components/common/scroll/Scroll.vue'
    import GoodsList from '../../components/content/goods/GoodsList.vue'
    import BackTop from '../../components/content/backTop/BackTop.vue'
    // import Toast from '../../components/common/toast/Toast.vue'

    import {getDetail, getRecommend} from '../../network/detail.js'
    import {Goods, Shop} from '../../network/detail.js'
    import {debounce} from '../../common/utils.js'
  export default {
    name:"Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      BackTop,
      // Toast
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods: {},
        shop:{},
        goodsinfo:{},
        paramsInfo:{},
        commentInfo:{},
        recommendInfo:[],
        themeTopY:[],
        getthemeTopY: null,
        currentIndex:0,
        isAcive:false,
        // message:'',//加入购物车时 toast 显示内容
        // show:false
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid
      //2.根据iid请求详细数据
      getDetail(this.iid).then(res => {
        // console.log(res)
        //3.获取顶部轮播图数据
        this.topImages = res.result.itemInfo.topImages
        //4.获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        //5.获取店面信息
        this.shop = new Shop(res.result.shopInfo)
        //6.获取商品展示详情信息
        this.goodsinfo = res.result.detailInfo
        //7.获取商品详细参数信息
        this.paramsInfo = res.result.itemParams
        //8.获取评论信息
        if(res.result.rate.cRate !== 0) {
          this.commentInfo = res.result.rate.list[0]
        }

      })
      //获取推荐数据
      getRecommend().then(res => {
        // console.log(res)
        this.recommendInfo = res.data.list
      })

      this.getthemeTopY = debounce(() => {
        this.themeTopY = []
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE)
        // console.log(this.themeTopY)
      })
    },
    methods:{
      imgLoad() {
        // this.$refs.scroll.refresh()
        this.getthemeTopY()
      },
      titleClick(index) {
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 1000)
      },
       // 监听详情页滚动事件,并动态设置navBar的index
      detailScroll(position) {
        // console.log(position)
        //获取y值
        const positionY = -position.y;
        let length = this.themeTopY.length
        // for( let i = 0; i < length; i++) {
        //   if(this.currentIndex !== i && ((i < length -1 && positionY >= this.themeTopY[i]) &&positionY <= this.themeTopY[i+1] || (i === length -1 &&  positionY >= this.themeTopY[i]))) {
        //     this.currentIndex = i
        //     console.log(this.currentIndex)
        //     this.$refs.detailNavBar.currrentIndex = this.currentIndex
        //   }
        // }
        for( let i = 0; i < length - 1; i++) {
          if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY <= this.themeTopY[i+1])) {
            this.currentIndex = i;
            this.$refs.detailNavBar.currrentIndex = this.currentIndex
          }
        }
        //1.判断BackTop是否显示
        this.isAcive = -position.y > 1000
      },
      //放回顶部
      backClick() {
             this.$refs.scroll.scrollTo(0, 0)
      },
      //加入购物车
      addToCart() {
        // console.log(123 )
        //获取购物车需要展示的信息
        const product = {}
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.realPrice;
          product.iid = this.iid;

          //将商品添加到购物车里（Vuex）
          // this.$store.state.cartList.push(product)
          // this.$store.commit('addCart',product);//mutations
          this.$store.dispatch('addCart',product).then( res => {
            //.then    actives中返回promis


            // this.message = res;
            // this.show = true;
            // setTimeout(() => {
            //    this.show = false;
            //    this.message = '';
            // },1000)
            this.$toast.show(res,1500)
          })
      }
    }
  }
</script>

<style scoped>
  #detaill{
    height: 100vh;
    position: relative;
    z-index: 11;
    background-color: #fff;
  }
  .detail-nav-bar {
    z-index: 11;
    position: relative;
    background-color: #fff;
  }
  .content {
    /* position: absolute;
    top:54px;
    bottom:49px;
    left:0;
    right:0;
    overflow: hidden; */
    height: calc(100% - 104px);
     overflow: hidden;
  }
</style>
