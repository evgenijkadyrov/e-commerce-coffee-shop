import {IProductDetails} from "@/app/types/product.interface";
import {StarIcon} from "@chakra-ui/icons";
import {Box} from "@chakra-ui/react";
import React, {FC} from "react";

const ProductRating: FC<IProductDetails> = ({product}) => {
    return (
        <Box display="flex" mt="2" alignItems="center">
            {Array(5)
                .fill("")
                .map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < product.rating ? "teal.500" : "gray.300"}
                    />
                ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.reviews.length} reviews
            </Box>
        </Box>
    );
};

export default ProductRating;