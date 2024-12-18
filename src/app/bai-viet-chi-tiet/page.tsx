'use client'

import 'dayjs/locale/vi'

import {
  DATA_BLOGS,
  DATA_BLOG_DETAIL_CONTENT,
  DATA_COMMENTS,
} from '@/data/demo-data'

import { BlogSlider } from '@/app/_components/loop/blog-slider/blog-slider'
import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { CONST_ROUTER } from '@/ultil/router'
import { CommentCard } from '@/app/_components/loop/comment-card/comment-card'
import HTMLReactParser from 'html-react-parser/lib/index'
import SystemImage from '@/app/_components/img'
import SystemLink from '@/app/_components/link'
import { Wrapper } from '@/app/_components/wrapper'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { div } from 'motion/react-client'
import { formatDate } from '@/ultil/helper'

export default function PageBlogDetail() {
  return (
    <Wrapper>
      <div className="container p-[20px_14px_60px]">
        <BreadCrumb
          items={[{ url: CONST_ROUTER.blogs, title: 'Organic' }]}
          current={'Bai viet chi tiet'}
          className="m-[20px_0_20px]"
        />
        <BlogDetailHeader />
        <div className="enty-content">
          {HTMLReactParser(DATA_BLOG_DETAIL_CONTENT)}
        </div>
        <BlogDetailRelated className="mt-[20px] lg:mt-[30px]" />
        <div className="h-[1px] bg-[rgb(var(--bg-opposite),0.1)] mt-[30px]"></div>
        <BlogDetailComment className="mt-[25px] lg:mt-[40px]" />
      </div>
    </Wrapper>
  )
}

type BlogDetailHeaderProps = { className?: string }
export const BlogDetailHeader = (props: BlogDetailHeaderProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <h1 className="text-size-6 leading-[1.3]">
        Marketing Guide: 5 Steps to Success
      </h1>
      <div className="mt-[5px] text-size-small md:text-[1rem] leading-[1.5] mb-[20px]">
        <span>{'Ngày ' + formatDate(new Date().toDateString())}</span>
        <span> - </span>
        <SystemLink
          url={CONST_ROUTER.blogs}
          className="transition-colors duration-200 hover:text-primary"
        >
          Organic
        </SystemLink>
      </div>
    </div>
  )
}

type BlogDetailRelatedProps = { className?: string }
export const BlogDetailRelated = (props: BlogDetailRelatedProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <BlogDetailSectionTitle title="Posts related" />
      <div>
        {/* {DATA_BLOGS.slice} */}
        <BlogSlider
          colSM={2}
          colMd={2}
          colLg={4}
          colXl={4}
          isShowDate={true}
          isShowReadMore={true}
        />
      </div>
    </div>
  )
}

type BlogDetailCommentProps = { className?: string }
export const BlogDetailComment = ({ className }: BlogDetailCommentProps) => {
  return (
    <div className={`${className ?? ''}`}>
      <BlogDetailSectionTitle
        title="Comments"
        className=" sm:mb-[24px]"
      />

      <div>
        {DATA_COMMENTS.map((item, index) => {
          return (
            <CommentCard
              key={`comment-${item.id}`}
              name={item.name}
              message={item.message}
              img={item.img}
              onReply={() => {}}
              className={index > 0 ? 'mt-[30px]' : ''}
              children={item.children}
            />
          )
        })}
      </div>
    </div>
  )
}

type BlogDetailSectionTitleProps = { className?: string; title: string }
export const BlogDetailSectionTitle = (props: BlogDetailSectionTitleProps) => {
  return (
    <h3
      className={`${
        props?.className ?? ''
      } text-size-4 leading-[1.4] mb-[18px]`}
    >
      {props.title}
    </h3>
  )
}
