const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  filter: {
    activeCategory: 'bed',
  },
  galleryTabs: [
    { id: 'featured', name: 'Featured' },
    { id: 'topSeller', name: 'Top seller' },
    { id: 'saleOff', name: 'Sale off' },
    { id: 'topRated', name: 'Top rated' },
  ],
  galleryPromotedProduct: {
    src: 'https://www.freepnglogos.com/uploads/bed-png/bed-17.png',
    alt: 'furniture',
  },
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      isStarred: true,
      promo: 'sale',
      image:
        'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
      images: [
        {
          id: '1',
          image:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
        },
        {
          id: '2',
          image:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
        },
        {
          id: '3',
          image:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
        },
        {
          id: '4',
          image:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
        },
        {
          id: '5',
          image:
            'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
        },
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      heart: false,
      addCompare: false,
      // topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      image:
        'https://ii1.pepperfry.com/media/catalog/product/e/n/568x625/enri-queen-size-bed-with-storage-in-wenge-finish-by-mintwud-enri-queen-size-bed-with-storage-in-weng-x4jyej.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      heart: true,
      addCompare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.ulcdn.net/images/products/156488/slide/1332x726/Baltoro_High_Gloss_Hydraulic_Storage_Bed_King_1.jpg?1561442441',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      heart: false,
      addCompare: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202022/0016/claremont-bed-c.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      heart: true,
      addCompare: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgYNv7AYfMiJ54VMgLC6HMDyxkAZ_CWQJ7Zw&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9qLSe6I_g-Buc6-DRDUhv4PzyHGV68WunUg&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhNBk-olTMxGdqE1bM-e7GXg-DpjYfR2xxKA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.lovefurniture.co.uk/bmz_cache/8/882eaa107b0dc95a06592c8aacf8afc1.image.550x550.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://5.imimg.com/data5/FK/AG/MY-61548813/interior-designing-services-for-restaurant-building-500x500.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://cdn.shopify.com/s/files/1/2660/5202/products/ASHAGKBD_AC_1400x.jpg?v=1598897434',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://res-1.cloudinary.com/brosa-design/image/fetch/f_auto,q_auto:good/https://s3-ap-southeast-2.amazonaws.com/brosadesign.com/products/3553/original/bed-frame-queen-solid-acacia-wood-3-brosa.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://assets.floydhome.com/spree/images/949/slider/001_D_Masthead.jpg?1583913317',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://cdn.shopify.com/s/files/1/2062/9195/products/84234574_542775326337150_8612521073390387200_n_685x700.jpg?v=1589294249',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://www.andsotobed.co.uk/images/products/standard/214_641.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/30073654_020_b',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKbQfOW7F1pKXDd6C1g3tzarUbBXCTz8BQtw&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.fabindia.com/ccstore/v1/images/?source=/file/v7607727443901456531/products/10606474BD.f.01082019.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://media.jeromes.com/content/Image/products/MGN59MBBQ_G.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image: 'https://5.imimg.com/data5/NC/HV/MY-37555897/double-bed-500x500.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEX1cP4_xH3WvpvKdtD4zXHWaZ9nSja4oKCA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXGcqFA1uKcclFu-qDMQon36RRoT0A0oBOxQ&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.royaloakindia.com/uploads/ROYIND-royaloak-sunway-queen-bed-lifestyle94.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.strefasypialni.pl/userdata/public/gfx/7076/Aranzacja-lozko-smart-bed-zlozonej.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://aarsunwoods.com/wp-content/uploads/2019/02/Wooden-Royal-King-Size-Bed-with-Side-Tables-UH-YT-46.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },

    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://content.valuecityfurniture.com/images/product/roxie_gray_accent-chair_2008335_753044.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      image:
        'https://cb2.scene7.com/is/image/CB2/RueCambonOfficeChairSHS17_16x9/?$web_zoom_furn_hero$&190905021443&wid=1008&hei=567',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      topSeller: true,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/1390062/pexels-photo-1390062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/945225/pexels-photo-945225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'chair',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/546228/pexels-photo-546228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://images.pexels.com/photos/161029/cottage-lake-water-nature-161029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'sofa',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image: 'https://api-bw.vox.pl/file/product/main/noel_sofa_2_1_w700-h600-q85.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'sofa',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      image: 'https://birdmeble.pl/userdata/public/gfx/4367.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHkZoG5Cch8hNjzyLzeXQ4UqCy7kxVx-P68g&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'sofa',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://lectus24.pl/86464-large_default/sofa-rozkladana-bogota-z-pojemnikiem.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 53',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWpQScCAHnC8AXOyUS4UBwkhh_O5Ik6XJJcw&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      topRated: true,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 54',
      category: 'sofa',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://lectus24.pl/95912-large_default/sofa-dwuosobowa-catlyn-l-rozowa-welur.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 55',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ0wXcLD-lNmdJXVtaiFe0nJNm_SYIU2UNEA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 56',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDU-abg2eFY8IeWpGrqjkhw8paARewLanMSQ&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 57',
      category: 'sofa',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://e1.meble.pl/gfx/_zdjecia_e1/sklep_oferta/3/318/3318699/bnaroznik_nowoczesny_lumber_jack___etap_sofa___ind_6646445337.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-58',
      name: 'Aenean Ru Bristique 58',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://meblowy.salon/userdata/public/gfx/3152/Rozkladana-sofa-Corner-z-podnozkiem-niebieska.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 59',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://mebledoktor24.pl/1450-large_default/sofa-bolton-3-osobowa-rozkladana.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 60',
      category: 'sofa',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://www.vero.pl/userdata/public/gfx/9f5e6dad3182a43a0f4bfb50710306d6.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-61',
      name: 'Aenean Ru Bristique 61',
      category: 'table',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXce_0SOR9Kuk_LsdCwW8st6zBhuQhErm2zg&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-62',
      name: 'Aenean Ru Bristique 62',
      category: 'table',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq4jNf8UummCWi_c-K4YD2JaIhDnLyLyA43Q&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-63',
      name: 'Aenean Ru Bristique 63',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'table',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0pS3v1jEqjgY1V6w9JaeVPImfPT_2tDXMsg&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-64',
      name: 'Aenean Ru Bristique 64',
      category: 'table',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://cdn.shopify.com/s/files/1/2660/5106/products/25591414_AC_19dc60be-0830-4b45-a629-581782ac083d_1400x.jpg?v=1571710873',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-65',
      name: 'Aenean Ru Bristique 65',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfHM2WO0bmjMNZWL7aSM7hD1TrYtsVKtbbKA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-66',
      name: 'Aenean Ru Bristique 66',
      category: 'table',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgMtPUJJs6Xt71YLDgckVXY_LGtHS_dBe3Ug&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-67',
      name: 'Aenean Ru Bristique 67',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://images-na.ssl-images-amazon.com/images/I/418nx0pwnzL._SX425_.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-68',
      name: 'Aenean Ru Bristique 68',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://content3.jdmagicbox.com/comp/rajkot/u1/0281px281.x281.180917162044.g5u1/catalogue/bhavya-furniture-rajkot-wntny8mebd.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-69',
      name: 'Aenean Ru Bristique 69',
      category: 'table',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjHLEKHR7dKepd47UEpRDAft0ltOwvNLN6Bg&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-70',
      name: 'Aenean Ru Bristique 70',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://i.pinimg.com/originals/10/c3/31/10c331ffc372aef5a3edc3a5415b91f1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-71',
      name: 'Aenean Ru Bristique 71',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://i.pinimg.com/originals/d5/92/fa/d592fa54f845843a127d6dfbb79a0182.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'table',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdyWDsssnJnv1_5C-MGfkJenIBI_qRvyMn1Q&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-73',
      name: 'Aenean Ru Bristique 73',
      category: 'dining',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://www.housingunits.co.uk/media/catalog/product/cache/8dc3298bba34b0846ef73bc138720a2d/a/d/ad6d5c90ed27f9b68e8e34b20d5b711b5486bade_s267___462071___e_1_1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-74',
      name: 'Aenean Ru Bristique 74',
      category: 'dining',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      image:
        'https://www.cruise1st.co.uk/blog/wp-content/uploads/2017/07/Fotolia_42404790_S.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-75',
      name: 'Aenean Ru Bristique 75',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'table',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfL0A3q30mE_8BQNK-P3LXQAF6OUWsb2XevQ&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-76',
      name: 'Aenean Ru Bristique 76',
      category: 'dining',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWbLF89raXiWs76jAbk5UBaXhQhyzewdBo2A&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-77',
      name: 'Aenean Ru Bristique 77',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZCF3CTLp59ybhFICHgoG16fsb9sbmdnwPMQ&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-78',
      name: 'Aenean Ru Bristique 78',
      category: 'dining',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSK6DXgJxAB5qGsbHj2lDrU5YtqF_rND47EA&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-79',
      name: 'Aenean Ru Bristique 79',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://survivalbg.info/wp-content/uploads/2018/06/dining.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-80',
      name: 'Aenean Ru Bristique 80',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXprEz1jfsQqPdzazd1P9oSxkFj23tD0IPvg&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-81',
      name: 'Aenean Ru Bristique 81',
      category: 'dining',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://media02.living4media.com/previews/MTU5MDExMjQ0/13250937-Classic-kitchen-dining-room-with-seat-in-bay-window-and-door-leading-into-garden.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-82',
      name: 'Aenean Ru Bristique 82',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.e-restauracja.com/assets/artykul/2016-10-09/rs-2016-10dd-18.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      hotDeal: true,
      promotedProductEndTime: '2020-11-20T14:48:17.261Z',
    },
    {
      id: 'aenean-ru-bristique-83',
      name: 'Aenean Ru Bristique 83',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxUReSUM7s__ddS84sXfYznHhz07z1mAGrzw&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      hotDeal: true,
      promotedProductEndTime: '2020-12-14T14:48:17.261Z',
    },
    {
      id: 'aenean-ru-bristique-84',
      name: 'Aenean Ru Bristique 84',
      category: 'dining',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScThfCm3xP7sKpUdfn7aSt_nJf2Gr7nA8yBQ&usqp=CAU',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      hotDeal: true,
      promotedProductEndTime: '2020-09-20T12:48:17.261Z',
    },
    {
      id: 'aenean-ru-bristique-84',
      name: 'Aenean Ru Bristique 84',
      category: 'furniture',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
      hotDeal: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'furniture',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'furniture',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'furniture',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image:
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'furniture',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'furniture',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'bedroom',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image:
        'https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/11/Take-a-tour-of-this-pretty-four-bedroom-Yorkshire-stone-detached-house-built-in-1921-bed.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'bedroom',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image:
        'https://cdn.home-designing.com/wp-content/uploads/2019/07/modern-and-retro-accessory-ideas-for-transitional-bedroom-design-1024x717.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'bedroom',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/romantic-bedrooms-pickart-vanatta-217x-1578085880.jpg?crop=1.00xw:0.844xh;0,0.143xh&resize=640:*',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'bedroom',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      promo: 'sale',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Bedroom_Mitcham.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      availability: 'in Stock',
      newFurniture: true,
    },
  ],
  promotedProduct: {
    title: 'indoor',
    spanTitle: 'furniture',
    subtitle: 'save up to 50% of all furniture',
    button: 'shop now',
    images: [
      {
        image:
          'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        imageAlt: 'bed',
      },
      {
        image:
          'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        imageAlt: 'sofa',
      },
      {
        image:
          'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        imageAlt: 'chair',
      },
    ],
  },
  sales: {
    boxOne: {
      name: 'Guest room',
      category: 'Sofa',
      sale: '-20%',
      image: 'https://i.postimg.cc/pXMYyxT0/sofa.jpg',
    },
    boxTwo: {
      name: 'Office',
      category: 'Chair',
      title: 'collection',
      price: '$200.00',
      image: 'https://i.postimg.cc/9X7YWzWR/chair.jpg',
    },
    boxThree: {
      category: 'bed',
      title: 'special ',
      subtitle: 'collection',
      description: 'save up 45% of furniture',
      image: 'https://i.postimg.cc/jd6679nR/bed.jpg',
    },
  },
  posts: [
    {
      id: 'How to design your space?',
      date: '15 JAN 2020',
      comments: [
        {
          idComment: '1',
          comment: 'comment1',
        },
        {
          idComment: '2',
          comment: 'comment2',
        },
      ],
      title: 'How to design your space?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'Six Tips for Choosing the Perfect Sofa',
      date: '12 JAN 2020',
      comments: [
        {
          idComment: '1',
          comment: 'comment1',
        },
      ],
      title: 'Six Tips for Choosing the Perfect Sofa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'Functional, Comfortable and Beautiful',
      date: '5 JAN 2020',
      comments: [
        {
          idComment: '1',
          comment: 'comment1',
        },
        {
          idComment: '2',
          comment: 'comment2',
        },
        {
          idComment: '3',
          comment: 'comment3',
        },
      ],
      title: 'Functional, Comfortable and Beautiful',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'How To Choose A Mattress in 5 Easy Steps',
      date: '19 DEC 2019',
      comments: [
        {
          idComment: '1',
          comment: 'comment1',
        },
        {
          idComment: '2',
          comment: 'comment2',
        },
        {
          idComment: '3',
          comment: 'comment3',
        },
      ],
      title: 'How To Choose A Mattress in 5 Easy Steps',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/4297820/pexels-photo-4297820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  brands: [
    { id: 'Brand1', name: 'Brand1', image: 'https://i.postimg.cc/QCYMSpsQ/2.jpg' },
    { id: 'Brand2', name: 'Brand2', image: 'https://i.postimg.cc/C59gzJSQ/7.jpg' },
    { id: 'Brand3', name: 'Brand3', image: 'https://i.postimg.cc/Z58S5rgw/8.jpg' },
    { id: 'Brand4', name: 'Brand4', image: 'https://i.postimg.cc/rmP6Pg0w/9.jpg' },
    { id: 'Brand5', name: 'Brand5', image: 'https://i.postimg.cc/sg4gNdVf/10.jpg' },
    { id: 'Brand6', name: 'Brand6', image: 'https://i.postimg.cc/9MKm7cBb/12.jpg' },
    { id: 'Brand7', name: 'Brand7', image: 'https://i.postimg.cc/CLyMML5L/14.jpg' },
    { id: 'Brand8', name: 'Brand8', image: 'https://i.postimg.cc/wThq18R5/16.jpg' },
    { id: 'Brand9', name: 'Brand9', image: 'https://i.postimg.cc/HLPHqTFm/17.jpg' },
    { id: 'Brand10', name: 'Brand10', image: 'https://i.postimg.cc/C5bgnk5M/18.jpg' },
  ],
  productCategories: [
    { id: 'furniture', name: 'Furniture' },
    { id: 'chair', name: 'Chair' },
    { id: 'table', name: 'Table' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'bedroom', name: 'Bedroom' },
  ],
  feedbacks: [
    {
      id: 'Jone-Dove',
      name: 'Jone Dove',
      category: 'Furniture client',
      text:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      image: 'https://collectionimages.npg.org.uk/large/mw192616/John-Dove.jpg',
    },
    {
      id: 'Bob-Dylan',
      name: 'Bob Dylan',
      category: 'Furniture client',
      text:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
      image:
        'https://bi.im-g.pl/im/1/11556/z11556131V,Bob-Dylan--portret-z-lat-60-.jpg',
    },
    {
      id: 'Marlon-Brando',
      name: 'Marlon Brando',
      category: 'Furniture client',
      text:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      image: 'https://fwcdn.pl/ppo/01/40/140/449871.2.jpg',
    },
  ],
  cart: {
    isOpen: false,
    totalPrice: 0,
    products: [],
  },
  compare: {
    products: [],
  },
  viewport: 'desktop',
};

export default initialState;
