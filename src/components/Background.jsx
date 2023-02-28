import moons from './../assets/Moon.svg';

const Background = ({ children }) => {
    return (
        <div className='bg-white'>
            <div className='min-h-screen min-w-screen bg-repeat-y' style={{ backgroundImage: `url(${moons})`}}>
                {children}
            </div>
        </div>
    );
};
export default Background;

