'use client'

import { DATA_PRODUCTS, DATA_PRODUCT_CATEGORY } from '@/data/demo-data'
import { PopupContent, PopupContentType } from '@/app/_components/popup/popup'
import { ReactNode, useCallback, useState } from 'react'
import SystemButton, { SystemButtonColor } from '@/app/_components/button'
import { changePopupStatus, updatePopupContent } from '@/redux/feature/popup'

import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { Pagination } from '@/app/_components/pagination/pagination'
import { ProductItem } from '@/app/_components/loop/product-item/product-item'
import SvgChecked from '@/svg/checked'
import SvgFilter from '@/svg/filter'
import SvgMinus from '@/svg/minus'
import SvgPlus from '@/svg/plus'
import { Wrapper } from '@/app/_components/wrapper'
import { useDispatch } from 'react-redux'

type ShopPageProps = { className?: string }
export default function ShopPage(props: ShopPageProps) {
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

type ShopFilterCTAProps = { className?: string }
export const ShopFilterCTA = (props: ShopFilterCTAProps) => {
  const dispatch = useDispatch()

  const handleFilterClick = useCallback(() => {
    dispatch(updatePopupContent(<ShopAside />))
    dispatch(changePopupStatus(true))
  }, [])

  return (
    <div className={`${props?.className ?? ''} flex gap-[10px] items-center`}>
      <button
        className="flex items-center gap-[5px] text-[14px] h-[38px] border-solid border border-[rgb(var(--color-border),0.15)] duration-200 transition-all hover:border-primary hover:text-primary rounded-radius-1 p-[5px_10px_5px_6px]"
        onClick={handleFilterClick}
      >
        <div className="relative">
          <SvgFilter width={18} />
          <div className="w-[8px] h-[8px] rounded-[100px] bg-[rgb(var(--color-alert))] absolute top-[0px] right-[0px]"></div>
        </div>
        <span>Lọc</span>
      </button>
      <select
        name="sortby"
        className="h-[38px] bg-[rgb(var(--bg-opposite),0.05)] outline-none p-[5px_8px] rounded-radius-1 min-w-[180px] text-[14px]"
      >
        <option value="">Bán chạy</option>
        <option value="">Mới nhất</option>
        <option value="">Giá giảm</option>
        <option value="">Giá tăng</option>
      </select>
    </div>
  )
}

type ShopAsideProps = { className?: string }
export const ShopAside = (props: ShopAsideProps) => {
  const dispatch = useDispatch()

  var classItemNext =
    'mt-[16px] pt-[16px] border-solid border-t border-[rgb(var(--color-border),0.1)] '

  return (
    <PopupContent type={PopupContentType.leftBottomSheet} isShowBtnClose={false} className='pointer-events-auto '>
      <div
        className={`${props?.className ?? ''} p-[34px_24px] md:p-[40px_40px]`}
      >
        <ShopWidget title="Category">
          {DATA_PRODUCT_CATEGORY.map((item, index) => {
            return (
              <ShopWidgetCheckListItem
                key={`widget-cate-product-${index}`}
                name={item.name}
                className={index > 0 ? 'mt-[16px]' : ''}
                isChecked={index > 0 ? false : true}
              />
            )
          })}
        </ShopWidget>
        <ShopWidget
          title="Weight"
          className={classItemNext}
        >
          {['500g Pack', '1kg pack', '2kg pack', '5kg pack', '10kg pack'].map(
            (item, index) => {
              return (
                <ShopWidgetCheckListItem
                  key={`widget-weeght-${index}`}
                  name={item}
                  className={index > 0 ? 'mt-[16px]' : ''}
                  isChecked={false}
                />
              )
            },
          )}
        </ShopWidget>
        <ShopWidget
          title="Price"
          className={classItemNext}
        >
          {[
            'Dưới 2 triệu',
            'Từ 2 - 4 triệu',
            'Từ 4 - 7 triệu',
            'Từ 7 - 13 triệu',
            'Trên 20 triệu',
          ].map((item, index) => {
            return (
              <ShopWidgetCheckListItem
                key={`widget-price-${index}`}
                name={item}
                className={index > 0 ? 'mt-[16px]' : ''}
                isChecked={false}
              />
            )
          })}
        </ShopWidget>
        <SystemButton
          text="Xoá bộ lọc"
          className="mt-[24px]"
          color={SystemButtonColor.dark}
          onClick={() => dispatch(changePopupStatus(false))}
        />
      </div>
    </PopupContent>
  )
}

type ShopWidgetProps = {
  className?: string
  title: string
  children?: ReactNode
}
export const ShopWidget = (props: ShopWidgetProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`${props?.className ?? ''}`}>
      <p
        className=" mb-[18px] flex items-start gap-[12px] cursor-pointer"
        onClick={(_) => setIsOpen(!isOpen)}
      >
        <span className="flex-1 font-[700] text-title text-[1rem]  leading-[1.3]">
          {props.title}
        </span>
        <span className="text-title">
          {isOpen ? <SvgMinus width={18} /> : <SvgPlus width={18} />}
        </span>
      </p>
      <div className={isOpen ? 'pb-[10px]' : 'hidden'}>{props?.children}</div>
    </div>
  )
}

type ShopWidgetCheckListItemProps = {
  className?: string
  isChecked?: boolean
  name: string
  onClick?: VoidFunction
}
export const ShopWidgetCheckListItem = ({
  className,
  isChecked,
  name,
  onClick,
}: ShopWidgetCheckListItemProps) => {
  // demo
  const [checked, setChecked] = useState(isChecked ?? false)

  return (
    <div
      className={`${
        className ?? ''
      } flex items-start gap-x-[12px] cursor-pointer text-[14px]`}
      onClick={() => setChecked(!checked)}
    >
      <span
        className={`flex items-center justify-center border-solid border border-[rgb(var(--color-border),0.15)] min-w-[16px] h-[16px] rounded-radius-small ${
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
      <span className="flex-1 leading-[1.3]">{name}</span>
    </div>
  )
}

type ShopLoopMainProps = { className?: string }
export const ShopLoopMain = (props: ShopLoopMainProps) => {
  return (
    <div
      className={`${
        props?.className ?? ''
      } grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]`}
    >
      {DATA_PRODUCTS.slice(0, 12).map((item, index) => {
        return (
          <ProductItem
            key={`product-main-${item.id}-${index}`}
            product={{
              id: item.id,
              title: item.title,
              rating: item.rating,
              price: item.price,
              priceSale: item.priceSale,
              shortDescription: item.shortDescription,
            }}
            index={index + 1}
          />
        )
      })}
    </div>
  )
}
