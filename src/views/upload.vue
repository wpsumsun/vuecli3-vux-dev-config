<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/ren.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <img class="logo" src="../assets/images/logo.png">
    <div class="order-wrapper">
      <!-- <img class="order-header" src="../assets/images/uploadbg.png"> -->
      <p class="desc">第一步：请您上传支付宝<span>会员等级</span>照片</p>
      <div class="upload-wrapper">
        <div class="upload-btn">
          <div class="icon-wrapper" @click="onClickUpload('input')">
            <img v-if="!formData.alipayMemberLevelImage" class="icon" src="../assets/images/upload-icon.png">
            <img v-else class="upload-img" :src="formData.alipayMemberLevelImage">
            <input
              ref="input"
              @change="handleChange($event, 'alipayMemberLevelImage')"
              class="input upload-input"
              accept="image/x-png,image/gif,image/jpeg"
              type="file"
              name="file">
          </div>
          <p>支付宝会员等级照片</p>
        </div>
        <div class="example">
          <img src="../assets/images/grade.png">
          <p>* 范例：支付宝会员等级照片</p>
        </div>
      </div>
      <p class="desc desc-personal">第一步：请您上传支付宝<span>个人信息</span>照片</p>
      <div class="upload-wrapper">
        <div class="upload-btn">
          <div class="icon-wrapper" @click="onClickUpload('input1')">
            <img v-if="!formData.alipayMemberInfoImage" class="icon" src="../assets/images/upload-icon.png">
            <img v-else class="upload-img" :src="formData.alipayMemberInfoImage">
            <input
              ref="input1"
              @change="handleChange($event, 'alipayMemberInfoImage')"
              class="input upload-input"
              accept="image/x-png,image/gif,image/jpeg"
              type="file"
              name="file">
          </div>
          <p>支付宝个人信息照片</p>
        </div>
        <div class="example">
          <img src="../assets/images/personal.png">
          <p>* 范例：支付宝个人信息照片</p>
        </div>
      </div>
    </div>
    <div class="btn agree-btn order-btn" @click="handleSubmit">提交</div>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastMsg" position="top"></toast>
  </div>
</template>

<script>
import { Toast } from 'vux'
  import { register, validate, upload } from '@/api/register.js'

  export default {
    components: {
      Toast
    },
    data () {
      return {
        toastMsg: '',
        showPositionValue: false,
        formData: {},
      }
    },
    created() {
      this.formData = JSON.parse(JSON.stringify(this.$store.state.app.form))
    },
    methods: {
      handleSubmit() {
        if (!this.formData.alipayMemberLevelImage) {
          this.handleToast('请上传会员等级信息图片')
          return
        }
        if (!this.formData.alipayMemberInfoImage) {
          this.handleToast('请上传个人信息图片')
          return
        }
        this.$store.commit('MODIFY_FORM', this.formData)
        this.$router.push({ name: 'register' })
      },
      handleChange(e, key) {
        let postFiles = Array.prototype.slice.call(e.target.files)[0]
        const formData = new FormData()
        formData.append('file', postFiles)
        upload(formData).then(res => {
          if (res.data.code === '0') {
            this.handleToast(res.data.msg)
          } else {
            this.$set(this.formData, key, res.data.result[0] || '')
          }
        })
      },
      onClickUpload(name) {
        this.$refs[name].click()
      },
      handleToast(msg) {
        this.toastMsg = msg
        this.showPositionValue = true
      },
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
        &.desc-personal {
          top: 12rem;
        }
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
    .upload-wrapper {
      width: 100%;
      padding: 3.6rem 0.7467rem 0 1.4133rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .upload-btn {
        .icon-wrapper {
          width: 2.72rem;
          height: 2.72rem;
          border: 1px dashed #C99B34;
          border-radius: 0.1333rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.16rem;
          .icon {
            width: 0.9067rem;
            height: 0.9067rem;
          }
        }
        >p {
          font-size: 0.32rem;
          color: #9B9B9B;
        }
      }
      .example {
        >img {
          width: 3rem;
          margin-bottom: 0.16rem;
        }
        p {
          font-size: 0.24rem;
          color: #747474;
        }
      }
    }
    .upload-input {
      display: none;
    }
    .upload-img {
      max-width: 2.4rem;
      max-height: 2.4rem;
    }
  }
</style>