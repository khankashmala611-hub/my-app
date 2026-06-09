"use client";
import { useCart } from "../component/cartContext";

export default function Cart() {
    const { cart,increaseQuantity, decreaseQuantity } = useCart();
    const total = cart.reduce((acc, item) => acc + (item.price*item.quantity), 0);
    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your Cart is Empty</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        {cart.map((item, index) => (
                            <div key={index} className="flex flex-row items-center justify-between gap-6 border p-4 rounded-lg shadow-sm bg-white min-h-[128px]">
                                <div style={{width:'96px', height:'96px'}} className=" flex-shrink-0 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center border border-gray-200">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                       style={{width: '100%',height:'100%',objectFit:'cover'}}
                                    />
                                </div>
                                 <div className="flex flex-col justify-center ml-6 gap-2">
                                    <h3 className="font-semibold text-lg text-gray-800 block">
                                        {item.title}</h3>
                                    <p className="text-gray-600 font-medium mt-1 block text-sm">
                                        Rs. {item.price * item.quantity}</p>
                                </div>
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm max-w-fit mt-3">
                                 <button
                                 type="button"
                                 className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 active:bg-gray-200 text-xl font-medium transition-colors border-r border-gray-200"
                                 onClick={()=> decreaseQuantity(item.id)}
                                 >
                                    -
                                 </button>
                                 <span className="w-12 text-center font-bold text-lg text-gray-800 bg-gray-50 h-10 flex items-center justify-center select-one">{item.quantity}</span>
                                  <button
                                 type="button"
                                 className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 active:bg-gray-200 text-xl font-medium transition-colors border-l border-gray-200"
                                 onClick={()=> increaseQuantity(item.id)}
                                 >
                                    +
                                 </button>

                                </div>

                               
                            </div>
                        ))}

                    </div>
                    <div className="bg-white p-6 rounded-lg border h-fit shadow-sm">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
                        <div className="flex justify-between border-t pt-4 font-semibold text-lg">
                            <span>Total:</span>
                            <span>Rs {total}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}