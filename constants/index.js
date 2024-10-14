import { product1, product2, product3, product4, product5 } from "assets";

const width = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  isSmallDevice: "768px"
};

const height = {
  small: "400px",
  mid: "800px"
};

export const device = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  tablet: `(max-width: ${width.tablet})`,
  laptop: `(max-width: ${width.laptop})`,
  laptopL: `(max-width: ${width.laptopL})`,
  desktop: `(max-width: ${width.desktop})`,
  desktopL: `(max-width: ${width.desktop})`,
  isSmallDevice: `(max-width: ${width.isSmallDevice})`
};

export const deviceHeight = {
  small: `(max-height: ${height.small})`,
  mid: `(max-height: ${height.mid})`
};

export const products = [
  {
    id: 1,
    name: "Milky Lactation Cookies",
    description: "Lactation cookies to improve production of breastmilk",
    price: 3000,
    quantity: 0,
    image: product1
  },
  {
    id: 2,
    name: "Breast Milk Bag",
    description: "Lactation cookies to improve production of breastmilk",
    price: 4500,
    quantity: 0,
    image: product2
  },
  {
    id: 3,
    name: "Milky Enrich Shakes",
    description: "Lactation cookies to improve production of breastmilk",
    price: 3500,
    quantity: 0,
    image: product3
  },
  {
    id: 4,
    name: "Milky Lactation Tea",
    description: "Lactation cookies to improve production of breastmilk",
    price: 6000,
    quantity: 0,
    image: product4
  },
  {
    id: 5,
    name: "Milky Lactation Granola",
    description: "Lactation cookies to improve production of breastmilk",
    price: 4000,
    quantity: 0,
    image: product5
  }
];
