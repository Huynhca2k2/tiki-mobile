import React from 'react'
import { SlStar } from "react-icons/sl";
import { SlInfo } from "react-icons/sl";
import { SlShare } from "react-icons/sl";
import { SlPuzzle } from "react-icons/sl";
import { SlScreenDesktop } from "react-icons/sl";
import logoTiki from '../assets/images/logo-tiki.png'

export default function MainContent() {
  return (
    <>
        <div className='flex flex-row relative'>
            <img 
                src={logoTiki} 
                alt="tiki logo" 
                className='w-[72px] h-[72px] sm:w-[240px] sm:h-[240px] rounded-[20%] mt-2 sm:mt-0 mr-6 sm:mr-0 sm:absolute top-0 right-0'/>
            <div>
                <h1 className='text-2xl font-semibold mb-1 sm:mb-4 text-gray-950 sm:text-6xl'>Tiki - Tốt & Nhanh</h1> 
                <span className='text-lg font-semibold text-[#01875f]'>Dev by Huynh ca</span>
            </div>
        </div>
        
      <div className='flex flex-row items-center justify-between sm:justify-normal gap-0 sm:gap-8 my-4 py-4 overflow-x-auto'>
        <div className='flex flex-col items-center justify-center min-w-[110px]'>
            <span className='flex flex-row items-center text-sm font-semibold'>4,0 <SlStar className='ml-1'/> </span>
            <span className='text-[#5f6368] text-xs font-medium'>24 N bài đánh giá</span>
        </div>
        <div className='flex flex-col items-center justify-center min-w-[110px]'>
            <span className='text-sm font-semibold'>1 Tr+</span>
            <span className='text-[#5f6368] text-xs font-medium'>Lượt tải xuống</span>
        </div>
        <div className='flex flex-col items-center justify-center min-w-[110px]'>
            <span className='text-sm font-semibold'>8+</span>
            <span className='flex flex-row items-center text-[#5f6368] text-xs font-medium'>Tất cả mọi người <SlInfo className='ml-1'/></span>
        </div>
      </div>
        <div className='flex flex-col sm:flex-row'>
            <a className='bg-[#108e68] h-[48px] sm:w-[200px] py-3 mb-2 sm:mr-4 flex items-center justify-center rounded-full outline-none cursor-pointer text-white font-semibold'
                    href='https://github.com/Huynhca2k2/SanThuongMaiDienTu'
                >Cài Đặt
            </a>

            <div className='flex flex-row items-center h-[52px] justify-evenly mb-5'>
                <div className='flex flex-row items-center justify-center text-[#01875f] sm:mr-4 hover:bg-gray-50 p-2 rounded'>
                    <SlShare className='w-[24px] h-[24px] mr-2'/><span className='text-sm font-medium'>Chia sẻ</span>
                </div>
                <div className='flex flex-row items-center justify-center text-gray-400'>
                    <SlPuzzle className='w-[24px] h-[24px] mr-2'/> <span className='text-sm font-medium'>Thêm vào danh sách yêu thích</span>
                </div>
            </div>
        </div>
        

        <div className='flex flex-row items-center justify-center sm:justify-normal text-gray-500 mb-16'>
           <SlScreenDesktop className='w-[20px] h-[20px] mr-3 font-semibold'/>
           <span className='text-sm font-medium'>Ứng dụng này dùng được trên mọi thiết bị của bạn</span>
        </div>

    </>
  )
}
