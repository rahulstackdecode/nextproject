import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-15 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-2xl font-bold mb-2">Test</h2>
                    <p className='text-base'>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Navigation</h3>
                    <ul className="space-y-4 text-white text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Navigation</h3>
                    <ul className="space-y-4 text-white text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-blue-700">Twitter</a>
                        <a href="#" className="text-white hover:text-blue-700">LinkedIn</a>
                        <a href="#" className="text-white hover:text-blue-700">GitHub</a>
                    </div>
                </div>

            </div>
            <div className=' pt-4 pb-4 border-t-1 mt-10'>   <p className="text-white text-sm text-center">© {new Date().getFullYear()} All rights reserved.</p></div>
        </footer>
    )
}

export default Footer;
