import ProductDetailsPage from "@/app/(screens)/product/page";
import { products } from "@/app/data/cart.data";
import {FC} from "react";

interface IPage{
  params:{
    slug:string
  }
}
 const Page :FC<IPage>=({ params }) => {
  const product = products.find((product) => product.slug === params.slug);
  return <ProductDetailsPage product={product} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
export default Page