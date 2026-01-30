import React from 'react';
import Fleet from '../components/Fleet';
import PageHeader from '../components/common/PageHeader';
import Contact from '../components/Contact';

const FleetPage = () => {
    return (
        <div className="pt-16">
            <PageHeader
                title="Our Fleet"
                subtitle="Choose from our wide range of comfortable vehicles"
                backgroundImage="/images/fleet-hero.png"
            />
            <Fleet />
            <div className="bg-gray-50 pb-20">
                <Contact />
            </div>
        </div>
    );
};

export default FleetPage;
