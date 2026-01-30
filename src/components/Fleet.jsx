import React from 'react';
import { useBooking } from '../context/BookingContext';
import { FadeIn, ScaleIn } from './common/Reveal';
import { FaUserFriends, FaSuitcase, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import fleet1 from '../assets/fleet1.jpg';
import fleet2 from '../assets/fleet2.jpg';
import fleet3 from '../assets/fleet3.jpg';
import fleet4 from '../assets/fleet4.jpg';
import fleet5 from '../assets/fleet5.jpg';
import fleet6 from '../assets/fleet6.jpg';
import fleet7 from '../assets/fleet7.jpg';
import fleet8 from '../assets/fleet8.jpg';
import fleet9 from '../assets/fleet9.jpg';

const Fleet = () => {
    const { openBookingModal } = useBooking();
    const fleet = [
        {
            image: fleet1,
            title: "Comfortable and Stylish Travel",
            category: "Sedan - 4 Seater Cab",
            seat: "4+1",
            luggage: "2-3 Bags",
            description: "Our sedan cabs in Hyderabad are ideal for small families or business travelers. With seating for up to four passengers, these vehicles offer a spacious and comfortable ride. Equipped with modern amenities and ample trunk space, our sedans cabs ensure a pleasant journey whether you’re traveling within the city or for outstation trips. Choose our sedan cabs in Hyderabad for a stylish and comfortable travel experience."
        },
        {
            image: fleet2,
            title: "Spacious Group Travel Solutions",
            category: "Innova - 7 Seater Cab",
            seat: "7+1",
            luggage: "3-4 Bags",
            description: "Our Innova cabs are perfect for larger families or groups who need extra space and comfort. With superior legroom and ample luggage capacity, the Innova ensures a relaxing journey even on long outstation trips. Experience the reliability and power of Toyota Innova for your next adventure."
        },
        {
            image: fleet3,
            title: "Premium Comfort for Every Journey",
            category: "Premium SUV - 7 Seater",
            seat: "6+1",
            luggage: "3-4 Bags",
            description: "Travel in luxury with our premium SUV fleet. Perfect for corporate travel, VIP guests, or special occasions, these vehicles offer top-tier comfort and style. Enjoy a smooth ride with advanced safety features and premium interiors."
        },
        {
            image: fleet4,
            title: "Economical City Rides",
            category: "Compact Sedan - 4 Seater",
            seat: "4+1",
            luggage: "2 Bags",
            description: "Our compact sedans are the perfect choice for quick city commutes and airport transfers. They offer the comfort of a private car at an economical price point. Ideal for solo travelers or couples with light luggage."
        },
        {
            image: "/images/fleet-6.jpg",
            title: "Toyota Innova Crysta",
            category: "Toyota Innova Crysta - 7 Seater",
            seat: "7+1",
            luggage: "4 Bags",
            description: "Experience the ultimate in comfort with the Toyota Innova Crysta. Known for its luxurious interiors and smooth drive, it's the preferred choice for long-distance travel and family vacations. Travel with peace of mind in this premium MPV."
        },
        {
            image: fleet7,
            title: "Maruti Suzuki Ertiga",
            category: "Ertiga - 7 Seater",
            seat: "6+1",
            luggage: "3 Bags",
            description: "The Maruti Suzuki Ertiga is a smart hybrid MPV that offers a perfect blend of comfort and fuel efficiency. It features a flexible seating arrangement and modern amenities, making it a great choice for city tours and weekend getaways with family and friends."
        },
        {
            image: fleet8,
            title: "Swift Dzire (White)",
            category: "Swift Dzire - 4 Seater",
            seat: "4+1",
            luggage: "2 Bags",
            description: "The Swift Dzire is India's most loved compact sedan, known for its comfortable cabin and smooth ride quality. It is perfectly suited for small families looking for a budget-friendly yet comfortable option for outstation trips or local sightseeing."
        },
        {
            image: fleet9,
            title: "Swift Dzire (Gray)",
            category: "Swift Dzire - 4 Seater",
            seat: "4+1",
            luggage: "2 Bags",
            description: "Another excellent option in our sedan category, this Swift Dzire offers the same level of comfort and reliability. Whether it's a quick run to the airport or a day trip around the city, this vehicle ensures you reach your destination fresh and on time."
        }
    ];

    return (
        <section id="fleet" className="bg-black py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Premium Fleet</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Choose Your Ride</h2>
                    <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Explore our extensive range of vehicles designed for your comfort, safety, and style.
                    </p>
                </div>

                <div className="space-y-24">
                    {fleet.map((item, index) => (
                        <ScaleIn key={index} delay={index * 0.1}>
                            <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Image Section */}
                                <div className="w-full md:w-1/2">
                                    <div className="relative group">
                                        <div className={`absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-70`}></div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="relative w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
                                        />
                                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-gray-700">
                                            <p className="font-bold text-secondary text-sm">{item.category}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2">
                                    <span className="text-white/60 font-semibold tracking-wide uppercase text-sm mb-2 block border-l-4 border-secondary pl-3">
                                        {item.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
                                        {item.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                                            <div className="flex items-center gap-3 mb-1">
                                                <FaUserFriends className="text-secondary" />
                                                <span className="text-white font-bold">{item.seat} Passengers</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">Seating Capacity</span>
                                        </div>
                                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                                            <div className="flex items-center gap-3 mb-1">
                                                <FaSuitcase className="text-secondary" />
                                                <span className="text-white font-bold">{item.luggage}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">Luggage Space</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => openBookingModal({ vehicle: item.category, serviceType: 'Outstation' })}
                                        className="inline-flex items-center gap-2 bg-white text-black py-3 px-8 rounded-full font-bold hover:bg-secondary hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <FaPhoneAlt size={16} /> Book Now
                                    </button>
                                </div>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
