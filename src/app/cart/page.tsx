"use client";
import { useInventory } from "../context/InventoryContext";
import { useState } from "react";

export default function Cart() {
  const { inventory } = useInventory();
  const [, setRefresh] = useState(0);
  const getNumberPrice = (priceVal: any) => {
    if (!priceVal) return 0;
    const clean = String(priceVal).replace(/[^\d]/g, ""); 
    return Number(clean) || 0;
  };
  const total = inventory.reduce((acc, product: any) => {
    return acc + (getNumberPrice(product.price) * (product.quantity || 1));
  }, 0);
  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>
      {inventory.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your Cart is Empty</p>
      ) : ( 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {inventory.map((product: any, index: number) => (
              <div key={index} className="flex flex-row items-center justify-between border border-gray-300 p-4 rounded-xl">
                
                
                <div style={{ width: '96px', height: '96px' }} className="flex-shrink-0">
                  <img 
                    src={product.imageName || product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                
    
                <div className="flex flex-col justify-center ml-6 flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 font-medium mt-1">
                    Rs. {getNumberPrice(product.price)}
                  </p>
                </div>
                
                
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md bg-gray-50 text-xl font-bold hover:bg-gray-100"
                    onClick={() => {
                      if ((product.quantity || 1) > 1) {
                        product.quantity = (product.quantity || 1) - 1;
                        setRefresh(prev => prev + 1); 
                      }
                    }} 
                  >
                    -
                  </button>
                  
                  <span className="w-12 text-center font-bold text-lg">
                    {product.quantity || 1}
                  </span>
                  
                  <button 
                    type="button"
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md bg-gray-50 text-xl font-bold hover:bg-gray-100"
                    onClick={() => {
                      product.quantity = (product.quantity || 1) + 1;
                      setRefresh(prev => prev + 1); 
                    }} 
                  >
                    +
                  </button>
                </div>

              </div>
            ))}
          </div>

    
          <div className="bg-white p-6 rounded-lg border border-gray-300 h-fit shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
            <div className="flex justify-between border-t pt-4 font-semibold text-lg">
              <span>Total:</span>
              <span>Rs. {total}</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}