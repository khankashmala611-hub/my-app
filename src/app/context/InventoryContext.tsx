  "use client"
  import React, { createContext,useContext, useState, ReactNode} from "react";
  interface InventoryItem{
    name: string;
    price:string;
    imageName:string;
  }
  interface InventoryContextType{
    inventory: InventoryItem[];
    addInventoryItem: (item: InventoryItem) => void;
  }
  export const InventoryContext = createContext<InventoryContextType | undefined>(undefined);
  export const InventoryProvider = ({children}:{children: ReactNode})=>{
    const [inventory,setInventory]= useState<InventoryItem[]>([]);
    const addInventoryItem = (item: InventoryItem)=>{
      setInventory((prev) => [...prev,item]);
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


    

  
  