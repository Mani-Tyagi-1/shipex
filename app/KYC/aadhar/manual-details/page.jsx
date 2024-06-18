'use client';

import Link from 'next/link';
import React from 'react';
import { FaUpload } from 'react-icons/fa';
import { LuChevronLeft } from 'react-icons/lu';

const ManualDetails = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[30rem]  fit-content bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <Link href={'/KYC'}>
          <p className='py-2 mb-4 font-bold text-gray-500 text-[.85rem] cursor-pointer flex items-center'>
            <LuChevronLeft className='text-[1rem]' />
            Back
          </p>
        </Link>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold p-2 my-1 text-[1rem]'>
            Aadhaar Details{' '}
          </h4>
          <div className='w-full '>
            <select
              type='text'
              id='verificationType'
              name='Verification Type'
              class='w-full p-3 mb-2 border rounded-lg text-sm outline-[#00c27c] outline-[1px]'
              placeholder=''
              required=''
            >
              <option value='instant'>Instant</option>
              <option value='mannual'>Mannual </option>
            </select>

            <input
              type='text'
              value={ManualDetails}
              className='w-full  border border-gray-300 rounded p-2 outline-none'
              placeholder='Enter Aadhaar Number'
            />
          </div>

          <div className='w-full h-full flex flex-col '>
            <h4 className='font-semi p-2 my-1 text-[1rem]'>
              Upload Front Card{' '}
            </h4>
          </div>
          

          <div className='w-full h-full flex flex-col '>
            <h4 className='font-semi p-2 my-1 text-[1rem]'>
              Upload Back Card{' '}
            </h4>
          </div>

          <div className='w-full  justify-center'>
            <div className='border flex items-center justify-center  w-full  mt-[1rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
              <Link
                href='/KYC/bank'
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

export default ManualDetails;
