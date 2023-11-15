"use client";
import ProductNotFound from "@/components/productNotFound/ProductNotFound";
import {useAppSelector} from "@/app/hooks/useTypedSelector";
import Carousel from "@/ui/catalog/carousel/Carousel";
import {Layout} from "@/layout/Layout";
import React, {FC} from "react";

const Coffee: FC = () => {
    const products = useAppSelector((state) => state.catalog.products);
    const coffeeProducts = products.filter((el) =>
        el.category.includes("coffee") ? el : null
    );
    return (
        <Layout>
            <div className={"mt-10"}>
                {products.length !== 0 ? (
                    <Carousel products={coffeeProducts}/>
                ) : (
                    <ProductNotFound/>
                )}
            </div>
        </Layout>
    );
};

export default Coffee;