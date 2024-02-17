import {Product} from "@/models/product";
import {useEffect, useState} from "react";
import axios from "axios";
import {router} from "expo-router";

type Result = {
    product?: Product;
}

type Props = {
    productId: string;
}

export function useProduct({productId}: Props): Result {
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        void _retrieveProduct();
    }, []);

    async function _retrieveProduct(): Promise<void> {
        try {
            const result = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(result.data);
        } catch (_) {
            router.back();
        }
    }

    return {
        product
    };
}
