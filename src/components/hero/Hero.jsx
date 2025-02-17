import React from "react";
import Navbar from "../navbar/Navbar";
import me from "../../assets/itzMe1.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px] flex flex-col items-center">
      <div className="md:h-[800px] h-[1100px] md:w-[2100px] w-[1200px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-6 -top-40 z-0">
      </div>
      <Navbar />
      {/* The Title beside my Image: */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 pt-18 md:pt-26 md:pb-24 mt-18 md-mt-0 z-10">
        <div data-aos="fade-right" className="flex-1 md-text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Mo'men ElSheemy</h1>
          <p data-aos="fade-right" data-aos-delay="500" className="text-base sm:text-lg md:text-lg text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam necessitatibus, 
          </p>
          
          <button type='button' data-aos="fade-right" data-aos-delay="1000" className='text-gray-950 mt-4 bg-white hover:bg-blue-300 cursor-pointer font-semibold rounded-lg transition-all text-sm px-5 py-2.5 text-center'>
            Contact
          </button>
        </div>
        {/* My Image : */}
        <div data-aos="fade-left" className="flex-1 flex justify-center md:justify-end mt-0 md:mt-0">
          <img src={me} alt="Hero Image" className="h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg" />
        </div>
      </section>

    </div>
  );
}