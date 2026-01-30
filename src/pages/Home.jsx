import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import About from '../components/About';
import Packages from '../components/Packages';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Packages />
            <Fleet />
            <Contact />
        </>
    );
};

export default Home;
