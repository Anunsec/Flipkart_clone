import { useState } from "react";

const Navbar = () => {
  const [Pop, setPop] = useState(false);

  return (
    <>
      <div className="flex mt-3 justify-around w-full h-12 bg-white ">
        <img src="/images/logo_flipkart.svg" alt="Flipkart Logo" />
        <div className="w-[40%] bg-blue-50 flex justify-center items-center gap-2 rounded-md mb-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search Icon</title>
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#717478"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16 16L21 21"
              stroke="#717478"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <input
            type="search"
            className="flex items-center bg-blue-50 w-[85%] rounded-md placeholder-black outline-0"
            placeholder="Search for Products, Brands and More"
          />
        </div>
        <div className="flex gap-9">
          <div className="flex items-center">
            <img src="/images/profile.svg" alt="Profile" />
            <p>Login</p>
          </div>
          <div className="flex items-center">
            <img src="/images/cart.svg" alt="Cart" />
            <p>Cart</p>
          </div>
          <div className="flex items-center">
            <img src="/images/seller_1.svg" alt="Seller" />
            <p>Become a Seller</p>
          </div>
          <div
            className="relative flex items-center"
            onMouseEnter={() => setPop(true)}
            onMouseLeave={() => setPop(false)}
          >
            <button className="bg-white hover:bg-zinc-100 w-[40px] h-[40px] rounded-md">
              &#8942;
            </button>
            {Pop && (
              <div className="absolute right-0 top-10 bg-white border shadow-md p-1 rounded-md w-36 ">
                <p className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex gap-1">
                  <img src="/images/notif.svg "></img><p>Notification</p>
                </p>
                <p className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex gap-1 ">
                <img src="/images/cus.svg"></img><p>24X7 Care</p>
                </p>
                <p className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex gap-1">
                <img src="/images/advertise.svg"></img><p>Advertise</p>
                </p>
                <p className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex gap-1">
                <img src="/images/download.svg"></img><p>Download</p>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
