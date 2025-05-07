import React from 'react'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm pt-20'>
        <div>
            <img className='mb-5 w-32' src={assets.logo1} alt="" />
            <p className='w-full md:w-3/2 text-gray-600'>
            Sứ mệnh của chúng tôi tại Forever là trao quyền cho khách hàng với sự lựa chọn, tiện lợi và sự tự tin. Chúng tôi cam kết cung cấp trải nghiệm mua sắm liền mạch vượt quá mong đợi, từ việc duyệt và đặt hàng đến giao hàng và hơn thế nữa
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>SHOP</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Trang Chủ</li>
                <li>Thông Tin</li>
                <li>Vận Chuyển</li>
                <li>Chính Sách Bảo Mật</li>
            </ul>
        </div>
        <div>
        <p className='text-xl font-medium mb-5'>LIÊN HỆ</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+84 033-801-7852</li>
                <li>minhkhai11225@gmail.com</li>
            </ul>
        </div>
      </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>© 2025 Minh Khải minhkhai11225@gmail.com  * All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
