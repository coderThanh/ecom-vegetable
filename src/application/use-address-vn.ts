import { District, Province, Ward } from '@/data/type'
import {
  getDistrictList,
  getProvinceList,
  getWardList,
} from '@/application/api/address-vn'
import { useCallback, useEffect, useState } from 'react'

import { useSWRGetJSON } from '@/application/use-api-swr'

export const UseAddressVN = () => {
  const [provinceCurrent, setProvinceCurrent] = useState<null | Province>(null)

  const [districtCurrent, setDistrictCurrent] = useState<null | District>(null)

  const [wardCurrent, setWardCurrent] = useState<null | Ward>(null)

  const [provinceList, setProvinceList] = useState<Province[]>([])

  const [districtList, setDistrictList] = useState<District[]>([])

  const [wardList, setWardList] = useState<Ward[]>([])

  const { data: provinceRes }: { data: Province[] } = useSWRGetJSON(
    getProvinceList,
    { placholderKey: 'get-provinces' },
  )

  const { data: districtRes }: { data: District[] } = useSWRGetJSON(
    getDistrictList,
    provinceCurrent?.matt ? { id: provinceCurrent?.matt } : undefined,
  )

  const { data: wardsRes }: { data: Ward[] } = useSWRGetJSON(
    getWardList,
    districtCurrent?.maqh ? { id: districtCurrent?.maqh } : undefined,
  )

  const handleChangeProvinces = (index: number) => {
    if (provinceList[index].matt == provinceCurrent?.matt) {
      return
    }

    setProvinceCurrent(provinceList[index])

    setDistrictCurrent(null)

    setWardCurrent(null)
    setWardList([])
  }

  const handleChangeDistrict = (index: number) => {
    if (districtList[index].maqh == districtCurrent?.maqh) {
      return
    }

    setDistrictCurrent(districtList[index])
    
    setWardCurrent(null)
    setWardList([])
  }

  const handleChangeWard = (index: number) => {
    if (wardList[index].mapx == wardCurrent?.mapx) {
      return
    }

    setWardCurrent(wardList[index])
  }

  useEffect(() => {
    setProvinceList(provinceRes)
  }, [provinceRes])

  useEffect(() => {
    setDistrictList(districtRes)
  }, [districtRes])

  useEffect(() => {
    setWardList(wardsRes)
  }, [wardsRes])

  return {
    provinceCurrent,
    districtCurrent,
    wardCurrent,
    provinceList,
    districtList,
    wardList,
    handleChangeProvinces,
    handleChangeDistrict,
    handleChangeWard,
  }
}
