import { FooterAccording } from '@/app/_components/footer/footer-according'
import Image from 'next/image'
import Link from 'next/link'
import { PAGE_TITLE } from '@/ultil/const'
import { Socials } from '@/app/_components/social/social'
import SvgEmail from '@/svg/email'
import SvgLocation from '@/svg/location'
import SvgPhone from '@/svg/phone'
import SystemLink from '@/app/_components/link'

export const Footer = () => {
  const menuCategory: { name: string; href: string }[] = [
    { name: 'Dairy & Milk', href: '#' },
    { name: 'Fruits', href: '#' },
    { name: 'Vegetables', href: '#' },
    { name: 'Snack & Spice', href: '#' },
    { name: 'Bakery', href: '#' },
    { name: 'Seafood', href: '#' },
  ]

  const menuCompany: { name: string; href: string }[] = [
    { name: 'About us', href: '#' },
    { name: 'Delivery', href: '#' },
    { name: 'Legal Notice', href: '#' },
    { name: 'Terms & conditions', href: '#' },
    { name: 'Secure payment', href: '#' },
    { name: 'Contact us', href: '#' },
  ]

  const menuAccount: { name: string; href: string }[] = [
    { name: 'Sign In', href: '#' },
    { name: 'View Cart', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Become a Vendor', href: '#' },
    { name: 'Payments', href: '#' },
  ]

  return (
    <footer className="border-t border-solid border-[rgba(var(--color-border),0.1)] pt-[30px] md:pt-[50px]">
      <div className="container px-[12px]">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_repeat(4,1fr)] gap-[24px_24px] text-size-small text-[rgb(var(--color-text-title),0.8)]">
          {/* Logo */}
          <div className="mb-[16px] lg:mb-0">
            <Link href={'/'}>
              <Image
                src={'/assets/logo.png'}
                alt={PAGE_TITLE}
                width={400}
                height={300}
                className="h-[35px] w-auto mb-[24px]"
              />
            </Link>
            <p className="mb-[24px]">
              Grabit is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>
            <div className="flex gap-[12px] w-full overflow-hidden">
              <Link
                href={'#'}
                target="_blank"
              >
                <Image
                  src={'/assets/icon-apple-app.png'}
                  alt="download by apple store"
                  width={200}
                  height={200}
                  className=" w-auto h-[40px]"
                />
              </Link>{' '}
              <Link
                href={'#'}
                target="_blank"
              >
                <Image
                  src={'/assets/icon-ch-play-app.png'}
                  alt="download by chplay store"
                  width={200}
                  height={200}
                  className=" w-auto h-[40px]"
                />
              </Link>
            </div>
          </div>
          <FooterAccording title="Category">
            <div className="grid grid-cols-1 gap-[14px]">
              {menuCategory.map((item, index) => (
                <Link
                  key={`menu-category-${index}`}
                  href={item.href}
                  className="block duration-200 transition-all hover:text-primary leading-[1.4]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </FooterAccording>
          <FooterAccording title="Company">
            <div className="grid grid-cols-1 gap-[14px]">
              {menuCompany.map((item, index) => (
                <Link
                  key={`menu-category-${index}`}
                  href={item.href}
                  className="block duration-200 transition-all hover:text-primary leading-[1.4]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </FooterAccording>
          <FooterAccording title="Account">
            <div className="grid grid-cols-1 gap-[14px]">
              {menuAccount.map((item, index) => (
                <Link
                  key={`menu-category-${index}`}
                  href={item.href}
                  className="block duration-200 transition-all hover:text-primary leading-[1.4]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </FooterAccording>
          <FooterAccording title="Contact Us">
            {/* contact */}
            <FooterContact className="mb-[24px]" />
            <Socials
              facebook="#"
              x="#"
              instagram="#"
              linked="#"
              className="!justify-start !gap-[8px_8px]"
            />
          </FooterAccording>
        </div>
      </div>
      <div className='pt-[60px]'></div>
      <FooterCopyright />
    </footer>
  )
}

type FooterContactProps = { className?: string }
export const FooterContact = (props: FooterContactProps) => {
  return (
    <div className={`grid gap-[12px] ${props?.className ?? ''}`}>
      <SystemLink className="flex items-start gap-[8px] leading-[1.5]">
        <SvgLocation
          width={20}
          height={20}
          className="text-primary basis-[20px] "
        />
        <span className="flex-1">
          2548 Broaddus Maple Court, Madisonville KY 4783, USA.
        </span>
      </SystemLink>
      <SystemLink
        url={'tel:09876543210'}
        className="flex items-start gap-[8px] leading-[1.5] duration-200 transition-colors hover:text-primary"
      >
        <SvgPhone
          width={20}
          height={20}
          className="text-primary basis-[20px] "
        />
        <span className="flex-1">+00 9876543210</span>
      </SystemLink>
      <SystemLink
        url={'mailto:example@email.com'}
        className="flex items-start gap-[8px] leading-[1.5] duration-200 transition-colors hover:text-primary"
      >
        <SvgEmail
          width={20}
          height={20}
          className="text-primary basis-[20px] "
        />
        <span className="flex-1">example@email.com</span>
      </SystemLink>
    </div>
  )
}

type FooterCopyrightProps = { className?: string }
export const FooterCopyright = (props: FooterCopyrightProps) => {
  return (
    <div
      className={`border-t border-solid border-[rgba(var(--color-border),0.05)] py-[12px] bg-bg-2nd ${
        props?.className ?? ''
      }`}
    >
      <div className="container px-[12px]">
        <p className="m-0 text-center text-size-small text-[rgb(var(--color-text-title),0.8)]">
          Copyright © PtCoder all rights reserved. Powered by PtCoder.
        </p>
      </div>
    </div>
  )
}
