import { defAxios as request } from '@/utils/http'

//获取用户登录token
export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}
//更新登录token
export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
