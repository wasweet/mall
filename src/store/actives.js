export default {
    addCart(context, payload) {
    // state.cartList.push(payload)
    //查找之前数组中是否有该商品
    let product = context.state.cartList.find(item => item.iid === payload.iid)
    //判断product
    if(product) {
      // product.count += 1;
      context.commit('addCounter',product)
    } else {
      payload.count = 1;
      // context.state.cartList.push(payload)
      context.commit('addToCart', payload)
    }
    }
  
}
