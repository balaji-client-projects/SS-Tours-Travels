import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import innovaImg from '../assets/innova_highway.png';

const CountUp = ({ to, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-10%" });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = parseInt(to.replace(/,/g, ''), 10);
            const totalDuration = duration * 1000;
            const incrementTime = totalDuration / end;

            // For large numbers, increment by more than 1 to keep animation smooth and within duration
            let step = 1;
            let currentTimer = incrementTime;

            if (incrementTime < 10) {
                step = Math.ceil(10 / incrementTime);
                currentTimer = 10;
            }

            const timer = setInterval(() => {
                start += step;
                if (start > end) start = end;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, currentTimer);

            return () => clearInterval(timer);
        }
    }, [inView, to, duration]);

    return <span ref={nodeRef}>{count.toLocaleString()}+</span>;
};

const StatItem = ({ number, label, align = "center" }) => (
    <div className={`flex flex-col items-center ${align === 'right' ? 'lg:items-start' : align === 'left' ? 'lg:items-end' : ''} mb-8 lg:mb-12`}>
        <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
            <CountUp to={number} />
        </h3>
        <p className="text-white text-lg font-medium tracking-wide">{label}</p>
    </div>
);

const Stats = () => {
    return (
        <section className="bg-black py-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
                        Your trusted partner for outstation cabs and more in Hyderabad
                    </h2>
                    <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Stats */}
                    <div className="flex flex-col items-center lg:items-end order-2 lg:order-1 space-y-8">
                        <StatItem number="8,750" label="Rides Completed" />
                        <StatItem number="8,400" label="Happy Customers" />
                        <StatItem number="500" label="Destinations Covered" /> {/* Replaced duplicate happy customers with destinations */}
                    </div>

                    {/* Center Image */}
                    <div className="order-1 lg:order-2 mb-12 lg:mb-0 relative">
                        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={innovaImg}
                            alt="Outstation Cab"
                            className="relative w-full rounded-2xl shadow-2xl border-4 border-gray-800 transform hover:scale-105 transition-transform duration-500 z-10"
                        />
                    </div>

                    {/* Right Stats */}
                    <div className="flex flex-col items-center lg:items-start order-3 lg:order-3 space-y-8">
                        <StatItem number="15" label="Cars Fleet" />
                        <StatItem number="20" label="Team Members" />
                        <StatItem number="10" label="Years of Experience" />
                    </div>
                </div>
            </div>

            {/* Background Texture/Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}>
            </div>
        </section>
    );
};

export default Stats;
