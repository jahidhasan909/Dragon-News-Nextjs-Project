import React from 'react';
import { ClipLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex  items-center justify-center min-h-screen'>
            <ClipLoader />
        </div>
    );
};

export default loading;