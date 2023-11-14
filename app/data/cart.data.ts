import { ICartItem } from "@/app/types/cartitem.interface";
import { IProduct } from "@/app/types/product.interface";

export const sizes = ["S", "M", "L", "XL"];
export const products: IProduct[] = [
  {
    id: 1,
    name: "Caffe Misto",
    price: 4,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 3.5,
    slug:'caffe-misto',
    description:
      "Caffè Misto is a coffee drink made by combining equal parts brewed coffee and steamed milk. It offers a creamy and mellow flavor profile, perfect for those seeking a less intense coffee experience.",
    images: ["/images/caffe_misto-removebg-preview.png"],
  },
  {
    id: 2,
    name: "Caramel Apple Spice",
    slug:'catramel-apple-spice',
    price: 5,
    reviews:['good', 'nice', 'yeee', 'not bad'],
    rating: 4.1,
    description: "Caramel Apple Spice is a warm beverage made with apple juice, cinnamon syrup, and topped with whipped cream and caramel drizzle. It offers a delightful blend of sweet caramel, tangy apple, and comforting spices, creating a cozy and indulgent treat.",
    images: ["/images/caramel_brulee_creme-removebg-preview.png", "/images/caffe_misto-removebg-preview.png",],
  },
  {
    id: 3,
    name: "Hot chocolate",
    slug:'hot-chocolate',
    price: 3,
    reviews: [ 'exellent', 'yeee', 'not bad'],
    rating: 3.9,
    description: "Hot chocolate is a rich and creamy beverage made with melted chocolate or cocoa powder, mixed with warm milk or water. It is a comforting and indulgent drink often enjoyed during colder months, and can be topped with whipped cream, marshmallows, or a sprinkle of cocoa for added flavor.",
    images: ["/images/hot_chocolate-removebg-preview.png"],
  },
  {
    id: 4,
    name: "Peppermint Hot Chocolate",
    slug:'pepper-hot-chocolate',
    price: 4,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 4.5,
    description: "Peppermint hot chocolate is a delightful twist on traditional hot chocolate, infused with the refreshing flavor of peppermint. It combines the rich and creamy goodness of hot chocolate with a hint of mint, creating a festive and indulgent winter treat.",
    images: ["/images/peppermint_hot_chocolate-removebg-preview.png"],
  },
  {
    id: 5,
    name: "Peppermint White Hot Chocolate",
    slug:'pepper-white-hot-chocolate',
    price: 4,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 4.5,
    description: "Peppermint white hot chocolate is a delicious variation of hot chocolate, featuring a creamy white chocolate base infused with the cool and refreshing taste of peppermint. It offers a delightful blend of sweetness and minty flavors, perfect for cozy winter indulgence.",
    images: ["/images/peppermint_white_hot_chocolate-removebg-preview.png"],
  },
  {
    id: 6,
    name: "Pumpking Spice Creme",
    slug:'pumpking-spice-creme',
    price: 9,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 4.7,
    description: "Pumpkin Spice Crème is a creamy and flavorful beverage that combines the warm and aromatic spices of pumpkin pie with a rich and velvety crème base. It offers a delightful blend of pumpkin, cinnamon, nutmeg, and other spices, creating a decadent and comforting treat reminiscent of the fall season.",
    images: ["/images/pumpkin_spice_creme-removebg-preview.png"],
  },
  {
    id: 7,
    name: "Steamed Apple Juice",
    slug:'steamed-apple-juice',
    price: 3,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 4.3,
    description: "Steamed apple juice is a comforting and soothing beverage made by heating apple juice until warm and creating a cozy drink perfect for cooler weather. It offers the natural sweetness and delicate flavors of apples, providing a comforting and refreshing alternative to hot beverages like tea or coffee.",
    images: ["/images/steamed_apple_juice-removebg-preview.png"],
  },
  {
    id: 8,
    name: "White Hot Chocolade",
    slug:'white-hot-chocolade',
    price: 4,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 4.3,
    description: "White hot chocolate is a creamy and indulgent beverage made with melted white chocolate and warm milk. It offers a rich and velvety texture with a sweet and delicate flavor, providing a luxurious twist on traditional hot chocolate.",
    images: ["/images/white_hot_chocolate-removebg-preview.png"],
  },
  {
    id: 9,
    name: "Caramel Brulee Creme",
    slug:'caramel-brulle-creme',
    price: 6,
    reviews: ['good', 'nice', 'exellent', 'yeee', 'not bad'],
    rating: 3.8,
    description: "Caramel brûlée is a delectable dessert made with a rich, creamy caramel custard base that is topped with a layer of caramelized sugar. It offers a delightful combination of smooth and silky textures with a sweet and caramelized flavor, creating a decadent treat that is often enjoyed as a dessert or special occasion indulgence.",
    images: ["/images/caramel_apple_spice-removebg-preview.png"],
  },
];
export const cart: ICartItem[] = [


];