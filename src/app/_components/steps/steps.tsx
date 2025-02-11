export enum StepPosition {
  start,
  end,
}

type StepsWrapProps = { className?: string; children?: React.ReactNode }
export const StepsWrap = (props: StepsWrapProps) => {
  return (
    <div
      className={`${props?.className ?? ''} flex justify-center items-start`}
    >
      {props?.children}
    </div>
  )
}

type StepTitleProps = {
  className?: string
  label: string
  active?: boolean
  step: number
  position: StepPosition
  onClick?: VoidFunction
}
export const StepTitle = ({
  step,
  className,
  label,
  active,
  position,
  onClick,
}: StepTitleProps) => {
  return (
    <div
      className={`${className ?? ''}  text-center flex-1 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative isolate">
        <div
          className={`flex items-center justify-center w-[40px] h-[40px] border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-full rounded-[50%] font-[500] mx-auto  ${
            active ? 'bg-success text-bg border-success' : ''
          }`}
        >
          {step}
        </div>

        {position === StepPosition.start && (
          <div
            className={`w-[calc(100%-60px)] h-[5px]  -z-10 rounded-[100px] absolute top-1/2 left-[calc(50%+30px)] ${
              active ? 'bg-success' : 'bg-[rgb(var(--bg-opposite),0.1)]'
            } `}
          ></div>
        )}
      </div>
      <div className="text-size-small mt-[14px] px-[12px] leading-[1.3]">
        {label}
      </div>
    </div>
  )
}
