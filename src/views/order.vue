<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/ren.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <img class="logo" src="../assets/images/logo.png">
    <div class="order-wrapper">
      <img class="order-header" src="../assets/images/order-header.png">
      <div class="order-desc">
        <div class="desc-title">您提交的信息已收到<br>我们会在<span class="mark">21个</span>工作日内<br>将电子卡片以邮件形式<br>发送至您预留邮箱</div> 
        <div class="desc-title connect">您也可以拨打<br>地中海邮轮官方服务热线<br><a class="mark" href="tel:400 820 0966">400 820 0966</a><br>获取更多信息</div>
      </div>
    </div>
    <div class="btn agree-btn order-btn" @click="handleOrder">立即订票</div>
    <div class=" btn cancel-btn  right-btn"  @click="$router.push({ name: 'right' })">查看会员权益</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
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
    height: 100vh;
    min-height: 17.7867rem;
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
      top: 2.8rem;
      transform: translateX(-50%);
      z-index: 2;
      .order-header {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
      .order-desc {
        position: absolute;
        left: 3.28rem;
        top: 2.6933rem;
        font-family: PingFangSC-Light, sans-serif;
        color: #152342;
        .mark {
          color: #C99B34;
        }
        .desc-title {
          font-size: 0.4rem;
          line-height: 0.64rem;
          &.connect {
            margin-top: 0.5333rem;
          }
        }
      }
    }
    .order-btn {
      position: absolute;
      top: 12.7467rem;
    }
    .right-btn {
      position: absolute;
      top: 14.48rem;
    }
  }
</style>