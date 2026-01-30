import React from 'react';
import { FaUsers, FaCar, FaSmile, FaClock, FaCheckCircle, FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';
import aboutOfficeImg from '../assets/about_office.png';
import fleetLineupImg from '../assets/fleet_lineup.png';
import driverGreetingImg from '../assets/driver_greeting.png';
import happyFamilyImg from '../assets/happy_passengers.png';

const AboutUsContent = () => {
    return (
        <div className="bg-white">
            {/* 1. Welcome Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-sans">
                            Welcome to <span className="text-primary">SS Tours & Travels</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                            At SS Tours & Travels, we are committed to providing exceptional travel experiences for our customers. Founded with a vision to revolutionize the transportation industry, we have years of experience serving thousands of satisfied customers across Hyderabad and beyond.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                            Our journey has been marked by dedication, innovation, and a relentless focus on customer satisfaction. We connect people and places with comfort, safety, and reliability at the core of our operations.
                        </p>

                        <div className="flex items-center gap-2 mt-4">
                            <div className="flex text-yellow-500 text-xl">
                                {[...Array(5)].map((_, i) => (
                                    <FaCheckCircle key={i} />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-gray-900">4.8/5</span>
                            <span className="text-gray-500">Customer Rating</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={aboutOfficeImg}
                            alt="SS Tours & Travels Office"
                            className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Mission & Vision */}
            <section className="bg-black text-white py-20 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    {/* Image Left */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={fleetLineupImg}
                            alt="Taxi Fleet on Road"
                            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Content Right */}
                    <div className="w-full md:w-1/2">
                        <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">Creating an Impact in Travel Industry</span>
                        <h2 className="text-3xl font-bold mb-8">Premier taxi service for all your travel needs</h2>

                        <div className="space-y-6 mb-12">
                            {['Reliable Cab Services', '24/7 Availability', 'Affordable Pricing', 'Customer Satisfaction'].map((item, idx) => (
                                <div key={idx} className="border-b border-gray-700 pb-2">
                                    <h4 className="text-xl font-semibold">{item}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Our mission is to offer reliable, comfortable, and affordable transportation services to our customers. We strive to exceed expectations by providing a seamless travel experience with a focus on safety, punctuality, and customer care.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Our vision is to be the leading transportation service provider in Hyderabad and the surrounding regions. We aim to continuously enhance our services through innovation, technology, and a customer-centric approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Journey & Values */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                        Since our inception, SS Tours & Travels has grown from a small fleet of vehicles to a comprehensive transportation service provider with a diverse range of cabs, travelers, and buses. Our well-maintained fleet includes mini hatchbacks, sedans, SUVs/MPVs, and large travellers, catering to every travel need.
                        Over the years, we have expanded our services to include outstation cabs, one-way trips, local cab packages, and airport transfers. Our commitment to quality has earned us a loyal customer base.
                    </p>
                </div>

                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Value 1 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-black text-white px-4 py-2 inline-block rounded mb-4 font-bold text-sm">
                            1/ Customer Satisfaction
                        </div>
                        <p className="text-gray-700 mt-2">
                            We prioritize our customers' needs and strive to provide the best travel experience possible. Your comfort is our command.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-black text-white px-4 py-2 inline-block rounded mb-4 font-bold text-sm">
                            2/ Safety and Reliability
                        </div>
                        <p className="text-gray-700 mt-2">
                            Our well-maintained vehicles and professional drivers ensure a safe and dependable journey every single time.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-black text-white px-4 py-2 inline-block rounded mb-4 font-bold text-sm">
                            3/ Innovation
                        </div>
                        <p className="text-gray-700 mt-2">
                            We embrace new technologies and continuously improve our services to meet the evolving needs of our customers.
                        </p>
                    </div>

                    {/* Value 4 */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-black text-white px-4 py-2 inline-block rounded mb-4 font-bold text-sm">
                            4/ Integrity
                        </div>
                        <p className="text-gray-700 mt-2">
                            We conduct our business with honesty and transparency, building trust with our customers and partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Progress Stats */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Our Progress</h2>
                </div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Stats */}
                    <div className="w-full lg:w-1/3 space-y-12">
                        <div className="text-center">
                            <h3 className="text-5xl font-extrabold text-gray-900 mb-2">8,750</h3>
                            <p className="text-gray-600 font-medium uppercase tracking-wider">Rides Completed</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-extrabold text-gray-900 mb-2">8,400</h3>
                            <p className="text-gray-600 font-medium uppercase tracking-wider">Happy Customers</p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="w-full lg:w-1/3">
                        <img
                            src={driverGreetingImg} // Fleet image
                            alt="Our Fleet"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Text Stats Right */}
                    <div className="w-full lg:w-1/3 space-y-12">
                        <div className="text-center">
                            <h3 className="text-5xl font-extrabold text-gray-900 mb-2">15+</h3>
                            <p className="text-gray-600 font-medium uppercase tracking-wider">Cars Fleet</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl font-extrabold text-gray-900 mb-2">10+</h3>
                            <p className="text-gray-600 font-medium uppercase tracking-wider">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="bg-black text-white py-16 text-center">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-4 block">Let's get started</span>
                <h2 className="text-4xl font-bold mb-6">Experience Our Service Now</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                    At SS Tours & Travels, we believe in making travel simple, comfortable, and affordable. We look forward to serving you and becoming your preferred travel partner.
                </p>
                <a href="#contact" className="inline-block bg-primary text-white py-4 px-10 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                    Book Now
                </a>
            </section>
        </div>
    );
};

export default AboutUsContent;
