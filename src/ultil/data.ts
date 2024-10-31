import { MenuItem, Product } from '@/ultil/type'

import { CONST_ROUTER } from '@/ultil/router'

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

export const DATA_PRODUCTS: Product[] = [
  {
    id: '67209cb1bc3f69c62086e11e',
    title: 'Rustic Rubber Mouse',
    rating: 3,
    price: 20755743,
    priceSale: undefined,
  },

  {
    id: '67209cb1bc3f69c62086e120',
    title: 'Practical Frozen Shoes',
    rating: 5,
    price: 28013602,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e121',
    title: 'Handmade Metal Shirt intelligent Cotton Cheese Small Metal Sausages',
    rating: 3,
    price: 16942295,
    priceSale: 6942295,
  },
  {
    id: '67209cb1bc3f69c62086e122',
    title: 'Intelligent Cotton Cheese',
    rating: 1,
    price: 10579400,
    priceSale: 5579400,
  },
  {
    id: '67209cb1bc3f69c62086e123',
    title: 'Generic Steel Soap',
    rating: 5,
    price: 10769249,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e124',
    title: 'Small Metal Sausages',
    rating: 1,
    price: 21043360,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e11f',
    title: 'Electronic Soft Pants',
    rating: 0,
    price: 25692130,
    priceSale: 15692130,
  },
  {
    id: '67209cb1bc3f69c62086e125',
    title: 'Unbranded Bronze Ball',
    rating: 1,
    price: 17321720,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e126',
    title: 'Sleek Plastic Towels',
    rating: 5,
    price: 17691149,
    priceSale: 11691149,
  },
  {
    id: '67209cb1bc3f69c62086e127',
    title: 'Recycled Metal Chair',
    rating: 4,
    price: 22081697,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e128',
    title: 'Awesome Metal Ball',
    rating: 0,
    price: 7501280,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e129',
    title: 'Licensed Frozen Shoes',
    rating: 1,
    price: 11047899,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e11f',
    title: 'Electronic Soft Pants',
    rating: 0,
    price: 25692130,
    priceSale: 15692130,
  },
  {
    id: '67209cb1bc3f69c62086e125',
    title: 'Unbranded Bronze Ball',
    rating: 1,
    price: 17321720,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e126',
    title: 'Sleek Plastic Towels',
    rating: 5,
    price: 17691149,
    priceSale: 11691149,
  },
  {
    id: '67209cb1bc3f69c62086e127',
    title: 'Recycled Metal Chair',
    rating: 4,
    price: 22081697,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e128',
    title: 'Awesome Metal Ball',
    rating: 0,
    price: 7501280,
    priceSale: null,
  },
  {
    id: '67209cb1bc3f69c62086e129',
    title: 'Licensed Frozen Shoes',
    rating: 1,
    price: 11047899,
    priceSale: null,
  },
]
