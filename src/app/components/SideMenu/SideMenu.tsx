import Link from 'next/link'
import React from 'react'

export const SideMenu = () => {
  return (
    <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#E8C2CA] border-l-2 border-[#735D78] text-black font-bold">
            {/* Sidebar content here */}
            <li><Link href={"/login"}>Login</Link></li>
            <li>                    
              <form action="/auth/signout" method="post">
                <button
                  className="btn btn-success btn-outline text-white transition-all"
                  type="submit"
                >
                  Log out
                </button>
              </form>
            </li>
            </ul>
        </div>
    </div>
  )
}
