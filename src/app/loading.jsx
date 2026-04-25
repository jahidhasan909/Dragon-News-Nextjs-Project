import React from 'react';
import { HashLoader, MoonLoader, ScaleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex  items-center justify-center min-h-screen'>
            <MoonLoader />
        </div>
    );
};

export default loading;