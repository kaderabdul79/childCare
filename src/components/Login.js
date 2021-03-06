import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from './elements/CustomBtn';
import InputBox from './elements/InputBox';

const Login = () => {
    return (
        <div className='w-full h-screen bg-cyan-400 flex items-center justify-center'>
            <div className='w-2/4 text-left uppercase'>
                <InputBox value="Email" type="email" placeValue="Kader@gmail.com"></InputBox>
                <InputBox value="Password" type="password" placeValue="Enter Password"></InputBox>    
                <div>
                    <CustomBtn children="Login"></CustomBtn>
                </div>
            </div>
        </div>
    );
};

export default Login;