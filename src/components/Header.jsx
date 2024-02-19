import React from 'react'
import logoChplay from '../assets/images/logo-chplay.png'
import { SlMagnifier } from "react-icons/sl";
import { SlQuestion } from "react-icons/sl";

export default function Header() {
  return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-[64px] px-4 md:px-5 bg-white">

            <div className="flex h-5 items-center">       
                <a href='/' className="flex h-5 items-center">                 
                    <img
                        className='max-w-[80%]'
                        src={logoChplay}
                        alt="google play"
                    />
                </a>
                <ul className='sm:flex flex-row items-center justify-around hidden'>
                    <li className='mx-4 py-auto font-semibold text-gray-500 text-sm'>Trò Chơi</li>
                    <li className='mx-4 font-semibold text-[#108e68] text-sm border-b-2 py-6 border-[#108e68]'>Ứng Dụng</li>
                    <li className='mx-4 font-semibold text-gray-500 text-sm'>Phim và truyền hình</li>
                    <li className='mx-4 font-semibold text-gray-500 text-sm'>Sách</li>
                    <li className='mx-4 font-semibold text-gray-500 text-sm'>Trẻ Em</li>
                </ul>
            </div>
           
            <div className="flex items-center">
                <div className="flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#e5e5e5]">
                        <SlMagnifier className="text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center h-10 w-10 mr-2 rounded-full  hover:bg-[#e5e5e5]">
                        <SlQuestion className="text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://yt3.ggpht.com/yti/AGOGRCrwiRq9uvdB12_SFhgeDVPa3nVNuW2jjk5sQg=s88-c-k-c0x00ffffff-no-rj" alt="user pic" />
                </div>
            </div>
        </div>
  )
}
