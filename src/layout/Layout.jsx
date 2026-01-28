import React from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/navigationBar/NavigationBar';
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout