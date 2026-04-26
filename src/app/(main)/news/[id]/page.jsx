import DragonNews from '@/Components/Homepage/DragonNews/DragonNews';
import LeftSideSection from '@/Components/Homepage/LeftSideSection/LeftSideSection';
import RightsideSection from '@/Components/Homepage/RightSideSection/RightsideSection';
import { getDatabyCategory } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'
import { CiCalendar } from 'react-icons/ci';


const DragonNewsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json();
    const news = data.data



    const category = await getDatabyCategory()


    return (
        <div className='grid grid-cols-12 container mx-auto gap-5'>
            <div className='col-span-3'>
                <h2 className='my-4 font-semibold text-2xl'  >All Caterogy</h2>
                <div className='bg-base-200 py-4 rounded-md my-5'>
                    {category.news_category.map(categories => <LeftSideSection key={categories.category_id} categories={categories} activeId={id}></LeftSideSection>)}
                </div>
                <div>
                    <div className='bg-base-300 flex flex-col items-center rounded-md py-4 gap-4'>
                        <div className='space-y-2 bg-white rounded-md p-2' >
                            <Image src={img1} width={250} height={200} alt=''></Image>
                            <h2 className='  truncate w-48 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                            <div className='flex justify-between w-48'>
                                <p>Sports</p>
                                <p className='flex items-center gap-1'><CiCalendar /> Jan 4, 2022</p>
                            </div>
                        </div>
                        <div className='space-y-2 bg-white rounded-md p-2'>
                            <Image src={img2} width={250} height={200} alt=''></Image>
                            <h2 className='  truncate w-48 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                            <p>Sports</p>
                            <p className='flex items-center gap-1'><CiCalendar /> Jan 4, 2022</p>
                        </div>
                        <div className='space-y-2 bg-white rounded-md p-2'>
                            <Image src={img3} width={250} height={200} alt=''></Image>
                            <h2 className='  truncate w-48 font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                            <p>Sports</p>
                            <p className='flex items-center gap-1'><CiCalendar /> Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-6'>
                <h2 className='my-4 font-semibold text-2xl'> Dragon News Home</h2>
                {news.length === 0 ?
                    <div className='flex flex-col items-center justify-center min-h-[400px] gap-4 text-neutral-500'>
                        <Image src={'https://i.ibb.co.com/XrbmBmXZ/news-line-line-icon-free-vector.webp'} className='' width={100} height={200} alt='news icon'></Image>
                        <p>News Not Found !</p>
                    </div>
                    : news.map(newes => <DragonNews key={newes._id} newes={newes}></DragonNews>)}
            </div>
            <div className='col-span-3'>
                <h2 className='my-4 font-semibold text-2xl'>LogIn With</h2>
                <RightsideSection></RightsideSection>
            </div>
        </div>
    );



};

export default DragonNewsPage;