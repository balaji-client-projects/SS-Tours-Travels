import React from 'react';
import Contact from '../components/Contact';
import PageHeader from '../components/common/PageHeader';

const ContactPage = () => {
    return (
        <div className="pt-16">
            <PageHeader title="Contact Us" subtitle="We are available 24/7 to assist you" />
            <Contact />
        </div>
    );
};

export default ContactPage;
