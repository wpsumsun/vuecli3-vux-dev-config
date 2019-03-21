const app = {
  namespced: true,
  state: {
    form: {
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
      }
  },
  mutations: {
    MODIFY_FORM: (state, form) => {
      state.form = form
    }
  }
}

export default  app
