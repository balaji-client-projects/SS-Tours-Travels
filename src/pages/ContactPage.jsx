import React from 'react';
import Contact from '../components/Contact';
import PageHeader from '../components/common/PageHeader';

const ContactPage = () => {
    return (
        <div className="pt-16">
            <PageHeader
                title="Contact Us"
                subtitle="We are available 24/7 to assist you"
                backgroundImage="/images/contact-hero.png"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Customer Support</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">We're Here to Help You 24/7</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            At SS Tours & Travels, we believe in providing exceptional service around the clock. whether you have a query about your booking, need assistance with your itinerary, or require emergency support during your trip, our dedicated team is just a call away.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our support staff is trained to handle all your travel needs with professionalism and care, ensuring that your journey is smooth, safe, and enjoyable from start to finish.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="/images/contact-support.png"
                            alt="Customer Support Agent"
                            className="w-full rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
