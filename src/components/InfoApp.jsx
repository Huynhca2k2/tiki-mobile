import React from 'react'
import { VscArrowRight } from "react-icons/vsc";

export default function InfoApp() {
  return (
    <>
    <div className='flex flex-row items-center font-semibold text-[22px] gap-3 text-gray-800 mt-6'>
        <h3>Thông tin về ứng dụng này</h3>
        <VscArrowRight/>
    </div>
    <span className='my-5 block text-gray-600 text-sm'>Chào mừng bạn đến với Nền tảng thương mại điện tử chất lượng và đáng tin cậy, kiến tạo cuộc sống tiện nghi cho mọi gia đình Việt.</span>
    <ul className='text-gray-600 text-sm'>
        <span>Danh sách các chức năng của App:</span>
        <li className='mt-2'>+ Phía Client:</li>
        <li>- Xem sản phẩm, mua sản phẩm</li>
        <li>- Đánh giá sản phẩm và bình luận</li>
        <li>- Nhắn tin liên hệ với chủ shop</li>
        <li>- Thanh toán online với Paypal(demo)</li>
        <li>- Đăng nhập, đăng ký, đăng nhập Google</li>
        <li>- Tìm kiếm sản phẩm theo danh mục, giá vv...</li>
        <li className='mt-2'>+ Phía Sever/Admin:</li>
        <li>- Thêm, sửa, xóa, đọc sản phẩm</li>
        <li>- Trả lời tin nhắn của người dùng</li>
        <li>- Phân quyền Admin, Shop, User</li>
        <li>- Thống kê doanh thu theo tháng, năm</li>
        <li className='mt-2 text-gray-900 font-medium'>== Tất cả đều là cập nhật thời gian thực</li>
    </ul>
    </>
  )
}
