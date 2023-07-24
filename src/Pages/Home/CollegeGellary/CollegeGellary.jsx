import React from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CollegeGellary = () => {
  const gellaryData = useLoaderData();

  useEffect(() => {
    AOS.init();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <section className="container mx-auto px-6 mt-20">
      <h2 className="text-center text-xl md:text-3xl font-semibold mb-8 md:mb-12">
        University Art Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">
        {gellaryData.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-none shadow-md overflow-hidden relative flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay={index * 100}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <img
              src={image.college_image}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-cover"
              data-aos="flip-left"
              data-aos-duration="800"
            />
            {hoveredIndex === index && (
              <button
                className="absolute md:top-[115px] md:left-[120px] transform -translate-x-1/2 -translate-y-1/2 border-0 opacity-75 bg-[#fc5c3f] hover:bg-[#fc5c3f] text-white px-6 py-2 font-semibold"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Admission Now
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeGellary;
