"use client";

import { useCart } from "../component/cartContext";
import { useLiked } from "../component/likedContext";
import { Heart, ShoppingCart } from "lucide-react"

export default function LikedPage() {
    const { likedItems, toggleLike } = useLiked();
    const { addToCart } = useCart();

    if (likedItems.length === 0) {
        return (<div className="text-center py-20 text-xl font-medium text-gray-500">
            Aap ny koi product abhi like nahi kiya!
        </div>
        );
    }
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Liked Items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {likedItems.map((product) => (
                    <div key={product.id} className="border rounded-xl p-4 shadow-sm relative bg-white">
                        <button
                            onClick={() => toggleLike(product)}
                            className="absolute top-3 right-3 p-2 bg-red-50 rounded-full hover:scale-110 transition"
                        >
                            <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                        </button>
                        <img src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain mb-4"
                        />
                        <h2 className="font-semibold text-lg line-clamp-1">{product.title}</h2>
                        <p className="text-gray-600 font-medium my-2">${product.price}</p>

                        <button
                            onClick={() => addToCart(product)}
                            className="w-full mt-3 bg-black text-white py-2 rounded-lg flex items-center justify-centergap-2 hover:bg-gray-800 transiti"
                        >
                            <ShoppingCart className="w-4 h-4" />Add to Cart
                        </button>
                    </div>

                ))}
            </div>
        </div>
    );
}