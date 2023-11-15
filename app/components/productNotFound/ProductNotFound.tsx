import ButtonResetSearch from "@/components/buttonResetSearch/ButtonResetSearch";
import React from "react";

const ProductNotFound = () => {
    return (
        <div className={"text-2xl text-dark-green "}>
            Product not found. <br/> Press{" "}
            <ButtonResetSearch>
                <span className={"text-red"}> back </span>
            </ButtonResetSearch>{" "}
            to go to catalog.
        </div>
    );
};

export default ProductNotFound;