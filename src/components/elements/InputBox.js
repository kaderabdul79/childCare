import React from 'react';

const InputBox = ({type,value,placeValue}) => {
    return (
        <div className='w-full'>
            <label className='text-white'>{value}</label>
            <input  className="w-full p-4 text-slate-100 outline-none border-2 bg-transparent" type={type} placeholder={placeValue} />
        </div>
    );
};

export default InputBox;