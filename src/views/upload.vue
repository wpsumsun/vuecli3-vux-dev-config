<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/ren.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <img class="logo" src="../assets/images/logo.png">
    <div class="order-wrapper">
      <!-- <img class="order-header" src="../assets/images/uploadbg.png"> -->
      <p class="desc">第一步：请您上传支付宝<span>会员等级</span>照片</p>
      <div class="upload-wrapper">
        
      </div>
    </div>
    <div class="btn agree-btn order-btn" @click="handleOrder">提交</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {},
      }
    },
    created() {
      this.formData = JSON.parse(JSON.stringify(this.$store.state.app.form))
    },
    methods: {
      handleOrder() {
        const url = 'https://mscyl.fliggy.com/shop/view_shop.htm?spm=181.11197625.4974055.9.73444a0aYw8BZA'
        window.open(url)
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../styles/button.less';
  .auth-wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
    font-family: PingFangSC-Medium, sans-serif;
    background-image: url('../assets/images/bg.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2.8rem 0 1.6rem;
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
      width: 9.0667rem;
      height: 19.8267rem;
      margin: 0 auto 0.5333rem;
      text-align: center;
      position: relative;
      background-image: url('../assets/images/uploadbg.png'); 
      background-size: cover;
      background-repeat: no-repeat;
      .desc {
        position: absolute;
        top: 2.4933rem;
        left: 50%;
        transform: translateX(-50%);
        font-family: PingFangSC-Light, sans-serif;
        color: #152342;
        font-size: 0.4rem;
        width: 100%;
        >span {
          font-weight: bold;
        }
      }
    }
    .order-btn {
      position: static;
      margin: 0 auto;
      transform: translate(0) !important;
    }
    .right-btn {
      position: absolute;
      top: 14.48rem;
    }
  }
</style>