import React from 'react';
import CustomBtn from './elements/CustomBtn';
import Request from './tabs/Request';
import Reservation from './tabs/Reservation';
import SendMessage from './tabs/SendMessage';

const Information = () => {
    return (
        <div className='w-full h-screen bg-info-bg bg-cover bg-center text-white uppercase p-8'>
            
            <div className='children:m-4'>
                <CustomBtn children='Send Message'></CustomBtn>
                <CustomBtn children='Request Info'></CustomBtn>
                <CustomBtn children='Make Reservation'></CustomBtn>
            </div>

            <SendMessage></SendMessage>
            <Request></Request>
            <Reservation></Reservation>

        </div>
    );
};

export default Information;