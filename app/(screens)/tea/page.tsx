"use client";
import ProductNotFound from "@/components/productNotFound/ProductNotFound";
import {useAppSelector} from "@/app/hooks/useTypedSelector";
import Carousel from "@/ui/catalog/carousel/Carousel";
import {Layout} from "@/layout/Layout";
import React, {FC} from "react";
import BreadcrumbProduct from "@/ui/product-details/breadcrumb/Breadcrumb";

const Tea: FC = () => {
    const products = useAppSelector((state) => state.catalog.products);
    const teaProducts = products.filter(
        (el) => el.category.includes("tea") || el.category.includes("juice")
    );
    return (
        <Layout>
            <BreadcrumbProduct productName={'Tea'}/>
            <div className={"mt-10"}>

                {products.length !== 0 ? (
                    <Carousel products={teaProducts}/>
                ) : (
                    <ProductNotFound/>
                )}
            </div>
        </Layout>
    );
};

export default Tea;