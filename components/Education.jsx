import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col w-full justify-start content-between p-8">
      <h2 className="text-stone-100 tracking-widest">Education</h2>

      <div className="p-6 w-full  mt-4 bg-[#4f4f4f]">
        <h2 className="text-stone-300 font-normal">Front-End Development </h2>
        <div className="flex content-between w-full  text-stone-200">
          <p className="text-emerald-400 tracking-wider">Nackademin AB</p>
          <p className="text-emerald-400 px-8 ">2021 - 2023</p>
        </div>
      </div>

      <div className="p-6 w-full mt-4 bg-[#4f4f4f]">
        <h2 className="text-stone-300 font-normal">Masters in Design for All </h2>
        <div className="flex content-between w-full  text-stone-200">
          <p className="text-emerald-400 tracking-wider">
            Mid Sweden University
          </p>
          <p className="text-emerald-400 px-8 ">2015 - 2017</p>
        </div>
      </div>

      <div className="p-6 w-full mt-4 bg-[#4f4f4f]">
        <h2 className="text-stone-300 font-normal">
          Bachelore in Industrial Design{" "}
        </h2>
        <div className="flex content-between w-full  text-stone-200">
          <p className="text-emerald-400 tracking-wider">
            Mid Sweden University
          </p>
          <p className="text-emerald-400 px-8 ">2001 - 2007</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
