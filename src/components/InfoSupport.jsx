import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { VscGlobe } from "react-icons/vsc";
import { SlPhone } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";

export default function InfoSupport() {
  return (
    <>
        <div className='flex flex-row items-center font-semibold text-[22px] gap-3 text-gray-800 sm:mt-0 mt-8'>
            <h3>Thông tin hổ trợ ứng dụng</h3>
            <SlArrowDown className='text-[20px]'/>
        </div>
        <a href='/' className='text-gray-800 font-semibold text-sm flex flex-row items-center gap-4 p-3 pl-0'>
            <VscGlobe className='text-[22px]'/>
            <span>Trang web</span>
        </a>
        <div className='text-gray-600 font-semibold text-sm flex flex-row items-center gap-4 p-3 pl-0'>
            <SlPhone className='text-[18px]'/>
            <div className='flex flex-col'>
                <span className='text-gray-800'>Số điện thoại</span>
                <span>+84813436664</span>
            </div>
        </div>
        <div className='text-gray-600 font-semibold text-sm flex flex-row items-center gap-4 p-3 pl-0'>
            <SlEnvolope className='text-[18px]'/>
            <div className='flex flex-col'>
                <span className='text-gray-800'>Email liên hệ hổ trợ</span>
                <span>huynhca.dev@gmail.com</span>
            </div>
        </div>
        <div className='text-gray-600 font-semibold text-sm flex flex-row items-center gap-4 p-3 pl-0'>
            <SlLocationPin className='text-4xl'/>
            <div className='flex flex-col'>
                <span className='text-gray-800'>Địa chỉ</span>
                <span>Nguyen Kiem, Ward 3, Go Vap District, Ho Chi Minh City, Viet Nam</span>
            </div>
        </div>
        <div className='text-gray-600 font-semibold text-sm flex flex-row items-center gap-4 p-3 pl-0'>
            <GoShieldCheck className='text-xl'/>
            <span className='text-gray-800'>Chính sách và quyền riêng tư</span>
        </div>
    </>
  )
}
