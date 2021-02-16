<template>
  <swiper>
    <swiper-item v-for="item in banners" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from '../../../components/common/swiper/Swiper.vue'
  import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },

    methods:{
      ImageLoad(){
        this.$emit('swiperImageLoad')
      }
    }
  }
</script>

<style>
</style>
