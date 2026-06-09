"use client";

import React from "react";
// import Home from "./Home";
import Login from "./login/page";
import Cart from "./cart/";
import Liked from "./Liked";
import Navbar from "./component/Navbar";
import "./globals.css";
import Footer from "./Footer";
import { CartProvider } from "./component/cartContext";
import {  InventoryProvider } from './context/InventoryContext'
import { LikedProvider } from "./component/likedContext";
export default function Rootlayout({ children }:{
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <InventoryProvider>
          <LikedProvider>
        <CartProvider>
            <Navbar />
            
            <main>
              {children}
            </main>
            {/* <Home/> */}
            
        </CartProvider>
        </LikedProvider>
        </InventoryProvider>
      </body>
    </html>

  );
}


