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
        'primary': 'rgb(var(--color-primary))',
        'seconday': 'rgb(var(--color-seconday))',
        'alert': 'rgb(var(--color-alert))',
        'success': 'rgb(var(--color-success))',
        'process': 'rgb(var(--color-process))',
        'warning': 'rgb(var(--color-warning))',
        'title': 'rgb(var(--color-text-title))',
        'bg': 'rgb(var(--bg))',
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
    },
  },
  plugins: [],
}
export default config
