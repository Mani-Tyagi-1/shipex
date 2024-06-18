'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { LuChevronLeft } from 'react-icons/lu';

const GST = () => {
  const [GstDetails, setGstDetails] = useState(' ');

  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[25rem]  h-[23rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <Link href={'/KYC'}>
          <p className='py-2 mb-4 font-bold text-gray-500 text-[.85rem] cursor-pointer flex items-center'>
            <LuChevronLeft className='text-[1rem]' />
            Back
          </p>
        </Link>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-4 text-[1rem]'>GST Details </h4>
          <div className='w-full '>
            <input
              type='text'
              value={GstDetails}
              onChange={(e) => setGstDetails(e.target.value)}
              className='w-[95%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Enter GST Number'
            />
          </div>

          <div className='w-full  justify-center'>
            <div className='border flex items-center justify-center  w-full  mt-[3rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
              <Link
                href='/KYC'
                className=' !font-medium dark:border-defaultborder/10'
              >
                Verify GST
              </Link>
            </div>

            <div className='border flex items-center justify-center  w-full  mt-[1rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
              <Link
                href='/KYC'
                className=' !font-medium dark:border-defaultborder/10'
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GST;
