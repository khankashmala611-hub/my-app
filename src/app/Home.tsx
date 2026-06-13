"use client";
import React from "react";
import { useCart } from './component/cartContext'
import { useLiked } from "./component/likedContext";
import { useInventory } from "./context/InventoryContext";

const product = [
    {
        id: 1,
        title: "Nike Shoe",
        price: 7000,
        image: "/pexels-ox-street-3848035-6540973.jpg"
    },
    {
        id: 2,
        title: "Adidas Shoe",
        price: 3000,
        image: "pexels-hamza01nsr-12628400.jpg"
    },
    {
        id: 3,
        title: "Nike Shoe",
        price: 5000,
        image: "/pexels-grailify-2658558-4252970.jpg"
    },
    {
        id: 4,
        title: "Snikers",
        price: 8000,
        image: "/pexels-indigentesce-8979071.jpg"
    }
];
export default function Home() {
    const {addInventoryItem} = useInventory();
    const { likedItems, toggleLike } = useLiked();
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '10px' }} >
                <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0' }}>Welcome to Shoe Store</h1>
                <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '0 0 15px 0' }}>Step into Style!</h2>
                <p style={{ color: '#666', margin: 0 }}>Explore our exclusive collection of premium footwear.</p>
            </header>
            <main>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '30px' }}>Our Feature Collection.</h2>
                <div style={{
                    display: 'flex',flexWrap:'wrap',justifyContent:'center',gap:'25px',maxWidth:'1200px',margin:'0 auto',padding:'20px'
                }}>
                    {product.map((product) => {
                        const isLiked = likedItems?.some((item) => item.id === product.id);
                        return (
                            <div key={product.id} style={{
                                border: '1px solid #eee',
                                borderRadius: '12px',
                                padding: '20px',
                                textAlign: 'center',
                                position: 'relative',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                background: '#fff'

                            }}>
                                <button 
                                onClick={()=> toggleLike(product)}
                                style={{position:'absolute',top:'25px',right:'25px',background:'none',border:'none',fontSize:'22px',cursor:'pointer',zIndex:'10'}}
                                >
                                {isLiked ? '❤':'🤍'}
                                </button>
                               <div style={{height:'200px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',borderRadius:'8px',objectFit:'contain'}}> <img src={product.image} alt={product.title} 
                                style={{ width: '100%', height: '100%',objectFit:'contain' }} /></div>
                                <h3 style={{fontSize:'1.2rem',margin:'15px 0 8px 0',}}>{product.title}</h3>
                                <p style={{fontWeight:'bold',color:'#0070f3'}}>Rs.{product.price}</p>
                                <button 
                                    onClick={() => {
                                        const currentProduct = product as any;
                                        addInventoryItem({
                                           name:currentProduct.title|| currentProduct.name ||"Shoe Item",
                                           price: String(currentProduct.price),
                                           imageName: currentProduct.image || currentProduct.imageName || "",
                                           quantity:1
                                        });
                                     } }
                                
                                style={{width:'100%',padding:'10px',background:'#222',color:'#fff',border:'none',borderRadius:'8px',cursor:'pointer'}}>Add To Cart</button>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
