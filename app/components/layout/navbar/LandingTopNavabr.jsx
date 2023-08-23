import Link from 'next/link';
import React from 'react';

export const LandingTopNavbar = () => {
    // const NavigationLink = ({ url, text }) => {
    //     return <Link href={url}>{text}</Link>;
    // };

    return (
        <nav className=' sticky top-0 z-10 bg-gray-100 shadow-md py-5'>
            <div className='flex justify-between items-center cursor-pointer container mx-auto'>
              <Link href="/">  <p className='font-bold text-5xl'>Logo</p></Link>
                <div className=''>
                    <ul className='flex gap-10'>
                       <Link href="/dashboard"> <li className='font-medium'>post Data</li></Link>
                        </ul>
                </div>
                <div className='flex gap-10'>
                  <Link href="/dashbord"><button>Login</button></Link>  
                    <button>Signup</button>
                </div>
            </div>
        </nav>
    );
};
