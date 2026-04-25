import DetailsCard from '@/Components/Homepage/DetailsCard/DetailsCard';
import RightsideSection from '@/Components/Homepage/RightSideSection/RightsideSection';
import React from 'react';

const NewsDetails = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const data = await res.json();
    const newsdetails = data.data


    return (
        <div className=' container mx-auto grid grid-cols-6 gap-4'>

            <div className='col-span-5'>
                <h1 className='font-semibold text-2xl my-5'>Dragon News</h1>
                {newsdetails.map(details => <DetailsCard key={details._id} details={details}></DetailsCard>)}
            </div>
            <div className='col-span-1'>
                <h1 className='font-semibold text-2xl my-5'>Login With</h1>
                <RightsideSection className=''></RightsideSection>
            </div>

        </div>
    );
};

export default NewsDetails;