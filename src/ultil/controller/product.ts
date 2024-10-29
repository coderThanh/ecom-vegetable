import { LOCALE } from '@/ultil/const'

export class ControllerProduct {
  static getPriceLocalString(price: number) {
    return new Intl.NumberFormat(LOCALE, {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  static getPercentSale(price: number, priceSale: number) {
    if (priceSale > price) return null

    return 100 - Math.round(priceSale/price *100)
  }
}
