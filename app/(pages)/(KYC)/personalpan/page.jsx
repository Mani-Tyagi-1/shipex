'use client';

import Link from 'next/link';
import React from 'react';

const personalpan = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[25rem]  h-[27rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <p className='py-2 mb-4 font-bold text-gray-500 text-[.85rem]'>
          Contact Details
        </p>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-43 text-[1rem]'>
            What's your personal PAN Number?{' '}
          </h4>
          <p>
            We require this to verify your identity as per RBI guidelines to
            provide a secure payment experience for you{' '}
          </p>
          <div className='w-full '>
            <input
              type='mobile'
              value=' '
              className='w-[95%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Ex. xxxxxAJ10'
            />
          </div>
          <div className='w-full flex justify-center'>
            <div className='border flex items-center justify-center  w-[20rem]  mt-[11rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
              <Link
                href='/verifyotp'
                className=' !font-medium dark:border-defaultborder/10'
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default personalpan;
