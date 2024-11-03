'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { DATA_PRODUCT_CATEGORY } from '@/ultil/data'
import SvgDessert_1 from '@/svg/dessert-1'
import SystemLink from '@/app/_components/link'

type ProductCategoryProps = {
  className?: string
}
export const ProductCategory = (props: ProductCategoryProps) => {
  return (
    <>
      <div className={`container px-[12px] ${props?.className ?? ''}`}>
        <Swiper
          slidesPerView={2}
          autoHeight={true}
          spaceBetween={18}
          breakpoints={{
            1280: { slidesPerView: 6 },
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            640: { slidesPerView: 3 },
          }}
          //   speed={600}
        >
          {DATA_PRODUCT_CATEGORY?.length > 0
            ? DATA_PRODUCT_CATEGORY.map((item, index) => (
                <SwiperSlide key={`product-category-${index}`}>
                  <SystemLink
                    url={item.url}
                    className="group block text-center cursor-pointer p-[15px] rounded-radius-small overflow-hidden bg-gradient-to-t from-transparent to-[rgb(var(--bg-opposite),0.04)_100%] transition-all duration-300 hover:bg-[rgb(var(--bg-opposite),0.03)] "
                  >
                    {/* Inner ----- */}
                    <div className="bg-[rgb(var(--bg))] min-h-full py-[20px] md:py-[26px] px-[12px] rounded-radius-small shadow-[0_10px_20px_-5px_rgb(var(--bg-opposite),0.1)]">
                      <SvgDessert_1
                        width={32}
                        height={32}
                        className="mx-auto text-primary mb-[12px]"
                      />
                      <h6 className="group-hover:text-primary transition-colors duration-200 text-[0.95rem] font-bold line-clamp-1 text-[rgb(var(--color-text-title))] leading-[1.4] capitalize">
                        {item.name}
                      </h6>
                      <p className="m-0 text-size-small mt-[2px] text-[rgb(var(--color-text-title),0.7)] line-clamp-1">
                        {(230 * index + 1).toLocaleString()} items
                      </p>
                    </div>
                  </SystemLink>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
