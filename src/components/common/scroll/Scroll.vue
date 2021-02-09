<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script >
  // import BScroll from '@better-scroll/core'
  import BScroll from 'better-scroll'

  export default {
    name:'Scroll',
     props: {
          probeType: {
            type: Number,
            default: 0
          },
          pullUpLoad: {
            type: Boolean,
            default: false
          }
        },
    // components:{
    //   BScroll
    // },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:this.probeType,
        observeDOM:true,
        click:true,

      })
      //2.监听滚动位置
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll',position)
      })
    },
    methods:{
      scrollTo(x, y, time=300) {
              this.scroll.scrollTo(x, y, time)
            }
    }
  }
</script>

<style scoped>

</style>
