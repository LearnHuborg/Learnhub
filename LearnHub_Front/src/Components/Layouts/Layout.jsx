import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Header />
            <main>
         <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
