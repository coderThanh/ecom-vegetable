import { Blog, MenuItem, Product } from '@/ultil/type'

import { ROUTERS } from '@/ultil/router'

export const DATA_MENU_MAIN: MenuItem[] = [
  {
    url: '/',
    text: 'Home',
    chilren: [
      {
        url: ROUTERS.shop,
        text: 'Mango Juice',
      },
      {
        url: ROUTERS.shop,
        text: 'Coconut Water',
      },
      {
        url: ROUTERS.shop,
        text: 'Tetra Pack',
      },
      {
        url: ROUTERS.shop,
        text: 'Apple Juices',
      },
      {
        url: ROUTERS.shop,
        text: 'Lychee Juice',
      },
    ],
  },
  {
    url: ROUTERS.shop,
    text: 'Categories',
    chilren: [
      {
        url: ROUTERS.shop,
        text: 'Mango Juice',
        chilren: [
          {
            url: ROUTERS.shop,
            text: 'Mango Juice',
          },
          {
            url: ROUTERS.shop,
            text: 'Coconut Water',
          },
          {
            url: ROUTERS.shop,
            text: 'Tetra Pack',
          },
          {
            url: ROUTERS.shop,
            text: 'Apple Juices',
          },
          {
            url: ROUTERS.shop,
            text: 'Lychee Juice',
          },
        ],
      },
      {
        url: ROUTERS.shop,
        text: 'Coconut Water',
        chilren: [
          {
            url: ROUTERS.shop,
            text: 'Mango Juice',
          },
          {
            url: ROUTERS.shop,
            text: 'Coconut Water',
          },
          {
            url: ROUTERS.shop,
            text: 'Tetra Pack',
          },
          {
            url: ROUTERS.shop,
            text: 'Apple Juices',
          },
          {
            url: ROUTERS.shop,
            text: 'Lychee Juice',
          },
        ],
      },
      {
        url: ROUTERS.shop,
        text: 'Tetra Pack',
        chilren: [
          {
            url: ROUTERS.shop,
            text: 'Mango Juice',
          },
          {
            url: ROUTERS.shop,
            text: 'Coconut Water',
          },
          {
            url: ROUTERS.shop,
            text: 'Tetra Pack',
          },
          {
            url: ROUTERS.shop,
            text: 'Apple Juices',
          },
          {
            url: ROUTERS.shop,
            text: 'Lychee Juice',
          },
        ],
      },
      {
        url: ROUTERS.shop,
        text: 'Apple Juices',
      },
      {
        url: ROUTERS.shop,
        text: 'Lychee Juice',
      },
    ],
  },
  {
    url: ROUTERS.shop,
    text: 'Products',
  },
  {
    url: ROUTERS.blogs,
    text: 'Blog',
  },
  {
    url: ROUTERS.blogDetail,
    text: 'Blog detail',
  },
  { url: ROUTERS.checkout, text: 'Checkout' },
]

export const DATA_PRODUCT_CATEGORY: { name: string; url: string }[] = [
  { name: 'Eggs', url: ROUTERS.shop },
  { name: 'Fruits', url: ROUTERS.shop },
  { name: 'Bakery', url: ROUTERS.shop },
  { name: 'Vegetables', url: ROUTERS.shop },
  { name: 'Dairy & milk', url: ROUTERS.shop },
  { name: 'Snack & spice', url: ROUTERS.shop },
  { name: 'Juice & drinks', url: ROUTERS.shop },
  { name: 'Seafood', url: ROUTERS.shop },
  { name: 'Fast food', url: ROUTERS.shop },
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
    title:
      'Fantastic Soft Table street Quinn Tromp Lorem Ipsum is simply dummy text of the printing',
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

export const DATA_COMMENTS = [
  {
    id: 'dc80168b-897d-4af7-8f1c-b61352ac516c',
    img: '/assets/people-1.jpg',
    name: 'Maximo Gleichner',
    createdAt: 'Mon Nov 17 1997 02:41:30 GMT+0700 (Indochina Time)',
    message: `Despite the competition from startups Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
nunc ut tortor pulvinar blandit ut nec arcu. Maecenas at rutrum odio. Phasellus et elementum dui. Maecenas vitae
sollicitudin arcu, sit amet interdum est`,
    children: [],
  },
  {
    id: '6e387c9c-712f-4356-8372-2a20e0d4ac26',
    img: '/assets/people-2.jpg',
    name: 'Jolie Dibbert',
    createdAt: 'Mon Nov 03 2014 21:20:13 GMT+0700 (Indochina Time)',
    message:
      'Hello, Violette! Lorem ipsum dolor sit amet, consectetur adipisicing elit Your order number is: #75',
    children: [
      {
        id: 'dc80168b-897d-4af7-8f1c-b61352ac516c',
        img: '/assets/people-1.jpg',
        name: 'Maximo Gleichner',
        createdAt: 'Mon Nov 17 1997 02:41:30 GMT+0700 (Indochina Time)',
        message:
          'Hello, Percy! Lorem ipsum dolor sit amet, consectetur adipisicing elit Your order number is: #31',
        children: [],
      },
      {
        id: '6e387c9c-712f-4356-8372-2a20e0d4ac26',
        img: '/assets/people-2.jpg',
        name: 'Jolie Dibbert',
        createdAt: 'Mon Nov 03 2014 21:20:13 GMT+0700 (Indochina Time)',
        message:
          'Hello, Violette! Lorem ipsum dolor sit amet, consectetur adipisicing elit Your order number is: #75',
        children: [],
      },
      {
        id: 'd49a1359-ff76-40ff-9569-b26df5d396c4',
        img: '/assets/people-3.jpg',
        name: 'June Marquardt',
        createdAt: 'Mon Apr 19 2010 08:23:13 GMT+0700 (Indochina Time)',
        message:
          'Hello, Dante! Lorem ipsum dolor sit amet, consectetur adipisicing elit Your order number is: #69',
        children: [],
      },
    ],
  },
  {
    id: 'd49a1359-ff76-40ff-9569-b26df5d396c4',
    img: '/assets/people-3.jpg',
    name: 'June Marquardt',
    createdAt: 'Mon Apr 19 2010 08:23:13 GMT+0700 (Indochina Time)',
    message:
      'Hello, Dante! Lorem ipsum dolor sit amet, consectetur adipisicing elit Your order number is: #69',
    children: [],
  },
  {
    id: '90b7e868-22c9-4c5d-a7eb-c04cd61f84ce',
    img: '/assets/people-4.jpg',
    name: 'Myah Champlin',
    createdAt: 'Sat Aug 11 1990 13:41:38 GMT+0700 (Indochina Time)',
    message:
      'Hello, Curt! Lorem ipsum dolor sit amet, consectetur adipisicing elit Your order number is: #72',
    children: [],
  },
]

export const DATA_BLOG_DETAIL_CONTENT = `<h2>Despite the competition from startups</h2> whether you are building an enterprise web portal or a state-of-the-art
website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools in
abundance, a<a href="#">llowing maintained PHP</a> frameworks provide those tools in abundance, allowing developers to
save time, re-use code, and streamline the back end. As software development tools continuously change to follow the
latest. Despite the competition from startups and the ever-present economic challenges, the banking industry is
gradually adopting what the latest technologies have to offer. From cloud technology <a href="http://google.com"
    rel="nofollow">to cyber risk management to machine learning in investment banking,</a> join us as we explore the
banking industry trends for 2019 and beyond. Cloud is one of the current banking industry trends as well. It is expected
that the technology will serve as a foundation for core modernization of banking organizations. <h3><span
        style="color: #333333;">Cloud Technology as New Foundation</span></h3> Cloud has become the new normal for nine
of ten enterprises across industries. The average IT environment in both SMBs and larger companies is becoming
increasingly cloud-based. <a href="#">Companies also diversify their delivery models,</a> with Infrastructure as a
Service (IaaS) and Platform as a Service (PaaS) gaining more and more traction. Plus, a slew of new job positions have
emerged to manage different aspects of cloud in the enterprise, including architecture and safety. One of the new trends
in the banking industry, ensuring fail-safe security will also be a core question regardless of the type of a cloud
solution and its scale. Cloud is one of the current banking industry trends as well. It is expected that the technology
will serve as a foundation for core modernization of banking organizations. <h4>Risk Management Banking Industry Trends
</h4>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Q1HLzpnqHsw?si=F_JTQPuaDYFVmEwC"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe> Existing risk management systems at banking organizations might not be ready to face the
challenges of the rapidly changing world. Poised to become the top banking industry trends for 2019 and years to come,
AI-driven solutions with machine and deep learning algorithms provide a solution. <em>As for cyber risk management,
    experts at Deloitte point at the following trends in the banking industry:</em>
<ol>
    <li>Strengthen basic controls like IT asset, patch, and vulnerability management to identify and manage risks
        related to implementation of cloud and migration to open architecture.</li>
    <li>Use analytics tools and AI with security in mind.</li>
    <li>Build an IT infrastructure with security as a top priority: it should be able to withstand systematic attacks
        and long stress periods.</li>
</ol>
<h5>Risk Management Banking Industry Trends</h5> Fintechs and nonbanks now have a substantial influence in the banking
industry. They are highly agile, innovative, and aim at exceeding the demands of modern customers in banking services
and experiences. Established retail banks need to compete and often play catch-up. Still, they acknowledge the need to
change, and change fast. <img
    src="https://images.unsplash.com/photo-1710225342718-11c18a806f59?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="aaa">
<h2>Despite the competition from startups</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
nunc ut tortor pulvinar blandit ut nec arcu. Maecenas at rutrum odio. Phasellus et elementum dui. Maecenas vitae
sollicitudin arcu, sit amet interdum est. Cras congue dui ac aliquet rhoncus. Ut consectetur est non felis tempus, in
tincidunt augue imperdiet. Maecenas eget ornare nisi, eu placerat risus. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Fusce vel risus augue. <h2>Despite the competition from startups</h2> Nulla
eleifend mauris non tempus iaculis. Nam dictum dolor non odio varius lobortis. Sed aliquam finibus urna eu facilisis.
Fusce faucibus malesuada ipsum, vitae feugiat sapien rutrum a. Nullam nulla enim, varius non nibh non, finibus rutrum
mauris. Vivamus eget augue auctor, bibendum sapien sit amet, tincidunt elit. Aliquam mollis nulla vitae pulvinar
volutpat. Nam gravida neque vel tortor molestie, eget eleifend eros rutrum. Sed cursus massa id mi porttitor, sed mollis
dui molestie. Vivamus auctor sit amet arcu condimentum viverra. Curabitur tempor, nibh quis semper bibendum, nunc nunc
euismod felis, ac scelerisque mauris ex vel tellus. Vestibulum finibus fermentum diam, a placerat leo bibendum a. Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie mattis massa, id vehicula ipsum malesuada sed. <img
    src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="bb">
    
    <ul>
    <li>Strengthen basic controls like IT asset, patch, and vulnerability management to identify and manage risks
        related to implementation of cloud and migration to open architecture.</li>
    <li>Use analytics tools and AI with security in mind.</li>
    <li>Build an IT infrastructure with security as a top priority: it should be able to withstand systematic attacks
        and long stress periods.</li>
</ul>
     Maecenas posuere eu ante at viverra. Pellentesque et justo sed ligula tempus fermentum nec nec erat. Nam
erat lectus, euismod nec imperdiet vitae, luctus sit amet diam. Proin dictum dolor eros, sed pharetra tellus dictum
eget. Vestibulum ut placerat metus, in ultricies lectus. Duis aliquet ultricies magna id pretium. Praesent leo sapien,
imperdiet ut euismod mattis, cursus sed dui. Integer eget erat est. Donec fermentum nisi non magna viverra molestie.
Pellentesque tincidunt accumsan dui elementum porttitor. Proin a auctor libero. Maecenas aliquet massa ac malesuada
efficitur. Morbi et diam turpis. In sagittis venenatis nulla, eu ornare dui fermentum viverra. Sed tempor risus
elementum mattis ultrices. Curabitur ut ullamcorper nibh. Phasellus vitae elit sed justo fringilla dictum. Nunc mi nunc,
consectetur ornare euismod sit amet, rutrum at libero. Suspendisse sed porttitor sem. Nulla scelerisque, ipsum id
faucibus pulvinar, felis felis suscipit urna, non mattis ex lectus sed enim. Proin porttitor orci sit amet ante
imperdiet, dictum cursus leo iaculis. Curabitur nec tempus diam. Aliquam scelerisque odio nunc, in pharetra ipsum
eleifend ac. Maecenas ac sem sem. Cras euismod egestas ultrices. Curabitur ut commodo leo, vitae egestas enim. Etiam sed
consectetur leo. Pellentesque lobortis sem ut urna imperdiet scelerisque. Pellentesque tincidunt gravida tellus, eu
egestas ligula volutpat sed. Proin ipsum urna, finibus a tellus sit amet, condimentum fringilla dui. Cras vel vestibulum
risus. Cras dapibus mauris sed leo fermentum congue. Pellentesque dapibus nec metus eget bibendum. <table>
    <tr>
        <th>stt</th>
        <th>demo name</th>
        <th>demo value</th>
        <th>demo value</th>
        <th>demo value</th>
    </tr>
    <tr>
        <td>01</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc ut tortor pulvinar blandit ut
            nec arcu</td>
    </tr>
    <tr>
        <td>01</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc ut tortor pulvinar blandit ut
            nec arcu</td>
    </tr>
    <tr>
        <td>01</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc ut tortor pulvinar blandit ut
            nec arcu</td>
    </tr>
    <tr>
        <td>01</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>nguyen van a</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc ut tortor pulvinar blandit ut
            nec arcu</td>
    </tr>
</table>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc ut tortor pulvinar blandit ut nec arcu.
    Maecenas at rutrum odio. Phasellus et elementum dui. Maecenas vitae sollicitudin arcu, sit amet interdum est. Cras
    congue dui ac aliquet rhoncus. Ut consectetur est non felis tempus, in tincidunt augue imperdiet. Maecenas eget
    ornare nisi, eu placerat risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
    himenaeos. Fusce vel risus augue. Nulla eleifend mauris non tempus iaculis. Nam dictum dolor non odio varius
    lobortis. Sed aliquam finibus urna eu facilisis. Fusce faucibus malesuada ipsum, vitae feugiat sapien rutrum a.
    Nullam nulla enim, varius non nibh non, finibus rutrum mauris. Vivamus eget augue auctor, bibendum sapien sit amet,
    tincidunt elit. Aliquam mollis nulla vitae pulvinar volutpat. Nam gravida neque vel tortor molestie, eget eleifend
    eros rutrum. Sed cursus massa id mi porttitor, sed mollis dui molestie. Vivamus auctor sit amet arcu condimentum
    viverra. Curabitur tempor, nibh quis semper bibendum, nunc nunc euismod felis, ac scelerisque mauris ex vel tellus.
    Vestibulum finibus fermentum diam, a placerat leo bibendum a. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Nulla molestie mattis massa, id vehicula ipsum malesuada sed. Maecenas posuere eu ante at viverra.
    Pellentesque et justo sed ligula tempus fermentum nec nec erat. Nam erat lectus, euismod nec imperdiet vitae, luctus
    sit amet diam. Proin dictum dolor eros, sed pharetra tellus dictum eget. Vestibulum ut placerat metus, in ultricies
    lectus. Duis aliquet ultricies magna id pretium. Praesent leo sapien, imperdiet ut euismod mattis, cursus sed dui.
    Integer eget erat est. Donec fermentum nisi non magna viverra molestie. Pellentesque tincidunt accumsan dui
    elementum porttitor. Proin a auctor libero. Maecenas aliquet massa ac malesuada efficitur. Morbi et diam turpis. In
    sagittis venenatis nulla, eu ornare dui fermentum viverra. Sed tempor risus elementum mattis ultrices. Curabitur ut
    ullamcorper nibh. Phasellus vitae elit sed justo fringilla dictum. Nunc mi nunc, consectetur ornare euismod sit
    amet, rutrum at libero. Suspendisse sed porttitor sem. Nulla scelerisque, ipsum id faucibus pulvinar, felis felis
    suscipit urna, non mattis ex lectus sed enim. Proin porttitor orci sit amet ante imperdiet, dictum cursus leo
    iaculis. Curabitur nec tempus diam. Aliquam scelerisque odio nunc, in pharetra ipsum eleifend ac. Maecenas ac sem
    sem. Cras euismod egestas ultrices. Curabitur ut commodo leo, vitae egestas enim. Etiam sed consectetur leo.
    Pellentesque lobortis sem ut urna imperdiet scelerisque. Pellentesque tincidunt gravida tellus, eu egestas ligula
    volutpat sed. Proin ipsum urna, finibus a tellus sit amet, condimentum fringilla dui. Cras vel vestibulum risus.
    Cras dapibus mauris sed leo fermentum congue. Pellentesque dapibus nec metus eget bibendum.</p>`
