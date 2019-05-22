import axios from 'axios'

const  request = axios.create({
    // baseURL: '/alipay-msc',
    baseURL: 'https://membership.msccruises.com.cn/alipay-msc',
    timeout: 5000
  })

  export default request