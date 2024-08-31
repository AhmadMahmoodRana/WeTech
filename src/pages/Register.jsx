import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center h-auto py-20'>
            <h1 className='text-center text-black text-[2.1rem] font-semibold uppercase'>Your Journey Starts Here</h1>
            <p className='text-center text-gray-500 pt-2 font-semibold'>Contact Us</p>
            <p className='text-center text-gray-500 text-[15px] mt-8'>Whether you're a budding entrepreneur, a seasoned professional seeking to upskill, or a recent graduate <br /> eager to dive into the tech industry, We Tech House is the launchpad for your journey. Explore our programs, <br /> engage with our community, and embark on a transformative educational experience that goes beyond <br />expectations.</p>

            <div className='main-div w-[90%] h-[400px] border-2 bg-[#fcfbfb] border-[#2A91CF] flex flex-col justify-center  mt-20 items-center py-5'>
                <h1 className='tetx-black font-bold text-2xl tracking-wider'>Head Office:</h1>
                <p className='text-gray-500 tracking-wide mt-6 flex gap-3 justify-center items-center'> <FaMapLocationDot className='text-[#2a91cf] text-2xl' /> 77 Ahmad Block, Garden Town, Lahore</p>
                <p className='text-gray-500 tracking-wide mt-6 flex gap-3 justify-center items-center'> <IoMdMail className='text-[#2a91cf] text-2xl' />info@weTechHouse.com</p>
                <p className='text-gray-500 tracking-wide mt-6 flex gap-3 justify-center items-center'> <FaWhatsapp className='text-[#2a91cf] text-2xl' /> +92 309 2977716</p>
                <p className='text-gray-500 tracking-wide mt-6 flex gap-3 justify-center items-center'> <FaBusinessTime className='text-[#2a91cf] text-2xl' /> 10:00 AM to 08:00 PM</p>
                <div className='icons flex  gap-2 mt-4 justify-center items-center'>
                    <FaFacebookF className='bg-[#2a91cf] text-white text-3xl px-2' />
                    <FaInstagram className='bg-[#2a91cf] text-white text-3xl px-2' />
                    <FaLinkedinIn className='bg-[#2a91cf] text-white text-3xl px-2' />
                    <FaYoutube className='bg-[#2a91cf] text-white text-3xl px-2' />
                </div>
            </div>
            <div className='inputFields w-[40%]'>
                <h1 className='text-center font-bold text-2xl pb-10 mt-20 '>Leave Your Message</h1>



                <div className='input flex flex-col gap-1'>
                    <input type='text' className='w-[100%] bg-[#ededed] px-2 py-2 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>First Name</label>
                </div>
                <div className='input flex flex-col gap-1 mt-5'>
                    <input type='text' className='w-[100%] bg-[#ededed] px-2 py-2 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>Last Name</label>
                </div>
                <div className='input flex flex-col gap-1 mt-5'>
                    <input type='text' className='w-[100%] bg-[#ededed] px-2 py-2 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>Address</label>
                </div>
                <div className='input flex flex-col gap-1 mt-5'>
                    <input type='text' className='w-[100%] bg-[#ededed] px-2 py-2 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>Email</label>
                </div>
                <div className='input flex flex-col gap-1 mt-5'>
                    <input type='text' className='w-[100%] bg-[#ededed] px-2 py-2 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>Phone</label>
                </div>
                <div className='input flex flex-col gap-1 mt-5'>
                    <input type='text' className='w-[100%] bg-[#ededed] px-2 py-2 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>City</label>
                </div>
                <div className='input flex flex-col gap-1 mt-5'>
                    <textarea type='text' className='w-[100%] bg-[#ededed] px-2 py-5 text-gray-700 placeholder:text-gray-600 placeholder:text-[14px]' />
                    <label className='text-sm text-gray-500'>Additional Information</label>
                </div>
                <button className='bg-[#2a91cf] px-4 py-2 rounded-md text-white mt-5'>Send Email</button>

            </div>
        </div>
    )
}

export default Register
