
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const LandingTopNavbar = () => {
    const currentRoute = usePathname(); 
    // console.log("here is the router",router)

    return (
        <nav className='sticky top-0 z-10 bg-gray-100 shadow-md py-5'>
            <div className='flex justify-between items-center cursor-pointer container mx-auto'>
                <Link href="/">
                    <p className='font-bold text-5xl'>Logo</p>
                </Link>
                <div className=''>
                    <ul className='flex gap-10'>
                   <li>
                     <Link
            href='/'
            className={currentRoute === '/' ? "font-medium text-red-500" : "font-medium"}
          >
            Home
          </Link>
                   </li>
                   <li>
                     <Link
            href='/dashboard'
            className={currentRoute === "/dashboard" ? "font-medium text-red-500" : "font-medium"}
          >
           Post Data
          </Link>
                   </li>
                   <li>
                     <Link
            href='/blog'
            className={currentRoute === "/blog" ? "font-medium text-red-500" : "font-medium"}
          >
           Blog
          </Link>
                   </li>
                   <li>
                     <Link
            href='/contact us'
            className={currentRoute === "/contact us" ? "font-medium text-red-500" : "font-medium"}
          >
         Contact us
          </Link>
                   </li>
                        
                    </ul>
                </div>
                <div className='flex gap-10'>
                    <Link href="/dashboard">
                        <button className='px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium'>
                            Login
                        </button>
                    </Link>
                    <button className='px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium'>
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
};
