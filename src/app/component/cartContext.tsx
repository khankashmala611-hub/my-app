"use client";
import { createContext, useContext, useState, ReactNode, Children } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;

}
interface CartContextType {
    cart: Product[];
    addToCart: (product: Omit<Product, 'quantity'>) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const addToCart = (product: Omit<Product, 'quantity'>) => {
        setCart((prevCart) => {
           const existingItem = prevCart.find((item)=> item.id === product.id);
           if (existingItem) {
            return prevCart.map((item)=> 
                item.id === product.id ? {...item, quantity: item.quantity + 1}: item
            ); 
           }
           return [...prevCart, {...product, quantity:1}];

        });
    };
    const increaseQuantity = (id: number)=> {
        setCart((prevCart)=>
            prevCart.map((item)=>
            item.id === id ? {...item,quantity:item.quantity +1}: item
            )
      );
    };
        const decreaseQuantity = (id: number)=> {
        setCart((prevCart)=>
            prevCart.map((item)=>
            item.id === id ? {...item,quantity:item.quantity -1}: item
            )
            .filter((item)=> item.quantity > 0)
        );
    };
    return (
        <CartContext.Provider value={{cart,addToCart,increaseQuantity,decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};
    export const useCart = ()=>{
        const context = useContext(CartContext);
        if (!context){
            throw new Error("useCart must be used within a CartProvider");
        }
        return context;
    }
