import SvgAccount from '@/app/(svg)/account'
import SvgBag from '@/app/(svg)/bag'
import SvgHeart from '@/app/(svg)/heart'

export const HeaderCenterCTA = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-[12px] md:gap-x-[24px] gap-y-[12px]">
        <div className="group  flex items-center gap-[6px] cursor-pointer ">
          <div className="relative">
            <SvgAccount className="group-hover:text-primary duration-200 w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
          </div>
          <div className="lg:block hidden">
            <div className="text-size-small-a mb-[5px] line-clamp-1 text-[rgb(var(--color-text-title),0.8)] font-semibold duration-200 group-hover:text-primary">
              Account
            </div>
            <div className="text-size-small line-clamp-1 uppercase font-semibold">
              Login
            </div>
          </div>
        </div>
        <div className="group  flex items-center gap-[6px] cursor-pointer ">
          <div className="relative">
            <SvgHeart className="group-hover:text-primary duration-200 w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
            <div className="lg:hidden absolute top-[-6px] right-[-6px] w-[18px] h-[18px] rounded-full bg-[rgb(var(--bg-opposite))] text-[rgb(var(--bg))] flex items-center justify-center leading-none text-[10px] font-semibold text-center">
              3
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="text-size-small-a mb-[5px] line-clamp-1 text-[rgb(var(--color-text-title),0.8)] font-semibold duration-200 group-hover:text-primary">
              Wishlist
            </div>
            <div className="text-size-small line-clamp-1 uppercase font-semibold">
              3-ITEMS
            </div>
          </div>
        </div>
        <div className="group  flex items-center gap-[6px] cursor-pointer ">
          <div className="relative">
            <SvgBag className="group-hover:text-primary duration-200 w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
            <div className="lg:hidden absolute top-[-6px] right-[-6px] w-[18px] h-[18px] rounded-full bg-[rgb(var(--bg-opposite))] text-[rgb(var(--bg))] flex items-center justify-center leading-none text-[10px] font-semibold text-center">
              3
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="text-size-small-a mb-[5px] line-clamp-1 text-[rgb(var(--color-text-title),0.8)] font-semibold duration-200 group-hover:text-primary">
              Cart
            </div>
            <div className="text-size-small line-clamp-1 uppercase font-semibold">
              3-ITEMS
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
