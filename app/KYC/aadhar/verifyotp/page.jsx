import Link from 'next/link';
import React from 'react';

const verifyOtp = () => {
  return (
    <div className='w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center'>
      <div className='w-[25rem]  h-[23rem] bg-white shadow-lg  p-7 pt-8 rounded-lg'>
        <p className='py-2 mb-4 font-bold text-gray-500 text-[.85rem]'>
          Contact Details
        </p>
        <div className='w-full h-full flex flex-col '>
          <h4 className='font-semibold my-4 text-[1rem]'>Enter the OTP </h4>
          <div className='w-full '>
            <input
              type='mobile'
              value=''
              className='w-[100%] border border-gray-300 rounded p-2 outline-none'
              placeholder='Enter Mobile Number'
            />
            <div className='w-full flex justify-end px-5 hover:underline'>
              <Link href='#' className='text-blue-400 text-[.85rem] font-bold'>
                Resend OTP
              </Link>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center mt-[3rem]'>
            <div className='w-full h-full mb-2 flex justify-center'>
              <p className='font-semibold text-center text-[.65rem] text-gray-400'>
                By clicking &quot;Submit OTP&quot,I agree{' '}
                <Link href='#' className='text-[#00c27c]'>
                  {' '}
                  Terms & Conditions
                </Link>
                ,{' '}
                <Link href='#' className='text-[#00c27c]'>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href='#' className='text-[#00c27c]'>
                  {' '}
                  Service Agreement
                </Link>{' '}
              </p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='border flex items-center justify-center  w-[20rem]  cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '>
                <Link
                  href='/KYC/aadhar'
                  className=' p-3 !font-medium dark:border-defaultborder/10'
                >
                  Submit OTP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default verifyOtp;
