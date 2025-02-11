'use client'

import 'dayjs/locale/vi'

import { DATA_BLOG_DETAIL_CONTENT, DATA_PRODUCTS } from '@/data/demo-data'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { PopupContent, PopupContentType } from '@/app/_components/popup/popup'
import {
  Rating,
  RatingLine,
  RatingSummary,
} from '@/app/_components/rating/rating'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import SystemButton, {
  SystemButtonColor,
  SystemButtonKind,
} from '@/app/_components/button'
import { changePopupStatus, updatePopupContent } from '@/redux/feature/popup'
import {
  useProductAddToCard,
  useProductAddWishlist,
} from '@/application/use-product'

import { BreadCrumb } from '@/app/_components/breadcrumb/breadcrumb'
import { ControllerProduct } from '@/presentation/ctrl-product'
import { FieldQuantity } from '@/app/_components/fields/quantity'
import HTMLReactParser from 'html-react-parser/lib/index'
import Image from 'next/image'
import { ImgsFullPopup } from '@/app/_components/popup/imgs-full'
import Link from 'next/link'
import { ProductSlider } from '@/app/_components/loop/product-slider/product-slider'
import { ROUTERS } from '@/ultil/router'
import { ReviewCard } from '@/app/_components/loop/review-card/review-card'
import SvgClose from '@/svg/close'
import SvgHeart from '@/svg/heart'
import SvgStar from '@/svg/star'
import { Wrapper } from '@/app/_components/wrapper'
import { coverDateToCountFromToday } from '@/ultil/helper'
import dayjs from 'dayjs'
import { div } from 'motion/react-client'
import timezone from 'dayjs/plugin/timezone'
import { useDispatch } from 'react-redux'
import utc from 'dayjs/plugin/utc'

export default function PageBlogDetail() {
  return (
    <Wrapper>
      <div className="p-[18px_0_60px] ">
        <ProductDetailBodyTop />
        <ProductDetailDescription className="mt-[40px]" />
        <ProductDetailReview className="mt-[40px]" />
        <ProductDetailRelated className="mt-[50px]" />
      </div>
    </Wrapper>
  )
}

type ProductDetailBodyTopProps = { className?: string }
export const ProductDetailBodyTop = (props: ProductDetailBodyTopProps) => {
  const product = DATA_PRODUCTS[0]

  return (
    <div className="container px-[14px]">
      <BreadCrumb
        items={[{ url: ROUTERS.blogs, title: 'Organic' }]}
        current={product.title}
        className="mb-[20px]"
      />
      <div
        className={`${
          props?.className ?? ''
        } grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-[24px_30px] max-w-full w-full`} // swiper error if wrap set width = 1fr
      >
        <ProductDetailGallery />
        <ProductDetailInfo />
      </div>
    </div>
  )
}

type ProductDetailGalleryProps = { className?: string }
export const ProductDetailGallery = (props: ProductDetailGalleryProps) => {
  const dispatch = useDispatch()

  const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperClass>(null)
  const [currentIndex, setCurrentIndex] = useState<null | number>(0)

  const handleOpenImgsFull = useCallback((currentIndex: number) => {
    dispatch(
      updatePopupContent(
        <ImgsFullPopup
          imgs={Array(10)
            .fill(0)
            .map((_, index) => `/assets/product/product-${index + 1}.jpg`)}
          currentIndex={currentIndex}
        />,
      ),
    )

    dispatch(changePopupStatus(true))
  }, [])

  return (
    <div className={`${props?.className ?? ''} `}>
      <div
        className={`sticky border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-1 overflow-hidden p-[16px]`}
      >
        <Swiper
          spaceBetween={14}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex)
          }}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={`thumn-main-${index}`}>
                <Image
                  src={`/assets/product/product-${index + 1}.jpg`}
                  alt={'product title'}
                  width={800}
                  height={800}
                  className="max-w-full "
                  onClick={() => handleOpenImgsFull(index)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        {/* Thumn */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide
                key={`thumn-main-thumn-${index}`}
                className={`border border-solid rounded-radius-1 overflow-hidden transition-all ${
                  currentIndex == index
                    ? 'border-primary '
                    : 'border-transparent'
                }`}
              >
                <Image
                  src={`/assets/product/product-${index + 1}.jpg`}
                  alt={'product title'}
                  width={800}
                  height={800}
                  className="max-w-full"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

type ProductDetailInfoProps = { className?: string }
export const ProductDetailInfo = (props: ProductDetailInfoProps) => {
  const { handleAddToCard } = useProductAddToCard()
  const { handleAddWishlist } = useProductAddWishlist()

  return (
    <div className={`${props?.className ?? ''}`}>
      <div className="sticky">
        <h1 className="leading-[1.45] text-size-4 font-[700]">
          Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips &
          Snacks.
        </h1>
        {/* Rating */}
        <div className="mt-[15px] flex items-baseline">
          <Rating rating={4} />
          <span className="text-size-small text-[rgb(var(--color-text-title),0.7)] border-l-[2px] border-solid  border-[rgb(var(--color-border),0.2)] px-[10px] ml-[12px] leading-[1] pt-[1px]">
            992 Ratings
          </span>
        </div>

        {/* Price */}
        <div className="mb-[24px] mt-[24px] flex items-baseline gap-[14px] flex-wrap">
          <div className="flex items-baseline gap-[14px]">
            <span className="font-[700] text-size-3 text-[rgb(var(--color-price))]">
              {ControllerProduct.getPriceLocalString(10000000)}
            </span>
            <span className="font-[600] text-alert">
              -{ControllerProduct.getPercentSale(14000000, 10000000)}%
            </span>
          </div>
          {/* Price sale */}
          <div className="text-[rgb(var(--color-price-sale))]  text-size-small">
            <span>Giá thị trường: </span>
            <span className="line-through ">
              {ControllerProduct.getPriceLocalString(14000000)}
            </span>
          </div>
        </div>

        {/* Short description */}
        <div className="leading-[1.5] text-[rgb(var(--color-text-title),0.7)] mb-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1990. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1990.
        </div>

        {/* Variable */}
        <div className="mb-[30px]">
          <ProductVariableChoice
            items={['250g', '500g', '1kg', '2kg', '3kg']}
            label={'Weight:'}
            current={0}
            onSelect={(index: number) => {}}
          />
          <ProductVariableChoice
            items={['S', 'M', 'L', 'XL', 'XXL']}
            label={'Size:'}
            onSelect={(index: number) => {}}
            className="mt-[16px] md:mt-[24px]"
          />
        </div>

        {/* Add to cart */}
        <div className="flex gap-[12px]">
          <FieldQuantity
            value={1}
            onChange={(value) => {}}
            className="h-[38px]"
          />
          <button
            className={`text-bg bg-bg-opposite py-[10px] px-[20px] rounded-radius-1 font-[700] text-[14px] h-[38px] transition-all duration-300 hover:bg-primary`}
            onClick={handleAddToCard}
          >
            ADD TO CART
          </button>
          <button
            className={`text-title border border-solid border-[rgb(var(--color-border),0.1)]  flex items-center justify-center rounded-radius-1 font-[700] text-[14px] w-[38px] h-[38px] transition-all duration-300 hover:bg-primary hover:text-bg hover:border-primary`}
            onClick={handleAddWishlist}
          >
            <SvgHeart
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

type ProductVariableChoiceProps = {
  className?: string
  items: string[]
  current?: number
  label: string
  onSelect: (index: number) => void
}
export const ProductVariableChoice = ({
  className,
  items,
  label,
  current,
  onSelect,
}: ProductVariableChoiceProps) => {
  return (
    <div className={`${className ?? ''}`}>
      <span className="font-[600] text-title leading-[1.4] block mb-[6px] md:mb-[10px]">
        {label}
      </span>
      <div className="flex gap-[10px] flex-wrap items-start">
        {items.map((item, index) => (
          <div
            key={`${label}-${index}`}
            onClick={() => onSelect(index)}
            className={`${
              index == current ? '!border-primary bg-primary text-bg' : ''
            } cursor-pointer border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-1 px-[12px] py-[5px] text-size-small leading-[1.1] transition-all hover:border-[rgb(var(--color-border),0.3)] min-w-[50px] text-center`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

type ProductDetailDescriptionProps = { className?: string }
export const ProductDetailDescription = (
  props: ProductDetailDescriptionProps,
) => {
  const maxHeight = 400

  const [isSummary, setIsSummary] = useState(false)
  const [isCanSummary, setIsCanSummary] = useState(false)

  const contentRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  useEffect(() => {
    if (contentRef.current && contentRef.current.offsetHeight > maxHeight) {
      setIsCanSummary(true)
      setIsSummary(true)
    }
  }, [])

  return (
    <div className={`${props?.className ?? ''} `}>
      <div className="container px-[14px]">
        <div className="flex flex-wrap gap-[10px_8px]">
          <button className="font-[600] rounded-radius-1  p-[12px_24px]  bg-primary text-bg">
            Detail
          </button>
          <button
            className="bg-[rgb(var(--bg-opposite),.07)] font-[600] rounded-radius-1 duration-300 transition-all p-[12px_24px] hover:border-primary hover:bg-primary hover:text-bg"
            onClick={() => scrollToId('product-reviews')}
          >
            Reviews
          </button>
          <button
            className="bg-[rgb(var(--bg-opposite),.07)] font-[600] rounded-radius-1 duration-300 transition-all p-[12px_24px] hover:border-primary hover:bg-primary hover:text-bg"
            onClick={() => scrollToId('product-related')}
          >
            Relates
          </button>
        </div>
        {/*  */}
        <div className="mt-[12px] border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-1  p-[20px_16px] md:p-[30px] ">
          <div
            ref={contentRef}
            className="enty-content relative overflow-hidden"
            style={{ height: isSummary ? maxHeight : 'auto' }}
          >
            {HTMLReactParser(DATA_BLOG_DETAIL_CONTENT)}
            <div
              className={`absolute bottom-0 w-full h-[80px] bg-gradient-to-t from-[rgb(var(--bg))] to-[rgb(var(--bg),0.2)]  ${
                !isSummary ? 'hidden' : ''
              }`}
            ></div>
          </div>

          {isCanSummary && (
            <button
              className="mt-[20px] text-primary hover:underline underline-offset-2 decoration-[1px]"
              onClick={() => setIsSummary(!isSummary)}
            >
              <span>{isSummary ? 'Xem thêm' : 'Thu gọn'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

type ProductDetailRelatedProps = { className?: string }
export const ProductDetailRelated = (props: ProductDetailRelatedProps) => {
  return (
    <div
      id="product-related"
      className={`${
        props?.className ?? ''
      }  mt-[30px] md:mt-[60px] border-t border-solid border-[rgb(var(--color-border),0.07)] pt-[30px] md:pt-[50px]`}
    >
      <div className="container px-[14px]">
        <div className="text-center">
          <h2 className="leading-[1.3] text-size-5 font-[700]">
            Related <span className="text-primary">Products</span>
          </h2>
          <p className="text-[rgb(var(--color-text-title),0.7)] leading-[1.4] mt-[10px] text-size-small">
            Browse The Collection of Top Products
          </p>
        </div>

        <ProductSlider className="mt-[30px]" />
      </div>
    </div>
  )
}

type ProductDetailReviewProps = { className?: string }
export const ProductDetailReview = (props: ProductDetailReviewProps) => {
  const dispatch = useDispatch()

  const openFormReview = () => {
    dispatch(updatePopupContent(<ReviewPopup />))
    dispatch(changePopupStatus(true))
  }

  return (
    <div
      id="product-reviews"
      className={`${
        props?.className ?? ''
      } px-[14px] mt-[30px] md:mt-[60px] container`}
    >
      <div className="text-size-2 md:text-size-4 font-[700] text-title leading-[1.4] md:text-center">
        Đánh giá Điện thoại iPhone 16 Pro Max 256GB
      </div>
      <RatingSummary className="mt-[20px] md:mt-[50px] mx-auto" />
      <ProductDetailReviews className="mt-[30px] md:mt-[50px]" />
      <div className="flex items-center justify-center gap-[16px]  mx-auto max-w-[768px] mt-[30px] md:mt-[40px]">
        <SystemButton
          className="flex-1"
          classText="py-[3px]"
          text="Xem thêm đánh giá"
          color={SystemButtonColor.dark}
          kind={SystemButtonKind.outline}
        />
        <SystemButton
          className="flex-1"
          text="Viết đánh giá"
          classText="py-[3px]"
          color={SystemButtonColor.dark}
          onClick={openFormReview}
        />
      </div>
    </div>
  )
}

type ProductDetailReviewsProps = { className?: string }
export const ProductDetailReviews = (props: ProductDetailReviewsProps) => {
  const date1 = coverDateToCountFromToday(
    dayjs(Date.now()).subtract(6, 'day').toDate(),
  )
  const date2 = coverDateToCountFromToday(
    dayjs(Date.now()).subtract(40, 'day').toDate(),
  )

  return (
    <div className={`${props?.className ?? ''} max-w-[768px] mx-auto `}>
      <ReviewCard
        name={'Anh Bình'}
        message={'Dùng được 1 tháng rồi thấy OK'}
        star={5}
        time={`Đã dùng khoảng ${date1}`}
      />
      <ReviewCard
        name={'Nguyễn thị phước'}
        message={
          'Hey. Mới hơn tháng tự nhiên có 1 hạt bụo trong camera trước nhìn bực mình chướng mắt ko biết từ đâu rơi vô vô từ đường nào mà có thể nằm bên trong camera. Ban đầu tưởng bị dưới kính cường lực làm gỡ luôn caia cường lực tốn tiền cường lực kết quả bị hạt bụi dưới cam chả biết làm sao để hết. Bỏ tiền ra mua mà giờ z thấy hụt hẩn gê thiệt chứ'
        }
        star={4}
        time={`Đã dùng khoảng ${date2}`}
        className="border-t border-solid border-[rgb(var(--color-border),0.1)] mt-[20px] pt-[20px]"
      />
    </div>
  )
}

type ReviewPopupProps = { className?: string }
export const ReviewPopup = (props: ReviewPopupProps) => {
  const dispatch = useDispatch()

  const [star, setStar] = useState(0)

  const closePopup = () => {
    dispatch(changePopupStatus(false))
  }
  return (
    <PopupContent
      className={`${props?.className ?? ''}`}
      type={PopupContentType.centerBottomSheet}
      isShowBtnClose={false}
      classContent='pointer-events-auto'
    >
      <div className="">
        {/* Title */}
        <div className="text-title font-[700] p-[18px_20px] text-center border-b border-solid border-[rgb(var(--color-border),0.1)] relative">
          Đánh giá sản phẩm
          <button
            onClick={closePopup}
            className="flex items-center justify-center text-title absolute right-[15px] top-[50%]  -translate-y-1/2 transition-colors duration-300 hover:text-primary"
          >
            <SvgClose
              width={18}
              height={18}
            />
          </button>
        </div>
        {/* form */}
        <div className="p-[24px_20px_30px] md:p-[24px_30px_40px]">
          {/* start */}
          <div className="text-center">
            <p className=" font-bold text-size-3 leading-[1.4] text-title">
              Điện thoại iPhone 16 Pro Max 256GB
            </p>
            <Rating
              rating={star}
              showLabel={true}
              size={32}
              classNameStar="text-size-small"
              classLabel="mt-[15px]"
              className="justify-center !gap-[15px] mt-[18px]"
              onClick={(index) => setStar(index)}
            />
          </div>

          {/* form */}
          <textarea
            name=""
            className="field-textarea field-input mb-[12px] mt-[24px]"
            placeholder="Mời bạn chia sẻ thêm cảm nhận..."
          ></textarea>
          <div className="grid  md:grid-cols-2 gap-[12px_16px]">
            <input
              type="text"
              className="field-input"
              placeholder="Họ tên (bắt buộc)"
            />
            <input
              type="text"
              className="field-input"
              placeholder="Số điện thoại (bắt buộc)"
            />
          </div>

          <SystemButton
            text="Gửi đánh giá"
            color={SystemButtonColor.dark}
            className="w-full mt-[14px] md:mt-[24px]"
          />
          <div className="text-center text-size-small mt-[15px]">
            <Link
              href={'#'}
              className="text-process leading-[1.2] transition-colors hover:text-title border-r border-solid border-[rgb(var(--color-border),0.2)] pr-[10px] mr-[10px]"
            >
              Quy định đánh giá
            </Link>
            <Link
              href={'#'}
              className="text-process leading-[1.2] transition-colors hover:text-title"
            >
              Chính sách bảo mật thông tin
            </Link>
          </div>
        </div>
      </div>
    </PopupContent>
  )
}
