'use client'

import SystemButton, { SystemButtonColor } from '@/app/_components/button'

import { FieldPassword } from '@/app/_components/fields/input'
import Link from 'next/link'
import SVGAppleFavicon from '@/svg/apple-favicon'
import SVGFaceBookFavicon from '@/svg/facebook-favicon'
import SVGGoogleFavicon from '@/svg/google-favicon'
import { TitleSimple } from '@/app/_components/titles/title-simple'
import { Wrapper } from '@/app/_components/wrapper'

export default function PageLogin() {
  return (
    <Wrapper>
      <div className="container px-[12px] py-[50px]  md:py-[60px] ">
        <div className="text-center">
          <TitleSimple
            title={'Sign'}
            titleHightlight=" In"
            sup="Get access to your Orders, Wishlist and Recommendations"
            classTitle="text-size-6 font-[500]"
          />
        </div>
        <div className="max-w-[500px] mx-auto mt-[30px] rounded-radius-1 border border-solid border-[rgb(var(--color-border),0.1)] p-[26px_20px] md:p-[26px_30px]">
          <form action="">
            <div className="grid gap-[20px]">
              {/*  */}
              <div>
                <label
                  htmlFor="field-name"
                  className="field-label"
                >
                  Email Address <span className="text-alert">*</span>
                </label>
                <input
                  id="field-name"
                  type="text"
                  className="field-input"
                />
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="field-name"
                  className="field-label"
                >
                  Password <span className="text-alert">*</span>
                </label>
                <FieldPassword />
              </div>
              <SystemButton
                color={SystemButtonColor.primary}
                text="Sign in"
                className="mt-[6px]"
              />
            </div>
            <p className=" mt-[20px] text-size-small text-center text-[rgb(var(--color-text-title),0.7)] mb-0">
              If you don't remember your password.{' '}
              <Link
                href={'#'}
                className="text-[rgb(var(--color-primary))] hover:decoration-1 underline-offset-[3px] underline  transition-colors decoration-transparent hover:decoration-current"
              >
                Forgot Password
              </Link>
            </p>
            <p className=" mt-[5px] text-size-small mb-0 text-center text-[rgb(var(--color-text-title),0.7)]">
              Don't have an account.{' '}
              <Link
                href={'#'}
                className="text-[rgb(var(--color-primary))] hover:decoration-1 underline-offset-[3px] underline  transition-colors decoration-transparent hover:decoration-current"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
        <div className="flex justify-center items-center gap-[10px] mt-[34px]">
          <div className="h-[2px] w-[60px] bg-[rgb(var(--bg-opposite),0.12)]"></div>
          <p className="text-center  mb-0">Or sign in with</p>
          <div className="h-[2px] w-[60px] bg-[rgb(var(--bg-opposite),0.12)]"></div>
        </div>

        <div className="flex gap-[14px] items-center justify-center mt-[20px]">
          <Link
            href={'#'}
            className="flex w-[45px] h-[45px] items-center justify-center rounded-[50%] border border-solid border-[rgb(var(--color-border),0.1)] hover:border-[rgb(var(--color-border),0.3)] duration-300"
          >
            <SVGGoogleFavicon
              width={22}
              height={22}
            />
          </Link>
          <Link
            href={'#'}
            className="flex w-[45px] h-[45px] items-center justify-center rounded-[50%] border border-solid border-[rgb(var(--color-border),0.1)] hover:border-[rgb(var(--color-border),0.3)] duration-300"
          >
            <SVGAppleFavicon
              width={20}
              height={20}
            />
          </Link>
          <Link
            href={'#'}
            className="flex w-[45px] h-[45px] items-center justify-center rounded-[50%] border border-solid border-[rgb(var(--color-border),0.1)] hover:border-[rgb(var(--color-border),0.3)] duration-300"
          >
            <SVGFaceBookFavicon
              width={22}
              height={22}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
