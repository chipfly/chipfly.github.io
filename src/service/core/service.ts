import axios from 'axios'
import { Path } from './path'

import store from 'store2'
import { CacheKey } from 'data/cache-key'
import { getToken, getUserInfo } from '../user'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3011/api',
  timeout: 10000,
})

const skipAuthPaths = [Path.Login, Path.Register]

service.interceptors.request.use((config: any) => {
  const { url } = config || {}
  const token = getToken()
  if (!skipAuthPaths.includes(url) && token) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }
  return config
})

export default service
