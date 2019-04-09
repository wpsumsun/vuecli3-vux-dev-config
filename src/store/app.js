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
        alipayMemberInfoImage: '',
        alipayMemberLevelImage: '',
        memberLevel: 1  // 0:非会员 1：钻石   2：铂金
      }
  },
  mutations: {
    MODIFY_FORM: (state, form) => {
      state.form = form
    }
  }
}

export default  app
