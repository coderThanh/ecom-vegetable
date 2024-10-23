import SvgSearch from '@/app/(svg)/search'

export const HeaderSearch = () => {
  return (
    <>
      <div className="border-[1px] border-solid border-[rgba(var(--color-border),0.1)] flex rounded-radius-1 hover:border-[rgba(var(--color-border),0.4)] duration-300 ">
        <input
          type="text"
          className="flex-1 px-[14px] h-[42px] field-text-rest placeholder:text-size-small"
          placeholder="Search Products..."
        />
        <div className=" flex items-center justify-center w-[40px] cursor-pointer hover:text-[rgb(var(--color-primary))] duration-300">
          <SvgSearch  />
        </div>
      </div>
    </>
  )
}
