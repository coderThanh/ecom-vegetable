import { useProductAddToCard, useProductAddWishlist } from '@/hook/use-product'

import { CONST_ROUTER } from '@/ultil/router'
import { ControllerProduct } from '@/ultil/controller/product'
import { DATA_PRODUCT_CATEGORY } from '@/ultil/data'
import Image from 'next/image'
import { Product } from '@/ultil/type'
import { Rating } from '@/app/_components/rating/rating'
import SvgBag from '@/svg/bag'
import SvgHeart from '@/svg/heart'
import SystemLink from '@/app/_components/link'

type ProductItemProps = {
  product: Product
  index: number
  className?: string
  classNameImgWrap?: string
}
export const ProductItem = (props: ProductItemProps) => {
  const { product } = props

  const isSale = product?.priceSale !== null && product?.priceSale !== undefined

  const { handleAddToCard } = useProductAddToCard()
  const { handleAddWishlist } = useProductAddWishlist()

  return (
    <div
      className={`group  rounded-radius-1 overflow-hidden border border-solid border-[rgb(var(--color-border),0.1)] flex flex-col ${
        props?.className ?? ''
      }`}
    >
      {/* Box image -- */}
      <div className="relative overflow-hidden">
        <SystemLink
          url={CONST_ROUTER.productDetail}
          className={`relative block w-full pt-[90%] sketch-loading transition-all duration-300 group-hover:scale-105 ${
            props?.classNameImgWrap ?? ''
          }`}
        >
          <Image
            fill={true}
            src={`/assets/product/product-${props?.index}.jpg`}
            alt={props.product.title}
            sizes="(100vw, 100vh)"
            className="object-cover object-center left-0 w-full h-full"
          />
        </SystemLink>
        {isSale && (
          <div className="absolute top-[10px] right-[10px] bg-alert text-[rgb(var(--bg))] rounded-radius-small px-[6px] py-[5px] font-semibold text-size-small-a tracking-[1px]">
            SALE
          </div>
        )}
        {/* Actions --- */}
        <div className="flex flex-col md:flex-row px-[10px] md:justify-center items-end md:items-center gap-[8px] absolute bottom-0 pb-[12px] left-0 w-full  transition-transform duration-300 md:translate-y-[110%] md:group-hover:translate-y-[0%]">
          <div
            className="bg-[rgb(var(--bg))] flex items-center justify-center w-[30px] h-[30px] rounded-radius-1 border border-solid border-[rgb(var(--color-border),0.1)] text-[rgb(var(--color-text-title))] duration-200 transition-all hover:bg-primary hover:text-bg cursor-pointer"
            onClick={() => handleAddWishlist()}
          >
            <SvgHeart
              width={18}
              height={18}
            />
          </div>
          <div
            className="bg-[rgb(var(--bg))] flex items-center justify-center w-[30px] h-[30px] rounded-radius-1 border border-solid border-[rgb(var(--color-border),0.1)] text-[rgb(var(--color-text-title))] duration-200 transition-all hover:bg-primary hover:text-bg cursor-pointer"
            onClick={() => handleAddToCard()}
          >
            <SvgBag
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      {/* Box Text -- */}
      <div className="border-t border-solid border-[rgb(var(--color-border),0.1)] p-[20px_12px] md:p-[20px] flex-1 flex flex-col justify-between">
        <div>
          <SystemLink
            url={CONST_ROUTER.shop}
            className="line-clamp-1 duration-200 transition-colors hover:text-primary text-[rgb(var(--color-text-title),0.8)] text-size-small mb-[8px]"
          >
            {
              DATA_PRODUCT_CATEGORY[
                Math.min(props?.index, DATA_PRODUCT_CATEGORY.length - 1)
              ].name
            }
          </SystemLink>
          <SystemLink
            url={CONST_ROUTER.shop}
            className="line-clamp-2 text-[14px] md:text-[15px] duration-200 transition-colors leading-[1.5] hover:text-primary text-[rgb(var(--color-text-title))] font-semibold mb-[5px]"
          >
            {props.product.title}
          </SystemLink>
        </div>
        <div>
          {/* Rating --- */}
          <div className="mt-[12px] mb-[14px]">
            <Rating rating={4} />
          </div>
          {/* Price --- */}
          <div className="flex gap-x-[10px] gap-y-[10px] flex-wrap items-baseline">
            <span className="font-bold text-primary1">
              {isSale
                ? ControllerProduct.getPriceLocalString(product?.priceSale ?? 0)
                : ControllerProduct.getPriceLocalString(product?.price ?? 0)}
            </span>
            {isSale && (
              <div className="flex gap-x-[12px] text-size-small text-[rgb(var(--color-text-title),0.7)]">
                <span className="line-through ">
                  {ControllerProduct.getPriceLocalString(product?.price ?? 0)}
                </span>
                {ControllerProduct.getPercentSale(
                  product?.price ?? 0,
                  product?.priceSale ?? 0,
                ) && (
                  <span className="text-alert">
                    -
                    {ControllerProduct.getPercentSale(
                      product?.price ?? 0,
                      product?.priceSale ?? 0,
                    )}
                    %
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

//

type ProductItemVerticalSimpleProps = {
  product: Product
  index: number
  className?: string
  classNameImgWrap?: string
}
export const ProductItemVerticalSimple = (
  props: ProductItemVerticalSimpleProps,
) => {
  const { product } = props

  const isSale = product?.priceSale !== null && product?.priceSale !== undefined

  const { handleAddToCard } = useProductAddToCard()

  return (
    <div
      className={`group  rounded-radius-1 overflow-hidden border border-solid border-[rgb(var(--color-border),0.1)] p-[12px_12px] flex items-center gap-[15px] ${
        props?.className ?? ''
      }`}
    >
      {/* Box image -- */}
      <div className="relative overflow-hidden w-[70px] h-[70px]">
        <SystemLink
          url={CONST_ROUTER.productDetail}
          className={`relative block  w-full h-full sketch-loading transition-all duration-300 group-hover:scale-105 ${
            props?.classNameImgWrap ?? ''
          }`}
        >
          <Image
            fill={true}
            src={`/assets/product/product-${props?.index}.jpg`}
            alt={props.product.title}
            sizes="(100vw, 100vh)"
            className="object-cover object-center left-0 w-full h-full"
          />
        </SystemLink>
      </div>
      {/* Box Text -- */}
      <div className=" flex-1 flex flex-col gap-[10px] ">
        <div>
          <SystemLink
            url={CONST_ROUTER.shop}
            className="line-clamp-2 text-[14px] md:text-[14px] duration-200 transition-colors leading-[1.4] hover:text-primary text-[rgb(var(--color-text-title))] font-semibold"
          >
            {props.product.title}
          </SystemLink>
        </div>
        <div className='flex items-center gap-[10px]'>
          {/* Price --- */}
          <div className="flex gap-[5px_12px] text-[14px] flex-wrap items-baseline flex-1">
            <span className="font-bold text-primary1">
              {isSale
                ? ControllerProduct.getPriceLocalString(product?.priceSale ?? 0)
                : ControllerProduct.getPriceLocalString(product?.price ?? 0)}
            </span>
            {isSale && (
              <div className="flex gap-x-[12px] text-size-small text-[rgb(var(--color-text-title),0.7)]">
                <span className="line-through ">
                  {ControllerProduct.getPriceLocalString(product?.price ?? 0)}
                </span>
              </div>
            )}
          </div>
          {/* Actions --- */}
          <div
            className="md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100 bg-[rgb(var(--bg))] flex items-center justify-center w-[30px] h-[30px] rounded-radius-1 border border-solid border-[rgb(var(--color-border),0.1)] text-[rgb(var(--color-text-title))] duration-200 transition-all hover:bg-primary hover:text-bg cursor-pointer"
            onClick={() => handleAddToCard()}
          >
            <SvgBag
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
