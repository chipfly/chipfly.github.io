import { GET, POST } from './core/request'
import { Path } from './core/path'
import store from 'store2'
import { CacheKey } from 'data/cache-key'
import { message } from 'antd'
import Router from 'next/router'

// 缓存用户信息
export const cacheUserInfo = ({ user, access_token }: any) => {
  store.set(CacheKey.AccessToken, access_token)
  store.set(CacheKey.User, user)
}

// 清空用户信息
export const clearUserInfo = () => {
  store.remove(CacheKey.AccessToken)
  store.remove(CacheKey.User)
  store.remove(CacheKey.GlobalConfig)
}

// 获取用户信息
export const getUserInfo = () => {
  return store.get(CacheKey.User)
}

// 获取token
export const getToken = () => {
  return store.get(CacheKey.AccessToken)
}

// 退出登录
export const logout = () => {
  clearUserInfo()

  Router.push('/login')
}

export const userLogin = async ({ phone, password }: any) => {
  const res = await POST(Path.Login, { phone, password })
  const { user = {}, access_token = '' } = (res as any) || {}

  // 将accessToken和用户信息放入缓存中
  cacheUserInfo({ user, access_token })

  const { name } = user
  message.success(`登录成功，欢迎${name}来到杏客社区`)
}

export const userRegister = async ({ name, phone, password }: any) => {
  const res = await POST(Path.Register, { name, phone, password })
  const { user = {}, access_token = '' } = (res as any) || {}

  // 将accessToken和用户信息放入缓存中
  cacheUserInfo({ user, access_token })

  const { name: username } = user
  message.success(`注册成功，欢迎${username}来到杏客社区`)
}

export const getUserProfile = async (userId: string) => {
  const res = await GET(`/user/${userId}/profile`, {})
  return res
}

export const editUserProfile = async (userId: string, profileInfo: any) => {
  const res = await POST(`/user/${userId}/profile`, profileInfo)
  return res
}
