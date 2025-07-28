import react from 'react';


const Body=()=>{
return(
    <>
    <div className='flex bg-white justify-around mt-3 rounded-md gap-10 w-[98%] ml-3 p-4 font-semibold'>
        <div className=''>
        <img src="/images/surf.webp" alt="" className='w-[70px] ml-'/><p>Kilos</p>
        </div>
        <div>
        <img src="/images/mobile.webp" alt=""className='w-[70px]' /><p>Mobiles</p>
        </div>
        <div className=''>
        <img src="/images/fashion.jpg" alt="" className='w-[70px] hover:scale-150 transition-transform duration-300' /><p>Fashion</p>
        </div>
        <div>
        <img src="/images/electronics.jpg" alt="" className='w-[70px]'/><p>Electronics</p>
        </div>
        <div className=''>
        <img src="/images/home.jpg" alt=""className='w-[70px]' /><p className=''>Home & Furniture</p>
        </div>
        <div>
        <img src="/images/appliances.webp" alt="" className='w-[70px]'/><p>Applicances</p>
        </div>
        <div>
        <img src="/images/flight.webp" alt="" className='w-[70px]'/><p className=''>Flight Booking</p>
        </div>
        <div className=''>
        <img src="/images/beauty.webp" alt="" className='w-[70px] ml-'/><p className=''>Beauty, Toys & more</p>
        </div>
        <div>
        <img src="/images/bike.jpg" alt="" className='w-[70px]'/><p>Two Wheelers</p>
        </div>
    </div>
    </>
)
}
export default Body;