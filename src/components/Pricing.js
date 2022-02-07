import React from 'react';
import Card from './elements/Card';
// className=''
const Pricing = () => {
    return (
        <div className='w-full h-screen bg-pricing-bg bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4 bg:cover'>
            <Card imageText="Dhaka" h1Text="see more" bgImage="bg-hotel1"></Card>
            <Card imageText="Chandpur" h1Text="see more" bgImage="bg-hotel2"></Card>
            <Card imageText="Savar" h1Text="see more" bgImage="bg-hotel3"></Card>
            <Card imageText="Diabari" h1Text="see more" bgImage="bg-hotel4"></Card>
        </div>
    );
};

export default Pricing;