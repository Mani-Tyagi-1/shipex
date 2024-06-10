import Link from 'next/link';
import React from 'react';

const verifyadhaar = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[20rem]  h-[25rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <h1 className='py-2 mb-4 font-bold text-blck-500 text-[.85rem]'>
          Verify PAN
        </h1>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-2 text-[.90rem]'>PAN</h4>
          <div className='w-full '>
            <input
              type='mobile'
              value=''
              className='w-[100%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Ex. ABCP1234A1'
            />
          </div>
          <div className='w-full h-full flex flex-col '></div>
          <h4 className='font-semibold my-1 text-[.90rem]'>Name</h4>
          <div className='w-full '>
            <input
              type='mobile'
              value=''
              className='w-[100%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Name'
            />
          </div>

          <div className='w-full flex flex-col justify-center mt-[6rem]'>
            <div className='w-full flex justify-center'>
              <div className='border flex items-center justify-center  w-[20rem]  cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
                <Link
                  href='/verifyotp'
                  className=' p-3 !font-medium dark:border-defaultborder/10'
                >
                  Verify
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default verifyadhaar;
