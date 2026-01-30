import React from 'react';
import Services from '../components/Services';
import Packages from '../components/Packages';
import PageHeader from '../components/common/PageHeader';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <div className="pt-16">
            <SEO
                title="Our Services"
                description="Explore our range of taxi services in Hyderabad: One-way outstation, Airport transfers, Local packages, and more."
                keywords="Hyderabad outstation cabs, one way taxi, airport transfer Hyderabad, local car rental"
            />
            <PageHeader
                title="Our Services"
                subtitle="Wide range of travel solutions tailored for you"
                backgroundImage="/images/services-hero.png"
            />
            <Services />
            <Packages />
            <Contact />
        </div>
    );
};

export default ServicesPage;
