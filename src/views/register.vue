<template>
  <div class="auth-wrapper">
    <img class="top-bg" src="../assets/images/top-bg.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <div class="title">会员等级匹配<br>登记表</div>
    <div class="header-wrapper">
      <img class="zhifubao" src="../assets/images/register-header.png">
      <div class="tip">
        欢迎您申请加入地中海航海家俱乐部。支付宝铂金<br>会员可使用积分匹配至金卡会员；支付宝钻石会员可<br>使用积分匹配至黑卡会员，让您的航程更加精彩！<br>请填写以下表格，开启您的申请之旅。</div>
    </div>
    <div class="form">
      <div class="form-tip">
        <div class="form-tip-left">
            <h5>个人信息</h5>  
            <p>姓名请用拼音填写</p>
        </div>   
        <div class="form-tip-right">* 必填项</div>
      </div>
      <div class="form-main">
        <div class="form-item">
          <span class="name required">姓</span>  
          <input v-model="formData.lastName" class="input" type="text" maxlength="20">
        </div>
        <div class="form-item">
          <span class="name required">名</span>  
          <input v-model="formData.name" class="input" type="text" maxlength="20">
        </div> 
        <div class="form-item">
          <span class="name required">性别</span>  
          <van-radio-group class="shape-wrapper" v-model="formData.gender">
            <van-radio :name="1" shape="square" checked-color="#152342">男</van-radio>
            <van-radio :name="2" shape="square" checked-color="#152342">女</van-radio>
          </van-radio-group>
        </div> 
        <div class="form-item">
          <span class="name long-name required">出生日期 (日/月/年)</span>  
          <input 
            class="input short-input" 
            type="text" 
            v-model="formData.birthday"
            ref="birthday"
            readonly
            @click="handleBirthday">
        </div> 
        <div class="form-item">
          <span class="name small-name required">地址</span>  
          <input v-model="formData.address" class="input small-input" type="text" maxlength="200">
        </div> 
        <div class="form-item">
          <span class="name small-name required">省/市</span>  
          <input  
            v-model="provinceCity"
            class="input small-input" 
            ref="address"
            @click="handleAddress" 
            type="text">
        </div> 
        <div class="form-item">
          <span class="name small-name">邮编</span>  
          <input  v-model="formData.zipCode" class="input small-input" type="text" maxlength="60">
        </div> 
        <div class="form-item">
          <span class="name smaller-name required">E-MAIL</span>  
          <input v-model="formData.email" class="input smaller-input" type="text">
        </div> 
        <div class="form-item">
          <span class="name smaller-name required">电话号码</span>  
          <input v-model="formData.phoneNumber"  class="input smaller-input" type="tel" maxlength="11">
        </div> 
        <div class="form-item last-item">
          <span class="name smaller-name required">验证码</span>  
          <input maxlength="6" v-model="formData.verificationCode" class="input smallest-input" type="tel">
          <div class="validate-btn" @click="handleSend" :class="{ disabled: timer }">{{  timer ? count : '发送验证码' }}</div>
        </div> 
        <div class="order-no">
          <p class="order-no-tip">请输入已支付成功的：<br>MSC地中海邮轮飞猪旗舰店，官方微信商城，<br>或电话中心预订订单号码*</p>
          <input  v-model="formData.orderNumber" class="order-input" type="text">
        </div>
        <div class="rules-wrapper">
          <p class="order-no-tip">已仔细阅读并同意以下条款:</p>
          <div class="rules" @click="$router.push({ name: 'clause' })">《地中海航海家俱乐部条款和细则》</div>
          <div class="rules" @click="$router.push({ name: 'protocol' })" >《用户授权协议》</div>
        </div>
      </div>
    </div>
    <div class="btn submit-btn" @click="handleSubmit">提  交</div>
    <group v-show="visibility">
      <datetime 
        v-model="formData.birthday" 
        @on-change="change" 
        :order-map="{year: 3, month: 2, day: 1}"
        :min-year="1900"
        :max-year="2019"
        :show.sync="visibility">
        </datetime>
    </group>
    <group v-if="showAddress">
      <x-address 
        hide-district
        v-model="addressArr" 
        title="选择"
        :list="addressData" 
        @on-shadow-change="onShadowChange" 
        :show.sync="showAddress">
        </x-address>
    </group>
      <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastMsg" position="top"></toast>
  </div>
</template>

<script>
  import { Datetime, Group, XAddress,  ChinaAddressV4Data, Toast } from 'vux'
import Radio from 'vant/lib/radio'
import RadioGroup from 'vant/lib/radio-group'
import 'vant/lib/radio/style'
import 'vant/lib/radio-group/style'
import { register, validate } from '@/api/register.js'

  export default {
    components: {
      Datetime, 
      Group,
      XAddress,
      Toast,
      'van-radio-group': RadioGroup,
      'van-radio': Radio,
    },
    data () {
      return {
        toastMsg: '',
        showPositionValue: false,
        visibility: false,
        showAddress: false,
        addressData: ChinaAddressV4Data,
        addressArr: [],
        formData: {
          birthday: '',
          province: '',
          provinceCode: '',
          country: '',
          countryCode: '',
          city: '',
          cityCode: '',
          district: '',
          districtCode: '',
          address: '',
          email: '',
          gender: 1,
          lastName: '',
          name: '',
          orderNumber: '',
          phoneNumber: '',
          zipCode: '', // 邮政编码
          verificationCode: '',
        },
        userId: '',
        timer: null,
        count: 60,
      }
    },
    computed: {
      provinceCity() {
        return this.formData.province + ' ' + this.formData.city
      }
    },
    created() {
      this.userId = this.$route.query.userId
    },
    methods: {
      handleToast(msg) {
        this.toastMsg = msg
        this.showPositionValue = true
      },
      change (value) {
        this.formData.birthday = value
      },
      handleBirthday() {
        this.$refs.birthday.blur()
        this.visibility = true
      },
      handleAddress() {
        this.$refs.address.blur()
        this.showAddress = true
      },
      onShadowChange (ids, names) {
        // this.addressArr = ids
        this.formData.provinceCode = ids[0]
        this.formData.cityCode = ids[1]
        this.formData.province = names[0]
        this.formData.city = names[1]
      },
      handleSubmit() {
        console.log(this.formData)
        const nameReg = /^[a-zA-Z]+$/
        const phoneReg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/
        const emailReg = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/
        if (!nameReg.test(this.formData.lastName)) {
          this.handleToast('请输入正确的姓') 
          return
        }
        if (!nameReg.test(this.formData.name)) {
          this.handleToast('请输入正确的名') 
          return
        }
        if (!this.formData.birthday) {
          this.handleToast('请选择出生日期') 
          return
        }
        if (!this.formData.address) {
          this.handleToast('请填写地址') 
          return
        }
        if (!this.formData.province) {
          this.handleToast('请填写省市') 
          return
        }
        if (!emailReg.test(this.formData.email)) {
          this.handleToast('请填写正确的E-MAIL') 
          return
        }
        if (!phoneReg.test(this.formData.phoneNumber)) {
          this.handleToast('请填写正确的手机号') 
          return
        }
        if (!this.formData.verificationCode) {
          this.handleToast('请填写验证码') 
          return
        }
        if (!this.formData.orderNumber) {
          this.handleToast('请填写预定订单编号') 
          return
        }
        const option = Object.assign(this.formData, { userId: this.userId })
        register(option).then(res => {
          if (res.data.code === '0') {
            this.handleToast(res.data.msg)
          } else {
            this.handleToast('提交成功')
            setTimeout(() => {
              this.$router.push({ name: 'order' })
            }, 1000)
          }
        })
      },
      handleSend() {
        const phoneReg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/
        if (!phoneReg.test(this.formData.phoneNumber)) {
          this.handleToast('请填写正确的手机号') 
          return
        }
        validate({ phoneNumber: this.formData.phoneNumber }).then(res => {
           if (res.data.code === '0') {
            this.handleToast(res.data.msg)
          } else {
            this.timer = setInterval(() => {
              if (this.count > 0) {
                this.count -= 1
              } else {
                clearInterval(this.timer)
                this.timer = null
                this.count = 60
              }
            }, 1000)
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
@import '../styles/button.less';
  .auth-wrapper {
    width: 100%;
    position: relative;
    background-image: url('../assets/images/bg.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    font-family: PingFangSC-light, sans-serif;
    .submit-btn {
      background: #C99B34;
      font-family: PingFangSC-Light, sans-serif;
      margin: 0 auto 3rem;
      position: relative;
      z-index: 1;
    }
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
      font-size: 0.88rem;
      position: absolute;
      right: 0.6133rem;
      top: 1.0667rem;
      font-family: PingFangSC-light, sans-serif;
      color: #152342;
      text-align: right;
    }
    .header-wrapper {
      position: absolute;
      width: 9.0667rem;
      left: 50%;
      top: 2.8rem;
      transform: translateX(-50%);
      z-index: 2;
      .tip {
        font-size: 0.32rem;
        line-height: 0.5333rem;
        margin-top: 2.5333rem;
        position: relative;
        z-index: 2;
        padding-left: 1.04rem;
        color: #747575;
      }
    }
    .zhifubao {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
    .shape-wrapper /deep/{
      display: inline-block;
      .van-radio {
        display: inline-flex;
        align-items: center;
        margin-left: 15px;
        font-size: 0.3733rem;
        .van-icon {
          margin-right: 10px;
          // font-size: 
        }
      }
    }
    .form {
      width: 9.0667rem;
      margin: 9.2267rem auto 0.8rem;
      background: #fff;
      border-radius: 0.32rem;
      font-family: PingFangSC-Light, sans-serif;
      padding: 0.6667rem  0  0.6667rem  1.0667rem;
      color: #152342;
      &-tip {
        display: flex;
        justify-content: space-between;
        padding-right: 0.6667rem;
        &-left {
          color: #152342;
          h5 {
            font-size: 0.4267rem;
            font-weight: normal;
          }
          p {
            font-size: 0.24rem;
          }
        }
        &-right {
          font-size: 0.24rem;
          margin-top: 0.1333rem;
        }
      }
      &-main {
        .form-item {
          margin-bottom: 0.2667rem;
          &.last-item {
            margin-right: 0.72rem;
            border-bottom: 1px dashed #C99B34;
            padding-bottom: 0.48rem;
            margin-bottom: 0.48rem;
          }
          .name {
            display: inline-block;
            width: 0.9333rem; // 70
            font-size: 0.3733rem;
            &.long-name {
              width: 3.5733rem;
            }
            &.small-name {
              width: 1.12rem;
            }
            &.smaller-name {
              width: 1.7067rem;
            }
            &.required::after {
              content: '*';
              display: inline-block;
            }
          }
          .input {
            width: 6.08rem; // 456
            height: 0.96rem;
            border: 1px solid #747575;
            border-radius: 5px;
            padding-left: 10px;
            font-size: 14px;
            &.short-input {
              width: 3.4133rem;
            }
            &.small-input {
              width: 5.8667rem;
            }
            &.smaller-input {
              width: 5.28rem;
            }
            &.smallest-input {
              width: 2.8rem;
            }
          }
          .validate-btn {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 2.1333rem;
            height: 0.96rem;
            background: #C99B34;
            border: 1px solid #C99B34;
            color: #fff;
            font-size: 0.32rem;
            border-radius: 4px;
            &.disabled {
              background: #747575;
              border-color: #747575;
              pointer-events: none;
            }
          }
        }
        .order-no {
          &-tip {
            font-size: 0.3733rem;
            line-height: 0.48rem;
          }
          .order-input {
            width: 6.9333rem;
            margin: 0.4267rem auto 0.56rem;
            height: 0.96rem;
            border: 1px solid #747575;
            border-radius: 5px;
            padding-left: 10px;
            font-size: 0.3733rem;
          }
        }
        .rules-wrapper {
          .rules {
            font-size: 0.32rem;
            color: #747575;
            margin-top: 0.2133rem;
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
    }
  }
</style>