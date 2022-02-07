import React from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@material-ui/icons';
import NavMobile from './NavMobile';
import { useState } from 'react';

const Header = () => {
    const [active,setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className='w-full absolute bg-red-300 flex justify-between items-center p-4'>
            {/* className="" */}
                <span className="text-4xl uppercase font-extrabold select-none">peace</span>

                <nav>
                    <ul className="hidden lg:flex gap-8 p-2 text-xl font-semibold uppercase">
                        <li><Link to="/">Booking</Link></li>
                        <li><Link to="/">Works</Link></li>
                        <li><Link to="/">Testimonials</Link></li>
                        <li><Link to="/">Clients</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <NavMobile active={active} showMenu={showMenu}></NavMobile>
                </nav>

                <div className="lg:hidden scale-150">
                    <MenuOutlined onClick={showMenu} className="cursor-pointer" />
                </div>
            
        </div>
    );
};

export default Header;