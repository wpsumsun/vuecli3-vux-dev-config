import axios from 'axios'

const  request = axios.create({
    baseURL: 'https://gw.56kabao.com/alipay-msc',
    timeout: 5000
  })

  export default request