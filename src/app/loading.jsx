import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex  items-center justify-center min-h-screen'>
            <HashLoader />
        </div>
    );
};

export default loading;