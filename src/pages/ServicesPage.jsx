import React from 'react';
import Services from '../components/Services';
import Packages from '../components/Packages';
import PageHeader from '../components/common/PageHeader';
import Contact from '../components/Contact';

const ServicesPage = () => {
    return (
        <div className="pt-16">
            <PageHeader title="Our Services" subtitle="Wide range of travel solutions tailored for you" />
            <Services />
            <Packages />
            <Contact />
        </div>
    );
};

export default ServicesPage;
