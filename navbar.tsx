"use client"
import Button from './button'
import React from 'react'
import { useState } from 'react'
import { AiTwotoneShop } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

function Navbar() {
  const Links = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "PRICING", href: "/pricing" },
    { name: "CONTACT", href: "/contact" },
    { name: "LOGIN", href: "/login" },
  ]

  const[open, setOpen] = useState(false)


  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl mr-2 text-indigo-600'>
          <AiTwotoneShop />
          </span>
          <span className='text-1xl text-indigo-600 font-[Poppins] font-light'>ECOMMERCE</span>
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <ul className= {` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full 
        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.href} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))}
          <Button>
            Get Started
          </Button>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
