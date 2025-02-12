import 'dayjs/locale/vi'

import {
  BlogDetailComment,
  BlogDetailFormComment,
  BlogDetailHeader,
  BlogDetailRelated,
} from '@/app/bai-viet-chi-tiet/component'

import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { DATA_BLOG_DETAIL_CONTENT } from '@/data/demo-data'
import HTMLReactParser from 'html-react-parser/lib/index'
import { ROUTERS } from '@/ultil/router'
import { Wrapper } from '@/app/_components/wrapper'

export default function PageBlogDetail() {
  return (
    <Wrapper>
      <div className="container p-[20px_14px_60px]">
        <BreadCrumb
          items={[{ url: ROUTERS.blogs, title: 'Organic' }]}
          current={'Bai viet chi tiet'}
          className="m-[10px_0_20px] md:m-[20px_0_20px]"
        />
        <BlogDetailHeader />
        <div className="enty-content">
          {HTMLReactParser(DATA_BLOG_DETAIL_CONTENT)}
        </div>
        <BlogDetailRelated className="mt-[20px] lg:mt-[30px]" />
        <div className="h-[1px] bg-[rgb(var(--bg-opposite),0.1)] mt-[30px]"></div>
        <BlogDetailComment className="mt-[25px] lg:mt-[40px]" />
        <BlogDetailFormComment className="mt-[40px] " />
      </div>
    </Wrapper>
  )
}
