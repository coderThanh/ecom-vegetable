import Link from 'next/link'
import SvgSocialFacebook from '@/app/_svg/social-facebook'
import SvgSocialInstagram from '@/app/_svg/social-instagram'
import SvgSocialLinked from '@/app/_svg/social-linked'
import SvgSocialX from '@/app/_svg/social-x'

type SocialsProps = {
  className?: string
  facebook?: string
  x?: string
  instagram?: string
  linked?: string
}
export const Socials = (props: SocialsProps) => {

  const classIconFilled =
    'flex items-center justify-center bg-[rgb(var(--bg-opposite))] rounded-full transition-all duration-200 hover:bg-primary w-[34px] h-[34px] text-[rgb(var(--bg))]'

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
            width={16}
            height={16}
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
            width={16}
            height={16}
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
            width={18}
            height={18}
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
            width={16}
            height={16}
          />
        </Link>
      )}
    </div>
  )
}
