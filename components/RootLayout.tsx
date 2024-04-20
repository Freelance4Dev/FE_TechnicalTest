import * as React from 'react';
import { useRouter } from 'next/router'
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface IRootLayoutProps {
    children?: React.ReactNode
}

const RootLayout: React.FunctionComponent<IRootLayoutProps> = (props) => {
    const router = useRouter();
    const showHeader = (router.pathname === '/login' || router.pathname === '/_error') ? false : true;
    return (
    <>
        <SideBar>
            {showHeader && <Header />}
            <main className='bg-gray-100 min-h-screen'>{props.children}</main>
            <ToastContainer position="bottom-right" hideProgressBar={true} autoClose={2000} closeOnClick theme = "colored"/>
        </SideBar>
    </>
);
};

export default RootLayout;
