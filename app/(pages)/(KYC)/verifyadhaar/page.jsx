import Link from 'next/link';
import React from 'react';

const verifyadhaar = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[25rem]  h-[20rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <h1 className='py-2 mb-4 font-bold text-blck-500 text-[.85rem]'>
          Verify Aadhaar
        </h1>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-4 text-[1rem]'>Aadhaar Number</h4>
          <div className='w-full '>
            <input
              type='mobile'
              value=''
              className='w-[100%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Ex. XXXXXXX1234'
            />
          </div>

          <div className='w-full flex flex-col justify-center mt-[3rem]'>
            <div className='w-full flex justify-center'>
              <div className='border flex items-center justify-center  w-full  cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
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
