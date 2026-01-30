import React from 'react';
import AboutUsContent from '../components/AboutUsContent';
import PageHeader from '../components/common/PageHeader';
import Contact from '../components/Contact';

const AboutPage = () => {
    return (
        <div className="pt-16">
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
