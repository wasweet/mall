<template>
   <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center-slot" class="title">
      <div v-for="(item,index) in titles"
           class="title-item"
           :class="{active: index === currrentIndex}"
           @click="titleClick(index)">
           {{item}}</div>
      </div>
      </nav-bar>
   </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'
  export default {
    name:"DetailNavBar",
    components:{
      NavBar
    },
    data() {
      return {
        titles:['商品','参数','评论','推荐'],
        currrentIndex: 0
      }
    },
    methods:{
      titleClick(index) {
        this.currrentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
    font-size: 18px;
    margin-top: 5px;
  }
  .active {
    color: #FF5777;
  }
  .back {
    margin-top: 10px;
  }
</style>
