'use client'

import { notifyError, notifySuccess } from '@/ultil/toast'
import { useCallback, useState } from 'react'

import { RestOptions } from '@/ultil/type'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const usePostAPI = (action: any, isAutoShowNotify: boolean = true) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const post = useCallback(
    async (body?: RestOptions) => {
      try {
        setLoading(true)
        setError(null)

        let gRecaptchaToken = undefined

        if (body?.isRecaptcha === true) {
          if (!executeRecaptcha) {
            notifyError('Lỗi không có ReCaptcha')
            return
          }

          gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit')
        }

        delete body?.isRecaptcha

        const { data, errors, message, statusCode } = await action({
          ...body,
          gRecaptchaToken,
        })

        if (statusCode === 200) {
          if (message?.content && isAutoShowNotify) {
            notifySuccess(message?.content)
          }
          return data
        }

        if (isAutoShowNotify) {
          notifyError(message?.content)
        }

        handleError(errors, setError)
        return null
      } catch (errorAPI: any) {
        setError(errorAPI)
        return null
      } finally {
        setLoading(false)
      }
    },
    [action, executeRecaptcha],
  )
  return {
    loading,
    post,
    error,
    setError,
  }
}

const useGetDetailById = (action: any, isAutoShowNotify: boolean = false) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const get = useCallback(
    async (id: string, options?: RestOptions) => {
      try {
        setLoading(true)
        setError(null)

        const { data, errors, message, statusCode } = await action(id, options)

        if (statusCode === 200) {
          return data
        }

        if (isAutoShowNotify) {
          notifyError(message?.content)
        }

        handleError(errors, setError)
        return null
      } catch (errorAPI: any) {
        setError(errorAPI)
        return null
      } finally {
        setLoading(false)
      }
    },
    [action],
  )

  return { loading, get, error, setError }
}

const useGetList = (action: any, isAutoShowNotify: boolean = false) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const get = useCallback(
    async (options?: RestOptions) => {
      // const startTime = new Date().getTime()
      try {
        setLoading(true)
        setError(null)

        let res = null
        res = await action(options)

        if (res?.data) {
          return res.data
        }

        handleError(res?.data?.errors, setError)
        return null
      } catch (errorAPI: any) {
        setError(errorAPI)
        return null
      } finally {
        setLoading(false)

        // _addLoadingTime(startTime, setLoading)
      }
    },
    [action],
  )
  return { loading, get, error, setError }
}

const useGetJSON = (action: any, isAutoShowNotify: boolean = false) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const get = useCallback(
    async (options?: RestOptions) => {
      // const startTime = new Date().getTime()
      try {
        setLoading(true)
        setError(null)

        return await action(options)
      } catch (errorAPI: any) {
        setError(errorAPI)
        return null
      } finally {
        setLoading(false)

        // _addLoadingTime(startTime, setLoading)
      }
    },
    [action],
  )
  return { loading, get, error, setError }
}

const usePutAPIById = (action: any, isAutoShowNotify: boolean = true) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const put = useCallback(
    async (id: string, param?: RestOptions) => {
      try {
        setLoading(true)
        setError(null)

        let gRecaptchaToken = undefined

        if (param?.isRecaptcha === true) {
          if (!executeRecaptcha) {
            notifyError('Lỗi không có ReCaptcha')
            return
          }

          gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit')
        }

        delete param?.isRecaptcha

        const { data, errors, message, statusCode } = await action(id, {
          ...param,
          gRecaptchaToken,
        })

        if (statusCode === 200) {
          if (isAutoShowNotify && message?.content) {
            notifySuccess(message?.content)
          }
          return data
        }

        if (isAutoShowNotify) {
          notifyError(message?.content)
        }

        handleError(errors, setError)
        return null
      } catch (errorAPI: any) {
        setError(errorAPI)
        return null
      } finally {
        setLoading(false)
      }
    },
    [action, executeRecaptcha],
  )
  return {
    loading,
    put,
    error,
    setError,
  }
}

const useDeleteAPIById = (action: any, isAutoShowNotify: boolean = true) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const _delete = useCallback(
    async (id: string, param?: RestOptions) => {
      try {
        setLoading(true)
        setError(null)

        let gRecaptchaToken = undefined

        if (param?.isRecaptcha === true) {
          if (!executeRecaptcha) {
            notifyError('Lỗi không có ReCaptcha')
            return
          }

          gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit')
        }

        delete param?.isRecaptcha

        const { data, errors, message, statusCode } = await action({
          ...param,
          gRecaptchaToken,
        })

        if (statusCode === 200) {
          if (isAutoShowNotify && message?.content) {
            notifySuccess(message?.content)
          }

          return data
        }

        if (isAutoShowNotify) {
          notifyError(message?.content)
        }

        handleError(errors, setError)
        return null
      } catch (errorAPI: any) {
        setError(errorAPI)
        return null
      } finally {
        setLoading(false)
      }
    },
    [action, executeRecaptcha],
  )
  return {
    loading,
    _delete,
    error,
    setError,
  }
}

const handleError = (errors: any, setError: any) => {
  if (Array.isArray(errors) && errors.length > 0) {
    setError(errors[0])
  } else {
    setError(new Error('Something went wrong'))
  }
}

const _addLoadingTime = (startTime: number, setLoading: any) => {
  const loadingTime = new Date().getTime() - startTime
  const countDownTime = loadingTime > 200 ? loadingTime : 200
  const timing = setTimeout(() => {
    setLoading(false)
    clearTimeout(timing)
  }, countDownTime)
}

export {
  useGetDetailById,
  useGetList,
  useGetJSON,
  usePostAPI,
  usePutAPIById,
  useDeleteAPIById,
}
