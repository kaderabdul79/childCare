import React from 'react';
import CustomBtn from './elements/CustomBtn';
import InputBox from './elements/InputBox';

const Login = () => {
    return (
        <div className="w-full h-screen bg-green-800 flex items-center justify-center">
            <div className="flex items-start flex-col px-4 gap-4 md:w-2/4">
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