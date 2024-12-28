import 'dayjs/locale/vi'

import { DATE_FORMAT_VI, TOKEN } from '@/ultil/const'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

//  --------
export const isConnectAPI = () =>
  process.env.NEXT_PUBLIC_HAS_API_DB_CONECT == 'true'

export const isMaintainMode = () =>
  process.env.NEXT_PUBLIC_IS_MAINTAIN_MODE == 'true'

//  ------
export const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms))
}

// -------------------------Check login------------------------------------
export const isLogin = () => !!getItemLocalStorage(TOKEN)

// -----------------Get/set/remove item localstorage-----------------------
export const setItemLocalStorage = (key: string, value: any) =>
  typeof localStorage !== 'undefined' && key && value
    ? localStorage.setItem(key, JSON.stringify(value))
    : null

export const getItemLocalStorage = (key: string | null = null) =>
  typeof localStorage !== 'undefined' && key
    ? JSON.parse(localStorage.getItem(key) ?? '""')
    : null

export const removeItemLocalStorage = (
  key: string | null = null,
  options: any,
) => {
  if (typeof localStorage === 'undefined') {
    return false
  }
  const { removeAll } = options || { removeAll: false }

  if (removeAll) {
    // Xoa het item o localstorage
    localStorage.clear()
    return true
  }

  if (!key) {
    return false
  }

  localStorage.removeItem(key)
  return true
}

// ------------------------------------------------------------

// -----------------Get/set query params
/**
 * Lấy một param từ url
 * @param {*} name
 * @returns
 */
export const getQueryStringParameter = (name: string, url: string) => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(url || window.location.search)
    return urlParams.get(name)
  }
  return
}

/**
 * get height, width screen
 * @returns object
 */
export const getWindowDimensions = () => {
  if (typeof window === 'undefined') {
    return { clientHeight: 0, clientWidth: 0, width: 0, height: 0 }
  }
  const { innerWidth: width, innerHeight: height } = window
  return {
    width: width ? width : 0,
    height: height ? height : 0,
  }
}

/**
 *
 * @param message
 * @returns
 */
export const getSentenceFromCamelCase = (message: any) => {
  if (!message) {
    return
  }
  const pattern =
    /[^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$]/g
  const messages = message.match(pattern)
  let errorMessage = ''
  for (let i = 0; i < messages?.length; i++) {
    errorMessage +=
      messages[i] === messages[i].toUpperCase()
        ? ' ' + messages[i].toLowerCase()
        : messages[i]
  }
  return errorMessage.trim()
}

/**
 *
 * @param type
 * @returns
 */
export const getRegExp = (type: string) => {
  let regex: any = null
  switch (type) {
    case 'email':
      regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
      break
    case 'password':
      regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      break
    default:
      break
  }
  return regex
}

/*
 * Check image
 * @param {*} url
 * @returns
 */
export const isImage = (url: string) =>
  url ? /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url) : false

/**
 *
 * @param number
 * @returns
 */
export const isValidationPhoneNumber = (number: string, location = 'vi') => {
  if (location === 'vi') {
    return /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number)
  }
  return false
}

/**
 *
 * @param birthday
 * @returns
 */
export const validateBirthday = (birthday: string) => {
  let result = false
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
    return result
  }
  const parts = birthday.split('-')
  const now = new Date()
  const year = parseInt(parts[0], 10)
  const currentYear = now.getFullYear()
  const month =
    parts[1][0] === '0' ? parseInt(parts[1][1], 10) : parseInt(parts[1], 10)
  const day =
    parts[2][0] === '0' ? parseInt(parts[2][1], 10) : parseInt(parts[2], 10)

  result = true

  if (year >= currentYear) {
    result = false
  }
  if (currentYear - year < 18 || currentYear - year > 80) {
    result = false
  }
  if (month < 1 || month > 12) {
    result = false
  }
  if (day < 1 || day > 31) {
    result = false
  }

  return result
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

export const formatVideoTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

export const copyBoard = (value = null) => {
  if (!value) {
    return
  }
  navigator.clipboard.writeText(value)
}

// debounce
export const debounce = (func: any, waitFor = 300) => {
  let timeout: any

  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitFor)
  }
}

export function parseQuerySlug(string: string, isLowerCase = false) {
  string.toString()

  if (isLowerCase) string.toLowerCase()

  return string.toString().replace('&', '').split(' ').join('-')
}

export function parseSlugToString(slug: string) {
  return slug.toString().split('-').join(' ').trim()
}

export function removeObjectKeyEmpty(object: { [key: string]: any }) {
  var newObject: { [key: string]: any } = {}

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (object[key]) {
        newObject[key] = object[key]
      }
    }
  }
  return newObject
}

export function generatString(length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export function parseVietnameseRemoveSign(string: string) {
  const a =
    'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b =
    'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    .replace(/đ/gi, 'd')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
}

export const isCurrentUrl = (url: string, routerUrl: string) => {
  var isCurrent = false
  const indexQuery = routerUrl.toString().indexOf('?')

  if (indexQuery != -1) {
    const asPath = routerUrl.slice(0, indexQuery)

    isCurrent = asPath == url
  } else {
    isCurrent = routerUrl == url
  }

  return isCurrent
}

// -----
export const formatDate = (date: string) => {
  return dayjs(date).format(DATE_FORMAT_VI)
}

// ------
export const toTitleCase = (text: string) => {
  if (!text) return text

  var result = text[0].toUpperCase() + text.slice(1).toLowerCase()

  return result
}

// --------

export const toCapitalizeCase = (text: string) => {
  if (!text) return text

  var listText = text.toString().split(' ')

  listText = listText.map(
    (item) => item[0].toUpperCase() + item.slice(1).toLowerCase(),
  )

  var result = listText.join(' ')

  return result
}

/**
 * Formats the address by concatenating non-null address components with a comma separator.
 *
 * @param {string} address - The address component.
 * @param {string} province - The province component.
 * @param {string} district - The district component.
 * @param {string} ward - The ward component.
 * @return {string} The formatted address string.
 */
export const parseAddressName = (
  address = '',
  province = '',
  district = '',
  ward = '',
): string => {
  var list = []
  list.push(address)
  list.push(ward)
  list.push(district)
  list.push(province)

  list = list.filter((item) => item)

  return list.join(', ')
}

/**
 * Formats a number in a shorter way. If the number is in billions, it will be formatted as e.g. 2.5b.
 * If the number is in millions, it will be formatted as e.g. 2.5m. If the number is in thousands, it will
 * be formatted as e.g. 2.5k. Otherwise, the number will be formatted with a comma separator.
 *
 * @param {number} num - The number to format.
 * @return {string} The formatted string.
 */
export const coverNumberToSummary = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'b'
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'm'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }

  return num.toLocaleString()
}

export const coverDateToCountFromToday = (day: Date) => {
  dayjs.extend(utc)

  const diffTimestemp = Date.now() - day.getTime()

  if (diffTimestemp <= 0) {
    return dayjs(day).local().format(DATE_FORMAT_VI)
  }

  const dateCountFrom = dayjs(diffTimestemp).utc()

  if (dateCountFrom.year() > 1970) {
    return dayjs(day).local().format(DATE_FORMAT_VI)
  }

  if (dateCountFrom.month() >= 1) {
    return `${dateCountFrom.month()} tháng`
  }

  if (dateCountFrom.date() > 1) {
    return `${dateCountFrom.date() - 1} ngày`
  }

  if (dateCountFrom.hour() >= 1) {
    return `${dateCountFrom.hour()} giờ`
  }

  if (dateCountFrom.minute() >= 1) {
    return `${dateCountFrom.minute()} phút`
  }

  if (dateCountFrom.second() >= 1) {
    return `${dateCountFrom.second()} giây`
  }
}
