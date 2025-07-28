import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Banner from "./Components/Banner";
import Body_2 from "./Components/Body_2";
import Body_3 from "./Components/Body_3";
import Footer from "./Components/Footer";
const App=()=>{
  return(
    <>
    <div className="bg-zinc-200 w-full h-full">
      <Navbar/>
      <Body/>
      <Banner/>
      <Body_2/>
      <Body_3/>
      <Footer/>
      </div>
      </>
  )
}
export default App;