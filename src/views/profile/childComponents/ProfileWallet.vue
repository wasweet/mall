<template>
  <div class="profile-wallet">
    <div class="wallet-item">
      <p> 0.00 <span>元</span></p>
      <p>我的余额</p>
    </div>
    <div class="wallet-item">
      <p> 0 <span>个</span>
      <p>我的优惠券</p>
      </p>
    </div>
    <div class="wallet-item">
      <p> 0 <span>分</span>
      <p>我的积分</p>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ProfileWallet"
  }
</script>

<style scoped>
  .profile-wallet {
    display: flex;
    width: 100%;
  }
  .wallet-item {
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    height: 85px;
  }
  .wallet-item:nth-of-type(1),.wallet-item:nth-of-type(2) {
    border-right: 1px solid #eeeeee;
  }
  .wallet-item p:first-child {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 3px;
    color: #ff5f3e;
  }
  .wallet-item p:first-child span {
    font-size: 14px;
    font-weight: normal;
    margin-left: 3px;
    color: #666666;
  }
  .wallet-item p:last-child {
    font-size: 14px;
    color: #666666;
  }
</style>
