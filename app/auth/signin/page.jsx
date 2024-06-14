'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaMobileAlt } from 'react-icons/fa';
import Image from 'next/image';
import Logo from "../../Shipex-transparent-logo.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";




const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Please enter your username");
    }
    else if (!password) {
      alert("Please enter your password");
    }
    else {
      alert("Login successful");
    }

    
  }

  return (
    <div className="bg-[#D3D3D3]">
      <div className="flex justify-center min-h-screen  items-center">
        <div>
          <div className="flex flex-col items-center">
            <div className=" mt-[-5rem] flex justify-center">
              <Link href="/">
                <Image src={Logo} alt="logo" width={100} height={100} />
              </Link>
            </div>

            <div className=" bg-white rounded-lg shadow-lg w-full ">
              <div className="box-body pt-[1.25rem] p-[3rem]">
                <p className="text-[1.25rem] font-semibold mb-2 text-center">
                  Sign In
                </p>
                <p className="mb-4 text-[#59606c] text-[0.875rem] font-normal text-center">
                  Welcome Back !!
                </p>
                <div className="grid grid-cols-12 gap-y-4">
                  <div className="xl:col-span-12 col-span-12">
                    <label
                      htmlFor="signup-firstname"
                      className="text-[.85rem] font-bold text-gray-700"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className=" h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]"
                      id="signup-firstname"
                      placeholder="first name"
                    />
                  </div>
                  <div className="xl:col-span-12 col-span-12">
                    <label
                      htmlFor="signin-password"
                      className="text-[.85rem] font-bold text-gray-700"
                    >
                      Password
                    </label>

                    <div className='flex'>
                    <input
                      type={type}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      className=" h-[2.25rem] mt-2  p-2 outline-none border border-gray-200 w-full !rounded-md placeholder:text-gray-300 placeholder:text-[.90rem]"
                      id="signup-password"
                      placeholder="password"
                    />
                    <span
                      class="flex justify-end items-center pt-2  text-[.85rem] font-bold text-gray-700"
                      onClick={handleToggle}
                    >
                      <Icon class="absolute mr-3" icon={icon} size={25} />
                    </span>
                    </div>
                  </div>{" "}
                  <div className="xl:col-span-12 col-span-12 grid mt-2">
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        className="border border-black rounded-md"
                      />
                      <label
                        htmlFor="defaultCheck1"
                        className="text-[#8c9097] text-[.85rem] font-normal"
                      >
                        Remember Password ?
                      </label>
                    </div>
                  </div>
                  <div className="xl:col-span-12 col-span-12 grid mt-2">
                    <button
                      type="submit"
                      className=" hover:bg-[#43aa84] bg-[#00c27c] text-white !font-medium dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] "
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[0.75rem] text-[#8c9097]  mt-4">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/auth/registration"
                      className=" text-black text-[.90rem]  hover:underline"
                    >
                      Register here
                    </Link>
                  </p>
                </div>
                <div className="text-center my-4">
                  <span>OR</span>
                </div>
                <div className=" flex justify-center gap-2">
                  <div className=" ">
                    <Link href="#">
                      <FaMobileAlt style={{ fontSize: "1.5rem" }} />
                    </Link>
                  </div>
                  <div className=" ">
                    <Link href="#">
                      <FaGoogle style={{ fontSize: "1.5rem" }} />
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

export default Login;
