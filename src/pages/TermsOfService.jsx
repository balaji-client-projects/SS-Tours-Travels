import React from 'react';
import { FadeIn } from '../components/common/Reveal';

const TermsOfService = () => {
    return (
        <div className="pt-32 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Terms of Service</h1>
                    <div className="w-24 h-1.5 bg-secondary rounded-full mb-10"></div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <p className="italic">Last Updated: January 2024</p>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the services provided by SS Tours & Travels, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                            <p>
                                SS Tours & Travels provides taxi and travel services, including local city travel, outstation trips, airport transfers, and corporate rentals. Our services are subject to availability and we reserve the right to modify or discontinue any service at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Cancellation</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Booking:</strong> Bookings can be made through our website, phone, or WhatsApp. A booking is confirmed only when you receive a confirmation message.</li>
                                <li><strong>Cancellation:</strong> Cancellations made at least 24 hours before the scheduled pickup time may be eligible for a full refund. Late cancellations may incur a fee.</li>
                                <li><strong>Wait Time:</strong> A grace period of 15 minutes is allowed. Beyond this, waiting charges may apply as per the vehicle type and package.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
                            <p>
                                All prices are quoted in Indian Rupees (INR). Tolls, parking fees, and interstate permits are usually extra unless specified in the package. Payment can be made via cash, online transfer, or other approved digital methods.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibility</h2>
                            <p>
                                Users are expected to behave decorously during the journey. Smoking, drinking, or any illegal activities are strictly prohibited inside the vehicles. Any damage to the vehicle caused by the passenger will be charged.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                            <p>
                                SS Tours & Travels shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to delays caused by traffic, weather, or mechanical failures.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default TermsOfService;
