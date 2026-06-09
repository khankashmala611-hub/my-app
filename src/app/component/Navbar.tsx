"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useInventory } from "@/app/context/InventoryContext"
import { motion, AnimatePresence } from 'motion/react';









export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const { inventory } = useInventory();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Cart', path: '/cart' },
        { name: 'Liked', path: '/liked' },
        { name: 'Admin', path: '/admin' },
        { name: 'Signup', path: '/signup' },
        { name: 'Login', path: '/login' },
    ];
    return (
        <nav className="bg-neutral-900 border-b border-neutral-800 text-white sticky top-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-black tracking-tight hover:text-emerald-400 transition-colors">
                    Shoe <span className="text-emerald-400">Store</span>
                </Link>
                <div className="hidden md:flex items-center gap-6 font-medium text-sm text-neutral-300">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-neutral-400 hover:text-white focus:outline-none z-50"
                >
                <svg className="w-6 h-6"fill="none"stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    ):(
                         <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    )}
                </svg>
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{opacity:0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity:0,y:-20}}
                    transition={{duration: 0.2}}
                    className="absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 p-6 flex flex-col gap-4 font-medium md:hidden z-40"
                    >
                    {navLinks.map((link)=>(
                        <Link
                        key={link.name}
                        href={link.path}
                        onClick={()=> setIsOpen(false)}
                        className="text-neutral-300 hover:text-emerald-400 transition-color py-2 border-b border-neutral-900 last:border-0"
                        >
                        {link.name}
                        </Link>
                    ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}