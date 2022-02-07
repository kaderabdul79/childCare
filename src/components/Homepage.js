import React from 'react';
import Information from './Information';
import Pricing from './Pricing';
import Section from './Section';

const Homepage = () => {
    return (
        <div>
            <Section></Section>
            <Pricing></Pricing>
            <Information></Information>
        </div>
    );
};

export default Homepage;