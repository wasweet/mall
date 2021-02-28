<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-botton"
                   @click.native="isSelectall"
                   :isChecked="selectall"></CheckButton>
      <span class="check-text">全选</span>
    </div>
    <div class="total-price">
      合计：{{totalPrice}}
    </div>
    <div class="settlement" align="center" @click="isShow">
      <p class="jiesuan">结算({{settlement}})</p>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
  export default {
    name:"CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalPrice() {
        return '¥' + this.$store.state.cartList.filter(item => {
            return item.checked
          }).reduce((preValue, item) => {
            return preValue + item.price * item.count
          },0).toFixed(2)
        },
       settlement() {
         return this.$store.state.cartList.filter(item => item.checked).length
       },
       selectall() {
         if(this.$store.state.cartList.length === 0) return false;
           return !this.$store.state.cartList.find(item => !item.checked)
           //普通遍历
           // if(this.$store.state.cartList.length === 0) return false;
           // for(let item of this.$store.state.cartList) {
           //   if(!item.checked) {
           //     return false
           //   }
           // }
           // return true
       }
      },
      methods:{
          isSelectall() {
            if(this.selectall) { //全部选中
              this.$store.state.cartList.forEach(item => item.checked = false)
            } else {//没选或没全选
              this.$store.state.cartList.forEach(item => item.checked = true)
            }
          },
          isShow() {//购物车为空时，点击结算按钮提示 购物车为空
            if(!this.selectall) {
              this.$toast.show('购物车为空',1500)
            }
          }
      }

  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color:#eee;
    position: relative;
     display: flex;
  }
  .check-botton {
    width: 20px;
    height: 20px;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
  }
  .check-content {
    display: flex;
    width: 100px;
  }
  .check-text {
    margin-top: 10px;
    margin-left: 10px;
  }
  .total-price {
    flex: 1;
    margin: auto 0;
    margin-left: 20px;
  }
  .settlement {
    width: 90px;
    background-color:#FF8198;
    border-radius:10px;
    margin-right: 10px;
  }
  .jiesuan {
    margin-top: 10px;
  }
</style>
