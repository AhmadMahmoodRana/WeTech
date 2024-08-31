import React, { useContext, useState } from 'react'
import logo from "../assets/logo-techhouse.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { toggleNavbar, NavbarComponents, isOpen,setOpen } = useContext(Context)



  return (
    <nav className='bg-[whitesmoke] w-full h-[90px] flex justify-between items-center xl:px-28 lg:px-10 sm:px-12 px-4 sticky top-[-10px] z-[20]'>
      <div className='logo w-[180px]'>
        <img src={logo} />
      </div>
      <div className='hidden lg:block'>
        <div className='menu flex gap-4 justify-center items-center'>
          {
            NavbarComponents.map((page, index) => {
              return (
              <Link to={`${page.path}`}>  <a className="text-[#092032] hover:text-[#2A91CF] transition-all duration-500 cursor-pointer text-[16px]" key={index}>{page.name}</a></Link>
              )
            })
          }
          <button className='bg-[#2A91CF] text-white px-6 py-[10px] rounded-sm hover:bg-[#1E2050] transition-all duration-700' onClick={() => setOpen(true)}>Contact us</button>

        </div>
      </div>
      <div className='hamburger text-2xl text-[#092032] block lg:hidden bg-gray-200 p-2 rounded-md'>
        {
          isOpen ? <RxCross2 onClick={() => toggleNavbar()} /> : <RxHamburgerMenu onClick={() => toggleNavbar()} />
        }
      </div>
    </nav>
  )
}

export default Navbar
