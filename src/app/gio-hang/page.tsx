import 'dayjs/locale/vi'

import {
  CarSummary,
  CartRow,
  CartTable,
  CheckCoupon,
} from '@/app/gio-hang/component'

import { Wrapper } from '@/app/_components/wrapper'

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
