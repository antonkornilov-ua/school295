import { NavLink, useRouteError } from 'react-router-dom';
import Background from '../components/Background';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <Background>
            <div id='error-page' className='backdrop-blur-2xl h-screen w-full '>
                <div className='w-full px-[8%] lg:mx-auto lg:max-w-7xl gap-7 flex flex-col justify-center h-screen items-center '>
                    <h1 className='lg:text-9xl text-6xl text-red-600 italic'>Oooops!</h1>
                    <p className='lg:text-2xl text-lg text-gray-900'>Sorry, an unexpected error was occurred.</p>
                    <p className='text-red-600 text-3xl '>
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <NavLink
                        to='/'
                        className='py-2 px-4 bg-slate-300 rounded-lg tracking-wide text-xl transition ease-in-out delay-100 duration-500 hover:translate-y-1 hover:scale-110'>
                        Повернутися на головну
                    </NavLink>
                </div>
            </div>
        </Background>
    );
}
