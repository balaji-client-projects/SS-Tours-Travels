import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCookieBite, FaTimes } from 'react-icons/fa';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                                    <FaCookieBite size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-primary leading-tight">Cookie Consent</h3>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <FaTimes size={18} />
                            </button>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                            <Link to="/cookie-policy" className="text-secondary font-semibold hover:underline ml-1">Learn more</Link>
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold hover:bg-secondary hover:text-primary transition-all duration-300"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleDecline}
                                className="px-4 py-2.5 text-gray-500 font-semibold hover:text-primary transition-colors"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
