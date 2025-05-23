import React from 'react'
import Title from '../../components/LatesCollection/Title'
import {assets} from '../../assets/assets'
import NewsletterBox from '../../components/Newletter/NewsletterBox'
const Contacts = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title  text1={'LIÊN HỆ VỚI'} text2={'CHÚNG TÔI'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Cửa hàng của chúng tôi</p>
          <p className=' text-gray-500'>HCM City<br/>Thu Duc </p>
          <p className=' text-gray-500'> SĐT: 0338017852 <br/> Email: minhkhai11225@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Sự nghiệp tại Fashion</p>
          <p className=' text-gray-500'>Tìm hiểu thêm về các nhóm và việc làm của chúng tôi.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Khám phá việc làm</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contacts
