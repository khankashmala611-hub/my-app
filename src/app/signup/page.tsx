"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',

    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Password did not match!")
            return;
            
        }
        console.log("signup successfully! moving to home....");
        router.push('/');

    };
    return (
        <div style={{ minHeight: '100vh', background: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
            <div style={{ width: '100%', maxWidth: '440px', backgroundColor: '#111111', border: '1px solid #222222', borderRadius: '16px', padding: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', color: '#ffff' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', background: '#ffffff', letterSpacing: '-0.03em', color: '#0a0a0a' }}>
                        Create Account</h2>
                    <p style={{ color: '#888888', fontSize: '0.85rem', margin: 0, backgroundColor: 'transparent' }}>
                        Join us today!Step into the world of style.
                    </p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: '#aaaaaa', marginBottom: '8px' }}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="john Doe"
                            style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161616', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: '#aaaaaa', marginBottom: '8px' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@gmail.com"
                            style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161616', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: '#aaaaaa', marginBottom: '8px' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="......"
                            style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161616', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}
                        />
                    </div>
                     <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', color: '#aaaaaa', marginBottom: '8px' }}>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="......"
                            style={{ width: '100%', padding: '12px 14px', backgroundColor: '#161616', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}
                        />
                    </div> 


                    <div style={{display:'flex',alignItems:'center',marginTop:'4px'}}>
                        <input
                            id="terms"
                            type="checkbox"
                            required
                            style={{width:'15px',height:'15px',cursor:'pointer',accentColor:'#ffffff'}}
                        />
                        <label htmlFor="terms" style={{marginLeft:'10px',fontSize:'0.825rem',color:'#888888',cursor:'pointer'}}>
                            I agree to the {''}<span style={{color:'#ffffff',textDecoration:'underline',fontWeight:'500'}}>Terms</span> & 
                                               <span style={{color:'#ffffff',textDecoration:'underline',fontWeight:'500'}}>Privacy Policy... </span>
                        </label>

                    </div>
                    <button 
                    type="submit"
                    style={{
                        width:'100%',
                        padding:'13px',
                        backgroundColor:'#ffffff',
                        color:'#000000',
                        fontWeight:'600',
                        fontSize:'0.925rem',
                        border:'none',
                        borderRadius:'8px',
                        cursor:'pointer',
                        marginTop:'10px',
                        transition:'background-Color 0.2s ease'
                    }}
                    onMouseEnter={(e)=>e.currentTarget.style.backgroundColor = '#dddddd'}
                    onMouseLeave={(e)=>e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                    Sign Up
                    </button>

                </form>

            </div>
        </div>
    )


}