import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react"; // Icon Library

const images = [
  "/images/c1.webp",
  "/images/c2.webp",
  "/images/c3.webp",
  "/images/c4.webp",
  "/images/c5.webp",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[98%] ml-3 mt-4 h-64 overflow-hidden bg-gradient-to-r from-pink-400 to-pink-200 flex justify-center items-center rounded-lg shadow-lg">
      {/* Image */}
      <motion.img
        key={index}
        src={images[index]}
        alt="Banner"
        className="w-full h-full object-cover rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      />

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-lg hover:bg-gray-100 transition"
      >
        <ChevronLeft className="text-gray-700 w-6 h-14" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-lg hover:bg-gray-100 transition"
      >
        <ChevronRight className="text-gray-700 w-6 h-14" />
      </button>
    </div>
  );
};

export default Banner;
