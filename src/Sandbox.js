"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Fragment>
                        <div className="bg-blue-400 w-full h-4 md:h-6"></div>
                        <div className="w-full h-5/6 bg-red-600">
                            <div className="container flex flex-row md:h-96 mx-auto">
                                <div className="lg:w-2/3 md:w-3/5 md:h-24 md:my-44">
                                    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
                                        <h2 className="text-3xl md:text-5xl p-3 md:p-1 text-white font-semibold">
                                            Find The Perfect Fashion <br /> Service, That You Need
                                        </h2>
                                        <form className="flex w-full p-5 md:px-5 flex-col items-center justify-center md:flex-row">
                                            <input
                                                type="text"
                                                className="p-3 pl-4 w-full md:rounded-l-xl md:rounded-none md:w-2/5 mb-2 md:mb-0 rounded-2xl"
                                                placeholder="What are you looking for?"
                                            />

                                            <button className="p-3 w-full text-white md:w-1/5 md:rounded-r-xl md:rounded-none rounded-full bg-yellow-600">
                                                Search
                                            </button>
                                        </form>
                                        <div className="text-white hidden md:block">
                                            <span className="font-bold m-3">Popular:</span>
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Fashion designer
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Hairstylist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Barber
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Make Up Artist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Wig Vendor
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Pedicure/Manicure
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Photographer
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 w-1/3 hidden md:block items-center">
                                    <img
                                        src="slide1.png"
                                        className="w-auto h-full md:pt-20"
                                        alt="stopshop360"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </SwiperSlide>
                <SwiperSlide>
                    <Fragment>
                        <div className="bg-blue-400 w-full h-4 md:h-6"></div>
                        <div className="w-full md:h-5/6 bg-gray-500">
                            <div className="container flex flex-row md:h-96 mx-auto">
                                <div className="lg:w-2/3 md:w-3/5 md:h-24 md:my-44">
                                    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
                                        <h2 className="text-3xl md:text-5xl p-3 md:p-1 text-white font-semibold">
                                            Find The Perfect Fashion <br /> Service, That You Need
                                        </h2>
                                        <form className="flex w-full p-5 md:px-5 flex-col items-center justify-center md:flex-row">
                                            <input
                                                type="text"
                                                className="p-3 pl-4 w-full md:rounded-l-xl md:rounded-none md:w-2/5 mb-2 md:mb-0 rounded-2xl"
                                                placeholder="What are you looking for?"
                                            />

                                            <button className="p-3 w-full text-white md:w-1/5 md:rounded-r-xl md:rounded-none rounded-full bg-yellow-600">
                                                Search
                                            </button>
                                        </form>
                                        <div className="text-white hidden md:block">
                                            <span className="font-bold m-3">Popular:</span>
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Fashion designer
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Hairstylist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Barber
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Make Up Artist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Wig Vendor
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Pedicure/Manicure
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Photographer
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 w-1/3 hidden md:block items-center">
                                    <img
                                        src="slider2.png"
                                        className="w-auto  h-full md:pt-20"
                                        alt="stopshop360"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </SwiperSlide>
                <SwiperSlide>
                    <Fragment>
                        <div className="bg-blue-400 w-full h-4 md:h-6"></div>
                        <div className="w-full md:h-5/6 bg-gray-600">
                            <div className="container flex flex-row md:h-96 mx-auto">
                                <div className="lg:w-2/3 md:w-3/5 md:h-24 md:my-44">
                                    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
                                        <h2 className="text-3xl md:text-5xl p-3 md:p-1 text-white font-semibold">
                                            Find The Perfect Fashion <br /> Service, That You Need
                                        </h2>
                                        <form className="flex w-full p-5 md:px-5 flex-col items-center justify-center md:flex-row">
                                            <input
                                                type="text"
                                                className="p-3 pl-4 w-full md:rounded-l-xl md:rounded-none md:w-2/5 mb-2 md:mb-0 rounded-2xl"
                                                placeholder="What are you looking for?"
                                            />

                                            <button className="p-3 w-full text-white md:w-1/5 md:rounded-r-xl md:rounded-none rounded-full bg-yellow-600">
                                                Search
                                            </button>
                                        </form>
                                        <div className="text-white hidden md:block">
                                            <span className="font-bold m-3">Popular:</span>
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Fashion designer
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Hairstylist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Barber
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Make Up Artist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Wig Vendor
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Pedicure/Manicure
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Photographer
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 w-1/3 hidden md:block items-center">
                                    <img
                                        src="slide3.png"
                                        className="w-auto  h-full md:pt-20"
                                        alt="stopshop360"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </SwiperSlide>
                <SwiperSlide>
                    <Fragment>
                        <div className="bg-blue-400 w-full h-4 md:h-6"></div>
                        <div className="w-full md:h-5/6 bg-red-400">
                            <div className="container flex flex-row md:h-96 mx-auto">
                                <div className="lg:w-2/3 md:w-3/5 md:h-24 md:my-44">
                                    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
                                        <h2 className="text-3xl md:text-5xl p-3 md:p-1 text-white font-semibold">
                                            Find The Perfect Fashion <br /> Service, That You Need
                                        </h2>
                                        <form className="flex w-full p-5 md:px-5 flex-col items-center justify-center md:flex-row">
                                            <input
                                                type="text"
                                                className="p-3 pl-4 w-full md:rounded-l-xl md:rounded-none md:w-2/5 mb-2 md:mb-0 rounded-2xl"
                                                placeholder="What are you looking for?"
                                            />

                                            <button className="p-3 w-full text-white md:w-1/5 md:rounded-r-xl md:rounded-none rounded-full bg-yellow-600">
                                                Search
                                            </button>
                                        </form>
                                        <div className="text-white hidden md:block">
                                            <span className="font-bold m-3">Popular:</span>
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Fashion designer
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Hairstylist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Barber
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Make Up Artist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Wig Vendor
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Pedicure/Manicure
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Photographer
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 w-1/3 hidden md:block items-center">
                                    <img
                                        src="slide4.png"
                                        className="w-auto  h-full md:pt-20"
                                        alt="stopshop360"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </SwiperSlide>
                <SwiperSlide>
                    <Fragment>
                        <div className="bg-blue-400 w-full h-4 md:h-6"></div>
                        <div className="w-full md:h-5/6 bg-green-800">
                            <div className="container flex flex-row md:h-96 mx-auto">
                                <div className="lg:w-2/3 md:w-3/5 md:h-24 md:my-44">
                                    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
                                        <h2 className="text-3xl md:text-5xl p-3 md:p-1 text-white font-semibold">
                                            Find The Perfect Fashion <br /> Service, That You Need
                                        </h2>
                                        <form className="flex w-full p-5 md:px-5 flex-col items-center justify-center md:flex-row">
                                            <input
                                                type="text"
                                                className="p-3 pl-4 w-full md:rounded-l-xl md:rounded-none md:w-2/5 mb-2 md:mb-0 rounded-2xl"
                                                placeholder="What are you looking for?"
                                            />

                                            <button className="p-3 w-full text-white md:w-1/5 md:rounded-r-xl md:rounded-none rounded-full bg-yellow-600">
                                                Search
                                            </button>
                                        </form>
                                        <div className="text-white hidden md:block">
                                            <span className="font-bold m-3">Popular:</span>
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Fashion designer
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Hairstylist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Barber
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Make Up Artist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Wig Vendor
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Pedicure/Manicure
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Photographer
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 w-1/3 hidden md:block items-center">
                                    <img
                                        src="slide5.png"
                                        className="w-auto  h-full md:pt-20"
                                        alt="stopshop360"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </SwiperSlide>
                <SwiperSlide>
                    <Fragment>
                        <div className="bg-blue-400 w-full h-4 md:h-6"></div>
                        <div className="w-full md:h-5/6 bg-blue-600">
                            <div className="container flex flex-row md:h-96 mx-auto">
                                <div className="lg:w-2/3 md:w-3/5 md:h-24 md:my-44">
                                    <div className="flex flex-col items-center justify-center py-20 w-full h-full">
                                        <h2 className="text-3xl md:text-5xl p-3 md:p-1 text-white font-semibold">
                                            Find The Perfect Fashion <br /> Service, That You Need
                                        </h2>
                                        <form className="flex w-full p-5 md:px-5 flex-col items-center justify-center md:flex-row">
                                            <input
                                                type="text"
                                                className="p-3 pl-4 w-full md:rounded-l-xl md:rounded-none md:w-2/5 mb-2 md:mb-0 rounded-2xl"
                                                placeholder="What are you looking for?"
                                            />

                                            <button className="p-3 w-full text-white md:w-1/5 md:rounded-r-xl md:rounded-none rounded-full bg-yellow-600">
                                                Search
                                            </button>
                                        </form>
                                        <div className="text-white hidden md:block">
                                            <span className="font-bold m-3">Popular:</span>
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Fashion designer
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Hairstylist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Barber
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Make Up Artist
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Wig Vendor
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Pedicure/Manicure
                                            </span>{" "}
                                            <span className="rounded-full py-1 px-3 border-white border">
                                                Photographer
                                            </span>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 w-1/3 hidden md:block items-center">
                                    <img
                                        src="slide6.png"
                                        className="w-auto  h-full md:pt-20"
                                        alt="stopshop360"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default slider