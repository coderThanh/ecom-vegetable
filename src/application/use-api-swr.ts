'use client'

import { notifyError, notifySuccess } from '@/ultil/toast'
import { useCallback, useState } from 'react'
import useSWR, { SWRConfiguration } from 'swr'

import { RestOptions } from '@/ultil/type'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

// This Hook should use for client

export const usePostAPI = (action: any, isAutoShowNotify: boolean = true) => {
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
}

export const useGetDetailById = (
  action: any,
  isAutoShowNotify: boolean = false,
) => {}

export const useGetList = (action: any, isAutoShowNotify: boolean = false) => {}

export const useSWRGetJSON = (
  action: any,
  options?: RestOptions,
  swrConfig?: SWRConfiguration,
  isAutoShowNotify: boolean = false,
) => {
  const { data, error, isLoading } = useSWR(
    options ? [options] : null,
    ([options]) => action(options),
    swrConfig,
  )

  return { isLoading, error, data }
}

export const usePutAPIById = (
  action: any,
  isAutoShowNotify: boolean = true,
) => {
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

export const useDeleteAPIById = (
  action: any,
  isAutoShowNotify: boolean = true,
) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const _delete = useCallback(
    async (id: string, param?: RestOptions) => {
      try {
        let gRecaptchaToken = undefined

        if (param?.isRecaptcha === true) {
          if (!executeRecaptcha) {
            notifyError('Lỗi không có ReCaptcha')
            return
          }

          gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit')
        }

        delete param?.isRecaptcha
        
        return null
      } catch (errorAPI: any) {
        return null
      }
    },
    [action, executeRecaptcha],
  )
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
