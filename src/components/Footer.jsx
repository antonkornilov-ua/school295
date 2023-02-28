import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../helpers/navigation';

const Footer = () => {
    let today = new Date();
    return (
        <footer className='px-6 py-6 lg:px-8 bg-transparent/10 '>
            <div className='flex items-center justify-between' aria-label='Global'>
                <div className='hidden lg:flex lg:gap-x-12'>
                    {navigation.map((item) => (
                        <NavLink key={item.page} to={item.to} className='text-sm font-semibold leading-6 text-gray-900'>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div>
                    <p className='text-sm font-semibold leading-6 text-gray-900'>{`Київ, ${today.getFullYear()}`}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
