'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuChevronLeft } from 'react-icons/lu';

const AadhaarDetails = () => {
  const [selectedValue, setSelectedValue] = useState('instant');
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    alert("Upload successful");
    }

  return (
    <div className="w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center">
      <div className="w-[30rem]  fit-content bg-white shadow-lg  p-7 pt-8 rounded-lg">
        <Link href={"/KYC"}>
          <p className="py-2 mb-4 font-bold text-gray-500 text-[.85rem] cursor-pointer flex items-center">
            <LuChevronLeft className="text-[1rem]" />
            Back
          </p>
        </Link>
        <div className="w-full h-full flex flex-col ">
          <h4 className="font-semibold p-2 my-1 text-[1rem]">
            Aadhaar Details{" "}
          </h4>
          <div className="w-full ">
            <select
              type="text"
              id="verificationType"
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
              name="Verification Type"
              class="w-full p-3 mb-2 border rounded-lg text-sm outline-[#00c27c] outline-[1px]"
              placeholder=""
              required=""
            >
              <option value="instant">Instant</option>
              <option value="mannual">Mannual </option>
            </select>

            {selectedValue == "instant" ? (
              <div>
                <input
                  type="number"
                  value={AadhaarDetails}
                  className="w-full  border border-gray-300 rounded p-2 outline-none"
                  placeholder="Enter Aadhaar Number"
                />
              </div>
            ) : (
              <div className="w-full p-4">
                <h3>Upload Front page</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mb-4"
                />
                {preview && (
                  <div className="mb-4 ">
                    <h2 className="text-xl mb-2">Preview:</h2>
                    <Image
                      src={preview}
                      alt="Selected file"
                      className="w-64 h-auto"
                    />
                  </div>
                )}
                <h3>Upload Back page</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mb-4"
                />
                {preview && (
                  <div className="mb-4 ">
                    <h2 className="text-xl mb-2">Preview:</h2>
                    <Image
                      src={preview}
                      alt="Selected file"
                      className="w-64 h-auto"
                    />
                  </div>
                )}
                <button
                  onClick={handleUpload}
                  className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                >
                  Upload Photo
                </button>
              </div>
            )}
          </div>

          <div className="w-full  justify-center">
            <div className="border flex items-center justify-center  w-full  mt-[1rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] ">
              <Link
                href="aadhar/verifyotp"
                className=" !font-medium dark:border-defaultborder/10"
              >
                Send OTP
              </Link>
            </div>

            <div className="border flex items-center justify-center  w-full  mt-[1rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] ">
              <Link
                href="/KYC/bank"
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
};

export default AadhaarDetails;
