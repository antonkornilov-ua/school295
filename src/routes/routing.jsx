import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import { AppLayout } from './layout'


import Index from '../pages/Index'
import Personnel from '../pages/Personnel'
import Contacts from '../pages/Contacts'
import About from '../pages/About'


export const routing = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: '/personnel',
                element: <Personnel />,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]);