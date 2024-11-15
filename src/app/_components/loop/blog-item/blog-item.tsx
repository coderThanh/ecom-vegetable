import { Blog } from '@/ultil/type'
import { CONST_ROUTER } from '@/ultil/router'
import Image from 'next/image'
import SystemLink from '@/app/_components/link'

type BlogItemProps = {
  className?: string
  item: Blog
  index: number
  isShowDesc?: boolean
  isShowDate?: boolean
  isShowReadMore?: boolean
}
export const BlogItem = (props: BlogItemProps) => {
  const { item, index, className, isShowDesc, isShowDate, isShowReadMore } =
    props || {}

  return (
    <div className={`group ${className ?? ''}`}>
      {/* Imgae */}
      <SystemLink url={CONST_ROUTER.blogDetail}>
        <div className="pt-[var(--blog-img-ratio)] rounded-radius-1 overflow-hidden relative sketch-loading">
          <Image
            src={`/assets/blog/blog-${index}.jpg`}
            alt={item?.title}
            fill={true}
            sizes="500px 500px"
            className="duration-300 transition-all group-hover:rotate-3 group-hover:scale-105 "
          />
        </div>
      </SystemLink>
      {/* Box Text */}
      <div className="p-[16px_0_10px] sm:p-[20px_0_10px]">
        {isShowDate && (
          <p className="text-size-small text-[rgb(var(--color-text-title),0.7)] leading-[1.3] mb-[8px] flex gap-[0_5px]">
            <span className="block min-w-max">June 30,2022</span>
            <span>-</span>
            <SystemLink
              url={CONST_ROUTER.blogs}
              className="inline line-clamp-1 flex-1 duration-200 transition-colors hover:text-primary"
            >
              Orgranic
            </SystemLink>
          </p>
        )}
        {item?.title && (
          <SystemLink
            url={CONST_ROUTER.blogDetail}
            className="block line-clamp-2 text-size-2 mb-[14px] leading-[1.35] text-title font-semibold duration-200 transition-colors hover:text-primary"
          >
            {item?.title}
          </SystemLink>
        )}
        {item?.shortDescription && isShowDesc && (
          <p className='mb-[16px] text-[rgb(var(--color-text-title),0.7)] leading-[1.4]'>{item?.shortDescription}</p>
        )}
        {isShowReadMore && (
          <SystemLink
            url={CONST_ROUTER.blogDetail}
            className="flex gap-[3px] text-title items-center text-size-small duration-200 transition-colors hover:text-primary cursor-pointer"
          >
            Read More
            <span className="material-symbols-rounded text-[1.2em] !font-[400]">
              keyboard_double_arrow_right
            </span>
          </SystemLink>
        )}
      </div>
    </div>
  )
}
