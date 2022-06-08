import service from './service'
import { Method } from 'axios'
import { message as MessageBox } from 'antd'
import { logout } from 'service/user'

const request = async (url: string, params: any, method: Method) => {
  return new Promise((resolve, reject) => {
    let data = {}
    // get请求使用params字段
    if (method === 'get') {
      data = { params }
    }
    // post请求使用data字段
    if (method === 'post' || method === 'put') {
      data = { data: params }
    }

    service({
      url,
      method,
      ...data,
    })
      .then((res) => {
        const { data = {} } = res || {}
        const { code, data: businessData, message } = data
        if (code === 0) {
          resolve(businessData)
        } else {
          MessageBox.error(message)
          reject(businessData)
        }
      })
      .catch((error) => {
        const { data = {}, status = -1 } = error.response || {}
        console.log('==========error==========', error.response)
        if (status === 401) {
          logout()
          return
        }

        const { message } = data || {}
        if (message) {
          MessageBox.error(message)
        }
        reject(error)
      })
  })
}

export const GET = async (url: string, params: any) => {
  return await request(url, params, 'get')
}

export const POST = async (url: string, params: any) => {
  return await request(url, params, 'post')
}

export const PUT = async (url: string, params: any) => {
  return await request(url, params, 'put')
}
