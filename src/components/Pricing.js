import React from 'react';
import Card from './elements/Card';
// className=''
const Pricing = () => {
    return (
        <div className='w-full h-screen bg-pricing-bg bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12'>
            <Card imageText="hefff" h1Text="ccc" bgImage="bg-hotel1"></Card>
            <Card imageText="hefff" h1Text="ccc" bgImage="bg-hotel2"></Card>
            <Card imageText="hefff" h1Text="ccc" bgImage="bg-hotel3"></Card>
            <Card imageText="hefff" h1Text="ccc" bgImage="bg-hotel4"></Card>
        </div>
    );
};

export default Pricing;