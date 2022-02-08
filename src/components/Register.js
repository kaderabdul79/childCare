import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from './elements/CustomBtn';
import InputBox from './elements/InputBox';

const Register = () => {
    return (
        <div className='w-full h-screen bg-cyan-400 flex items-center justify-center'>
            <div className='w-2/4 text-left uppercase'>
                <InputBox value="Name" type="text" placeValue="Kader a."></InputBox>
                <InputBox value="Email" type="email" placeValue="Kader@gmail.com"></InputBox>
                <InputBox value="Password" type="password" placeValue="Enter Password"></InputBox>   
                <InputBox value="Password" type="password" placeValue="Retype Password"></InputBox>    
 
                <div>
                    <CustomBtn children="Register"></CustomBtn>
                </div>
            </div>
        </div>
    );
};

export default Register;