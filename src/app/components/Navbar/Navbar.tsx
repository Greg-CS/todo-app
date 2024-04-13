import React from 'react'
import { SideMenu } from '../SideMenu/SideMenu'

export const Navbar = () => {
  return (
<div className="navbar justify-between bg-[white] text-black shadow-2xl">
  <div className="">
    <a className="btn btn-ghost text-xl">Todo App</a>
  </div>
  <SideMenu/>
</div>
  )
}
