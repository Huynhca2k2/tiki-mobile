import React from 'react'
import { VscArrowRight } from "react-icons/vsc";
import { SlShare } from "react-icons/sl";
import { SlCloudUpload } from "react-icons/sl";
import { SlLock } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";

export default function DataSecurity() {
  return (
    <>
        <div className='flex flex-row items-center font-semibold text-[22px] gap-3 text-gray-800 mt-6'>
            <h3>An toàn dữ liệu</h3>
            <VscArrowRight/>
        </div>
        <span className='mt-5 mb-8 block text-gray-600 text-sm'>Sự an toàn bắt đầu từ việc nắm được cách nhà phát triển thu thập và chia sẻ dữ liệu của bạn. Các biện pháp bảo vệ quyền riêng tư và bảo mật dữ liệu có thể thay đổi tuỳ theo cách sử dụng, khu vực và độ tuổi. Nhà phát triển đã cung cấp thông tin này và có thể sẽ cập nhật theo thời gian.</span>

        <div className='flex flex-col justify-center p-5 gap-5 border border-gray-300 rounded-lg'>
            <div className='flex flex-row items-center gap-4 text-gray-500 text-sm'>
                <SlShare className='text-[20px]'/>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Không chia sẻ dữ liệu với bên thứ ba</span>
                    <span className='text-xs'><span className='underline'>Tìm hiểu thêm </span>về cách nhà phát triển khai báo thông tin về hoạt động chia sẻ dữ liệu</span>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4 text-gray-500 text-sm'>
                <SlCloudUpload className='text-[20px]'/>
                <div className='flex flex-col gap-1'>
                    <span className='font-semibold'>Có thể ứng dụng này sẽ thu thập những loại dữ liệu này</span>
                    <span className='text-xs'>Vị trí, Thông tin cá nhân và 5 loại dữ liệu khác</span>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4 text-gray-500 text-sm'>
                <SlLock className='text-[20px]'/>
                <span className='font-semibold'>Dữ liệu được mã hóa trong khi chuyển</span>

            </div>
            <div className='flex flex-rowflex flex-row items-center gap-4 text-gray-500 text-sm'>
                <SlTrash className='text-[20px]'/>
                <span className='font-semibold'>Bạn có thể yêu cầu xóa dữ liệu</span>
            </div>
            <span className='block max-w-[120px] font-semibold px-4 py-2 hover:bg-gray-50 rounded-lg text-[#01875f]'>Xem chi tiết</span>
        </div>
    </>
  )
}
