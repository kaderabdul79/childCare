import React from 'react';
import { useState } from 'react';
import CustomBtn from './elements/CustomBtn';
import Request from './tabs/Request';
import Reservation from './tabs/Reservation';
import SendMessage from './tabs/SendMessage';

const Information = () => {
    const [tab,setTab] = useState('sendmessage')
    return (
        <div className='w-full min-h-screen bg-info-bg bg-cover bg-center text-white uppercase p-8'>
            
            <div className='children:m-4'>
                <CustomBtn children='Send Message' onClickItem={() => setTab('sendmessage')}></CustomBtn>
                <CustomBtn children='Request Info' onClickItem={() => setTab('requestInfo')}></CustomBtn>
                <CustomBtn children='Make Reservation' onClickItem={() => setTab('makeReservation')}></CustomBtn>
            </div>

            {tab === 'sendmessage' && <SendMessage></SendMessage>}
            {tab === 'requestInfo' && <Request></Request>}
            {tab === 'makeReservation' && <Reservation></Reservation>}

        </div>
    );
};

export default Information;