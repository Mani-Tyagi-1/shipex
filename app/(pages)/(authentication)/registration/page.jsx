'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import Logo from '../../../assets/Icons/Shipex-transparent-logo.png';

const Signup = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [passwordshow2, setpasswordshow2] = useState(false);
  return (
    <div className='bg-[#D3D3D3]'>
      <div className='flex justify-center  items-center'>
        <div>
          <div className='flex flex-col items-center'>
            <div className=' flex justify-center'>
              <Link
                href='/components/dashboards/crm/
              '
              >
                <Image src={Logo} alt='logo' width={100} height={100} />
              </Link>
            </div>
            <div className=' bg-white rounded-lg  w-[76%]'>
              <div className='box-body pt-[1.25rem] p-[3rem]'>
                <p className='text-[1.25rem] font-semibold mb-2 text-center'>
                  Registration
                </p>
                <p className='mb-4 text-[#59606c] text-[0.875rem] font-normal text-center'></p>
                <div className='grid grid-cols-12 gap-y-4'>
                  <div className='xl:col-span-12 col-span-12'>
                    <label
                      htmlFor='signup-firstname'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      First Name
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
                      htmlFor='signup-lastname'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-lastname'
                      placeholder='last name'
                    />
                  </div>{' '}
                  <div className='xl:col-span-12 col-span-12'>
                    <label
                      htmlFor='signup-email'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-email'
                      placeholder='Your email address'
                    />
                  </div>{' '}
                  <div className='xl:col-span-12 col-span-12'>
                    <label
                      htmlFor='signup-company'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      Company
                    </label>
                    <input
                      type='text'
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-company'
                      placeholder='Your Company'
                    />
                  </div>
                </div>
                <div className='xl:col-span-12 col-span-12'>
                  <label
                    htmlFor='signup-total-order'
                    className='text-[.85rem] font-bold text-gray-700'
                  >
                    How many orders do you ship in a month?
                  </label>
                  <input
                    type='text'
                    className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                    id='signup-total-order'
                  />
                </div>
                <div className='xl:col-span-12 col-span-12'>
                  <label
                    htmlFor='signup-password'
                    className='text-[.85rem] font-bold text-gray-700'
                  >
                    Password
                  </label>
                  <input
                    type='text'
                    className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                    id='signup-password'
                    placeholder='Your Password'
                  />
                </div>
                <div className='xl:col-span-12 col-span-12'>
                  <label
                    htmlFor='signup-confirm-password'
                    className='text-[.85rem] font-bold text-gray-700'
                  >
                    Confirm Password
                  </label>
                  <input
                    type='text'
                    className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                    id='signup-confirm-password'
                    placeholder='Your confirm Password'
                  />

                  <div className='xl:col-span-12 col-span-12 grid mt-2'>
                    <button
                      type='button'
                      className=' hover:bg-[#43aa84] bg-[#00c27c] text-white !font-medium dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className='text-center'>
                  <p className='text-[0.75rem] text-[#8c9097]  mt-4'>
                    Already have an account?{' '}
                    <Link
                      href='/signin'
                      className='text-primary text-black text-[.90rem]  hover:underline'
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
                <div className='text-center my-4'>
                  <span>OR</span>
                </div>

                <div className=' flex justify-center gap-2'>
                  <div className='w-[30px] h-[30px] flex justify-center rounded '>
                    <button aria-label='button' type='button'>
                      <FaGoogle style={{ fontSize: '1.5rem' }} />
                    </button>
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

export default Signup;
