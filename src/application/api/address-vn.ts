import { RestOptions } from '@/ultil/type'
import { restTransport } from '@/ultil/api-by-axios'

const { get } = restTransport()

export const getProvinceList = async (options?: {
  string: string | number
}) => {
  return await get('/assets/vn-address/province.json', options)
}

export const getDistrictList = async ({
  id,
  options,
}: {
  id: string
  options?: RestOptions
}) => {
  return await get(`/assets/vn-address/district/${id}.json`, options)
}

export const getWardList = async ({
  id,
  options,
}: {
  id: string
  options?: RestOptions
}) => {
  return await get(`/assets/vn-address/wards/${id}.json`, options)
}
