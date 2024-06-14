'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { LuChevronLeft } from 'react-icons/lu';

const BasicDetails = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center">
      <div className="w-[30rem] fit-content  bg-white shadow-lg  p-7 pt-8 rounded-lg">
        <Link href={"/KYC"}>
        <p className="py-2 mb-4 font-bold text-gray-500 text-[.85rem] cursor-pointer flex items-center">
          <LuChevronLeft className='text-[1rem]' />
          Back
        </p>
        </Link>
        <div className="w-full h-full flex flex-col ">
          <h4 className="font-semibold p-2 my-1 text-[1rem]">
            Enter Basic Details{" "}
          </h4>
          <div className="w-full ">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 mt-3 rounded-lg p-2 outline-none"
              placeholder="Enter your name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 mt-4 rounded-lg p-2 outline-none"
              placeholder="Enter Aadhaar Number"
            />
            <input
              type="number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full border border-gray-300 mt-4 rounded-lg p-2 outline-none"
              placeholder="Enter Aadhaar Number"
            />
          </div>
          <h4 className="font-semibold p-2 mt-3 text-[1rem]">Address </h4>
          <div className="w-full">
            <input
              type="text"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              className="w-full border border-gray-300 mt-3 rounded-lg p-2 outline-none"
              placeholder="Address Line 1"
            />
            <input
              type="email"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              className="w-full border border-gray-300 mt-4 rounded-lg p-2 outline-none"
              placeholder="Address Line 2"
            />
            <div className="flex flex-wrap gap-4">
              <input
                type="number"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="w-[48%] border border-gray-300 mt-4 rounded-lg p-2 outline-none"
                placeholder="Enter Pincode"
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-[48%] border border-gray-300 mt-4 rounded-lg p-2 outline-none"
                placeholder="Enter City"
              />
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-[48%] border border-gray-300 mt-2 rounded-lg p-2 outline-none"
                placeholder="Enter State"
              />
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-[48%] border border-gray-300 mt-2 rounded-lg p-2 outline-none"
                placeholder="Enter Country"
              />
            </div>
          </div>

          <div className="w-full  justify-center">
            <div className="border flex items-center justify-center  w-full  mt-[1rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] ">
              <Link
                href="/verifyotp"
                className=" !font-medium dark:border-defaultborder/10"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails