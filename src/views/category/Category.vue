<template>
  <div>
    <nav-bar class="title">
      <template v-slot:center-slot>商品分类</template>
    </nav-bar>
    <left-slide-bar :slide-bar-list="categoryList"
                    @slideBarItemClick="slideBarItemClick"></left-slide-bar>
     <scroll class="centent">
        <sub-category :category-list="subcategoryList"></sub-category>
     </scroll>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import LeftSlideBar from './childComponents/LeftSlideBar.vue'
  import SubCategory from './childComponents/SubCategory.vue'

  import Scroll from '../../components/common/scroll/Scroll.vue'

  import {getCategory, getSubcategory} from '../../network/category.js'
  export default {
    name:'Category',
    components:{
      NavBar,
      Scroll,
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
        subcategoryList: []
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
        },
        //获取左侧导航栏数据并存放categoryList
        getCategory() {
          getCategory().then(res => {
          // console.log(res)
          this.categoryList = res.data.category.list;
        })
        },
        //获取商品分类的详细信息
        getSubcategory(maitKey) {
          getSubcategory(maitKey).then(res => {
          console.log(res)
          this.subcategoryList = res.data.list
        })
        }

    }

}
</script>

<style scoped>
  .title {
    background-color: #FF8198;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
  }
  .centent {
    position: fixed;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 100px;
    overflow: hidden;
  }
</style>
