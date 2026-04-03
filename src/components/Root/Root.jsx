import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css';
const Root = () => {
    const navigate=useNavigation();
    const isNavigating=Boolean(navigate.location);
    return (
        <div>
            <Header></Header>
<div className='root-main'>
    <Sidebar></Sidebar>
    {isNavigating && <span>Loading...</span>}
    <Outlet></Outlet>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Root;