  "use client"
  import React, { createContext,useContext, useState, ReactNode} from "react";
  interface InventoryItem{
    name: string;
    price:string;
    imageName:string;
    quantity?: number;
  }
  interface InventoryContextType{
    inventory: InventoryItem[];
    addInventoryItem: (item: InventoryItem) => void;
  }
  export const InventoryContext = createContext<InventoryContextType | undefined>(undefined);
  export const InventoryProvider = ({children}:{children: ReactNode})=>{
    const [inventory,setInventory]= useState<InventoryItem[]>([]);
    const addInventoryItem = (item: InventoryItem)=>{
      setInventory((prev) => {
        const existingItem = prev.find((i) => i.name === item.name);
        if(existingItem){
          return prev.map((i)=>
           i.name === item.name
          ? {...i, quantity: (i.quantity || 1) +1}
          :i
          );
        }
           return [...prev,{...item, quantity:1}];
      });
    };

    return (
      <InventoryContext.Provider value={{inventory,addInventoryItem}}>
      {children}
      </InventoryContext.Provider>
    );
  }
    export const useInventory = () =>{
      const context = useContext(InventoryContext);
      if(context === undefined){
        throw new Error("useInventory must be used within an InventoryProvider");
      }
          return context;
    };


    

  
  