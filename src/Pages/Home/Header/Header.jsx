import { Swiper, SwiperSlide } from "swiper/react";

// slider image import
import slider1 from "../../../../public/assets/slider1.jpg";
import slider2 from "../../../../public/assets/slider2.jpg";
import slider3 from "../../../../public/assets/slider3.jpg";
import slider4 from "../../../../public/assets/slider4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <div className="container flex flex-col-reverse px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row-reverse lg:items-center mb-16">
          <div className="max-w-lg lg:mr-auto lg:order-2 my-8">
            <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">
              Empowering Your Educational Journey through Admissions
            </h1>
            <p className="mt-4">
              Welcome to AdmissionPro - Your all-in-one admission portal for
              students and aspiring learners. We provide a seamless and
              user-friendly platform that empowers you to explore a wide range
              of educational opportunities
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="px-6 py-2.5 mt-6 text-md font-medium leading-5 text-center text-white capitalize bg-[#fc5c3f] hover:bg-[#fc5c3f] lg:mx-0 lg:w-auto focus:outline-none hover:opacity-80"
              >
                Explore more
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-64 md:h-96 md:w-1/2">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="object-cover w-full h-full max-w-2xl rounded-md"
                  src={slider1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover w-full h-full max-w-2xl rounded-md"
                  src={slider2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover w-full h-full max-w-2xl rounded-md"
                  src={slider3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-cover w-full h-full max-w-2xl rounded-md"
                  src={slider4}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
