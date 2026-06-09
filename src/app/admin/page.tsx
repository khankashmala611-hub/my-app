"use client";
import React, { useState } from 'react';

import { useInventory } from '../context/InventoryContext';

const AdminPanel = () => {

   const {inventory, addInventoryItem } = useInventory();
   const [formData, setFormData] = useState({
      name: '',
      price: '',
      imageName: ''
   });
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addInventoryItem(formData);
      setFormData({ name: '', price: '', imageName: '' });
   };
   return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md text-gray-900">
         <h2 className="text-2xl font-bold mb-6 text-center text-black-600">Admin Shoe Store Panel</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-sm">
               <h3 className="text-lg font-semibold mb-2">Add New Shoe</h3>
               <div>
                  <label className="block text-sm font-medium">Shoe Name</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                     placeholder="e.g., Nike Air Max"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium">Price</label>
                  <input
                     type="text"
                     name="price"
                     value={formData.price}
                     onChange={handleChange}
                     className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                     placeholder="e.g., 150"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium">Image file Name</label>
                  <input
                     type="text"
                     name="imageName"
                     value={formData.imageName}
                     onChange={handleChange}
                     className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                     placeholder="e.g., nike-red.jpg"
                     required
                  />
               </div>
               <button type="submit" className="w-full bg-black-600 text-white py-2 rounded font-medium hover:bg-blue-700">Add to Store</button>

            </form>
            <div className="bg-white p-4 rounded shadow-sm">
               <h3 className="text-lg font-semibold mb-4">Current Inventory ({inventory.length})</h3>
               { inventory.length === 0 ?(
                  <p className="text-gray-500 text-sm">No items added yet.</p>
               ):(
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                     {inventory.map((item, index)=>(
                        <div key={index}className="p-2 border-b flex justify-between items-center">
                           <div>
                              <p className="font-bold">{item.name}</p>
                              <p className="text-sm text-gray-500">Image:{item.imageName}</p>

                           </div>
                           <span className="text-green-600 font-semibold">${item.price}</span>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
export default AdminPanel;