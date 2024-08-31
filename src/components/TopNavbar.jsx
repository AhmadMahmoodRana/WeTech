import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const TopNavbar = () => {
  return (
    <div className='flex w-full h-[50px] bg-[#2A91CF] px-28 items-center'>
      <div className='flex gap-4 text-white lg:text-[16px] md:text-[12px] text-[8px] w-[50%] flex-wrap items-center'>
        <a>77 Ahmad Block, Garden Town Lahore
        </a>
        <a>
          info@weTechHouse.com</a>
      </div>
      <div className='flex text-[16px] gap-3 w-[50%] justify-end text-white'>
        <FaFacebookF/>
        <FaTwitter/>
        <FaLinkedin/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default TopNavbar
