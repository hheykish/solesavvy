import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike React Infinity Run Flyknit",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382323/sneakers/1.png",
      description: "The Nike React Infinity Run Flyknit is designed for runners of all levels. It features a responsive cushioning system for a comfortable and smooth ride.",
      brand: "NIKE",
      category: "Running",
      price: 520,  // Random price greater than 400Rs
      countInStock: 53,  // Random count in stock
      rating: 4.7,  // Random rating
      numReviews: 78,  // Random number of reviews
    },
    {
      name: "Nike React Miler",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382316/sneakers/2.png",
      description: "The Nike React Miler is a durable and supportive running shoe, perfect for those looking for stability during their runs.",
      brand: "NIKE",
      category: "Running",
      price: 430,  // Random price greater than 400Rs
      countInStock: 15,  // Random count in stock
      rating: 4.6,  // Random rating
      numReviews: 64,  // Random number of reviews
    },
    {
      name: "Nike Air Zoom Pegasus 37",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382314/sneakers/3.png",
      description: "The Nike Air Zoom Pegasus 37 is a versatile running shoe designed for women. It offers excellent cushioning and responsiveness for a smooth run.",
      brand: "NIKE",
      category: "Running",
      price: 480,  // Random price greater than 400Rs
      countInStock: 0,  // Random count in stock
      rating: 4.8,  // Random rating
      numReviews: 92,  // Random number of reviews
    },
    {
      name: "Nike Joyride Run Flyknit",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382313/sneakers/4.png",
      description: "The Nike Joyride Run Flyknit is a women's running shoe designed for comfort and cushioning. The unique Joyride cushioning system offers a plush feel.",
      brand: "NIKE",
      category: "Running",
      price: 560,  // Random price greater than 400Rs
      countInStock: 23,  // Random count in stock
      rating: 4.9,  // Random rating
      numReviews: 105,  // Random number of reviews
    },
   {
      name: "Nike Mercurial Vapor 13 Elite FG",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382309/sneakers/5.png",
      description: "The Nike Mercurial Vapor 13 Elite FG is a high-performance soccer cleat designed for women. It provides speed and agility on the field.",
      brand: "NIKE",
      category: "Football",
      price: 420,  // Random price greater than 400Rs
      countInStock: 8,  // Random count in stock
      rating: 4.7,  // Random rating
      numReviews: 56,  // Random number of reviews
    },
     {
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382309/sneakers/6.png",
      description: "The Nike Phantom Vision Elite Dynamic Fit FG is a women's football cleat designed for control and precision on the field.",
      brand: "NIKE",
      category: "Football",
      price: 410,  // Random price greater than 400Rs
      countInStock: 16,  // Random count in stock
      rating: 4.6,  // Random rating
      numReviews: 74,  // Random number of reviews
    },
     {
      name: "Nike Phantom Venom Academy FG",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382309/sneakers/7.png",
      description: "The Nike Phantom Venom Academy FG is a women's football cleat designed for striking accuracy and control.",
      brand: "NIKE",
      category: "Football",
      price: 430,  // Random price greater than 400Rs
      countInStock: 0,  // Random count in stock
      rating: 4.7,  // Random rating
      numReviews: 67,  // Random number of reviews
    },
     {
      name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382309/sneakers/8.png",
      description: "The Nike Mercurial Vapor 13 Elite Tech Craft FG is a high-performance leather soccer cleat for women. It combines speed and craftsmanship.",
      brand: "NIKE",
      category: "Football",
      price: 450,  // Random price greater than 400Rs
      countInStock: 14,  // Random count in stock
      rating: 4.8,  // Random rating
      numReviews: 51,  // Random number of reviews
    },
     {
      name: "Nike Air Zoom Pegasus 37 Shield",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382309/sneakers/9.png",
      description: "The Nike Air Zoom Pegasus 37 Shield is designed for men who want to run in wet conditions. It offers water resistance and traction.",
      brand: "NIKE",
      category: "Running",
      price: 520,  // Random price greater than 400Rs
      countInStock: 12,  // Random count in stock
      rating: 4.6,  // Random rating
      numReviews: 43,  // Random number of reviews
    },
     {
      name: "Nike Mercurial Superfly 7 Pro MDS FG",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382309/sneakers/10.png",
      description: "The Nike Mercurial Superfly 7 Pro MDS FG is a men's football cleat designed for explosive speed and agility on the field.",
      brand: "NIKE",
      category: "Football",
      price: 490,  // Random price greater than 400Rs
      countInStock: 3,  // Random count in stock
      rating: 4.7,  // Random rating
      numReviews: 88,  // Random number of reviews
    },
    {
      name: "Nike Joyride Dual Run",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382308/sneakers/11.png",
      description: "The Nike Joyride Dual Run is a big kids' running shoe designed for a comfortable and cushioned run. It offers a plush feel for young runners.",
      brand: "NIKE",
      category: "Running",
      price: 420,  // Random price greater than 400Rs
      countInStock: 0,  // Random count in stock
      rating: 4.5,  // Random rating
      numReviews: 24,  // Random number of reviews
    },
    {
      name: "Nike Renew Run",
      image: "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382307/sneakers/12.png",
      description: "The Nike Renew Run is a women's running shoe designed for comfort and support. It's great for those looking for an easy ride.",
      brand: "NIKE",
      category: "Running",
      price: 410,  // Random price greater than 400Rs
      countInStock: 8,  // Random count in stock
      rating: 4.6,  // Random rating
      numReviews: 37,  // Random number of reviews
    },
    {
      "name": "Nike GIANNIS IMMORTALITY ‘ FORCE FIELD ‘",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382307/sneakers/13.png",
      "description": "High-performance Nike basketball shoes with a stylish design.",
      "brand": "Nike",
      "category": "Sports/Outdoors",
      "price": 6795,
      "countInStock": 111,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "adidas originals  OZWEEGO SHOES ‘ GREY ONE / OFF WHITE ‘",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382307/sneakers/14.png",
      "description": "Classic adidas sneakers for casual wear.",
      "brand": "adidas",
      "category": "Fashion",
      "price": 10999,
      "countInStock": 18,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Reebok EAMES CLASSIC LEATHER ‘ DARK BROWN ‘",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382307/sneakers/15.png",
      "description": "Timeless Reebok sneakers with a retro look.",
      "brand": "Reebok",
      "category": "Fashion",
      "price": 9999,
      "countInStock": 0,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "adidas originals  ADI2000 ‘ ENERGY INK / CLOUD WHITE ‘",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382307/sneakers/16.png",
      "description": "Stylish and comfortable adidas sneakers in vibrant colors.",
      "brand": "adidas",
      "category": "Fashion",
      "price": 9999,
      "countInStock": 7,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Nike DUNK LOW PRM BLACK / TUMBLED GREY",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382306/sneakers/17.png",
      "description": "Classic Nike sneakers with a sleek and modern design.",
      "brand": "Nike",
      "category": "Fashion",
      "price": 6999,
      "countInStock": 10,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Puma EASY RIDER II ELEKTRO POOL",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382306/sneakers/18.png",
      "description": "Comfortable and colorful Puma sneakers for everyday wear.",
      "brand": "Puma",
      "category": "Fashion",
      "price": 5249,
      "countInStock": 113,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Puma RUDOLF DASSLER LEGACY SUEDE VTG LAUNDRY BOYS",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382306/sneakers/19.png",
      "description": "Vintage-style Puma sneakers with a unique design.",
      "brand": "Puma",
      "category": "Fashion",
      "price": 6749,
      "countInStock": 0,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Puma EASY RIDER II ELEKTRO POOL",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382305/sneakers/20.png",
      "description": "Comfortable and colorful Puma sneakers for everyday wear.",
      "brand": "Puma",
      "category": "Fashion",
      "price": 5249,
      "countInStock": 19,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Puma MIRAGE MOX VISION APRICOT BLUSH",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382305/sneakers/21.png",
      "description": "Stylish and vibrant Puma sneakers for women.",
      "brand": "Puma",
      "category": "Fashion",
      "price": 5599,
      "countInStock": 0,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Nike AIR JORDAN 6 ‘ MIDNIGHT NAVY ‘",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382305/sneakers/22.png",
      "description": "Iconic Nike Air Jordan sneakers with a classic design.",
      "brand": "Nike",
      "category": "Fashion",
      "price": 15995,
      "countInStock": 96,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Nike WMN’S AIR FORCE 1",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382305/sneakers/23.png",
      "description": "Women's Nike Air Force 1 sneakers with a unique design.",
      "brand": "Nike",
      "category": "Fashion",
      "price": 8695,
      "countInStock": 0,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "adidas originals  STAN SMITH PRIDE",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382304/sneakers/24.png",
      "description": "Classic adidas Stan Smith sneakers with a colorful twist.",
      "brand": "adidas",
      "category": "Fashion",
      "price": 9999,
      "countInStock": 56,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "adidas originals  M&M’S BRAND FORUM LOW 84 'RED'",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382304/sneakers/25.png",
      "description": "Unique M&M’s themed adidas sneakers in red.",
      "brand": "adidas",
      "category": "Fashion",
      "price": 14999,
      "countInStock": 27,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Reebok AZTREK 96 'WHITE/CARBON/NEON YELLOW'",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382303/sneakers/26.png",
      "description": "Retro-style Reebok sneakers with a bold color combination.",
      "brand": "Reebok",
      "category": "Fashion",
      "price": 8999,
      "countInStock": 0,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Nike WMN’S AIR FORCE 1 SHADOW BLACK",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382303/sneakers/27.png",
      "description": "Women's Nike Air Force 1 Shadow sneakers in black.",
      "brand": "Nike",
      "category": "Fashion",
      "price": 8695,
      "countInStock": 30,
      "rating": 4,
      "numReviews": 12
    },
    {
      "name": "Reebok VINTAGE CHALK/CLASSIC RED/COLLEGIATE NAVY",
      "image": "https://res.cloudinary.com/drb7l3onb/image/upload/v1699382303/sneakers/28.png",
      "description": "Vintage Reebok Ventilator sneakers in chalk, red, and navy colors.",
      "brand": "Reebok",
      "category": "Fashion",
      "price": 7999,
      "countInStock": 43,
      "rating": 4,
      "numReviews": 12
    },
  ],
};
export default data;
