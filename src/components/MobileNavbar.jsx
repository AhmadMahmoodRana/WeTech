import React, { useContext } from 'react'
import { Context } from '../context/Context'

const MobileNavbar = () => {
  const { NavbarComponents, isOpen } = useContext(Context)

  return (
    <>
      {
        isOpen ? <div className='mobileNavbar flex flex-col text-[22px] justify-center items-center text-gray-600 bg-[whitesmoke] border-t-2 py-5'>
          {
            NavbarComponents.map((page, index) => {
              return (
                <a className="text-[#092032] hover:text-[#2A91CF] transition-all duration-500 cursor-pointer text-[17px]" key={index}>{page.name}</a>
              )
            })
          }
        </div>
          : null
      }
    </>

  )
}

export default MobileNavbar
