import { BlogsAside, BlogsLoopMain } from '@/app/blogs/component'

import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { HeaderSearch } from '@/app/_components/header/search'
import { Pagination } from '@/app/_components/pagination/pagination'
import { ROUTERS } from '@/ultil/router'
import { Wrapper } from '@/app/_components/wrapper'

export default function PageBlogs() {
  return (
    <Wrapper>
      <div className="container p-[20px_14px_60px]">
        <BreadCrumb
          items={[{ url: ROUTERS.blogs, title: 'Category name' }]}
          current={'Blogs page'}
          className="m-[0_0_20px]"
        />

        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <BlogsLoopMain className="mb-[40px]" />
            <Pagination
              currentPage={1}
              totalPage={100}
            />
          </div>
          <div className="col-span-12 lg:col-span-5 xl:col-span-4 pt-[40px] lg:p-[0_0_0_30px]  xl:p-[0_0_0_38px]">
            <div className="sticky top-[var(--sticky-t)]">
              <HeaderSearch />
              <BlogsAside className="mt-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
