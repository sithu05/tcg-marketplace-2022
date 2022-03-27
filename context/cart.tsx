import { createContext, FC, useContext, useState } from "react"

import { Card } from "../types/Card";
import { Cart } from "../types/Cart";
import { CartContextState } from "../types/CartContextState"

const defaultValues: CartContextState = {
    cart: [],
    addToCart: (card: Card) => {}
};

const CartContext = createContext<CartContextState>(defaultValues);

export const CartWrapper: FC = ({ children }) => {
    const [cart, setCart] = useState<Cart[]>([]);


    function addToCart(card: Card) {
        setCart([...cart, { card, qty: 1 }]);
    }
    

    return (
        <CartContext.Provider value={{
            cart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);