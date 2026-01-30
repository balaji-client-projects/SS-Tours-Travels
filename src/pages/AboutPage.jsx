import React from 'react';
import AboutUsContent from '../components/AboutUsContent';
import PageHeader from '../components/common/PageHeader';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <div className="pt-16">
            <SEO
                title="About Us"
                description="Learn more about SS Tours and Travels, our mission, values and commitment to providing the best taxi services in Hyderabad."
                keywords="about SS Tours and Travels, best taxi company Hyderabad, reliable cab service"
            />
            <PageHeader
                title="About Us"
                subtitle="Your Trusted Travel Partner in Hyderabad"
                backgroundImage="/images/about-hero.png"
            />
            <AboutUsContent />
            <Contact />
        </div>
    );
};

export default AboutPage;
