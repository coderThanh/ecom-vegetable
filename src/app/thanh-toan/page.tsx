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
import SystemImage from '@/app/_components/img'
import SystemLink from '@/app/_components/link'
import { Wrapper } from '@/app/_components/wrapper'
import { useProductRemoveWishlist } from '@/application/use-product'

export default function PageCheckout() {
  return (
    <Wrapper>
      <div className="max-w-[900px] mx-auto p-[40px_14px_60px]">
        <div className="border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-2 p-[20px]">
          <h3 className="text-title text-size-4  font-[700] leading-[1.4] mb-[12px]">
            Thông tin thanh toán
          </h3>
          <CheckoutFormUser />
          <CheckoutFormTax className="mt-[20px]" />
          <div>
            <label htmlFor="field-note">Note order</label>
            <textarea
              name="note"
              id="field-note"
              className='field-input field-textarea'
              placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.'
            ></textarea>
          </div>
          <SystemButton
            text="Place order"
            className="mt-[20px]"
          />
        </div>
      </div>
    </Wrapper>
  )
}

type CheckoutFormUserProps = { className?: string }
export const CheckoutFormUser = (props: CheckoutFormUserProps) => {
  return <div className={`${props?.className ?? ''}`}>aa</div>
}

type CheckoutFormTaxProps = { className?: string }
export const CheckoutFormTax = (props: CheckoutFormTaxProps) => {
  return <div className={`${props?.className ?? ''}`}>tax</div>
}
