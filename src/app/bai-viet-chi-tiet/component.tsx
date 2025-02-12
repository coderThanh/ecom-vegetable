'use client'

import { BlogSlider } from '@/app/_components/loop/blog-slider/blog-slider'
import { CommentCard } from '@/app/_components/loop/comment-card/comment-card'
import { DATA_COMMENTS } from '@/data/demo-data'
import { ROUTERS } from '@/ultil/router'
import SystemButton from '@/app/_components/button'
import SystemLink from '@/app/_components/link'
import { formatDate } from '@/ultil/helper'
import { useCommentAddItem } from '@/application/use-comment'

type BlogDetailHeaderProps = { className?: string }
export const BlogDetailHeader = (props: BlogDetailHeaderProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <h1 className="text-size-5 leading-[1.25]">
        Marketing Guide: 5 Steps to Success marketing Guide
      </h1>
      <div className="mt-[10px] text-size-small md:text-[1rem] leading-[1.5] mb-[20px]">
        <span>{'Ngày ' + formatDate(new Date().toDateString())}</span>
        <span> - </span>
        <SystemLink
          url={ROUTERS.blogs}
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
              childrenItems={item.children}
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

type BlogDetailFormCommentProps = { className?: string }
export const BlogDetailFormComment = (props: BlogDetailFormCommentProps) => {
  const { handlePushComment } = useCommentAddItem()

  return (
    <div className={`${props?.className ?? ''}`}>
      <h4 className="block bg-[rgb(var(--bg-opposite),0.04)] p-[12px_16px] text-[1rem] rounded-radius-1 mb-[18px] md:mb-[20px]">
        Leave A Reply
      </h4>
      <div className="grid grid-cols-12 gap-[15px] md:gap-[22px]">
        <div className="col-span-12 md:col-span-6">
          <input
            type="text"
            className="field-input"
            placeholder="Full Name"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <input
            type="email"
            className="field-input"
            placeholder="Email Address"
          />
        </div>
        <div className="col-span-12">
          <textarea
            className="field-input field-textarea"
            placeholder="Full Name"
          />
          <SystemButton
            text="Submit"
            className="mt-[20px] "
            onClick={handlePushComment}
          />
        </div>
      </div>
    </div>
  )
}
