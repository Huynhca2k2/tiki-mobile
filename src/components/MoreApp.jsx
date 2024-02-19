import React from 'react'
import { SlStar } from "react-icons/sl";
import { VscArrowRight } from "react-icons/vsc";
import appLogo1 from '../assets/images/app1.png'
import appLogo2 from '../assets/images/app2.png'
import appLogo3 from '../assets/images/app3.png'
import appLogo4 from '../assets/images/app4.png'
import appLogo5 from '../assets/images/app5.png'
import appLogo6 from '../assets/images/app6.png'

export default function MoreApp() {
  return (
  <>
    <div className='flex flex-row items-center font-semibold text-[22px] gap-3 text-gray-800 mt-6'>
      <h3>Các ứng dụng tương tự</h3>
      <VscArrowRight/>
    </div>
    <div className='mt-4'>

      <div className='flex flex-row gap-4 py-4 hover:bg-gray-50'>
        <div className='w-[64px] h-[64px] shadow-md rounded-lg shadow-slate-300'>
          <img src={appLogo1} alt="logo app" className='object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-base text-gray-800 font-[500] line-clamp-1'>Snapchat</span>
          <span className='text-sm text-gray-500'>Snap Inc</span>
          <span className='flex flex-row items-center text-sm font-semibold text-gray-500'>4,1 <SlStar className='ml-1'/> </span>
        </div>
      </div>

      <div className='flex flex-row gap-4 py-4 hover:bg-gray-50'>
        <div className='w-[64px] h-[64px] shadow-md rounded-lg shadow-slate-300'>
          <img src={appLogo2} alt="logo app" className='object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-base text-gray-800 font-[500] line-clamp-1'>WhatsApp Messenger</span>
          <span className='text-sm text-gray-500'>WhatsApp LLC</span>
          <span className='flex flex-row items-center text-sm font-semibold text-gray-500'>4,2 <SlStar className='ml-1'/> </span>
        </div>
      </div>

      <div className='flex flex-row gap-4 py-4 hover:bg-gray-50'>
        <div className='w-[64px] h-[64px] shadow-md rounded-lg shadow-slate-300'>
          <img src={appLogo3} alt="logo app" className='object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-base text-gray-800 font-[500] line-clamp-1'>Likee - Cộng đồng Video Ngắn</span>
          <span className='text-sm text-gray-500'>Likeme Pte. Ltd.</span>
          <span className='flex flex-row items-center text-sm font-semibold text-gray-500'>4,4 <SlStar className='ml-1'/> </span>
        </div>
      </div>

      <div className='flex flex-row gap-4 py-4 hover:bg-gray-50'>
        <div className='w-[64px] h-[64px] shadow-md rounded-lg shadow-slate-300'>
          <img src={appLogo4} alt="logo app" className='object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-base text-gray-800 font-[500] line-clamp-1'>Instagram</span>
          <span className='text-sm text-gray-500'>Instagram</span>
          <span className='flex flex-row items-center text-sm font-semibold text-gray-500'>4,0 <SlStar className='ml-1'/> </span>
        </div>
      </div>

      <div className='flex flex-row gap-4 py-4 hover:bg-gray-50'>
        <div className='w-[64px] h-[64px] shadow-md rounded-lg shadow-slate-300'>
          <img src={appLogo5} alt="logo app" className='object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-base text-gray-800 font-[500] line-clamp-1'>TickTock-TikTok Live Wallpaper</span>
          <span className='text-sm text-gray-500'>TikTok Pte. Ltd.</span>
          <span className='flex flex-row items-center text-sm font-semibold text-gray-500'>4,6 <SlStar className='ml-1'/> </span>
        </div>
      </div>

      <div className='flex flex-row gap-4 py-4 hover:bg-gray-50'>
        <div className='w-[64px] h-[64px] shadow-md rounded-lg shadow-slate-300'>
          <img src={appLogo6} alt="logo app" className='object-cover rounded-lg'/>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-base text-gray-800 font-[500] line-clamp-1'>SHEIN-Mua sắm trực tuyến</span>
          <span className='text-sm text-gray-500'>Roadget Business PTE. LTD.</span>
          <span className='flex flex-row items-center text-sm font-semibold text-gray-500'>4,4 <SlStar className='ml-1'/> </span>
        </div>
      </div>
    </div>
  </>
  )
}
