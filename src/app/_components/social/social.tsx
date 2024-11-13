import Link from 'next/link'
import SvgSocialFacebook from '@/svg/social-facebook'
import SvgSocialInstagram from '@/svg/social-instagram'
import SvgSocialLinked from '@/svg/social-linked'
import SvgSocialX from '@/svg/social-x'

type SocialsProps = {
  className?: string
  facebook?: string
  x?: string
  instagram?: string
  linked?: string
}
export const Socials = (props: SocialsProps) => {

  const classIconFilled =
    'flex items-center justify-center bg-[rgb(var(--bg-opposite))] rounded-radius-1 transition-all duration-200 hover:bg-primary w-[32px] h-[32px] text-[rgb(var(--bg))]'

  return (
    <div
      className={`${
        props?.className ? props?.className : ''
      } flex gap-x-[10px] justify-center flex-wrap gap-y-[12px]`}
    >
      {props?.facebook && (
        <Link
          href={props?.facebook}
          className={classIconFilled}
          target="_blank"
        >
          <SvgSocialFacebook
            width={14}
            height={14}
          />
        </Link>
      )}
      {props?.x && (
        <Link
          href={props?.x}
          className={classIconFilled}
          target="_blank"
        >
          <SvgSocialX
            width={14}
            height={14}
          />
        </Link>
      )}
      {props?.instagram && (
        <Link
          href={props?.instagram}
          className={classIconFilled}
          target="_blank"
        >
          <SvgSocialInstagram
            width={16}
            height={16}
          />
        </Link>
      )}
      {props?.linked && (
        <Link
          href={props?.linked}
          className={classIconFilled}
          target="_blank"
        >
          <SvgSocialLinked
            width={14}
            height={14}
          />
        </Link>
      )}
    </div>
  )
}
