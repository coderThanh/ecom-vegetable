import { RestOptions } from '@/ultil/type'

export const useServerGetList = (action: any) => {
  const get = async (options?: RestOptions) => {
    try {
      let res = null

      res = await action(options)

      if (res?.data) {
        return res.data
      }

      handleError(res?.data?.errors)

      return null // useSWR require return null if error
    } catch (errorAPI: any) {
      console.error('useServerGetList', errorAPI?.message)
      return null
    } finally {
    }
  }
  return { get }
}

export const useServerGetDetailById = (action: any) => {
  const get = async (id: string, options?: RestOptions) => {
    try {
      const { data, errors, statusCode } = await action(id, options)

      if (statusCode === 200) {
        return data
      }

      handleError(errors)
      return null
    } catch (errorAPI: any) {
      console.error('useServerGetDetailById', errorAPI?.message)
      return null
    }
  }

  return { get }
}

const handleError = (errors: any) => {
  if (Array.isArray(errors) && errors.length > 0) {
    console.error(errors[0])
  } else {
    console.error(new Error('Something went wrong'))
  }
}
