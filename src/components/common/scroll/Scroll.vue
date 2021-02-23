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
        pullUpLoad:this.pullUpLoad,
        observeDOM:true,
        click:true,
        useTransition:false

      })
      //2.监听滚动位置
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll',position)
      })
      //3.监听上拉加载更多
      this.scroll.on('pullingUp',() => {
        // console.log('上拉加载更多')
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x, y, time=300) {
              this.scroll.scrollTo(x, y, time)
            },
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
