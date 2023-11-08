import {products} from "@/app/data/cart.data";

export const useProductsNavigation =(productId)=>{

    const isNextProductSlug= products.find(product=>product.id===productId+1)?.slug
    const isPrevProductSlug= products.find(product=>product.id===productId-1)?.slug

    return {
        isNextProductSlug,
        isPrevProductSlug
    }
}