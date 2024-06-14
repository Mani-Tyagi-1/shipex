"use client";

import Link from "next/link";
import React, { useState } from "react";

const MobileNumber = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  return (
    <div className="w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center">
      <div className="w-[25rem]  h-[27rem] bg-white shadow-lg  p-7 pt-8 rounded-lg">
        <p className="py-2 mb-4 font-bold text-gray-500 text-[.85rem]">
          Contact Details
        </p>
        <div className="w-full h-full flex flex-col ">
          <h4 className="font-semibold my-4 text-[1rem]">
            What&#39;s your Mobile Number ?{" "}
          </h4>
          <div className="">
            <input
              type="mobile"
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
              className="w-[95%] border border-gray-300 rounded p-2 outline-none"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="border flex items-center justify-center  w-[20rem]  mt-[11rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] ">
              <Link
                href="verifyotp"
                className=" !font-medium dark:border-defaultborder/10"
              >
                Sent OTP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNumber;
