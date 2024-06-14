'use client';

import Link from 'next/link';
import React from 'react';

const PanCard = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[25rem]  h-[23rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <p className='py-2 mb-4 font-bold text-gray-500 text-[.85rem]'>Back</p>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-4 text-[1rem]'>PAN Card Details </h4>
          <div className='w-full '>
            <input
              type='mobile'
              value={PanCard}
              className='w-[95%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Enter PAN Number'
            />
          </div>

          <div className='w-full  justify-center'>
            <div className='border flex items-center justify-center  w-full  mt-[3rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
              <Link
                href='/verifyotp'
                className=' !font-medium dark:border-defaultborder/10'
              >
                Verify PAN
              </Link>
            </div>
           
            <div className='border flex items-center justify-center  w-full  mt-[1rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
              <Link
                href='/verifyotp'
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

export default PanCard;
