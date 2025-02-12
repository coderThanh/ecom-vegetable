'use client'

import {
  StepPosition,
  StepTitle,
  StepsWrap,
} from '@/app/_components/steps/steps'

import { ChangeEvent } from 'react'
import { FieldSelectSearch } from '@/app/_components/fields/selection-search'
import { ROUTERS } from '@/ultil/router'
import { UseAddressVN } from '@/application/use-address-vn'
import { useRouter } from 'next/navigation'

type CheckoutFormUserProps = {
  className?: string
  useTax?: string
  onChangeTax: (value: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Renders the CheckoutFormUser component with form fields for payment information.
 *
 * @param {CheckoutFormUserProps} className - Optional class name for styling.
 * @param {CheckoutFormUserProps} useTax - Flag indicating if tax should be applied.
 * @param {CheckoutFormUserProps} onChangeTax - Function to handle tax change event.
 * @return {JSX.Element} The rendered CheckoutFormUser component.
 */
export const CheckoutFormUser = ({
  className,
  useTax,
  onChangeTax,
}: CheckoutFormUserProps) => {
  const {
    provinceCurrent,
    districtCurrent,
    wardCurrent,
    provinceList,
    districtList,
    wardList,
    handleChangeProvinces,
    handleChangeDistrict,
    handleChangeWard,
  } = UseAddressVN()

  const provincesOptions =
    provinceList?.length > 0
      ? provinceList.map((item) => {
          return { value: item.matt, title: item.name }
        })
      : []

  const districtsOptions =
    districtList?.length > 0
      ? districtList.map((item) => {
          return { value: item.maqh, title: item.name }
        })
      : []

  const wardsOptions =
    wardList?.length > 0
      ? wardList.map((item) => {
          return { value: item.maqh, title: item.name }
        })
      : []

  return (
    <div
      className={`${
        className ?? ''
      } border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-2 p-[20px]`}
    >
      <h3 className="text-title text-size-4  font-[700] leading-[1.4] mb-[18px]">
        Thông tin thanh toán
      </h3>
      <div className="grid gap-[19px]">
        {/* ------ */}
        <div>
          <label
            htmlFor="field-name"
            className="field-label"
          >
            Full Name <span className="text-alert">*</span>
          </label>
          <input
            id="field-name"
            type="text"
            className="field-input"
          />
        </div>
        {/* ------ */}
        <div>
          <label
            htmlFor="field-phone"
            className="field-label"
          >
            Phone <span className="text-alert">*</span>
          </label>
          <input
            id="field-phone"
            type="text"
            className="field-input"
          />
        </div>
        {/* ------ */}
        <div>
          <label
            htmlFor="field-email"
            className="field-label"
          >
            Email
          </label>
          <input
            id="field-email"
            type="email"
            className="field-input"
          />
        </div>
        {/* ------ */}
        <div>
          <label className="field-label">
            Tỉnh/Thành phố <span className="text-alert">*</span>
          </label>
          <FieldSelectSearch
            options={provincesOptions}
            placeholder="Chọn Tỉnh/Thành phố"
            defaultValue={
              provinceCurrent
                ? { value: provinceCurrent.matt, title: provinceCurrent.name }
                : null
            }
            onChange={handleChangeProvinces}
          />
        </div>
        {/* ------ */}
        <div>
          <label className="field-label">
            Quận/Huyện <span className="text-alert">*</span>
          </label>
          <FieldSelectSearch
            options={districtsOptions}
            placeholder="Chọn Quận/Huyện"
            defaultValue={
              districtCurrent
                ? { value: districtCurrent.maqh, title: districtCurrent.name }
                : null
            }
            onChange={handleChangeDistrict}
          />
        </div>

        {/* ------ */}
        <div>
          <label className="field-label">
            Xã/Phường <span className="text-alert">*</span>
          </label>
          <FieldSelectSearch
            options={wardsOptions}
            placeholder="Chọn Xã/Phường"
            defaultValue={
              wardCurrent
                ? { value: wardCurrent.mapx, title: wardCurrent.name }
                : null
            }
            onChange={handleChangeWard}
          />
        </div>
        {/* ------ */}
        <div>
          <label
            htmlFor="field-note"
            className="field-label"
          >
            Note order
          </label>
          <textarea
            name="note"
            id="field-note"
            className="field-input field-textarea"
            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
          ></textarea>
        </div>

        {/* ----- */}
        <label
          htmlFor="field-use-tax"
          className="field-checkbox"
        >
          <input
            type="checkbox"
            name="text"
            id="field-use-tax"
            onChange={onChangeTax}
            value={useTax}
          />
          <span className="el-checkbox"></span>
          <span>Xuất hoá đơn</span>
        </label>
      </div>
    </div>
  )
}

type CheckoutFormTaxProps = { className?: string }
/**
 * Renders the CheckoutFormTax component with form fields for company tax information.
 *
 * @param {CheckoutFormTaxProps} props - The props for the component.
 * @return {JSX.Element} The rendered CheckoutFormTax component.
 */
export const CheckoutFormTax = (props: CheckoutFormTaxProps) => {
  return (
    <div
      className={`${
        props?.className ?? ''
      } ] mt-[20px] mb-[10px] border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-2 p-[20px_20px_30px]`}
    >
      <h3 className="text-title text-size-3  font-[700] leading-[1.4] mb-[18px] ">
        Xuất hoá đơn công ty
      </h3>

      <div className="grid gap-[19px]">
        {/* ------ */}
        <div className="">
          <label
            htmlFor="field-company-name"
            className="field-label"
          >
            Company name <span className="text-alert">*</span>
          </label>
          <input
            id="field-company-name"
            type="text"
            className="field-input !bg-bg"
          />
        </div>
        {/* ------ */}
        <div>
          <label
            htmlFor="field-company-email"
            className="field-label"
          >
            Company email <span className="text-alert">*</span>
          </label>
          <input
            id="field-company-email"
            type="email"
            className="field-input !bg-bg"
          />
        </div>
      </div>
    </div>
  )
}

type CheckoutStepsProps = { className?: string }
/**
 * Renders the CheckoutSteps component with the secure checkout process.
 *
 * @param {CheckoutStepsProps} props - The props for the component.
 * @return {JSX.Element} The rendered CheckoutSteps component.
 */
export const CheckoutSteps = (props: CheckoutStepsProps) => {
  const rounter = useRouter()

  return (
    <div className={`${props?.className ?? ''}`}>
      <h1 className="font-[700] text-center text-size-5 mb-[16px]">
        Secure checkout
      </h1>

      <StepsWrap className="max-w-[500px] mx-auto">
        <StepTitle
          label={'Shopping cart'}
          step={1}
          active={true}
          position={StepPosition.start}
          onClick={() => rounter.push(ROUTERS.cart)}
        />
        <StepTitle
          label={'Billing & payment'}
          step={2}
          position={StepPosition.start}
        />
        <StepTitle
          label={'Finish Order'}
          step={3}
          position={StepPosition.end}
        />
      </StepsWrap>
    </div>
  )
}
