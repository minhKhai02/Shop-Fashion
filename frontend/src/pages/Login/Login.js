import React, { useState } from 'react'

const Login = () => {
  const [currenState,setCurrenState] = useState('Đăng ký')
  const onSubmitHandler = async (e) =>{
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currenState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currenState === 'Đăng nhập' ? '':  <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Tên đăng nhập'/>}
        <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' />
        <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Mật khẩu' />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className=' cursor-pointer'>Quên mật khẩu?</p>
          {
            currenState === 'Đăng nhập'
            ? <p onClick={()=>setCurrenState('Đăng ký')} className='cursor-pointer'>Tạo tài khoản</p>
            : <p onClick={()=>setCurrenState('Đăng nhập')} className='cursor-pointer'>Đăng nhập tại đây</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currenState === 'Đăng nhập' ? 'Đăng nhập' :'Đăng ký'}</button>
    </form>
  )
}

export default Login
