import SystemLink from '@/app/_components/link'

type BreadCrumbProps = {
  className?: string
  items: { url: string; title: string }[]
  current: string
}
export const BreadCrumb = (props: BreadCrumbProps) => {
  const classLink = 'duration-200 transition-colors hover:text-primary'

  return (
    <div className={`leading-[1.5] ${props?.className ?? ''}`}>
      <SystemLink
        url={'/'}
        className={classLink}
      >
        Home
      </SystemLink>
      {props.items.map((item, index) => {
        return (
          <span key={`Breakcrumb-${index}`}>
            <span> / </span>
            <SystemLink
              key={index}
              url={item.url}
              className={classLink}
            >
              {item.title}
            </SystemLink>
          </span>
        )
      })}
      <span> / </span>
      <span className="text-primary">{props.current}</span>
    </div>
  )
}
