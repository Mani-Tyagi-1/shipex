'use client';

import Link from 'next/link';
import { LuChevronLeft } from 'react-icons/lu';

const Agreement = () => {

 
  
  return (
    <div className="w-full min-h-screen bg-[#D3D3D3] flex justify-center items-center">
      <div className="w-[33rem]  fit-content bg-white shadow-lg  p-7 pt-8 rounded-lg">
        <Link href={"/KYC"}>
          <p className="py-2 mb-4 font-bold text-gray-500 text-[.85rem] cursor-pointer flex items-center">
            <LuChevronLeft className="text-[1rem]" />
            Back
          </p>
        </Link>

        <div className="w-full flex flex-col bg-green-100 p-4 rounded-md shadow-md">
          <p className="text-[.75rem]">
            <b> Agreement Shipex India (SNPL) </b> <br />
            This Agreement is made and executed on01 August 2023 (&#34;Execution
            Date&#34;) and effective from 15/6/2024 3:00 PM&#34; (&#34;Effective
            Date&#34;) by and between: <br />
            Shipexpress Network Private Limited, a company incorporated under
            the provisions of the Companies Act, 2013, and having its registered
            office at 2144, Kirti Nagar, Behind Mohta Factory, Bhiwani, Haryana
            127021, (hereinafter referred to as &#34;Company&#34; or
            &#34;Service Provider&#34; or &#34;Shipex India or SNPL&#34;), which
            means and include, unless repugnant to the context or meaning
            thereof mean and include its liquidators, successors, receivers and
            assigns of ONE PART: <br />
            -and- <br />
            rajendraaverma@gmail.com a incorporated under the provisions of
            Companies Act 1956/2013 and having its registered office at
            undefined. (hereinafter referred to as
            &#34;Customer/Merchant/User&#34;), which means and include, unless
            repugnant to the context or meaning thereof mean and include its
            affiliates, assign, liquidators, successors and permitted assigns of
            the OTHER PART.
          </p>
        </div>

        <div className="mt-4">
          <input type="checkbox" />{" "}
          <label> I accept the terms and conditions</label>
        </div>

        <div className="w-full flex justify-end">
        <Link href={"/KYC"}>
          <button type='submit' className="bg-[#00c27c] px-3 text-white rounded p-2 mt-4">
            Accept
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
