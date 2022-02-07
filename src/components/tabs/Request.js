import React from 'react';
import CustomBtn from '../elements/CustomBtn';
import InputBox from '../elements/InputBox';

const Request = () => {
    return (
        <div className='p-4'>
            <div className="flex items-start flex-col px-4 gap-4 md:w-2/4">
                <InputBox value="Email" placeValue="kader@gmail.com"></InputBox>
                <CustomBtn children="Request Info"></CustomBtn>
            </div>
        </div>
    );
};

export default Request;