import { GET } from './core/request'
import store from 'store2'
import { CacheKey } from 'data/cache-key'

export const getGlobalConfig = async () => {
  // 默认先从缓存中读取
  const config = store.get(CacheKey.GlobalConfig)
  if (config) {
    return config
  }

  const res = await GET('/config', {})

  // 将accessToken和用户信息放入缓存中
  store.set(CacheKey.GlobalConfig, res)
  return res
}
