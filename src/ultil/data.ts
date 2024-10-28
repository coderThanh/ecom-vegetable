import { CONST_ROUTER } from '@/ultil/router'
import { MenuItem } from '@/ultil/type'

export const DATA_MENU_MAIN: MenuItem[] = [
  {
    url: '/',
    text: 'Home',
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

export const DATA_PRODUCT_CATEGORY: { name: string; url: string }[] = [
  { name: 'Eggs', url: CONST_ROUTER.shop },
  { name: 'Fruits', url: CONST_ROUTER.shop },
  { name: 'Bakery', url: CONST_ROUTER.shop },
  { name: 'Vegetables', url: CONST_ROUTER.shop },
  { name: 'Dairy & milk', url: CONST_ROUTER.shop },
  { name: 'Snack & spice', url: CONST_ROUTER.shop },
  { name: 'Juice & drinks', url: CONST_ROUTER.shop },
  { name: 'Seafood', url: CONST_ROUTER.shop },
  { name: 'Fast food', url: CONST_ROUTER.shop },
]
