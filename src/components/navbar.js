import React from 'react';
import Clogo from '../Images/CLogo.png';
import { BsCart2 } from 'react-icons/bs';

const navbar = () => {
    return (
            <div>
                <div className='logo'>
                    <img src={Clogo} alt='' />
                </div>
            <nav>
                <div className='list'>
                    <ul>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Search</a></li>
                        <li><a href=''><BsCart2 className='navbar-cart-icon'/></a></li>
                        <li><input type="submit" value="Book Now" /></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default navbar; 
