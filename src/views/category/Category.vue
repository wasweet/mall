<template>
  <div class="category">
    <nav-bar class="title">
      <template v-slot:center-slot>商品分类</template>
    </nav-bar>
    <left-slide-bar :slide-bar-list="categoryList"
                    @slideBarItemClick="slideBarItemClick"></left-slide-bar>
     <scroll class="center">
        <sub-category :category-list="subcategoryList"></sub-category>
        <tab-control :titles="titleList" @tabControl="TabControl" ></tab-control>
        <goods-list :goods="categoryDetailList"></goods-list>
     </scroll>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import LeftSlideBar from './childComponents/LeftSlideBar.vue'
  import SubCategory from './childComponents/SubCategory.vue'

  import Scroll from '../../components/common/scroll/Scroll.vue'
  import TabControl from '../../components/content/tabcontrol/TabControl.vue'
  import GoodsList from '../../components/content/goods/GoodsList.vue'

  import {getCategory, getSubcategory, getCategoryDetail} from '../../network/category.js'
  export default {
    name:'Category',
    components:{
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      LeftSlideBar,
      SubCategory
    },
    data() {
      return {
        maitKey:null,
         //分类侧边数据
        categoryList: [],
        currentIndex: 0,
        //分类内容数据
        subcategoryList: [],
        //导航栏
        titleList:["流行", "新款", "精选"],
        //导航栏分类数据
        categoryDetailList:[]
      }

    },
    created() {
      //获取初始数据 左侧导航栏 LeftSlideBar
      this.getCategory();
    },
    methods:{
      slideBarItemClick({maitKey, index }) {
        // console.log(maitKey)
          // 防止反复请求
          if (this.currentIndex === index) return;
          this.currentIndex = index;

          // 请求对应的推荐列表
          this.getSubcategory(maitKey);
          //请求["流行", "新款", "精选"]对应的 GoodsList
          this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop");
        },
        //获取左侧导航栏数据并存放categoryList
        getCategory() {
          getCategory().then(res => {
          // console.log(res)
          this.categoryList = res.data.category.list;
          this.$nextTick(() => {//异步更新
            this.getSubcategory(this.categoryList[0].maitKey);//刷新后显示第一组数据
            this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
          })
        })
        },
        //获取商品分类的详细信息
        getSubcategory(maitKey) {
          getSubcategory(maitKey).then(res => {
          // console.log(res)
          this.subcategoryList = res.data.list
        })
        },
        //获取["流行", "新款", "精选"]导航栏下的详细内容
        getCategoryDetail(miniWallkey, type) {
          getCategoryDetail(miniWallkey, type).then( res => {
             // console.log(res)
              this.categoryDetailList = res
          })
        },
        //导航栏
        TabControl(index) {
          const typeList = ["pop", "new", "sell"];
          //切换类型
          this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index]);

        },


    }

}
</script>

<style scoped>
  .category {
     height: 100vh;
     position:relative;
  }
  .title {
    background-color: #FF8198;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
  }

  .center {
    position: fixed;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 100px;
    overflow: hidden;
  }
</style>
