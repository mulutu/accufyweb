import React from 'react'

function Slide1() {
    return (
        <div className='flex flex-row w-full bg-gray-100 rounded-[20px] p-10'>
            <div className='flex flex-col w-2/3'>
                <div className='flex w-full h-full'>
                    <img
                        src='/icons/quote-top.webp'
                        height={50}
                        width={50}
                    />
                </div>
                <div className='flex w-full h-full pl-20 pr-20'>
                    skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd
                    skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd
                    skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd skfh jsdh jksdf hsjdhfskd
                </div>
                <div className='flex flex-col w-full h-full pl-20 pr-20 pt-5'>
                    <span className='flex font-palanquin text-1xl font-bold'>Name of Customer</span>
                    <span className='flex font-palanquin text-1xl font-normal'>Person Title</span>
                </div>
            </div>
            <div className='flex w-1/3'>
                <div className='flex w-full h-full bg-white rounded-[20px] p-20'>

                </div>
            </div>
        </div>
    )
}

export default Slide1;