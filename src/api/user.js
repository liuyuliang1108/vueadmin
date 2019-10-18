import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/token/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/userinfo/userinfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/userinfo/logout',
    method: 'post'
  })
}
