<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/top-bg.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <div class="title">服务授权</div>
    <img class="zhifubao" src="../assets/images/zhifubao.png">
    <div class="auth-desc">
      <p class="desc-title">同意并授权地中海邮轮获取以下权限：</p> 
      <p class="desc-detail">查看及使用支付宝会员信息（等级、积分）以便<br>你享有相关福利</p>
      <p class="desc-detail">使用支付宝会员积分兑换权益</p>
    </div>
    <div class="btn agree-btn" @click="handleAuth">同意授权</div>
    <div class=" btn cancel-btn">取消授权</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleAuth() {
        this.$router.push({ name: 'register' })
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../styles/button.less';
  .auth-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    font-family: PingFangSC-Medium, sans-serif;
    background-image: url('../assets/images/bg.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    .top-bg {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .bottom-bg {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .title {
      font-size: 0.7467rem;
      position: absolute;
      right: 0.6133rem;
      top: 1.64rem;
      color: #152342;
    }
    .zhifubao {
      position: absolute;
      width: 9.0667rem;
      left: 50%;
      top: 3.9467rem;
      transform: translateX(-50%);
      z-index: 2;
    }
    .auth-desc {
      width: 9.0667rem;
      height: 3.3867rem;
      position: absolute;
      left: 50%;
      top: 7.8667rem;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 0.32rem;
      font-family: PingFangSC-Light, sans-serif;
      padding: 0.64rem 0.9067rem;
      .desc-title {
        font-size: 0.3733rem;
      }
      .desc-detail {
        font-size: 0.32rem;
        line-height: 0.5333rem;
        color: #747575;
        &::before {
          content: '';
          display: inline-block;
          width: 0.1333rem;
          height: 0.1333rem;
          background: #747575;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>