<template>
  <div>
    <!--<group>-->
      <!--<x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></x-address>-->
      <!--<cell title="上面value值" :value="value"></cell>-->
    <!--</group>-->
    <!--<div style="padding:15px;">-->
      <!--<x-button type="primary" plain @click.native="showPlugin">123</x-button>-->
    <!--</div>-->
    <group title="('Default format: YYYY-MM-DD')">
      <datetime
        v-model="value1"
        :order-map="{ year: 3, month: 2, day: 1 }"
        @on-change="change"
        title="Birthday"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"></datetime>
    </group>
  </div>
</template>

<i18n>
  select address:
  zh-CN: 选择地址
</i18n>

<script>
  import { TransferDom, Popup, Datetime, Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'

  export default {
    components: {
      Group,
      XAddress,
      XButton,
      Cell,
      Datetime,
      Popup
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        noonValue: '2018-04-13 PM',
        readonly: true,
        minuteListValue: '2017-06-12 09:00',
        hourListValue: '2017-06-12 09:00',
        format: 'YYYY-MM-DD HH:mm',
        value1: '2015-11-12',
        valueReadonly: '2015-11-12',
        value2: '',
        value3: '',
        value3_1: '',
        value4: '',
        value5: '',
        value6: '2016-08-18',
        value7: '',
        value8: '',
        limitHourValue: '',
        startDate: '2015-11-11',
        endDate: '2017-10-11',
        formatValue: '2017-10-11',
        formatValueFunction (val) {
          return val.replace(/-/g, '$')
        },
        value9: '',
        visibility: false,
        computeHoursValue: '',
        computeDaysValue: '',
        computeHoursFunction (date, isToday, generateRange) {
          if (isToday) {
            return generateRange(new Date().getHours(), 23)
          } else {
            return generateRange(0, 23)
          }
        },
        computeDaysFunction (options, generateRange) {
          return [options.month] // if current month is n, days are [n]
        },
        onlySetEndDate: '2017-10-11',
        onlySetEndDateValue: ''
      }
    },
    methods: {
      toggleFormat () {
        if (this.format === 'YYYY-MM-DD') {
          this.format = 'YYYY-MM-DD HH:mm'
        } else {
          this.format = 'YYYY-MM-DD'
        }
      },
      log (str1, str2 = '') {
        console.log(str1, str2)
      },
      onConfirm (val) {
        console.log('on-confirm arg', val)
        console.log('current value', this.value1)
      },
      showPlugin () {
        this.$vux.datetime.show({
          cancelText: '取消',
          confirmText: '确定',
          format: 'YYYY-MM-DD HH',
          value: '2017-05-20 18',
          onConfirm (val) {
            console.log('plugin confirm', val)
          },
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          }
        })
      },
      toggleFormat () {
        if (this.format === 'YYYY-MM-DD') {
          this.format = 'YYYY-MM-DD HH:mm'
        } else if (this.format === 'YYYY-MM-DD HH:mm') {
          this.format = 'YYYY-MM-DD'
        }
      },
      change (value) {
        console.log('change', value)
      },
      clearValue (value) {
        this.value6 = ''
      },
      clearValue8 (value) {
        this.value8 = ''
      },
      setToday (value) {
        let now = new Date()
        let cmonth = now.getMonth() + 1
        let day = now.getDate()
        if (cmonth < 10) cmonth = '0' + cmonth
        if (day < 10) day = '0' + day
        this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
        console.log('set today ok')
      },
      changeValue (val) {
        this.value1 = val
        this.$refs.datetime.render()
      },
      changeFormatAndValue () {
        this.format = 'YYYY-MM-DD HH'
        this.$nextTick(() => {
          this.value1 = '2019-10-23 10'
          this.$refs.datetime.render()
        })
      },
      onChange (val) {
        console.log('change', val)
      },
      doShowAddress () {
        this.showAddress = true
        setTimeout(() => {
          this.showAddress = false
        }, 2000)
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      changeData () {
        this.value2 = ['430000', '430400', '430407']
      },
      changeDataByLabels () {
        this.value2 = ['广东省', '广州市', '天河区']
      },
      changeDataByLabels2 () {
        this.value2 = ['广东省', '中山市', '--']
      },
      getName (value) {
        return value2name(value, ChinaAddressV4Data)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      }
    }
  }
</script>