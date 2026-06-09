"use client";
import {  useState } from "react";
import "../globals.css"



export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Shoe Store</h1>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};
