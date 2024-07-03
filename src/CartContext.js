import { createContext, useContext, useState } from 'react';

// Створення контексту
const CartContext = createContext();

// Створення провайдера контексту
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    console.log("cart: ", cart);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Хук для використання контексту
export function useCart() {
    return useContext(CartContext);
}
