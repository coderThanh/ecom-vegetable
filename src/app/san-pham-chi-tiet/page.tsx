import {
  ProductDetailBodyTop,
  ProductDetailDescription,
  ProductDetailRelated,
  ProductDetailReview,
} from '@/app/san-pham-chi-tiet/component'

import { Wrapper } from '@/app/_components/wrapper'

export default function PageBlogDetail() {
  return (
    <Wrapper>
      <div className="p-[18px_0_60px] ">
        <ProductDetailBodyTop />
        <ProductDetailDescription className="mt-[40px]" />
        <ProductDetailReview className="mt-[40px]" />
        <ProductDetailRelated className="mt-[50px]" />
      </div>
    </Wrapper>
  )
}
