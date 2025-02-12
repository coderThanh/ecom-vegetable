'use client'

import {
  BlogItem,
  BlogVerticalCard,
} from '@/app/_components/loop/blog-item/blog-item'
import { DATA_BLOGS, DATA_PRODUCT_CATEGORY } from '@/data/demo-data'

import SvgChecked from '@/svg/checked'
import { useState } from 'react'

type BlogsLoopMainProps = { className?: string }
export const BlogsLoopMain = (props: BlogsLoopMainProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-[24px_24px]  ${props?.className ?? ''}`}
    >
      {DATA_BLOGS.slice(0, 12).map((item, index) => {
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

type BlogsAsideProps = { className?: string }
export const BlogsAside = (props: BlogsAsideProps) => {
  return (
    <div
      className={`${
        props?.className ?? ''
      } border-solid border border-[rgba(var(--color-border),0.1)] rounded-radius-1 p-[20px] sm:p-[26px]`}
    >
      <WidgetRencentBlogs />
      <WidgetCategory className="mt-[35px]" />
    </div>
  )
}

type WidgetTitleProps = { className?: string; title: string }
export const WidgetTitle = (props: WidgetTitleProps) => {
  return (
    <div
      className={`${
        props?.className ?? ''
      } text-size-3 font-bold text-title leading-[1.4] mb-[18px]`}
    >
      {props.title}
    </div>
  )
}

type WidgetRencentBlogsProps = { className?: string }
export const WidgetRencentBlogs = (props: WidgetRencentBlogsProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <WidgetTitle title={'Recent Articles'} />
      {DATA_BLOGS.slice(0, 5).map((item, index) => {
        return (
          <BlogVerticalCard
            key={`blog-item-${index}`}
            item={{
              id: item.id,
              title: item.title,
              shortDescription: item?.shortDescription,
              createdAt: item.createdAt,
            }}
            isShowDate={true}
            isShowCategory={true}
            index={index + 1}
            className={`${
              index > 0
                ? 'mt-[16px] pt-[16px] border-solid border-t border-[rgba(var(--color-border),0.08)]'
                : ''
            }`}
          />
        )
      })}
    </div>
  )
}

type WidgetCategoryProps = { className?: string }
export const WidgetCategory = (props: WidgetCategoryProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <WidgetTitle title="Categories" />

      <div className="max-h-[500px] overflow-y-auto overflow-x-hidden scrollbar">
        {DATA_PRODUCT_CATEGORY.map((item, index) => (
          <WidgetCategoryItem
            key={`category-${index}`}
            title={item.name}
            count={index}
            className={`${
              index > 0
                ? 'border-solid border-t border-[rgba(var(--color-border),0.08)] pt-[14px] mt-[14px]'
                : ''
            }`}
          ></WidgetCategoryItem>
        ))}
      </div>
    </div>
  )
}

type WidgetCategoryItemProps = {
  className?: string
  title: string
  count: number
  isChecked?: boolean
}
export const WidgetCategoryItem = ({
  className,
  title,
  count,
  isChecked,
}: WidgetCategoryItemProps) => {
  const [checked, setCheced] = useState(isChecked ?? false)

  return (
    <div
      className={`${
        className ?? ''
      }  flex items-center gap-x-[14px] cursor-pointer text-[rgb(var(--color-text-title),0.8)]  transition-color duration-200 hover:text-primary`}
      onClick={(_) => setCheced(!checked)}
    >
      <div className="flex-1 flex items-center gap-x-[14px]">
        <span
          className={`flex items-center justify-center border-solid border border-[rgb(var(--color-border),0.2)] min-w-[18px] h-[18px] rounded-radius-small ${
            checked ? 'border-primary bg-primary' : ''
          }`}
        >
          <SvgChecked
            width={10}
            height={10}
            className={`text-[rgb(var(--bg))] ${
              checked ? 'opacity-1' : 'opacity-0'
            }`}
          />
        </span>
        <span className="text-size-small leading-[1.4] line-clamp-1 ">
          {title}
        </span>
      </div>
      <span className="text-size-small-a">({count})</span>
    </div>
  )
}
