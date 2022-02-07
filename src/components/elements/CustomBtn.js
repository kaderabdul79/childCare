import React from 'react';

const CustomBtn = ({onClickItem,btnPadding,children}) => {
    return <button onClick={onClickItem} className={`px-12 py-3 bg-green uppercase text-white rounded-md animate-plus font-bold ${btnPadding}`}>{children}</button>;
};

export default CustomBtn;