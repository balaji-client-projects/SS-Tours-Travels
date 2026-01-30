import React, { useState, useEffect } from 'react';
import { FaRoute, FaPlaneDeparture, FaCity, FaMapMarkedAlt, FaCarSide, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import innovaImg from '../assets/innova_highway.png';
import dzireImg from '../assets/dzire_oneway.png';
import etiosImg from '../assets/etios_airport.png';
import ertigaImg from '../assets/ertiga_city.png';
import sight1 from '../assets/sightseeing_1.jpg';
import sight2 from '../assets/sightseeing_2.jpg';
import sight3 from '../assets/sightseeing_3.jpg';
import sight4 from '../assets/sightseeing_4.png';
import sight5 from '../assets/sightseeing_5.png';


const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden rounded-2xl shadow-xl group">
            {/* Images */}
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-contain bg-white"
                />
            </AnimatePresence>

            {/* Navigation Arrows (Visible on Hover) */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
                <FaChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
                <FaChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex ? 'bg-secondary w-6' : 'bg-white/70'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ServiceRow = ({ icon, title, description, features, image, images, index, detailedContent }) => {
    const isEven = index % 2 === 0;
    const location = useLocation();
    const isServicePage = location.pathname === '/services';

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center gap-8 lg:gap-16 mb-20`}>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
                <div className={`absolute inset-0 bg-secondary/20 transform ${isEven ? '-rotate-3' : 'rotate-3'} rounded-2xl transition-transform duration-300 group-hover:rotate-0`}></div>

                {images ? (
                    <ImageSlideshow images={images} />
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="relative w-full h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"
                    />
                )}

            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-primary rounded-full text-secondary text-2xl shadow-lg">
                        {icon}
                    </div>
                    <h3 className="text-3xl font-bold text-primary">{title}</h3>
                </div>
                <div className={`w-20 h-1 bg-secondary rounded-full mb-6 ${isEven ? 'mr-auto' : 'ml-auto lg:mr-0 ml-0'}`}></div>

                {/* Description - Brief on Home, Elaborated on Services Page */}
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {description}
                </p>

                {/* Additional Detailed Content (Only on Services Page) */}
                {isServicePage && detailedContent && (
                    <div className="mb-8 space-y-4 text-gray-600">
                        {detailedContent.map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}

                {/* Features List (Always Visible or refined for context) */}
                <ul className="space-y-3 mb-8">
                    {features && features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            <span>{feature}</span>
                        </li>
                    ))}
                    {!features && (
                        <>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                <span>Calculated per Km or fixed package rates</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                <span>Well-maintained AC vehicles</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                <span>Experienced & Polite Drivers</span>
                            </li>
                        </>
                    )}

                </ul>

                {location.pathname === '/' ? (
                    <Link to="/services" className="inline-block bg-primary text-white py-3 px-8 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md">
                        View Details
                    </Link>
                ) : (
                    <a href="#contact" className="inline-block bg-primary text-white py-3 px-8 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md">
                        Book Now
                    </a>
                )}
            </div>
        </div>
    );
};

const Services = () => {
    // Replaced "Mohan Cabs" with "SS Tours & Travels" to match user's brand
    const services = [
        {
            icon: <FaRoute />,
            title: "Round Trip Outstation",
            description: "Planning a trip outside Hyderabad? Our outstation cabs in Hyderabad are perfect for all your travel needs. Enjoy a smooth and stress-free journey with our professional drivers and well-maintained vehicles. Whether it's a family vacation, a business trip, or a weekend getaway, our outstation cabs offer the best way to travel comfortably and safely. With competitive rates and 24/7 availability, SS Tours & Travels ensures you reach your destination on time and in comfort.",
            detailedContent: [
                "When you choose our outstation cabs in Hyderabad, you benefit from our extensive knowledge of the best routes and local insights. Our drivers are experienced and courteous, committed to providing you with a pleasant travel experience. From popular tourist destinations to remote locations, our outstation cabs cover all major routes from Hyderabad.",
                "Booking outstation cabs in Hyderabad with SS Tours & Travels is easy and hassle-free. Our online booking system allows you to reserve your cab in just a few clicks. We offer flexible payment options and transparent pricing, ensuring there are no hidden charges. Experience the convenience of our top-notch outstation cab services and make your next journey memorable."
            ],
            features: [
                "Transparent pricing with no hidden charges",
                "Freedom to stop anywhere for breaks & sightseeing",
                "Well-rested drivers for safe night driving",
                "Multiple vehicle options (Sedan, SUV, Tempo)"
            ],
            image: innovaImg
        },
        {
            icon: <FaCarSide />,
            title: "One Way Outstation",
            description: "Need to go to another city but don't want to pay for the return trip? Our One Way Drop service is perfect for you. Pay only for the distance you travel one way. It is economical, reliable, and available for all major cities and towns from Hyderabad like Vijayawada, Vizag, and Kurnool.",
            detailedContent: [
                "Our One-Way service allows you to pay only for the ride to your destination without the burden of return fares. This service is ideal for travelers who have flexible plans or simply need a drop-off at a specific location.",
                "We cover a vast network of destinations, ensuring connectivity to major cities and towns. With SS Tours & Travels, you get the reliability of a premium service at the most economical rates."
            ],
            features: [
                "Pay only for the drop distance",
                "Door-to-door pickup and drop",
                "Available for instant booking",
                "Zero return fare liability"
            ],
            image: dzireImg
        },
        {
            icon: <FaPlaneDeparture />,
            title: "Airport Transfers",
            description: "Never worry about missing a flight again. Our punctual airport pickup and drop services to Rajiv Gandhi International Airport (RGIA) ensure you reach on time, every time. We offer 24/7 service with flight tracking to handle delays seamlessly.",
            detailedContent: [
                "Air travel can be stressful, but your ride to and from the airport shouldn't be. Our dedicated airport transfer service monitors your flight status in real-time to adjust pick-up times automatically.",
                "Our chauffeurs wait for you at the arrivals seamlessly, assisting with luggage and ensuring a smooth transition from the terminal to your doorstep. Choose from our wide range of fleets for a comfortable start or end to your journey."
            ],
            features: [
                "24/7 Availability for late-night flights",
                "Real-time flight tracking to adjust pickup times",
                "Clean cars with ample luggage space",
                "Meet & Greet service available on request"
            ],
            image: etiosImg
        },
        {
            icon: <FaCity />,
            title: "Local City Packages",
            description: "For all your city travel needs, efficiently hire a cab for 4Hrs/40Km, 8Hrs/80Km, or 12Hrs/120Km. Ideal for shopping trips, attending weddings, business meetings, or visiting relatives across Hyderabad without the hassle of driving.",
            detailedContent: [
                "Navigate the busy streets of Hyderabad with ease. Our local rental packages give you the freedom of having a private car and driver at your disposal for as long as you need.",
                "Whether you have multiple meetings in Hitech City or a shopping spree in Charminar, our drivers know the best routes to save your time. Enjoy the comfort of your private vehicle while we handle the traffic."
            ],
            features: [
                "Flexible hourly packages (4hr, 8hr, 12hr)",
                "Unlimited stops within the booking duration",
                "Ideal for weddings, meetings & shopping",
                "No parking stress – chauffeur driven"
            ],
            image: ertigaImg
        },
        {
            icon: <FaMapMarkedAlt />,
            title: "Local Sightseeing",
            description: "Discover the royal heritage of Hyderabad. From Charminar and Golconda Fort to Ramoji Film City, our local sightseeing packages cover all major tourist attractions. Enjoy a guided-like experience with our knowledgeable drivers.",
            detailedContent: [
                "Hyderabad is a city of stories, and our sightseeing tours help you explore them all. From the architectural marvels of the Qutb Shahi era to the modern wonders of the city, we cover it all.",
                "Our drivers act as semi-guides, sharing local anecdotes and taking you to the best authentic food spots for Hyderabadi Biryani and Irani Chai. Customize your day tour to visit exactly what you want to see."
            ],
            features: [
                "Customizable itinerary for strict timelines",
                "Cover major spots: Charminar, Golconda, Hussain Sagar",
                "Special packages for Ramoji Film City",
                "Local insight on food and shopping spots"
            ],
            images: [sight4, sight5, sight1, sight2, sight3] // Slide show images
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">Our Premium Services</h2>
                    <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We offer a wide range of travel solutions tailored to your specific needs, ensuring a smooth and memorable journey.
                    </p>
                </div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <ServiceRow key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;
