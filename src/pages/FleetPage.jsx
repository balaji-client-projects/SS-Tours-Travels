import React from 'react';
import Fleet from '../components/Fleet';
import PageHeader from '../components/common/PageHeader';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const FleetPage = () => {
    return (
        <div className="pt-16">
            <SEO
                title="Our Fleet"
                description="View our extensive range of vehicles in Hyderabad, from sedans and SUVs to 12-seater Tempo Travellers."
                keywords="car fleet Hyderabad, Innova Crysta hire, Dzire for rent, Tempo Traveller Hyderabad"
            />
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
