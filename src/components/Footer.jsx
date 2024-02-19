import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='my-8 border-t-2 border-gray-200'></div>
    <div className='flex sm:flex-row flex-col sm:gap-4'>
      <div className='sm:w-1/4'>
        <span className='text-base text-gray-500 font-semibold'>Google Play</span>
        <ul className='text-sm text-gray-400 flex flex-col gap-3 mt-3 font-semibold'>
          <li>Play Pass</li>
          <li>Play Points</li>
          <li>Thẻ Google Play</li>
          <li>Đổi phần thưởng</li>
          <li>Chính sách hoàn tiền</li>
        </ul>
      </div>
      <div className='sm:w-3/4 sm:mt-0 mt-8'>
        <span className='text-base text-gray-500 font-semibold'>Trẻ em và gia đình</span>
        <ul className='text-sm text-gray-400 flex flex-col gap-3 mt-3 font-semibold'>
          <li>Hướng dẫn dành cho cha mẹ</li>
          <li>Chia sẻ với gia đình</li>
        </ul>
      </div>
    </div>
    <div className='mt-6 flex sm:flex-row flex-col justify-between items-center py-6'>
      <ul className='flex flex-row items-center gap-6 text-xs text-gray-600 flex-wrap'>
        <li>Điều khoản dịch vụ</li>
        <li>Quyền riêng tư</li>
        <li>Giới thiệu về Google Play</li>
        <li>Nhà phát triển</li>
        <li>Google Store</li>
      </ul>
      <span className='text-xs text-gray-500 font-semibold block sm:mt-0 mt-4'>@Made with by Huynh ca</span>
    </div>
    </>
  )
}
