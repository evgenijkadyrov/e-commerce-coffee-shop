import { ICartItem } from "@/app/types/cartitem.interface";
import { IProduct } from "@/app/types/product.interface";

export const sizes = ["S", "M", "L", "XL"];
export const products: IProduct[] = [
  {
    id: 1,
    name: "РАФ КОФЕ ТЫКВЕННЫЙ ПАЙ",
    price: 4,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 3.5,
    slug:'raf-pump-pay',
    description:
      "Банан, ваниль, малина, мята, лаванда, каштан, кокос, соленая карамель,",
    images: ["/images/1.png"],
  },
  {
    id: 2,
    name: "РАФ КОФЕ ВАНИЛЬНЫЙ ПАЙ",
    slug:'raf-vanila-pay',
    price: 5,
    reviews:['good', 'nice', 'yeee', 'not bad'],
    rating: 1.1,
    description: "Банан,  каштан, кокос, соленая карамель,",
    images: ["/images/2.png"],
  },
  {
    id: 3,
    name: "КАПУЧИНО",
    slug:'capuchino',
    price: 3,
    reviews: [ 'exellent', 'yeee', 'not bad'],
    rating: 3.9,
    description: "Лаванда, каштан, кокос, соленая карамель,",
    images: ["/images/3.png"],
  },
  {
    id: 4,
    name: "МОКАЧИНО",
    slug:'mokachino',
    price: 4,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 4.5,
    description: "Банан,  мята, лаванда,  соленая карамель,",
    images: ["/images/4.png"],
  },
];
export const cart: ICartItem[] = [


];