import React from 'react';
import { FaStar } from 'react-icons/fa';
import aboutCarImage from '../assets/about_car.png';
import { FadeIn, ScaleIn } from './common/Reveal';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <FadeIn direction="right">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-6 bg-secondary"></div>
                                <span className="text-blue-600 font-bold tracking-wide uppercase text-sm md:text-base">
                                    #No.1 Outstation Cabs in Hyderabad
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 font-sans">
                                Welcome to SS Tours & Travels - <span className="text-primary">Reliable Cab Service</span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                                Looking for reliable and affordable outstation cabs from Hyderabad? Look no further than <span className="font-semibold text-primary">SS Tours & Travels</span>. We specialize in offering top-notch outstation taxi services, ensuring a comfortable and hassle-free travel experience.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                                Whether it's a quick one-way trip or an extensive outstation journey, we've got you covered. Explore our range of services, including one-way outstation cabs, local packages, and airport transfers. Choose SS Tours & Travels for a seamless travel experience from Hyderabad.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex text-yellow-400 text-xl md:text-2xl">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className="text-yellow-400" />
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-gray-900 leading-none">4.8</span>
                                    <span className="text-xl text-gray-500 font-medium mb-1">/5</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image/Visual */}
                    <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                        <ScaleIn delay={0.2}>
                            <div className="relative">
                                {/* Car Image - Finding a sedan side view similar to reference */}
                                <img
                                    src="/images/fleet-4-branded.png"
                                    alt="SS Tours and Travels Branded Cab"
                                    className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-lg"
                                />
                                {/* Decorative Circle/Blob behind */}
                                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-yellow-50 rounded-full opacity-70 blur-3xl"></div>
                            </div>
                        </ScaleIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
