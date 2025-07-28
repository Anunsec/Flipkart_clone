import React from "react";

const Body_2 = () => {
  return (
    <>
      <div className="bg-white flex flex-wrap sm:flex-nowrap mt-2 ml-1 sm:ml-3 rounded-md w-[98%] p-2">
        <h3 className="font-medium text-xl sm:text-3xl w-full sm:w-auto mb-2 sm:mb-0 ml-2 sm:ml-3 font-helvicta">
          Trending Products
        </h3>

        <div className="p-2 w-1/2 sm:w-auto">
          <img src="/images/cycle.png" alt="" className="w-full sm:w-[95%]" />
        </div>

        <div className="p-2 w-1/2 sm:w-auto">
          <img src="/images/pen.png" alt="" className="w-full sm:w-[95%]" />
        </div>

        <div className="p-2 w-1/2 sm:w-auto">
          <img src="/images/dry.png" alt="" className="w-full sm:w-[95%]" />
        </div>

        <div className="p-2 w-1/2 sm:w-auto mt-2 sm:mt-7">
          <img src="/images/g.png" alt="" className="w-full sm:w-[90%]" />
        </div>
      </div>
    </>
  );
};

export default Body_2;
