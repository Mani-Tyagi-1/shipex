'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaGoogle, FaTwitter, FaMobileAlt } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../../../assets/Icons/Shipex-transparent-logo.png';

const Login = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);

  return (
    <div className='bg-[#D3D3D3]'>
      <div className='flex justify-center min-h-screen  items-center'>
        <div>
          <div className='flex flex-col items-center'>
            <div className=' mt-[-5rem] flex justify-center'>
              <Link href='/'>
                <Image src={Logo} alt='logo' width={100} height={100} />
              </Link>
            </div>

            <div className=' bg-white rounded-lg shadow-lg w-full '>
              <div className='box-body pt-[1.25rem] p-[3rem]'>
                <p className='text-[1.25rem] font-semibold mb-2 text-center'>
                  Sign In
                </p>
                <p className='mb-4 text-[#59606c] text-[0.875rem] font-normal text-center'>
                  Welcome Back !!
                </p>
                <div className='grid grid-cols-12 gap-y-4'>
                  <div className='xl:col-span-12 col-span-12'>
                    <label
                      htmlFor='signup-firstname'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      User Name
                    </label>
                    <input
                      type='text'
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-firstname'
                      placeholder='first name'
                    />
                  </div>
                  <div className='xl:col-span-12 col-span-12'>
                    <label
                      htmlFor='signin-password'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-password'
                      placeholder='password'
                    />
                  </div>{' '}
                  <div className='xl:col-span-12 col-span-12 grid mt-2'>
                    <div className='flex gap-3 items-center'>
                      <input
                        type='checkbox'
                        value=''
                        id='defaultCheck1'
                        className='border border-black rounded-md'
                      />
                      <label
                        htmlFor='defaultCheck1'
                        className='text-[#8c9097] text-[.85rem] font-normal'
                      >
                        Remember Password ?
                      </label>
                    </div>
                  </div>
                  <div className='xl:col-span-12 col-span-12 grid mt-2'>
                    <button
                      type='button'
                      className=' hover:bg-[#43aa84] bg-[#00c27c] text-white !font-medium dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                <div className='text-center'>
                  <p className='text-[0.75rem] text-[#8c9097]  mt-4'>
                    Don&apos;t have an account?{' '}
                    <Link
                      href='/registration'
                      className=' text-black text-[.90rem]  hover:underline'
                    >
                      Register here
                    </Link>
                  </p>
                </div>
                <div className='text-center my-4'>
                  <span>OR</span>
                </div>
                <div className=' flex justify-center gap-2'>
                  <div className=' '>
                    <Link href='#'>
                      <FaMobileAlt style={{ fontSize: '1.5rem' }} />
                    </Link>
                  </div>
                  <div className=' '>
                    <Link href='#'>
                      <FaGoogle style={{ fontSize: '1.5rem' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
