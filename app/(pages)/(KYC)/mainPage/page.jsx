import Link from "next/link";
import React from "react";
import { FaAddressCard, FaCreditCard, FaHandshake, FaRegCreditCard } from "react-icons/fa";
import { LuBookUp2, LuLandmark } from "react-icons/lu";


const MainPage = () => {

  const data = [
    {
      id: 1,
      name: "Basic Details",
      logo: <LuBookUp2 />,
      link: "/mainPage/basic-details/mobilenumber",
    },
    {
      id: 2,
      name: "Pan Details",
      logo: <FaRegCreditCard/>,
      link: "/pancard-details",
    },
    {
      id: 3,
      name: "GST Details",
      logo: <FaCreditCard />,
      link: "/#",
    },
    {
      id: 4,
      name: "Aadhar Details",
      logo: <FaAddressCard />,
      link: "/verifyadhaar",
    },
    {
      id: 5,
      name: "Bank Details",
      logo: <LuLandmark />,
      link: "/bank-details",
    },
    {
      id: 6,
      name: "Agreement",
      logo: <FaHandshake />,
      link: "/#",
    },
  ];


  return (
    <div className="w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center">
      <div className="w-[30rem]  h-[32rem] bg-white shadow-lg  p-7 pt-8 rounded-lg">
        <h1 className="py-0 mb-4 font-bold text-blck-500 text-[.95rem]">
          Complete your KYC
        </h1>

        <div className="w-full h-full flex flex-col mt-7 ">
          <select
            type="number"
            id="monthly_orders"
            name="monthly_orders"
            class="w-full p-3 border rounded-lg text-sm outline-[#00c27c] outline-[1px]"
            placeholder="Your Mobile address"
            required=""
          >
            <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="soleproprietor">Sole-proprietor</option>
            <option value="company">Company </option>
          </select>

          <div className="w-full mt-5 ">
            <div className="w-full flex flex-wrap justify-between pr-4m-2">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="w-[47%] h-[3rem]  flex my-4 justify-center items-center shadow-md cursor-pointer rounded-md hover:scale-[1.07]  transition-all"
                >
                  <Link
                    href={item.link}
                    className="flex justify-center items-center gap-2  text-green-500 "
                  >
                    {item.logo}
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div></div>
          </div>

          <div className="w-full flex flex-col justify-center mt-[5rem]">
            <div className="w-full flex justify-center">
              <div className="border flex items-center justify-center  w-full mt-[-3rem] cursor-pointer hover:bg-[#43aa84] bg-[#00c27c] text-white  dark:border-defaultborder/10 h-[2.5rem] rounded-[2rem] ">
                <Link
                  href="/verifyotp"
                  className=" p-3 !font-medium dark:border-defaultborder/10"
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

export default MainPage;
