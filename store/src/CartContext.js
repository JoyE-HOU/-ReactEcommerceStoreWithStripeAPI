import { createContext, useState } from 'react';
import { productsArray } from './productStore';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    
    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
}