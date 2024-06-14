import Link from 'next/link';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const Agreement = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[25rem]  h-[28rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <div className='flex py-2 mb-4 items-center gap-1'>
          <Link href={'/pancard-details'}>
            <FaChevronLeft className='hover:cursor-pointer' />
          </Link>
          <h1 className=' font-bold text-blck-500 text-[.85rem]'>Back </h1>
        </div>

        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-1 mt-[.50rem] text-[1rem]'></h4>
          <div className='w-full '>
            <input
              type='mobile'
              value=''
              className='w-[100%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Address Line 1'
            />
            <h4 className='font-semibold my-1 mt-[.50rem] text-[1rem]'></h4>
            <div className='w-full '>
              <input
                type='mobile'
                value=''
                className='w-[100%] border border-gray-300 rounded p-2 my-3 outline-none'
                placeholder='Address Line 2'
              />
              <input
                type='mobile'
                value=''
                className='w-[45%] border border-gray-300 rounded p-2 my-3 outline-none'
                placeholder='Enter Pincode'
              />
              <input
                type='mobile'
                value=''
                className='w-[45%] border border-gray-300 rounded p-2 my-3 outline-none'
                placeholder='Enter City'
              />
              <input
                type='mobile'
                value=''
                className='w-[45%] border border-gray-300 rounded p-2 my-3 outline-none'
                placeholder='Enter State'
              />
              <input
                type='mobile'
                value=''
                className='w-[45%] border border-gray-300 rounded p-2 my-3 outline-none'
                placeholder='Enter Country'
              />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center mt-[8rem]'>
            <div className='w-full flex justify-center'>
              <div className='border flex items-center justify-center  w-[20rem] mt-[-6rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
                <Link
                  href='/verifyotp'
                  className=' p-3 !font-medium dark:border-defaultborder/10'
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
