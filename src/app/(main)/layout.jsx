import Hader from '@/Components/shared/Hader';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Hader></Hader>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;