import { Outlet, useLocation } from 'react-router-dom';
import Background from '../components/Background';
import Footer from '../components/Footer';
import NewNavbar from '../components/NewNavbar';

export const AppLayout = () => {
    const location = useLocation();
    const isIndexPage = location.pathname === '/';
    const isContactPage = location.pathname === '/contacts'

    return (
        <div className='h-full overflow-x-hidden'>
            <Background>
                <div className='min-h-screen backdrop-blur-2xl flex flex-col '>
                    <div>
                        <NewNavbar />
                    </div>
                    <div className='flex-auto'>
                        <Outlet />
                    </div>
                    {isIndexPage || isContactPage ? null : (
                        <div>
                            <Footer />
                        </div>
                    )}
                </div>
            </Background>
        </div>
    );
};
