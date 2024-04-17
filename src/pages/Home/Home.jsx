import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Testimonial/>
            <ContactUs />
            <Footer/>
        </div>
    );
};

export default Home;
