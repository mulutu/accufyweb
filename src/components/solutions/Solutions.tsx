'use client'

import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { useState } from 'react';
import ERP from '@/components/solutions/tabs/ERP';
import Tab2 from '@/components/solutions/tabs/Tab2';
import Tab3 from '@/components/solutions/tabs/Tab3';
import { Button } from "@/components/ui/button"

const tabs = [
    { name: 'ERP', component: <ERP /> },
    { name: 'CRM', component: <Tab2 /> },
    { name: 'Property Management', component: <Tab3 /> },
    { name: 'Campaigns & Promotions', component: <Tab3 /> },
    { name: 'Customer Survey', component: <Tab3 /> },
    { name: 'AI Writer', component: <Tab3 /> },
    { name: 'Social Media Management', component: <Tab3 /> },
];

type Props = {}

function Solutions(props: Props) {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <MaxWidthWrapper className='flex w-full block justify-center items-center pb-10'>
            <div className=" flex justify-center w-full pt-6 pb-10">
                <h1 className='mt-10 items-center font-palanquin text-4xl max-sm:text-[42px] max-sm:leading-[62px] font-normal'>
                    <span className='flex justify-center items-center'>
                        Whatever your business goals may be,
                    </span>
                    <span className='flex justify-center items-center'>you can find a solution with us</span>
                </h1>
            </div>
            <div className='flex flex-row w-full justify-center items-center font-palanquin'>
                <div className='flex flex-row block w-200 p-2'>
                    <img
                        src='/icons/tick-icon.webp'
                        width={50}
                        height={50}
                    />
                    <span className='flex w-full items-center pl-2 text-2x1 font-medium capitalize'>Quaranteed quality</span>
                </div>
                <div className='flex flex-row block w-200 p-2'>
                    <img
                        src='/icons/tick-icon.webp'
                        width={50}
                        height={50}
                    />
                    <span className='flex w-full items-center pl-2 text-2x1 font-medium capitalize'>Intuitive Design</span>
                </div>
                <div className='flex flex-row block w-200 p-2'>
                    <img
                        src='/icons/tick-icon.webp'
                        width={50}
                        height={50}
                    />
                    <span className='flex w-full items-center pl-2 text-2x1 font-medium capitalize'>24x7 Support</span>
                </div>
            </div>
            <div className="w-full justify-center  mx-auto pt-4">
                <div className="flex justify-around">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex-auto w-64 py-2 text-center focus:outline-none rounded-t-lg ${activeTab === index
                                ? 'bg-white text-blue-500'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="p-4 bg-white rounded-lg">
                    {tabs[activeTab].component}                    
                </div>
            </div>
            <div className='flex w-full p-5 pt-20'>
                <div className='flex flex-row relative  w-full rounded-[12px] p-6 font-palanquin text-2xl max-sm:text-[42px] max-sm:leading-[62px] font-normal bg-gradient-to-r from-blue-700 to-teal-400'>
                    <span className='text-white'>Explore more solutions from Accufy Tech</span>
                    <Button
                        className="flex absolute bg-white hover:bg-gray-50 right-0 top-0 mt-4 mr-4 p-6 mr-4 rounded-lg text-black text-center justify-center text-lg"
                    >
                        See all solutions
                    </Button>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Solutions