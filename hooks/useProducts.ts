import {Product} from "@/models/product";
import {useEffect, useState} from "react";
import axios from "axios";

type Result = {
    products: Array<Product>;
}

export function useProducts(): Result {
    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        void _retrieveProducts();
    }, []);

    async function _retrieveProducts(): Promise<void> {
        try {
            const result = await axios.get('https://fakestoreapi.com/products');
            setProducts(result.data);
        } catch (_) {
            setProducts([]);
        }
    }

    return {
        products
    };
}
