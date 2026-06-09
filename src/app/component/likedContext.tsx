"use client";

import React, {createContext, useContext, useState, ReactNode} from 'react';

interface Product {
    id: number;
    title:string;
    price:number;
    image:string;
}
interface LikedContextType {
    likedItems:Product[];
    toggleLike:(product:Product)=> void;
}
const LikedContext = createContext<LikedContextType | undefined>(undefined);
export const LikedProvider = ({children}:{children: ReactNode })=>{
    const [likedItems, setLikedItems] = useState<Product[]>([]);
    const toggleLike = (product: Product)=> {
        setLikedItems((prevItems) => {
            const exists = prevItems.find((item) =>item.id === product.id );
            if(exists){
                return prevItems.filter((item)=> item.id !== product.id);
            }else {
                return [...prevItems, product]
            }
        });
    };
    return (
        <LikedContext.Provider value={{likedItems, toggleLike}}>
            {children}
        </LikedContext.Provider>
    );
}
    export const useLiked = ()=>{
        const context = useContext(LikedContext);
        if(!context) throw new Error ("useLiked must be used within a LikedProvider");
        return context;
    };
