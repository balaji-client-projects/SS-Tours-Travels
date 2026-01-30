import React from 'react';
import { FadeIn } from '../components/common/Reveal';

const CookiePolicy = () => {
    return (
        <div className="pt-32 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Cookie Policy</h1>
                    <div className="w-24 h-1.5 bg-secondary rounded-full mb-10"></div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What are Cookies?</h2>
                            <p>
                                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                            <p>
                                SS Tours & Travels uses cookies for several reasons, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Essential Cookies:</strong> These are necessary for the website to function correctly.</li>
                                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                                <li><strong>Functional Cookies:</strong> These allow the website to remember choices you make (such as your username or region) and provide enhanced features.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                            <p>
                                We may use both "session" cookies and "persistent" cookies on the website. Session cookies will be deleted from your computer when you close your browser. Persistent cookies will remain stored on your computer until deleted, or until they reach a specified expiry date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Cookies</h2>
                            <p>
                                Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can obtain up-to-date information about blocking and deleting cookies via these links:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Chrome</li>
                                <li>Firefox</li>
                                <li>Opera</li>
                                <li>Internet Explorer</li>
                                <li>Safari</li>
                                <li>Edge</li>
                            </ul>
                            <p className="mt-4">
                                Please note that blocking all cookies will have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use all the features on our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Updates to this Policy</h2>
                            <p>
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions about our use of cookies or other technologies, please contact us at sstoursandtravels2007@gmail.com.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default CookiePolicy;
