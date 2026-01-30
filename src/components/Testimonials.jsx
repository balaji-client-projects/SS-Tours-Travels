import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUserCircle } from 'react-icons/fa';

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Hyderabad",
        trip: "Family Trip to Srisailam",
        rating: 5,
        text: "We booked an Innova for a family trip to Srisailam. The driver, Ramesh, was extremely professional and polite. He drove very safely through the ghat sections. The car was clean and AC was working perfectly. Highly recommended for family trips!",
        delay: 0.1
    },
    {
        name: "Priya Reddy",
        location: "Secunderabad",
        trip: "Airport Transfer",
        rating: 5,
        text: "I regularly use SS Tours & Travels for my airport drops. They are always on time, even for early morning flights. The booking process is simple via WhatsApp, and the drivers are well-mannered. It's the most reliable service in Hyderabad.",
        delay: 0.2
    },
    {
        name: "Suresh Babu",
        location: "Vizag",
        trip: "One Way Drop to Vizag",
        rating: 4,
        text: "Took a one-way drop from Hyderabad to Vizag. The pricing was very transparent with no hidden charges. The driver was good, but we stopped a bit too long for lunch. Otherwise, a very comfortable and smooth journey. Will book again.",
        delay: 0.3
    },
    {
        name: "Anjali Mehta",
        location: "Gachibowli",
        trip: "Local City Shopping",
        rating: 5,
        text: "Hired a sedan for 8 hours for shopping and visiting relatives. The driver knew all the shortcuts and best parking spots in Charminar and Banjara Hills. It saved us so much time and stress. Excellent service!",
        delay: 0.4
    }
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[100px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Customer Stories</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">What Our Travelers Say</h2>
                    <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full relative group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-gray-100 group-hover:text-secondary/20 transition-colors duration-300">
                                <FaQuoteLeft size={40} />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < item.rating ? "" : "text-gray-300"} size={14} />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-600 leading-relaxed mb-8 flex-grow relative z-10">
                                "{item.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">
                                    <FaUserCircle />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.trip}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
