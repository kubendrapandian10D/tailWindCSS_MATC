import React from "react";
import { HiBars3BottomLeft } from 'react-icons/hi2';


import { HiOutlineSquaresPlus } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="bg-blackRock min-h-screen w-64">
      <div className="pt-6 pb-102 flex mr-4 ">
        <HiBars3BottomLeft size={22} className="ml-5 self-center	text-white" />
        <img src="./images/navbar/Logo.svg" alt="Seller Center Logo" className="pl-6" />
      </div>


      <div className="flex  bg-midBlack">

        <div className="w-0.5 bg-white">

        </div>
        <div className="flex w-full justify-between mb-1  bg-mildGrey mx-3.5 py-4 ">

          <div className=" flex">
            <img src="./images/navbar/apps__overview.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className="text-white   pl-2 " >Overview</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex justify-between mb-1   mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/grip-horizontal__products.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Produts</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

      <div className="flex justify-between mb-1   mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/tag__orders.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Orders</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

      <div className="flex justify-between mb-1   mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/brand-google-analytics__reports.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Reports</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

      <div className="flex justify-between mb-1   mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/settings.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Setting</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

      <div className="flex justify-between mb-1   mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/user__administration.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Adminstration</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

      <div className="flex justify-between mb-1   mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/tool__Maintenance.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Maintenance</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

      <div className="flex justify-between mb-1    mx-3.5 py-4 ">
        <div className=" flex">
          <img src="./images/navbar/aperture__Help.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
          <p className="text-white   pl-2 " >Help</p>
        </div>
        <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
      </div>

    </div>
  );
};

export default Navbar;
