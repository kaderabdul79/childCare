import React from 'react';
import CustomBtn from '../elements/CustomBtn';
import InputBox from '../elements/InputBox';

const Reservation = () => {
    return (
        <div  className="p-4">
             <div className="flex items-start flex-col px-4 gap-4 md:w-2/4">
                <InputBox value="Name" placeValue="Kader a."></InputBox>
                <InputBox value="Email" placeValue="Kader@gmail.com"></InputBox>
                <InputBox value="Message" placeValue="write mes"></InputBox>    
                <InputBox value="Account No" placeValue="880 844***"></InputBox>    
                <InputBox value="Phone nO" placeValue="880 18"></InputBox>    
                <div>
                    <CustomBtn children="Make Reservation"></CustomBtn>
                </div>
            </div>       
        </div>
    );
};

export default Reservation;