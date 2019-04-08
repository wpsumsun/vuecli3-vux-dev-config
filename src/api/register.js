import request from '../utils/request'

// 注册
export function register(data)  {
    return request({
        url: '/member/register',
        method: 'post',
        data
    })
}

// 短信验证
export function validate(data)  {
    return request({
        url: '/sms/sendSms',
        method: 'post',
        params: data
    })
}

// 图片上传
export function upload(data)  {
  return request({
    url: '/member/uploadImage',
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data' },
    data
  })
}