import React from 'react'

import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-blue-600 text-white flex justify-between px-3 items-center'>
            <div className='logo font-bold text-xl'>
                <Link href={"/"}>BlinkLinks</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-blue-400 shadow-lg p-2 py-1 rounded-lg font-bold hover:bg-blue-500 transition'>Try Now</button></Link>
                    <Link href="https://github.com/AdityaNPatil/URL-Shortener-NextJS" target='_blank'><button className='bg-blue-400 shadow-lg p-2 py-1 rounded-lg font-bold hover:bg-blue-500 transition'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
