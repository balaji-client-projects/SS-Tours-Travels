import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUserCircle, FaPen } from 'react-icons/fa';
import FeedbackModal from './FeedbackModal';

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Hyderabad",
        trip: "Family Trip to Srisailam",
        rating: 5,
        text: "We booked an Innova for a family trip to Srisailam. The driver, Ramesh, was extremely professional and polite. He drove very safely through the ghat sections. The car was clean and AC was working perfectly. Highly recommended!",
    },
    {
        name: "Priya Reddy",
        location: "Secunderabad",
        trip: "Airport Transfer",
        rating: 5,
        text: "I regularly use SS Tours & Travels for my airport drops. They are always on time, even for early morning flights. The booking process is simple via WhatsApp, and the drivers are well-mannered. It's the most reliable service in Hyderabad.",
    },
    {
        name: "Suresh Babu",
        location: "Vizag",
        trip: "One Way Drop to Vizag",
        rating: 4,
        text: "Took a one-way drop from Hyderabad to Vizag. The pricing was very transparent with no hidden charges. The driver was good, but we stopped a bit too long for lunch. Otherwise, a very comfortable and smooth journey.",
    },
    {
        name: "Anjali Mehta",
        location: "Gachibowli",
        trip: "Local City Shopping",
        rating: 5,
        text: "Hired a sedan for 8 hours for shopping and visiting relatives. The driver knew all the shortcuts and best parking spots in Charminar and Banjara Hills. It saved us so much time and stress. Excellent service!",
    }
];

const Testimonials = () => {
    const ref = useRef(null);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Premium SaaS Easing: cubic-bezier(0.22, 1, 0.36, 1)
    const premiumEase = [0.22, 1, 0.36, 1];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.18, // 0.18s stagger delay
                delayChildren: 0.3 // Slight delay after header
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 }, // translateY: 40px → 0
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: premiumEase
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 30 }, // translateY: 30px → 0
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: premiumEase
            }
        }
    };

    return (
        <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden relative font-sans">
            {/* Ambient Background Glows - Subtle & Premium */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={headerVariants}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-semibold tracking-wide uppercase text-xs mb-4 border border-secondary/20">
                        Customer Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4 text-center">
                        Built on Trust & Reliability
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
                        Join thousands of satisfied travelers who choose SS Tours & Travels for their journeys.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsFeedbackOpen(true)}
                        className="inline-flex items-center gap-2 bg-white text-primary border border-gray-200 px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                    >
                        <FaPen className="text-secondary" /> Write a Review
                    </motion.button>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)",
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full relative group transition-colors duration-300"
                        >
                            {/* Quote Icon - Subtle */}
                            <div className="mb-6 text-indigo-100 group-hover:text-secondary/20 transition-colors duration-400">
                                <FaQuoteLeft size={32} />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < item.rating ? "text-yellow-400" : "text-gray-200"}
                                        size={14}
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-600 leading-7 mb-6 text-[15px] font-medium flex-grow">
                                "{item.text}"
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                                    <FaUserCircle size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 text-sm">{item.name}</span>
                                    <span className="text-xs text-gray-400 font-medium">{item.trip}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        </section>
    );
};

export default Testimonials;
