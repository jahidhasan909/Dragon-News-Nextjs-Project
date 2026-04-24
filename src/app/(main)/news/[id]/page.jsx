import LeftSideSection from '@/Components/Homepage/LeftSideSection/LeftSideSection';
import RightsideSection from '@/Components/Homepage/RightSideSection/RightsideSection';
import { getDatabyCategory } from '@/lib/data';
import React from 'react';

const DragonNewsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json();
    const news = data.data



    const category = await getDatabyCategory()


    return (
        <div className='grid grid-cols-12 container mx-auto gap-3'>
            <div className='col-span-3'>
                <h2 className='my-4 font-semibold text-2xl'  >All Caterogy</h2>
                <div>
                    {category.news_category.map(categories => <LeftSideSection key={categories.category_id} categories={categories}></LeftSideSection>)}
                </div>
            </div>
            <div className='col-span-6'>
                <h2 className='my-4 font-semibold text-2xl'> Dragon News Home</h2>
                {news.map(newes => <h1 key={newes._id}>{newes.title}</h1>)}
            </div>
            <div className='col-span-3'>
                <h2 className='my-4 font-semibold text-2xl'>LogIn With</h2>
                <RightsideSection></RightsideSection>
            </div>
        </div>
    );



};

export default DragonNewsPage;