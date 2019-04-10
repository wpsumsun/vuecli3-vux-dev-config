<template>
  <div class="wrapper">
    <div class="auth-wrapper" ref="wrapper">
    <img class="top-bg" src="../assets/images/top-bg.png">
    <img class="bottom-bg" src="../assets/images/bot-bg.png">
    <div class="title">地中海<br>航海家俱乐部<br><span> 会员申请表</span></div>
    <div class="header-wrapper">
      <img class="zhifubao" src="../assets/images/register-header1.png">
      <div class="tip">
        加入地中海航海家俱乐部，尊享各种船上特权和礼遇，<br>让您的航程更精彩！
      </div>
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
        <!--<div class="form-item upload-item2">-->
          <!--<span class="name smaller-name required">图片上传</span>-->
          <!--<img @click="onClickUpload" class="upload-icon" src="../assets/images/photo.png">(点击上传支付宝等级截图)-->
          <!--<input-->
            <!--ref="input"-->
            <!--@change="handleChange"-->
            <!--class="input upload-input"-->
            <!--accept="image/x-png,image/gif,image/jpeg"-->
            <!--type="file"-->
            <!--name="file">-->
        <!--</div>-->
        <div class="form-item upload-item" v-show="formData.alipayImage">
          <img class="upload-img" :src="formData.alipayImage">
        </div>
        <div class="form-item">
          <span class="name smaller-name required">验证码</span>  
          <input maxlength="6" v-model="formData.verificationCode" class="input smallest-input" type="tel">
          <div class="validate-btn" @click="handleSend" :class="{ disabled: timer }">{{  timer ? count : '发送验证码' }}</div>
        </div>
        <div class="form-item last-item radio-wrapper">
          <van-radio v-model="formData.memberLevel" :name="1" shape="square" checked-color="#152342">支付宝钻石会员</van-radio>
          <van-radio v-model="formData.memberLevel" :name="2" shape="square" checked-color="#152342">支付宝铂金会员</van-radio>
          <div class="upload-btn" @click="handleJump('upload')">点击上传支付宝<span>会员级别</span>与<span>个人信息</span>照片</div>
          <van-radio v-model="formData.memberLevel" :name="0" shape="square" checked-color="#152342">非支付宝钻石会员/铂金会员</van-radio>
          <div class="tips">
            <p>* 支付宝会员匹配仅限本人申请一次，每个支付宝会员账户仅 限使用一次。</p>
            <p>* 同意并授权地中海邮轮查看及使用支付宝会员信息（等级、 积分）以便你享有相关福利 。</p>
            <p>* MSC地中海邮轮不接受18周岁以下宾客申请会员匹配。</p>
          </div>
        </div>
        <div class="form-item">
            <div class="protocol-wrapper">
              <p class="title1">请在阅读隐私信息文件后，表示同意个人 资料用作下列用途:</p>
              <p class="detail">MSC地中海邮轮希望能与您联系，告知您有关MSC 地中海邮轮或其子公司及合作伙伴的相关新产品和 特惠信息。您同意通过邮寄、电子邮件和/或电话 等方式与您取得联系。 </p>
              <p class="detail">MSC地中海游轮可合理收集相关信息数据分析(定制营销策略的消费习惯分析)</p>
              <p class="instruction">* 有关信息的用途、处理方式、数据提供方式及任何拒绝使 用信息造成的后果以及信息处理权限均遵守相关规定，详情 请参考地中海邮轮官网<a href="https://www.msccruises.com.cn">https://www.msccruises.com.cn</a>。</p>
              <p class="instruction">* 了解地中海航海家俱乐部更多信息，请参阅官网上发布的<a class="link" href="#">条件及条款</a></p>
            </div>
          </div>
        <!-- <div class="order-no">
          <p class="order-no-tip">请输入已支付成功的：<br>MSC地中海邮轮飞猪旗舰店，官方微信商城，<br>或电话中心预订订单号码*</p>
          <input  @click="handleBlur" v-model="formData.orderNumber" class="order-input" type="text">
        </div> -->
        <!-- <div class="rules-wrapper">
          <p class="order-no-tip">已仔细阅读并同意以下条款:</p>
          <div class="rules" @click="handleJump('clause')">《地中海航海家俱乐部条款和细则》</div>
          <div class="rules" @click="handleJump('protocol')" >《用户授权协议》</div>
        </div> -->
      </div>
    </div>
    <div class="btn submit-btn" @click="handleSubmit">提  交</div>
    <group v-show="visibility">
      <datetime 
        v-model="reverseBirthday" 
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
  </div>
</template>

<script>
  import { Datetime, Group, XAddress,  ChinaAddressV4Data, Toast } from 'vux'
  import { mapState } from 'vuex'
import Radio from 'vant/lib/radio'
import RadioGroup from 'vant/lib/radio-group'
import 'vant/lib/radio/style'
import 'vant/lib/radio-group/style'
import { register, validate, upload } from '@/api/register.js'

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
        reverseBirthday: '',
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
          source: '',
          alipayMemberInfoImage: '',
          alipayMemberLevelImage: '',
          memberLevel: 1  // 0:非会员 1：钻石   2：铂金
        },
        userId: '',
        timer: null,
        count: 60,
        scrollHeight: 0,
        isMember: '',
      }
    },
    computed: {
      provinceCity() {
        return this.formData.province + ' ' + this.formData.city
      }
    },
    created() {
      this.formData = JSON.parse(JSON.stringify(this.$store.state.app.form))
      const { user_id, source,  isMember } = this.$route.query
      this.userId = this.getQueryString('user_id') || ''
      this.isMember = this.getQueryString('isMember')
      this.formData.source = source
      if (this.isMember == 1) {
        this.$router.push({ name: 'order' })
      }
    },
    mounted() {
    },
    methods: {
      handleBlur() {
        console.log(1)
      },
      handleChange(e) {
        let postFiles = Array.prototype.slice.call(e.target.files)[0]
        const formData = new FormData()
        formData.append('file', postFiles)
        upload(formData).then(res => {
          if (res.data.code === '0') {
            this.handleToast(res.data.msg)
          } else {
            this.$set(this.formData, 'alipayImage', res.data.result[0] || '')
          }
        })
      },
      onClickUpload() {
        this.$refs.input.click()
      },
      getQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return r[2]; return '';
      },
      handleJump(name) {
        this.$store.commit('MODIFY_FORM', this.formData)
        this.$router.push({ name })
      },
      handleToast(msg) {
        this.toastMsg = msg
        this.showPositionValue = true
      },
      change (value) {
        this.reverseBirthday = value
        this.formData.birthday = value.split('-').reverse().join('-')
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
        return
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
        if (!this.formData.alipayImage) {
          this.handleToast('请先上传支付宝等级截图')
          return
        }
        if (!this.formData.verificationCode) {
          this.handleToast('请填写验证码') 
          return
        }
        // if (!this.formData.orderNumber) {
        //   this.handleToast('请填写预定订单编号') 
        //   return
        // }
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
  .wrapper {
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .auth-wrapper {
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 3rem;
    background-image: url('../assets/images/bg.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    font-family: PingFangSC-light, sans-serif;
    .submit-btn {
      background: #C99B34;
      font-family: PingFangSC-Light, sans-serif;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .top-bg {
      width: 100%;
      // position: absolute;
      // left: 0;
      // top: 0;
    }
    .upload-input {
      display: none;
    }
    .upload-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .upload-item2 {
      align-items: center;
      font-size: 0.32rem;
    }
    .upload-img {
      max-height: 6rem;
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
      top: 0.8rem;
      font-family: PingFangSC-Medium, sans-serif;
      color: #152342;
      text-align: right;
      line-height: 0.96rem;
      >span {
        font-family: PingFangSC-Light, sans-serif;
      }
    }
    .header-wrapper {
      position: absolute;
      width: 9.0667rem;
      left: 50%;
      top: 3.8rem;
      transform: translateX(-50%);
      z-index: 2;
      .tip {
        font-size: 0.32rem;
        line-height: 0.5333rem;
        margin-top: 2.4333rem;
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
    .radio-wrapper /deep/{
      .tips {
        font-size: 0.28rem;
        line-height: 0.5333rem;
        color: #747575;
        margin-top: 0.5333rem;
        font-family: PingFangSC-Light, sans-serif;
      }
      .van-radio {
        margin-left: 0 !important;
        display: inline-flex;
        align-items: center;
        font-size: 0.3733rem;
        .van-icon {
          margin-right: 10px;
          // font-size:
        }

      }
    }
    .protocol-wrapper {
      line-height: 0.5867rem;
      font-family: PingFangSC-Medium, sans-serif;
      padding-right: 0.5rem;
      a {
        color: #747575;
      }
      .link {
        text-decoration: underline;
      }
      .title1 {
        color: #011E41;
        font-size: 0.3733rem;
      }
      .detail {
        font-size: 0.32rem;
        color: #14233C;
        margin-top: 0.16rem;
        &::before {
          content: '';
          display: inline-block;
          width: 0.1333rem;
          height: 0.1333rem;
          background: #14233C;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      .instruction {
        color: #747575;
        line-height: 0.5333rem;
        font-size: 0.28rem;
        letter-spacing: -0.5px;
        margin-top: 0.2133rem;
      }
    }
    .upload-btn {
      width: 100%;
      height: 0.9867rem;
      border: 1px solid #747575;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.36rem;
      border-radius: 0.9867rem;
      margin: 0.6rem 0;
      >span {
        font-weight: bold;
        color: #C99B34;
      }
    }
    .form {
      width: 9.0667rem;
      margin: 1.3rem auto 0.8rem;
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
          .upload-icon {
            width: 0.64rem;
            vertical-align: -0.1333rem;
            margin-right: 5px;
          }
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
            width: 2.1rem;
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