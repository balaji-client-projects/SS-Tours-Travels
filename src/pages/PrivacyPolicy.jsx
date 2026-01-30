import React from 'react';
import { FadeIn } from '../components/common/Reveal';

const PrivacyPolicy = () => {
    return (
        <div className="pt-32 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
                    <div className="w-24 h-1.5 bg-secondary rounded-full mb-10"></div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                At SS Tours & Travels, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. The Data We Collect</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Identity Data: name, username or similar identifier.</li>
                                <li>Contact Data: email address and telephone numbers.</li>
                                <li>Technical Data: IP address, browser type and version, time zone setting and location.</li>
                                <li>Usage Data: information about how you use our website and services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide you with the taxi services you have requested.</li>
                                <li>To manage our relationship with you.</li>
                                <li>To improve our website, services, and customer experiences.</li>
                                <li>To comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Legal Rights</h2>
                            <p>
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <p className="font-semibold text-primary">
                                Email: sstoursandtravels2007@gmail.com<br />
                                Phone: +91 99480 58679
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
