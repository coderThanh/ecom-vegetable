import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        alert: 'rgb(var(--color-alert))',
        success: 'rgb(var(--color-success))',
        process: 'rgb(var(--color-process))',
        warning: 'rgb(var(--color-warning))',
        star: 'rgb(var(--color-star))',
        title: 'rgb(var(--color-text-title))',
        bg: 'rgb(var(--bg))',
        'bg-2nd': 'rgb(var(--bg-2nd))',
        'bg-opposite': 'rgb(var(--bg-opposite))',
      },
      fontSize: {
        'size-small': 'var(--size-small)',
        'size-small-a': 'var(--size-small-a)',
        'size-2': 'var(--size-2)',
        'size-3': 'var(--size-3)',
        'size-4': 'var(--size-4)',
        'size-5': 'var(--size-5)',
        'size-6': 'var(--size-6)',
        'size-7': 'var(--size-7)',
        'size-8': 'var(--size-8)',
      },
      borderRadius: {
        'radius-small': 'var(--radius-small)',
        'radius-1': 'var(--radius-1)',
        'radius-2': 'var(--radius-2)',
        'radius-3': 'var(--radius-3)',
      },
      animation: {
        fadeIn: 'fadeIn 500ms',
        fadeInPopup: 'fadeIn 300ms both',
        fadeInFromBottom: 'fadeInFromBottom 300ms both',
        fadeInFromLeft: 'fadeInFromLeft 300ms both',
        fadeOut: 'fadeOut 300ms both',
        fadeOutToBottom: 'fadeOutToBottom 300ms both',
        fadeOutToLeft: 'fadeOutToLeft 300ms both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeOutToBottom: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeOutToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
