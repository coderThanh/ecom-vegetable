import { BlogsLoopMain } from '@/app/blogs/page-section'
import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { CONST_ROUTER } from '@/ultil/router'
import { Pagination } from '@/app/_components/pagination/pagination'
import { Wrapper } from '@/app/_components/wrapper'

export default function PageBlogs() {
  return (
    <Wrapper>
      <div className="container px-[12px]">
        <div className="grid grid-cols-12 gap-[30px_24px] p-[20px_0px_30px]">
          <div className="col-span-12 lg:col-span-8">
            <BreadCrumb
              items={[{ url: CONST_ROUTER.blogs, title: 'Category name' }]}
              current={'Blogs page'}
            />
            <BlogsLoopMain className='m-[20px_0+30px]'/>
            <Pagination currentPage={1} totalPage={20}/>
          </div>
          <div className="col-span-12 lg:col-span-4">lorem</div>
        </div>
      </div>
    </Wrapper>
  )
}