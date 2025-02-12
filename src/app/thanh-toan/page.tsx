'use client'

import {
  CheckoutFormTax,
  CheckoutFormUser,
  CheckoutSteps,
} from '@/app/thanh-toan/component'
import WrapSWRConfig, { Wrapper } from '@/app/_components/wrapper'

import SystemButton from '@/app/_components/button'
import { useState } from 'react'

/**
 * Renders the PageCheckout component.
 *
 * @return {JSX.Element} The rendered PageCheckout component.
 */
export default function PageCheckout() {
  const [useTax, setTax] = useState<string | undefined>(undefined)

  return (
    <WrapSWRConfig>
      <Wrapper>
        <div className="max-w-[600px] mx-auto p-[40px_14px_60px]">
          <CheckoutSteps className="mb-[40px]" />
          <CheckoutFormUser
            useTax={useTax}
            onChangeTax={(e) => setTax(e.target.checked ? 'true' : '')}
          />
          {useTax === 'true' && <CheckoutFormTax />}
          <SystemButton
            text="Place order"
            className="mt-[20px] block w-full"
          />
        </div>
      </Wrapper>
    </WrapSWRConfig>
  )
}
