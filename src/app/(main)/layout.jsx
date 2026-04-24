import Hader from '@/Components/shared/Hader';
import MarkuSilder from '@/Components/shared/MarkuSilder';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Hader></Hader>
            <MarkuSilder></MarkuSilder>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;