'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/app/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 100)
    }

    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 bg-amber-500 w-full z-[100] h-[12vh] transition-all duration-200  ${
        navBg ? 'bg-white shadow-md' : ''
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-bold">
          <span className="text-3xl md:text-4xl text-black">Test</span>
        </h1>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <span className="nav_link cursor-pointer">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:inline-block px-8 py-2.5 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full cursor-pointer">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </header>
  )
}

export default Nav
