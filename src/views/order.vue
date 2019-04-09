<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/ren.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <img class="logo" src="../assets/images/logo.png">
    <div class="order-wrapper">
      <img class="order-header" src="../assets/images/card1.png">
      <div class="order-desc">
        <div class="desc-title">您提交的信息已收到<br>我们会在<span class="mark">21个</span>工作日内<br>将电子卡片以邮件形式<br>发送至您预留邮箱</div> 
        <div class="desc-title connect">您也可以拨打<br>地中海邮轮官方服务热线<br><a class="mark" href="tel:400 820 0966">400 820 0966</a><br>获取更多信息</div>
        <div class="desc-title connect qrcode-wrapper">
          <img src="../assets/images/qrcode.png">
          <div class="tips-wrapper">
            <span class="tips-wrapper">
              <p class="scan">扫描公众号</p>
              <p class="desc">获取更多咨询</p>
            </span>
          </div>
        </div>
      </div>
      <div class="remind">
        <span>* 温馨提示：</span> 如您在预定时未出示会员卡号，请您务必至少提前5个工作日于航程开航日前将您的会员卡号提供给您的预定旅行社。如您是通过MSC 地中海邮轮官方渠道预定，请联系地中海邮轮客户服务中心。
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
    min-height: 100vh;
    position: relative;
    font-family: PingFangSC-Medium, sans-serif;
    background-image: url('../assets/images/bg.png');  
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2.8rem 0 0.5333rem;
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
      position: relative;
      width: 9.0667rem;
      height: 12.5333rem;
      margin: 0 0.5rem 0.4667rem;
      .order-header {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
      .order-desc {
        position: absolute;
        left: 3.28rem;
        top: 2.2933rem;
        font-family: PingFangSC-Light, sans-serif;
        color: #152342;
        .mark {
          color: #C99B34;
        }
        .desc-title {
          font-size: 0.4rem;
          line-height: 0.64rem;
          &.connect {
            margin-top: 0.2333rem;
          }
          &.qrcode-wrapper {
            display: flex;
            align-items: center;
            flex-direction: row;
            >img {
              width: 2.24rem;
              height: 2.24rem;
              margin-right: 0.16rem;
            }
            .tips-wrapper {
              font-size: 0.4rem;
              line-height: 0.4533rem;
              .scan {
                color: #C99B34;
                font-family: PingFangSC-Medium, sans-serif;
                font-weight: bold;
              }
              .desc {
                font-family: PingFangSC-Light, sans-serif;
                margin-top: 0.1333rem;
              }
            }
          }
        }
      }
      .remind {
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 0.4rem;
        top: 10.8933rem;
        font-family: PingFangSC-Light, sans-serif;
        color: #747575;
        font-size: 0.24rem;
        line-height: 0.3733rem;
      }
    }
    .order-btn {
      position: static;
      margin: 0 auto;
      transform: translate(0) !important;
    }
    .right-btn {
      position: static;
      margin: 0.32rem auto 0;
      transform: translate(0) !important;
    }
  }
</style>