export default {
    // addCart(state, payload) {
    // // state.cartList.push(payload)
    // //查找之前数组中是否有该商品
    // let product = state.cartList.find(item => item.iid === payload.iid)
    // //判断product
    // if(product) {
    //   product.count += 1;
    // } else {
    //   payload.count = 1;
    //   state.cartList.push(payload)
    // }
    // }
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = false
      state.cartList.push(payload)
      
    }

}