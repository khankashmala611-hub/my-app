import  Link  from "next/link";
import {useInventory} from "@/app/context/InventoryContext"
   






export default function navbar() {
    const { inventory }= useInventory();
    return (
        
        <nav>
            <div className="logo">Shoe Store</div>
            <div>
             <Link href="/">Home</Link>
             <Link href="/cart">Cart</Link>
             <Link href="/liked">Liked</Link>
             <Link href="/admin">Admin</Link>
             <Link href="/signup">Signup</Link>
             <Link href="/login">Login</Link>
            </div>
        </nav>
    );
}