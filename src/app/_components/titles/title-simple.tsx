type TitleSimpleProps = {
  className?: string
  classTitle?: string
  title: string
  titleHightlight?: string
  sup?: string
}
export const TitleSimple = (props: TitleSimpleProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <h2
        className={`${
          props?.classTitle ?? ''
        } capitalize text-size-4 font-extrabold  leading-[1.4]`}
      >
        {props.title}
        {props?.titleHightlight && (
          <span className="text-primary">{props?.titleHightlight}</span>
        )}
      </h2>
      {props?.sup && (
        <p className="mb-0 mt-[5px] text-[rgb(var(--color-text-title),0.8)] leading-[1.5]">
          {props.sup}
        </p>
      )}
    </div>
  )
}
