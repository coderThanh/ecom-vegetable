import { Key } from 'react'
import SvgArrowLeft from '@/svg/arrow-left'
import SvgArrowRight from '@/svg/arrow-right'
import SystemLink from '@/app/_components/link'

type PaginationProps = {
  className?: string
  currentPage: number
  totalPage: number
}
export const Pagination = ({
  totalPage,
  currentPage,
  className,
}: PaginationProps) => {
  const itemsOutput: { page?: number; name: String; url: string }[] = []

  const maxItems = 10 // required maxItems % 2 == 0

  if (totalPage <= maxItems) {
    for (let i = currentPage; i <= totalPage; i++) {
      itemsOutput.push({
        page: i,
        name: i.toString(),
        url: '#',
      })
    }
  } else {
    const itemsStart: { page?: number; name: String; url: string }[] = []
    const itemsEnd: { page?: number; name: String; url: string }[] = []
    const currentInStart: boolean = currentPage <= Math.round(totalPage / 2)

    switch (currentInStart) {
      case true:
        const startIndexBefore =
          currentPage - maxItems / 2 < 1
            ? 1
            : Math.max(1, currentPage - maxItems / 2 + 1)

        for (
          let i = startIndexBefore;
          i <= startIndexBefore + maxItems - 2;
          i++
        ) {
          itemsStart.push({
            page: i,
            name: i.toString(),
            url: '#',
          })
        }

        itemsEnd.push({
          page: totalPage,
          name: totalPage.toString(),
          url: '#',
        })
        break
      case false:
        const startIndex =
          currentPage + maxItems / 2 - 1 >= totalPage
            ? totalPage - maxItems + 2
            : currentPage - maxItems / 2 + 1

        for (
          let i = startIndex;
          i <= Math.min(currentPage + maxItems / 2 - 1, totalPage);
          i++
        ) {
          itemsEnd.push({
            page: i,
            name: i.toString(),
            url: '#',
          })
        }

        itemsStart.push({
          page: 1,
          name: '1',
          url: '#',
        })
        break
    }

    // merge
    itemsOutput.push(
      ...itemsStart,
      { page: 0, name: '...', url: '#' },
      ...itemsEnd,
    )
  }

  const classBtn =
    'leading-[1] flex w-[34px] h-[34px] p-[5px] items-center justify-center bg-bg-2nd text-center rounded-radius-small duration-200 transition-all hover:bg-primary hover:text-bg text-title'

  return (
    <div
      className={`flex flex-wrap gap-[10px_8px] justify-center items-start ${
        className ?? ''
      }`}
    >
      {currentPage > 1 && (
        <SystemLink className={classBtn}>
          <SvgArrowLeft
            width={20}
            height={20}
          />
        </SystemLink>
      )}
      {itemsOutput.map((item, index: number) => (
        <SystemLink
          key={index}
          className={`${
            item?.page === currentPage ? 'bg-primary !text-bg' : ''
          } ${classBtn}`}
        >
          <span>{item.name}</span>
        </SystemLink>
      ))}
      {currentPage < totalPage && (
        <SystemLink className={classBtn}>
          <SvgArrowRight
            width={20}
            height={20}
          />
        </SystemLink>
      )}
    </div>
  )
}
