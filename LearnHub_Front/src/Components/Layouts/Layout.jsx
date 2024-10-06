import Header from './Header'
import Footer from './Footer';
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
