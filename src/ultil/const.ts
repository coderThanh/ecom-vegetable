import { MenuItem } from '@/ultil/type'

export const TOKEN = 'TOKEN'

export const DATE_FORMAT_VI = 'DD/MM/YYYY'

export const LIMIT_FETCH = 12

export const LIMIT_ADMIN_FETCH = 2

export const TIME_OUT_API = 30000

export const PAGE_TITLE = 'Page title'

export const PAGE_DESCRIPTION = 'Page description'

export const CONST_REGEX = {
  vn_phone_numer: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
  one_number_only: /[0-9]{1}/,
  only_number: /[0-9]/,
}

export const CONST_ROUTER = {
  home: '/',
}

export const DATA_MENU_MAIN: MenuItem[] = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '#',
    text: 'Categories',
    chilren: [
      {
        url: '#',
        text: 'Mango Juice',
        chilren: [
          {
            url: '#',
            text: 'Mango Juice',
          },
          {
            url: '#',
            text: 'Coconut Water',
          },
          {
            url: '#',
            text: 'Tetra Pack',
          },
          {
            url: '#',
            text: 'Apple Juices',
          },
          {
            url: '#',
            text: 'Lychee Juice',
          },
        ],
      },
      {
        url: '#',
        text: 'Coconut Water',
        chilren: [
          {
            url: '#',
            text: 'Mango Juice',
          },
          {
            url: '#',
            text: 'Coconut Water',
          },
          {
            url: '#',
            text: 'Tetra Pack',
          },
          {
            url: '#',
            text: 'Apple Juices',
          },
          {
            url: '#',
            text: 'Lychee Juice',
          },
        ],
      },
      {
        url: '#',
        text: 'Tetra Pack',
        chilren: [
          {
            url: '#',
            text: 'Mango Juice',
          },
          {
            url: '#',
            text: 'Coconut Water',
          },
          {
            url: '#',
            text: 'Tetra Pack',
          },
          {
            url: '#',
            text: 'Apple Juices',
          },
          {
            url: '#',
            text: 'Lychee Juice',
          },
        ],
      },
      {
        url: '#',
        text: 'Apple Juices',
      },
      {
        url: '#',
        text: 'Lychee Juice',
      },
    ],
  },
  {
    url: '#',
    text: 'Products',
  },
  {
    url: '#',
    text: 'Blog',
  },
  {
    url: '#',
    text: 'Others',
  },
  {
    text: 'Contact Us',
  },
]
