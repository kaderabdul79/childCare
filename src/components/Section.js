import React from 'react';
import CustomBtn from './elements/CustomBtn';

const Section = () => {
    return (
        <div className='w-full h-screen bg-hero-img bg-cover bg-center flex items-center justify-center'>
             <div className='text-white text-center uppercase font-bold sm:w-3/4 lg:w-2/4 p-8 bg-black/40'>
                 <h1 className='res-font-sm font-bold'>Best Travel Company on the Earth</h1>
                 <p className='res-font font-extrabold py-2'>Travel or Build a Travel Company</p>
                 <h3 className='res-font-usm p-2'>Enjoy your life with peace</h3>
                 <CustomBtn children="start"></CustomBtn>
             </div>

        </div>
    );
};

export default Section;