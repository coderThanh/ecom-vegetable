'use client'

import 'dayjs/locale/vi'

import SystemButton, {
  SystemButtonColor,
  SystemButtonSize,
} from '@/app/_components/button'

import { ControllerProduct } from '@/presentation/product'
import { DATA_PRODUCTS } from '@/data/demo-data'
import { FieldCount } from '@/app/_components/fields/field'
import { ROUTERS } from '@/ultil/router'
import SvgClose from '@/svg/close'
import SvgEye from '@/svg/eye'
import SystemImage from '@/app/_components/img'
import SystemLink from '@/app/_components/link'
import { TitleSimple } from '@/app/_components/titles/title-simple'
import { Wrapper } from '@/app/_components/wrapper'
import { useProductRemoveWishlist } from '@/application/use-product'

export default function PageCart() {
  return (
    <Wrapper>
      <div className="max-w-[900px] mx-auto p-[40px_14px_60px]">
        <h3 className="text-title  font-[600] leading-[1.4] mb-[12px]">
          Giỏ hàng
        </h3>
        <CartTable className="hidden md:block" />
        <CartRow className="md:hidden" />
      </div>
    </Wrapper>
  )
}

type CartTableProps = { className?: string }
export const CartTable = (props: CartTableProps) => {
  const { handleRemoveWishlist } = useProductRemoveWishlist()

  const labels = ['Product', 'Price', 'Quantity', 'Total', '']

  const classItemValue = 'p-[14px_12px] md:p-[14px_12px] flex items-center'

  return (
    <div
      className={`${
        props?.className ?? ''
      } p-[24px_20px_10px] rounded-radius-2  border border-solid border-[rgb(var(--color-border),0.1)] overflow-x-auto overflow-y-hidden`}
    >
      <div>
        {/* label */}
        <div className="grid grid-cols-[1fr_130px_120px_130px_60px] min-w-[600px]  border-b-1 border-solid border-[rgb(var(--color-border),0.1)]">
          {labels.map((label, index) => (
            <div
              key={`cart-label-${index}`}
              className={`font-[700] text-title p-[0_10px_16px]`}
            >
              {label}
            </div>
          ))}
        </div>
        {/* Items */}
        {DATA_PRODUCTS.slice(0, 4).map((item, index) => {
          return (
            <div
              key={`cart-item-${index}`}
              className="grid grid-cols-[1fr_130px_120px_130px_60px] min-w-[600px] border-t border-solid border-[rgb(var(--color-border),0.1)]"
            >
              <div className={`${classItemValue}`}>
                <SystemLink
                  url={ROUTERS.productDetail}
                  className="flex gap-[14px] items-center transition-colors hover:text-primary"
                >
                  <SystemImage
                    src={'/assets/product/product-1.jpg'}
                    ratio={75}
                    alt={item.title}
                    className="bg-[rgb(var(--bg-opposite),0.05)] rounded-radius-2 w-[50px]"
                  />
                  <span className="flex-1 leading-[1.4] text-size-small ">
                    {item.title}
                  </span>
                </SystemLink>
              </div>
              <div
                className={`${classItemValue} text-size-small font-[600] text-title`}
              >
                {ControllerProduct.getPriceLocalString(item.price ?? 0)}
              </div>
              <div className={`${classItemValue} `}>
                <FieldCount
                  value={1}
                  onChange={function (value: number | string): void {}}
                  className="h-[32px] max-w-full w-full"
                  classInput="!w-[40px] flex-1"
                  classBtn="!p-[0_5px]"
                />
              </div>
              <div
                className={`${classItemValue} text-size-small font-[600] text-title`}
              >
                {ControllerProduct.getPriceLocalString(item.price ?? 0)}
              </div>
              <div className={`${classItemValue} justify-end`}>
                <button
                  className="flex items-center justify-center cursor-pointer w-[28px] h-[28px] text-alert bg-[rgb(var(--color-alert),0.1)] rounded-radius-small   transition-all hover:bg-alert hover:text-bg"
                  onClick={handleRemoveWishlist}
                >
                  <SvgClose
                    width="14"
                    height="14"
                  />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type CartRowProps = { className?: string }
export const CartRow = (props: CartRowProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      {DATA_PRODUCTS.slice(0, 4).map((item, index) => {
        return (
          <div
            key={`cart-item-${index}`}
            className={`p-[14px_14px] border border-solid border-[rgb(var(--color-border),0.1)] ${
              index > 0 ? 'mt-[16px]' : ''
            }`}
          >
            <SystemLink
              url={ROUTERS.productDetail}
              className="flex gap-[14px] items-center transition-colors hover:text-primary border-b border-solid border-[rgb(var(--color-border),0.1)] pb-[14px] mb-[16px]"
            >
              <SystemImage
                src={'/assets/product/product-1.jpg'}
                ratio={75}
                alt={item.title}
                className="bg-[rgb(var(--bg-opposite),0.05)] rounded-radius-2 w-[60px]"
              />
              <span className="flex-1 leading-[1.4]  font-[600]">
                {item.title}
              </span>
              <SystemButton
                color={SystemButtonColor.errorTransparent}
                size={SystemButtonSize.small}
                classInner='!p-[6px_8px] !min-h-[unset]'
              >
                <SvgClose
                  width={14}
                  height={14}
                />
              </SystemButton>
            </SystemLink>
            <div className="flex items-baseline justify-between gap-[20px]">
              <span className="">Price:</span>
              <span className="font-[600] text-title">
                {ControllerProduct.getPriceLocalString(item.price ?? 0)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-[20px] mt-[16px] ">
              <span className="">Quantity:</span>
              <span className="">
                <FieldCount
                  value={1}
                  onChange={function (value: number | string): void {}}
                  className="h-[32px] max-w-full w-full"
                  classInput="!w-[60px] flex-1"
                  classBtn="!p-[0_5px]"
                />
              </span>
            </div>

            <div className="flex items-baseline justify-between gap-[20px] mt-[16px] ">
              <span className="">Total:</span>
              <span className="font-[600] text-title">
                {ControllerProduct.getPriceLocalString(item.price ?? 0)}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
