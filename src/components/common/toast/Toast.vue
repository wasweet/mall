<template>
  <div class="toast" v-show="isShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name:"Toast",
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message, duration) {
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        },duration)
      }
    }

  }
</script>

<style scoped>
  .toast {
    position: fixed;
    background-color:rgba(0,0,0,.7);
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 13px 16px;
    color:#fff;
    z-index: 99;
  }
</style>
