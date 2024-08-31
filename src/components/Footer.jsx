import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <div className='w-full min-h-[500px] flex justify-center pb-20'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0630401111057!2d74.2823511!3d31.549884499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190597a76b0395%3A0x4b600c2b13645801!2sWe%20Tech%20HOUSE!5e0!3m2!1sen!2s!4v1724171906224!5m2!1sen!2s"  className='border-0 w-[90%] min-h-[500px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

            <div className='w-full h-auto py-10 footer'>
                <div className='flex w-full items-center flex-col'>
                    <h1 className='text-center text-white font-semibold text-xl'>We Tech House</h1>
                    <p className='text-center sm:w-[500px] lg:w-[600px] text-gray-400 text-[13px] sm:text-[17px] mt-3'>Immerse yourself in our hands-on projects designed to mirror real-world scenarios. Apply your skills in practical situations that resonate with industry demands. From coding challenges to system simulations, you'll gain the confidence to tackle any IT challenge that comes your way.</p>
                </div>
                <div className='icons flex gap-3 flex-wrap w-full justify-center mt-5'>
                    <div className='icon1 bg-gray-600 w-[45px] h-[45px] rounded-full flex items-center justify-center'>
                        <FaFacebookF className='text-white text-[19px]' />
                    </div>
                    <div className='icon1 bg-gray-600 w-[45px] h-[45px] rounded-full flex items-center justify-center'>
                        <FaInstagram className='text-white text-[19px]' />
                    </div>
                    <div className='icon1 bg-gray-600 w-[45px] h-[45px] rounded-full flex items-center justify-center'>
                        <FaLinkedinIn className='text-white text-[19px]' />
                    </div>
                    <div className='icon1 bg-gray-600 w-[45px] h-[45px] rounded-full flex items-center justify-center'>
                        <FaYoutube className='text-white text-[19px]' />
                    </div>
                </div>
                <div className='instructions flex gap-3 text-[15px] justify-center mt-4'>
                    <p className='text-white underline'>Privacy</p>
                    <p className='text-white underline'>Term</p>
                    <p className='text-white underline'>Disclaimer</p>
                </div>
                <div className='copyright'>
                    <hr className=' border-gray-500 mt-20' />
                    <p className='text-center text-[16px] text-gray-400 mt-4'>Copyright We Tech House 2023. All rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
