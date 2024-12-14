import { TIME_OUT_API, TOKEN } from '@/ultil/const'
import { getItemLocalStorage, removeItemLocalStorage } from '@/ultil/helper'

import axios from 'axios'
import { deleteCookie } from 'cookies-next'

export const isServer = () => {
  return typeof window === 'undefined'
}

export const restTransport = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN_API,
    timeout: TIME_OUT_API,
  })

  let fetchingToken = false

  const get = async (url: string, params = {}, config = {}) => {
    if (fetchingToken) {
      return undefined
    }
    return await client.get(url, { headers: { ...config }, params })
  }

  const post = async (url: string, data = undefined, config = {}) => {
    if (fetchingToken) {
      return undefined
    }
    return await client.post(url, data, config)
  }

  const put = async (url: string, data = undefined, config = {}) => {
    if (fetchingToken) {
      return undefined
    }
    return await client.put(url, data, { headers: { ...config } })
  }

  const _delete = async (url: string, data = undefined, config = {}) => {
    if (fetchingToken) {
      return undefined
    }
    return await client.delete(url, {
      data,
      headers: { ...config },
    })
  }

  const rootUrl = () => client.defaults.baseURL

  // Yêu cầu đến server
  client.interceptors.request.use(
    (currentConfig) => {
      const token = getItemLocalStorage(TOKEN as any)
      if (token) {
        currentConfig.headers.Authorization = `Bearer ${token}`
      }

      return currentConfig
    },
    (error) => {
      // Do something with request error
      console.error('interceptors request error=============', error)
      // return Promise.reject(error)
    },
  )

  // server phản hồi kết quả
  client.interceptors.response.use(
    (response) => {
      return response.data
    },
    async (error) => {
      // Log error to console before reject with status code differ than 200 and 400

      // Remove authen expire
      var message = error?.response?.data?.message
      var errorText = error?.response?.data?.error

      if (
        errorText == 'Unauthorized' &&
        message == 'Expired token' &&
        window != undefined
      ) {
        console.error('error.response.data')
        removeItemLocalStorage(TOKEN, {})
        deleteCookie(TOKEN)
      }

      if (
        error.response?.status === 401 &&
        !error.response?.config?.url?.includes('auth/refresh') &&
        !error.response?.config?.url?.includes('signin')
      ) {
        fetchingToken = true
        removeItemLocalStorage(null, { removeAll: true })
      }
      return Promise.reject(error)
    },
  )

  return { get, _delete, post, put, rootUrl }
}
