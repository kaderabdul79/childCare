import React from 'react';
import CustomBtn from '../elements/CustomBtn';
import InputBox from '../elements/InputBox';

const SendMessage = () => {
    return (
        <div className="p-4">
            <div className="flex items-start flex-col px-4 gap-4 md:w-2/4">
                <InputBox value="Name" type="text" placeValue="Kader a."></InputBox>
                <InputBox value="Email" type="email" placeValue="Kader@gmail.com"></InputBox>
                <InputBox value="Message" type="text" placeValue="write message"></InputBox>

                <div>
                    <CustomBtn children="Send Message"></CustomBtn>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;