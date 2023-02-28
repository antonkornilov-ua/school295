import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Dialog } from '@headlessui/react';
import { navigation } from '../helpers/navigation';

const NewNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className='px-6 py-6 lg:px-8 bg-transparent/10'>
            <nav className='flex items-center justify-between lg:max-w-7xl 2xl:ml-64 2xl:text-2xl' aria-label='Global'>
                <div className='lg:ml-10 xl:ml-20'>
                    <NavLink to='/' className='text-xl font-semibold text-gray-900'>
                        Школа №295
                    </NavLink>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                        onClick={() => setMobileMenuOpen(true)}>
                        <FiMenu className='h-6 w-6' aria-hidden='true' />
                        <span className='sr-only'>Відкрити меню</span>
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-10 my-2 mx-6 '>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.page}
                            to={item.to}
                            className='text-lg 2xl:text-xl font-semibold leading-6 text-gray-900 hover:bg-gray-400 px-3 py-2 hover:rounded-md '>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </nav>

            <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel
                    focus='true'
                    className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden transition transform ease-in-out duration-500'>
                    <div className='flex items-center justify-between'>
                        <NavLink to='/' className='-m-1.5 p-1.5 text-2xl font-semibold text-gray-900'>
                            Школа №295
                        </NavLink>

                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                            onClick={() => setMobileMenuOpen(false)}>
                            <AiOutlineClose className='h-6 w-6' aria-hidden='true' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.page}
                                        to={item.to}
                                        className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                                        onClick={closeMobileMenu}>
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
};

export default NewNavbar;
