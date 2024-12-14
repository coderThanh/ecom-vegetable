import { BlogsLoopMain } from '@/app/blogs/page-section'
import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { CONST_ROUTER } from '@/ultil/router'
import { HeaderSearch } from '@/app/_components/header/search'
import { Pagination } from '@/app/_components/pagination/pagination'
import { Wrapper } from '@/app/_components/wrapper'

export default function PageBlogs() {
  return (
    <Wrapper>
      <div className="container p-[20px_12px_60px]">
        <BreadCrumb
          items={[{ url: CONST_ROUTER.blogs, title: 'Category name' }]}
          current={'Blogs page'}
          className='m-[0_0_20px]'
        />
        
        <div className="grid grid-cols-12 gap-[30px_24px]">
          <div className="col-span-12 lg:col-span-8">
            <BlogsLoopMain className="mb-[30px]" />
            <Pagination
              currentPage={1}
              totalPage={100}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-[var(--sticky-t)]">
              <HeaderSearch />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
