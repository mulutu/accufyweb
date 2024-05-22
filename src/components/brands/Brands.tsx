import React from 'react'
import { star } from "../../../public/icons";
import MaxWidthWrapper from '../MaxWidthWrapper';

type Props = {}

function Brands(props: Props) {
    return (
        <MaxWidthWrapper className='flex  flex-col w-full justify-center items-center mb-20'>
            <div className='flex w-full justify-center items-center block pt-10 text-lg'>
                <span className='flex items-center block text-1xl font-normal uppercase '>Brands that trust us</span>
            </div>
            <div className='flex w-full justify-center items-center'>
                <img src="/images/brands.png" alt="" width={100} className="w-auto h-auto" />
            </div>
        </MaxWidthWrapper>
    )
}

export default Brands