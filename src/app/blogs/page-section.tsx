import { BlogItem } from '@/app/_components/loop/blog-item/blog-item'
import { DATA_BLOGS } from '@/ultil/data'
import { tree } from 'next/dist/build/templates/app-page'

type BlogsLoopMainProps = { className?: string }
export const BlogsLoopMain = (props: BlogsLoopMainProps) => {
  return (
    <div className={`grid grid-cols-2 gap-[24px_24px]  ${props?.className ?? ''}`}>
      {DATA_BLOGS.slice(0, 6).map((item, index) => {
        return (
          <BlogItem
            key={`blog-item-${index}`}
            item={{
              id: item.id,
              title: item.title,
              shortDescription: item?.shortDescription,
              createdAt: item.createdAt,
            }}
            isShowDate={true}
            isShowDesc={true}
            isShowReadMore={true}
            index={index + 1}
          />
        )
      })}
    </div>
  )
}
