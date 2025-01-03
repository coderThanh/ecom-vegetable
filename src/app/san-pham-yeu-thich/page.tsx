'use client'

import 'dayjs/locale/vi'

import { ControllerProduct } from '@/presentation/product'
import { DATA_PRODUCTS } from '@/data/demo-data'
import { ROUTERS } from '@/ultil/router'
import SvgClose from '@/svg/close'
import SvgEye from '@/svg/eye'
import SystemImage from '@/app/_components/img'
import SystemLink from '@/app/_components/link'
import { TitleSimple } from '@/app/_components/titles/title-simple'
import { Wrapper } from '@/app/_components/wrapper'
import { useProductRemoveWishlist } from '@/application/use-product'

export default function PageWishlist() {
  const { handleRemoveWishlist } = useProductRemoveWishlist()

  const labels = ['STT', 'Image', 'Name', 'Price', 'Actions']

  const classItemValue = 'p-[12px_12px] md:p-[14px_12px] flex items-center'

  return (
    <Wrapper>
      <div className="container p-[40px_14px_60px]">
        <TitleSimple
          title={'Product '}
          titleHightlight="Wishlist"
          sup="Your product wish is our first priority"
          className="text-center mb-[30px] md:mb-[40px]"
          classTitle="text-size-5"
        />

        <div className="max-w-[850px] mx-auto mt-[30px] p-[24px_20px_10px] rounded-radius-2  border border-solid border-[rgb(var(--color-border),0.1)] overflow-x-auto overflow-y-hidden">
          <div>
            {/* label */}
            <div className="grid grid-cols-[50px_90px_1fr_150px_100px] min-w-[600px]  border-b-1 border-solid border-[rgb(var(--color-border),0.1)]">
              {labels.map((label, index) => (
                <div
                  key={`wishlist-label-${index}`}
                  className={`font-[700] text-title p-[0_10px_16px] ${
                    index === 1 ? 'text-center' : ''
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
            {/* Items */}
            {DATA_PRODUCTS.slice(0, 6).map((item, index) => {
              return (
                <div
                  key={`wishlist-item-${index}`}
                  className="grid grid-cols-[50px_90px_1fr_150px_100px] min-w-[600px] border-t border-solid border-[rgb(var(--color-border),0.1)]"
                >
                  <div className={`${classItemValue}`}>{index + 1}</div>
                  <div className={`${classItemValue}`}>
                    <SystemImage
                      src={'/assets/product/product-1.jpg'}
                      ratio={75}
                      alt={item.title}
                      className="bg-[rgb(var(--bg-opposite),0.05)] rounded-radius-2 w-full"
                    />
                  </div>
                  <div className={`${classItemValue} leading-[1.4]`}>
                    {item.title}
                  </div>
                  <div className={`${classItemValue}`}>
                    {ControllerProduct.getPriceLocalString(item.price ?? 0)}
                  </div>
                  <div className={`${classItemValue}`}>
                    <div className="flex gap-[10px]">
                      <SystemLink
                        url={ROUTERS.productDetail}
                        className="flex items-center justify-center cursor-pointer w-[28px] h-[28px] bg-[rgb(var(--color-primary),0.1)] text-primary rounded-radius-small transition-all hover:bg-primary hover:text-bg"
                      >
                        <SvgEye
                          width="18"
                          height="18"
                        />
                      </SystemLink>
                      <button
                        className="flex items-center justify-center cursor-pointer w-[28px] h-[28px] text-alert bg-[rgb(var(--color-alert),0.1)] rounded-radius-small   transition-all hover:bg-alert hover:text-bg"
                        onClick={handleRemoveWishlist}
                      >
                        <SvgClose
                          width="14"
                          height="14"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
