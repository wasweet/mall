<template>
  <div class="tabControl">
    <div  class="tabControl-item"
          v-for="(item, index) in titles"
         :class="{active: index ===currentIndex}"
         @click="tabItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      titles: {
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      tabItem(index) {
        this.currentIndex = index;
        this.$emit('tabControl',index);
      }
    }
  }
</script>

<style>
  .tabControl {
    display: flex;
    text-align: center;
    background-color: #FFFFFF;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
  }
  .tabControl-item {
    flex: 1;
  }
  .active {
    color: #FF5777;
  }
  .active span {
    border-bottom: 3px solid #FF5777;
    padding: 5px;
  }

</style>
