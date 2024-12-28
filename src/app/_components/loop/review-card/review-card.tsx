import { Rating } from '@/app/_components/rating/rating'

type ReviewCardProps = {
  className?: string
  name: string
  message: string
  star: number
  time: string
}
export const ReviewCard = ({
  className,
  name,
  message,
  time,
  star,
}: ReviewCardProps) => {
  return (
    <div className={`${className ?? ''}`}>
      <div className='flex gap-[10px] items-baseline'>
        <span className='font-bold text-title capitalize leading-[1.4]'>{name}</span>
        <Rating rating={star} />
      </div>
      <p className='text-size-small text-[rgb(var(--color-text-title),0.7)] mb-0 mt-[5px]'>{time}</p>
      <p className='mb-0 mt-[8px]'>{message}</p>
    </div>
  )
}
