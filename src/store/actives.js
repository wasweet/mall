export default {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // state.cartList.push(payload)
        //查找之前数组中是否有该商品
        let product = context.state.cartList.find(item => item.iid === payload.iid)
        //判断product
        if(product) {//商品数量+1
          // product.count += 1;
          context.commit('addCounter',product)
          resolve('商品数量+1')
        } else {//将商品添加到购物车
          payload.count = 1;
          // context.state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('商品添加到购物车')
        }
      })
    }

}
