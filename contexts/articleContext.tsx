import React, { createContext, useContext, useState } from "react";
import {Product} from "@/models/product";

export type CartContextType = {
    cartItems: Product[],
    addToCart?: (product: Product) => void,
    removeFromCart?: (productId: number) => void
    calculTotal: () => number
}

export const CartContext = createContext<CartContextType>({
    calculTotal(): number {
        return 0;
    },
    cartItems: []
});

export const CartProvider = ({children}: { children: React.ReactNode }): React.ReactNode => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const calculTotal = (): number => {
        return cartItems.reduce((total, product) => total + product.price, 0);
    };

    const addToCart = (product: Product) => {
        if (product !== null) {
            setCartItems([...cartItems, product]);
        }
    };

    const removeFromCart = (productId: number) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const value: CartContextType = {
        cartItems,
        addToCart,
        removeFromCart,
        calculTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = (): CartContextType => {
    return useContext(CartContext);
}
