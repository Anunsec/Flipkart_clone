import { useState } from "react";

const Navbar = () => {
  const [Pop, setPop] = useState(false);

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-3 md:px-8 py-2 bg-white shadow-md">
        
        {/* Logo */}
        <img
          src="/images/logo_flipkart.svg"
          alt="Flipkart Logo"
          className="w-24 md:w-auto"
        />

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-[40%] bg-blue-50 rounded-md px-2 mt-2 md:mt-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#717478"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 16L21 21"
              stroke="#717478"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="search"
            className="flex-1 bg-blue-50 px-2 py-1 text-sm md:text-base outline-none"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        {/* Right Side Options */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-9 mt-2 md:mt-0">
          <div className="flex items-center gap-1 text-sm md:text-base">
            <img src="/images/profile.svg" alt="Profile" className="w-5" />
            <p>Login</p>
          </div>
          <div className="flex items-center gap-1 text-sm md:text-base">
            <img src="/images/cart.svg" alt="Cart" className="w-5" />
            <p>Cart</p>
          </div>
          <div className="flex items-center gap-1 text-sm md:text-base">
            <img src="/images/seller_1.svg" alt="Seller" className="w-5" />
            <p>Seller</p>
          </div>

          {/* More Options */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setPop(true)}
            onMouseLeave={() => setPop(false)}
          >
            <button className="bg-white hover:bg-zinc-100 w-9 h-9 rounded-md border">
              &#8942;
            </button>
            {Pop && (
              <div className="absolute right-0 top-12 bg-white border shadow-md p-1 rounded-md w-36 z-50">
                {[
                  { icon: "/images/notif.svg", text: "Notification" },
                  { icon: "/images/cus.svg", text: "24X7 Care" },
                  { icon: "/images/advertise.svg", text: "Advertise" },
                  { icon: "/images/download.svg", text: "Download" },
                ].map((item, i) => (
                  <p
                    key={i}
                    className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex gap-2 items-center"
                  >
                    <img src={item.icon} className="w-4" alt="" />
                    <span>{item.text}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
