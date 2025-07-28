import React from "react";

const Body = () => {
  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap bg-white justify-around mt-3 rounded-md gap-6 sm:gap-10 w-[98%] ml-1 sm:ml-3 p-3 font-semibold text-center">
        <div className="w-1/3 sm:w-auto">
          <img src="/images/surf.webp" alt="" className="w-16 mx-auto" />
          <p>Kilos</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/mobile.webp" alt="" className="w-16 mx-auto" />
          <p>Mobiles</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img
            src="/images/fashion.jpg"
            alt=""
            className="w-16 mx-auto hover:scale-150 transition-transform duration-300"
          />
          <p>Fashion</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/electronics.jpg" alt="" className="w-16 mx-auto" />
          <p>Electronics</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/home.jpg" alt="" className="w-16 mx-auto" />
          <p>Home & Furniture</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/appliances.webp" alt="" className="w-16 mx-auto" />
          <p>Appliances</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/flight.webp" alt="" className="w-16 mx-auto" />
          <p>Flight Booking</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/beauty.webp" alt="" className="w-16 mx-auto" />
          <p>Beauty, Toys & more</p>
        </div>

        <div className="w-1/3 sm:w-auto">
          <img src="/images/bike.jpg" alt="" className="w-16 mx-auto" />
          <p>Two Wheelers</p>
        </div>
      </div>
    </>
  );
};

export default Body;
