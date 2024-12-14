import { Blog, MenuItem, Product } from '@/ultil/type'

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
    title:
      'Handmade Metal Shirt intelligent Cotton Cheese Small Metal Sausages',
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

export const DATA_BLOGS: Blog[] = [
  {
    id: '19f4f0a5-ede3-48fe-a77d-86806c433cca',
    title: 'Rustic Plastic Shirt street Harper Pfannerstill',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Wed Feb 03 1988 13:54:09 GMT+0700 (Indochina Time)',
  },
  {
    id: '2860ac37-f54a-4e68-97b6-00207e84a3fb',
    title: 'Luxurious Bronze Ball street Angel Paucek',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Fri Aug 11 2017 00:43:24 GMT+0700 (Indochina Time)',
  },
  {
    id: '63a24dbe-e651-4338-b7a3-d1fbf70d4b65',
    title: 'Fantastic Soft Table street Quinn Tromp Lorem Ipsum is simply dummy text of the printing',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Sun Nov 25 1984 14:27:30 GMT+0700 (Indochina Time)',
  },
  {
    id: '77d30970-8f9a-4c68-8a5e-ee3168121330',
    title: 'Recycled Frozen Ball street Sage Bruen',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Fri Feb 20 1976 17:15:42 GMT+0700 (Indochina Time)',
  },
  {
    id: '44eccf3a-55c4-4bc6-8ceb-f86cf5e4af9e',
    title: 'Practical Granite Chips street Anderson Mann',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Sat Apr 11 1992 15:50:08 GMT+0700 (Indochina Time)',
  },
  {
    id: 'ebd3e879-ffd6-47be-8e08-c793ea96b887',
    title: 'Modern Wooden Cheese street Greer Lynch',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Mon Jul 09 2018 17:22:27 GMT+0700 (Indochina Time)',
  },
  {
    id: 'ca9b85be-15de-452d-9c7a-9aa3352783bc',
    title: 'Awesome Rubber Chips street Angel Schumm',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Fri Nov 14 2003 06:06:18 GMT+0700 (Indochina Time)',
  },
  {
    id: '35a1deaa-ddd0-46a9-9b89-9772f1d8cf88',
    title: 'Handcrafted Soft Pants street Arden Stracke-Orn',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Mon Apr 10 2023 02:53:27 GMT+0700 (Indochina Time)',
  },
  {
    id: '25ab5688-a6ab-4263-989f-559615d6a595',
    title: 'Ergonomic Fresh Computer street Parker McCullough',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Thu Sep 28 2000 16:58:08 GMT+0700 (Indochina Time)',
  },
  {
    id: 'e200720a-bcd1-45cf-901d-f536221e81c9',
    title: 'Small Granite Bacon street Corey Hirthe',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Fri Apr 01 1977 17:57:11 GMT+0700 (Indochina Time)',
  },
  {
    id: '6ec856f5-2bf9-4b14-b90f-2e88909e6cd7',
    title: 'Intelligent Steel Sausages street Kai Goodwin',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Thu Mar 24 1977 05:25:48 GMT+0700 (Indochina Time)',
  },
  {
    id: '40a18b83-93e4-481b-8930-15cf9f30a680',
    title: 'Awesome Steel Bike street Dakota Jenkins',
    shortDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: 'Thu Jul 04 2024 22:13:59 GMT+0700 (Indochina Time)',
  },
]
