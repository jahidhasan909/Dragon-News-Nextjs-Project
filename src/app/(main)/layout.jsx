import Hader from '@/Components/shared/Hader';
import MarkuSilder from '@/Components/shared/MarkuSilder';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Hader></Hader>
            <MarkuSilder></MarkuSilder>
            <Navbar></Navbar>
            {children}
             <ToastContainer />
        </div>
    );
};

export default MainLayout;