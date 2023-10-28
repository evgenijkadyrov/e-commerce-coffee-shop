import { IProduct } from "@/app/types/product.interface";
import {ICartItem} from "@/app/types/cartitem.interface";

export const products: IProduct[] = [
  {
    id: 1,
    name: "РАФ КОФЕ ТЫКВЕННЫЙ ПАЙ",
    price: 4,
    reviews: [],
    description:
      "Банан, ваниль, малина, мята, лаванда, каштан, кокос, соленая карамель,",
    images: ["/images/1.png"],
  },
    {
        id: 2,
        name: "РАФ КОФЕ ВАНИЛЬНЫЙ ПАЙ",
        price: 5,
        reviews: [],
        description:
            "Банан,  каштан, кокос, соленая карамель,",
        images: ["/images/2.png"],
    },
    {
        id: 3,
        name: "КАПУЧИНО",
        price: 3,
        reviews: [],
        description:
            "Лаванда, каштан, кокос, соленая карамель,",
        images: ["/images/3.png"],
    },
    {
        id: 4,
        name: "МОКАЧИНО",
        price: 4,
        reviews: [],
        description:
            "Банан,  мята, лаванда,  соленая карамель,",
        images: ["/images/4.png"],
    },
];
export const cart:ICartItem[]=[{
    id:1,
    product:products[0],
    quantity: 2
},
    {id:2,
    product:products[2],
    quantity: 1
}]