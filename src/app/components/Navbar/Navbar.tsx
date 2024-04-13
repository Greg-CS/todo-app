import React from 'react'
import { SideMenu } from '../SideMenu/SideMenu'
import Link from 'next/link'

export const Navbar = () => {
  return (
<div className="navbar justify-between bg-[white] text-black shadow-2xl">
  <div className="">
    <Link href={"/"} className="btn btn-ghost text-xl">Todo App</Link>
  </div>
  <SideMenu/>
</div>
  )
}
