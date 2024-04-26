"use client"

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export const Navbar = ({user} : {user: any}) => {
  const router = usePathname();
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
    {!user ? 
    <>
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
    </>
    :
    <div className='flex gap-4 navbar-end'>
      <Link href={`/account/${user.id}`}>
        <button className="btn rounded-2xl bg-[#B392AC] hover:bg-[#D1B3C4] border-0 text-xl text-[#735D78] font-bold">App</button>
      </Link>
      <form action="/auth/signout" method="post">
        <button
          className="btn rounded-2xl bg-[#B392AC] hover:bg-[#D1B3C4] border-0 text-xl text-[#735D78] font-bold"
          type="submit"
        >
          Log out
        </button>
      </form>
    </div>
    }
  </nav>
  )
}
