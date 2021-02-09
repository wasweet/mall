<template>
    <div class="wrapper">
      <ul class="content">
      	<li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
<li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>

        <li>123</li>
        <li>123</li>

        <li>123</li>
      </ul>
    </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Viewlist',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
      })
      this.scroll.on('scroll', (position) => {
        console.log(position)
      })
    }
  }


</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: #42B983;
    overflow: hidden;
  }
</style>
