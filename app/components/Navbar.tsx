

"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { navLinks } from "@/constants"
import { logo } from "@/public"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
    return (
      <nav className="flex w-full items-center justify-between space-x-1 p-3 bg-[#ECEAEA]">
        <Image 
        className='cursor-pointer'
        src={logo}
        width={300}
        height={300}
        alt="Logo"
        onClick={() => { setActive("/") }}
        />
        <div onClick={()=>{setToggle(!toggle)}} className="space-y-2 hidden max-sm:block">
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </div>
        <ul className={`${!toggle ? 'text-black flex items-center justify-evenly w-[400px] max-sm:hidden' : 'text-black bg-gray-100  rounded-md w-[140px] h-[140px] flex flex-col justify-center items-center absolute top-[80px] right-10'}`}>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-red-500' : 'text-red'} hover:text-red-500 text-[18px] font-medium cursor-pointer`} onClick={() => { setActive(link.title) }}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        </nav>
    )
  }
  
  export default Navbar