import React from 'react';

const Card = ({imageText,h1Text,bgImage}) => {
    return (
        <div className='relative hover:opacity-80 shadow-md transition-all cursor'>

            <div className={`${bgImage} w-full h-6 bg-cover bg-center`}>
                <h1>{imageText}</h1>
            </div>

            <div className=''>
                <h1>{h1Text}</h1>
            </div>

        </div>
    );
};

export default Card;