import ProductDetailsPage from "@/app/(screens)/product/page";
import { products } from "@/app/data/cart.data";

export default function Page({ params }) {
  const product = products.find((product) => product.slug === params.slug);
  return <ProductDetailsPage product={product} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
