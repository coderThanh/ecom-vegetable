import { ShopFilterCTA, ShopLoopMain } from '@/app/cua-hang/component'

import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { Pagination } from '@/app/_components/pagination/pagination'
import { Wrapper } from '@/app/_components/wrapper'

export default function ShopPage() {
  return (
    <Wrapper>
      <div className="container px-[12px] pb-[60px] md:pb-[80px]">
        <div className="flex flex-col  lg:flex-row lg:items-center gap-[14px_20px] mt-[16px] md:mt-[20px]">
          <BreadCrumb
            items={[]}
            current={'Shop page'}
            className="flex-1"
          />
          <ShopFilterCTA />
        </div>
        <ShopLoopMain className="mt-[24px]" />
        <Pagination
          currentPage={1}
          totalPage={20}
          maxItems={10}
          className="mt-[40px] md:mt-[50px]"
        />
      </div>
    </Wrapper>
  )
}
