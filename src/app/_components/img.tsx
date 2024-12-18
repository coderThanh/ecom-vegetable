import { CSSProperties } from 'react'
import Image from 'next/image'

export type SystemImageProps = {
  className?: string
  classNameInner?: string
  classNameImg?: string
  classNameOverlay?: string
  ratio?: number
  radius?: number
  sizes?: string
  src: string
  alt: string
  overlayCover?: string
  style?: CSSProperties
  styleImg?: CSSProperties
  priority?: boolean
  isSketch?: boolean
  width?: number
  height?: number
}

export default function SystemImage({
  className,
  classNameImg,
  classNameInner,
  classNameOverlay,
  ratio,
  sizes,
  style,
  radius,
  src,
  alt,
  overlayCover,
  styleImg,
  priority,
  width,
  height,
  isSketch,
}: SystemImageProps) {
  return (
    <div
      className={`imgWrap ${className ?? ''}`}
      style={{
        ...style,
      }}
    >
      <div
        className={`img-inner relative z-[5] overflow-hidden ${
          classNameInner ?? ''
        } ${isSketch ? 'sketch-loading' :''}`}
        style={{
          paddingTop: ratio ? `${ratio}%` : undefined,
          borderRadius: radius,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill={ratio ? true : false}
          width={ratio ? undefined : width}
          height={ratio ? undefined : height}
          style={{ ...styleImg }}
          priority={priority}
          sizes={ratio ? sizes ?? '100%' : undefined}
          className={`max-w-full m-0 ${
            ratio ? 'object-center object-cover' : ''
          } ${classNameImg}`}
        />
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 z-10 ${
            classNameOverlay ?? ''
          }`}
          style={{
            backgroundColor: overlayCover,
          }}
        ></div>
      </div>
    </div>
  )
}
