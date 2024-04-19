"use client"

import React, {useState, useEffect} from 'react'
import { SideMenu } from '../SideMenu/SideMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export const Navbar = () => {
  const router = usePathname();
  console.log(router);
  const [isLoginPage, setIsLoginPage] = useState(false);
  useEffect(() => {
    if (router === '/login') {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [router]);
    
  return (
  <nav className="navbar bg-gradient-to-t from-[#F7D1CD] via-[#F7D1CD] to-[#B392AC] text-black shadow-2xl h-[10vh]">
    <div className="navbar-start">
      <Link href={"/"} className="btn rounded-2xl bg-[#B392AC] hover:bg-[#D1B3C4] border-0 text-xl text-[#735D78] font-bold">Todo App</Link>
    </div>
    {isLoginPage ? null : (
    <div className='navbar-end gap-3'>
      <Link href={"/login"} className="btn rounded-2xl bg-[#B392AC] hover:bg-[#D1B3C4] border-0 text-xl text-[#735D78] font-bold">Login</Link>
        <span className='text-[#735D78] font-bold'>
          /
        </span>
      <button className="btn rounded-2xl bg-[#B392AC] hover:bg-[#D1B3C4] border-0 text-xl text-[#735D78] font-bold">Sign Up</button>
      {/* <SideMenu/> */}
    </div>
    )}
  </nav>
  )
}
