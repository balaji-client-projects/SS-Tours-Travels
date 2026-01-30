import React from 'react';
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
    const fleet = [
        {
            image: fleet1,
            title: "Comfortable and Stylish Travel with SS Tours & Travels",
            category: "Sedan - 4 Seater Cab",
            seat: "4+1",
            luggage: "2-3 Bags",
            description: "Our sedan cabs in Hyderabad are ideal for small families or business travelers. With seating for up to four passengers, these vehicles offer a spacious and comfortable ride. Equipped with modern amenities and ample trunk space, our sedans cabs ensure a pleasant journey whether you’re traveling within the city or for outstation trips. Choose our sedan cabs in Hyderabad for a stylish and comfortable travel experience."
        },
        {
            image: fleet2,
            title: "Comfortable and Stylish Travel with SS Tours & Travels",
            category: "Innova -7 Seater Cab",
            seat: "7+1",
            luggage: "2-3 Bags",
            description: "Our sedan cabs in Hyderabad are ideal for small families or business travelers. With seating for up to four passengers, these vehicles offer a spacious and comfortable ride. Equipped with modern amenities and ample trunk space, our sedans cabs ensure a pleasant journey whether you’re traveling within the city or for outstation trips."
        },
        {
            image: fleet3,
            title: "Spacious and Versatile",
            category: "Premium SUV - 4 Seater",
            seat: "4+1",
            luggage: "2-3 Bags",
            description: "For larger groups or families, our SUVs and MPVs provide the perfect solution. With seating for 7-8 passengers, these vehicles offer plenty of space and comfort. Ideal for long-distance travel, our SUVs and MPVs ensure a smooth and enjoyable journey. Book an SUV or MPV for your next group trip and experience the versatility and comfort of our larger vehicles."
        },
        {
            image: fleet4,
            title: "Spacious and Versatile",
            category: "SUV/MUV - 4 Seater",
            seat: "4+1",
            luggage: "2-3 Bags",
            description: "For larger groups or families, our SUVs and MPVs provide the perfect solution. With seating for 7-8 passengers, these vehicles offer plenty of space and comfort. Ideal for long-distance travel, our SUVs and MPVs ensure a smooth and enjoyable journey."
        },
        {
            image: fleet5,
            title: "Spacious and Versatile",
            category: "Ertiga-7 Seater",
            seat: "7",
            luggage: "4 Bags",
            description: "For larger groups or families, our SUVs and MPVs provide the perfect solution. With seating for 7-8 passengers, these vehicles offer plenty of space and comfort. Ideal for long-distance travel, our SUVs and MPVs ensure a smooth and enjoyable journey."
        },
        {
            image: fleet6,
            title: "Swift Dezire -4 Seater",
            category: "Swift Dezire -4 Seater",
            seat: "4+1",
            luggage: "2 Bags",
            description: "Spacious and comfortable for group travel. Features push-back seats and ample luggage space for a relaxing journey. Ideal for pilgrimages, corporate team outings, and large family reunions where staying together is key."
        },
        {
            image: fleet7,
            title: "Ertiga-7 Seater",
            category: "Ertiga-7 Seater",
            seat: "7",
            luggage: "4 Bags",
            description: "Ideal for large groups, pilgrimages, and corporate outings. Fully AC with comfortable seating arrangements. This vehicle ensures that no one is left behind and everyone enjoys the journey together in comfort."
        },
        {
            image: fleet8,
            title: "Swift Dezire(White) -4 Seater",
            category: "Swift Dezire -4 Seater",
            seat: "4+1",
            luggage: "2 Bags",
            description: "For wedding parties, school trips, and large events. Safe, spacious, and comfortable for many passengers. We provide well-maintained buses with professional drivers to manage your large format transport needs seamlessly."
        },
        {
            image: fleet9,
            title: "Swift Dezire(Gray) -4 Seater",
            category: "Swift Dezire -4 Seater",
            seat: "4+1",
            luggage: "2 Bags",
            description: "A premium travel experience for VIP guests and special occasions. Top-notch interiors and superior comfort. The Urbania stands out with its modern design and best-in-class passenger comfort features."
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
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
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

                                <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black py-3 px-8 rounded-full font-bold hover:bg-secondary hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                                    <FaPhoneAlt size={16} /> Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
