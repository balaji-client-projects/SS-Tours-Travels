import React from 'react';
import { FaClock, FaRoad, FaCheck } from 'react-icons/fa';

const Packages = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    <div className="lg:w-1/2 text-white">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Special Offer</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Popular City Package</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Explore Hyderabad with our most popular flexible package. Perfect for business meetings, shopping sprees, or visiting relatives.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-lg">
                                <span className="bg-secondary text-primary p-1 rounded-full"><FaCheck size={12} /></span>
                                Available for all vehicle types
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <span className="bg-secondary text-primary p-1 rounded-full"><FaCheck size={12} /></span>
                                Extendable hours/kms
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <span className="bg-secondary text-primary p-1 rounded-full"><FaCheck size={12} /></span>
                                Doorstep pickup & drop
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                            <div className="absolute top-0 right-0 bg-secondary text-primary font-bold px-6 py-2 rounded-bl-2xl rounded-tr-2xl text-sm uppercase">
                                Best Value
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-2">8 Hours / 80 KM</h3>
                            <p className="text-gray-500 mb-8">Full Day City Usage</p>

                            <div className="flex items-center justify-between mb-8 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-secondary text-xl" />
                                    <span className="font-semibold">8 Hours</span>
                                </div>
                                <div className="h-8 w-px bg-gray-300"></div>
                                <div className="flex items-center gap-2">
                                    <FaRoad className="text-secondary text-xl" />
                                    <span className="font-semibold">80 Kilometers</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-center text-gray-500 text-sm mb-2">Starts from</p>
                                <p className="text-center text-5xl font-bold text-primary">₹2200<span className="text-xl text-gray-400 font-normal">*</span></p>
                            </div>

                            <a href="#contact" className="block w-full text-center bg-primary text-secondary text-lg font-bold py-4 rounded-xl hover:bg-opacity-90 transition shadow-lg">
                                Book Now
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Packages;
