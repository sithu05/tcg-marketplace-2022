import { Card } from "./Card"
import { Cart } from "./Cart";

export interface CartContextState  {
    cart: Cart[];
    addToCart: (card: Card) => void;
    clearAll: () => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    remove: (id: number) => void;
}