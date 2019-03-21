<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/top-bg.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <img class="logo" src="../assets/images/logo.png">
    <div class="order-wrapper">
      <h5>《用户授权协议》</h5>
      <div class="desc-title">
        同意MSC地中海邮轮与您联系，告知您有关<br>MSC地中海邮轮或其子公司及合作伙伴的相<br>关新产品和特惠信息。您同意通过邮寄、电子<br>邮件和/或电话等方式与您取得联系。
      </div>
      <div class="desc-title">
        同意MSC地中海邮轮可合理收集相关信息数<br>据分析（定制营销策略的消费习惯分析）。
      </div>
    </div>
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
    .logo {
      position: absolute;
      width: 3.2267rem;
      right: 0.6133rem;
      top: 1.54rem;
    }
    .order-wrapper {
      position: absolute;
      width: 9.0667rem;
      left: 50%;
      top: 3.9467rem;
      transform: translateX(-50%);
      z-index: 2;
      background: #fff;
      border-radius: 0.2667rem;
      font-size: 0.32rem;
      color: #666666;
      padding: 1.28rem 0;
      font-family: PingFangSC-Light, sans-serif;
      >h5 {
        font-size: 0.4rem;
        text-align: center;
        font-weight: normal;
        margin-bottom: 0.72rem;
      }
      .desc-title {
        line-height: 0.5333rem;
        padding-left: 1.12rem;
        &:last-child {
          margin-top: 0.64rem;
        }
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