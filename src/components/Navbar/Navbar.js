import React, { useState } from "react";
import { HiBars3BottomLeft } from 'react-icons/hi2';

const Navbar = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className={`bg-blackRock min-h-screen ${open?`w-64`:`w-88`} duration-500`}>
      <div className="pt-6 pb-102 flex   ">
        <HiBars3BottomLeft size={22} className={`ml-5 self-center h-8	text-white`} onClick={()=>setOpen(!open)}/>
        <img src="./images/navbar/Logo.svg" alt="Seller Center Logo" className={`pl-6  ${!open && ` hidden translate-x-28`}`} />
      </div>


      <div className={"flex group  hover:bg-midBlack"}>
        <div className="pl-0.5 bg-white  invisible group-hover:visible ">
        </div>
        <div className="flex w-full justify-between mb-1  bg-mildGrey mx-3.5 py-4 ">

          <div className=" flex">
            <img src="./images/navbar/apps__overview.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`} >Overview</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/grip-horizontal__products.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`} >Produts</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/tag__orders.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`} >Orders</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/brand-google-analytics__reports.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`}  >Reports</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/settings.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`}  >Setting</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>
      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/user__administration.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`} >Adminstration</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/tool__Maintenance.svg" alt="Oerview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`} >Maintenance</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>

      <div className="flex group  hover:bg-midBlack">
        <div className="pl-0.5 bg-white  invisible group-hover:visible">
        </div>
        <div className="flex justify-between mb-1  w-full mx-3.5 py-4 ">
          <div className=" flex">
            <img src="./images/navbar/aperture__Help.svg" alt="Overview Icon " className="pl-5 pr-2  " />
            <p className={`text-white pl-2  ${!open && `opacity-0`}`} >Help</p>
          </div>
          <img className="pr-4    " src="./images/navbar/chevron-right__arrow.svg" alt="arrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
