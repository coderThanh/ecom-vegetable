'use client'

import 'dayjs/locale/vi'

import SystemButton, {
  SystemButtonColor,
  SystemButtonSize,
} from '@/app/_components/button'

import { ControllerProduct } from '@/presentation/ctrl-product'
import { DATA_PRODUCTS } from '@/data/demo-data'
import { FieldQuantity } from '@/app/_components/fields/quantity'
import { ROUTERS } from '@/ultil/router'
import SvgClose from '@/svg/close'
import SystemImage from '@/app/_components/img'
import SystemLink from '@/app/_components/link'
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

        {/* -- Price final */}
        <h3 className="text-title  font-[600] leading-[1.4] mb-[12px] mt-[30px] md:mt-[40px]">
          Thanh toán
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-[20px_30px]">
          <CheckCoupon />
          <CarSummary />
        </div>
      </div>
    </Wrapper>
  )
}

type CartTableProps = { className?: string }
export const CartTable = (props: CartTableProps) => {
  const { handleRemoveWishlist } = useProductRemoveWishlist()

  const labels = ['Product', 'Price', 'Quantity', '']

  const classItemValue = 'p-[14px_12px] md:p-[14px_12px] flex items-center'

  return (
    <div
      className={`${
        props?.className ?? ''
      } p-[24px_20px_10px] rounded-radius-2  border border-solid border-[rgb(var(--color-border),0.1)] overflow-x-auto overflow-y-hidden`}
    >
      <div>
        {/* label */}
        <div className="grid grid-cols-[1fr_140px_130px_70px] min-w-[600px]  border-b-1 border-solid border-[rgb(var(--color-border),0.1)]">
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
              className="grid grid-cols-[1fr_140px_130px_70px] min-w-[600px] border-t border-solid border-[rgb(var(--color-border),0.1)]"
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
                <FieldQuantity
                  value={1}
                  onChange={function (value: number | string): void {}}
                  className="h-[32px] max-w-full w-full"
                  classInput="!w-[40px] flex-1"
                  classBtn="!p-[0_5px]"
                />
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
            className={`p-[14px_14px] border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-2 ${
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
                classInner="!p-[6px_8px] !min-h-[unset]"
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
            <div className="flex items-center justify-between gap-[20px] mt-[12px] ">
              <span className="">Quantity:</span>
              <span className="">
                <FieldQuantity
                  value={1}
                  onChange={function (value: number | string): void {}}
                  className="h-[32px] max-w-full w-full"
                  classInput="!w-[60px] flex-1"
                  classBtn="!p-[0_5px]"
                />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

type CheckCouponProps = { className?: string }
export const CheckCoupon = (props: CheckCouponProps) => {
  return (
    <div className={`${props?.className ?? ''} `}>
      <div className=" border border-solid border-[rgb(var(--color-border),0.05)] p-[16px] rounded-radius-1 bg-[rgb(var(--bg-opposite),0.03)]">
        <p className="text-size-small leading-[1.4] mb-[7px] font-[600]">
          Mã khuyến mãi
        </p>
        <div className="flex gap-[8px]">
          <input
            type="text"
            placeholder="Enter your code"
            className="field-input flex-1 !h-[40px] !bg-bg"
          />
          <SystemButton
            color={SystemButtonColor.dark}
            size={SystemButtonSize.small}
            text="Apply"
            classInner="!h-[40px] "
            className="w-[80px]"
          ></SystemButton>
        </div>
      </div>
    </div>
  )
}

type CarSummaryProps = { className?: string }
export const CarSummary = (props: CarSummaryProps) => {
  return (
    <div className={`${props?.className ?? ''} `}>
      <div className=" border border-solid border-[rgb(var(--color-border),0.1)] p-[20px] rounded-radius-1">
        <p className="text-size-2 leading-[1.4] mb-[7px] font-[700]">
          Chi tiết
        </p>
        <div>
          {DATA_PRODUCTS.slice(0, 4).map((item, index) => {
            return (
              <div
                key={`cart-item-detail-${index}`}
                className={`mt-[16px] flex justify-between gap-[24px] items-baseline`}
              >
                <span className="leading-[1.5]">
                  {item.title}{' '}
                  <span className="text-primary">x{index + 1}</span>
                </span>
                <span className="font-[600] flex-1 text-right ">
                  {ControllerProduct.getPriceLocalString(1000000)}
                </span>
              </div>
            )
          })}
        </div>
        <p className="text-size-2 leading-[1.4] mb-[7px] mt-[20px] font-[700] border-t border-solid border-[rgb(var(--color-border),0.1)] pt-[20px]">
          Tạm tính
        </p>
        <div className="flex justify-between gap-[20px] items-baseline mt-[16px]">
          <span className="opacity-70">Sub-Total</span>
          <span className="font-[600] flex-1 text-right">
            {ControllerProduct.getPriceLocalString(1000000)}
          </span>
        </div>
        <div className="flex justify-between gap-[20px] items-baseline mt-[16px]">
          <span className="opacity-70">Delivery Charges</span>
          <span className="font-[600] flex-1 text-right">
            {ControllerProduct.getPriceLocalString(50000)}
          </span>
        </div>
        <div className="flex justify-between gap-[20px] items-baseline mt-[16px]">
          <span className="opacity-70">Coupan Discount</span>
          <span className="font-[600] flex-1 text-right">
            {ControllerProduct.getPriceLocalString(-100000)}
          </span>
        </div>
        <div className="flex justify-between gap-[20px] items-baseline mt-[20px] border-t border-solid border-[rgb(var(--color-border),0.1)] pt-[20px]">
          <span className="text-size-2 leading-[1.4] font-[700]">Total</span>
          <span className="font-[600] flex-1 text-right text-primary text-size-2 ">
            {ControllerProduct.getPriceLocalString(1050000)}
          </span>
        </div>
        <SystemButton
          url={ROUTERS.checkout}
          text="Checkout"
          className="w-full mt-[18px]"
          color={SystemButtonColor.primary}
        />
      </div>
    </div>
  )
}
