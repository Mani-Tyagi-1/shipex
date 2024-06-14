'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle, FaMobileAlt } from 'react-icons/fa';
import Logo from '../../../assets/Icons/Shipex-transparent-logo.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !username ||
      !lastname ||
      !email ||
      !company ||
      !password ||
      !confirmPassword
    ) {
      alert('Please fill in all fields');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert('Registration successful');
    }
  };

  return (
    <div className='bg-[#D3D3D3] '>
      <div className='flex justify-center items-center'>
        <div>
          <div className='flex flex-col items-center'>
            <div className=' flex justify-center'>
              <Link href='/'>
                <Image src={Logo} alt='logo' width={100} height={100} />
              </Link>
            </div>
            <div className=' bg-white rounded-lg  w-full'>
              <div className='box-body pt-[1.25rem] p-[3rem]'>
                <p className='text-[1.25rem] font-semibold mb-2 text-center'>
                  Registration
                </p>
                <p className='mb-4 text-[#59606c] text-[0.875rem] font-normal text-center'></p>
                <div className='grid grid-cols-14 gap-y-4 '>
                  <div className='xl:col-span-12  col-span-12'>
                    <label
                      htmlFor='signup-firstname'
                      className='text-[.85rem] font-bold text-gray-700'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-company'
                      placeholder='Your Company'
                    />
                  </div>
                </div>
                <div className='xl:col-span-12 col-span-12 mt-4'>
                  <label
                    htmlFor='signup-total-order'
                    className='text-[.85rem] font-bold text-gray-700'
                  >
                    How many orders do you ship in a month?
                  </label>
                  <select
                    type='number'
                    id='monthly_orders'
                    name='monthly_orders'
                    class='w-full p-3 border rounded-lg text-sm outline-[#00c27c] outline-[1px]'
                    placeholder='Your Mobile address'
                    required=''
                  >
                    <option value=''>Select</option>
                    <option value='500'>0 - 500</option>
                    <option value='2000'>501 - 2000</option>
                    <option value='5000'>2001 - 5000 </option>
                    <option value='5000+'>5000+</option>
                  </select>
                </div>

                <div className='xl:col-span-12 col-span-12 mt-4'>
                  <label
                    htmlFor='signup-password'
                    className='text-[.85rem] font-bold text-gray-700'
                  >
                    Password
                  </label>

                  <div className='flex'>
                    <input
                      type={type}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-password'
                      placeholder='password'
                    />
                    <span
                      class='flex justify-end items-center pt-2  text-[.85rem] font-bold text-gray-700'
                      onClick={handleToggle}
                    >
                      <Icon class='absolute mr-3' icon={icon} size={25} />
                    </span>
                  </div>
                </div>
                <div className='xl:col-span-12 col-span-12 mt-4'>
                  <label
                    htmlFor='signup-password'
                    className='text-[.85rem] font-bold text-gray-700'
                  >
                    Confirm Password
                  </label>

                  <div className='flex'>
                    <input
                      type={type}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className=' h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]'
                      id='signup-password'
                      placeholder='confirm password'
                    />
                    <span
                      class='flex justify-end items-center pt-2  text-[.85rem] font-bold text-gray-700'
                      onClick={handleToggle}
                    >
                      <Icon class='absolute mr-3' icon={icon} size={25} />
                    </span>
                  </div>
                </div>

                <div className='xl:col-span-12 col-span-12 grid mt-4'>
                  <button
                    type='submit'
                    onClick={handleSubmit}
                    className=' hover:bg-[#43aa84] bg-[#00c27c] text-white !font-medium dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] '
                  >
                    Register
                  </button>
                </div>

                <div className='text-center'>
                  <p className='text-[0.75rem] text-[#8c9097]  mt-2'>
                    Already have an account?{' '}
                    <Link
                      href='/signin'
                      className='text-black text-[.90rem]  hover:underline'
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
                <div className='text-center my-2'>
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

export default Signup;
