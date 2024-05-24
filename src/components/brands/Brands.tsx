import React from 'react'
import { star } from "../../../public/icons";
import MaxWidthWrapper from '../MaxWidthWrapper';
import CarouselItem from './CarouselItem';
import Slider from '@/components/brands/Slider';
import Carousel from './Carousel';
import Link from 'next/link';
import { brands } from '@/constants';

type Props = {}

function Brands(props: Props) {

    const items = [
        <CarouselItem key="1" color="bg-red-500" />,
        <CarouselItem key="2" color="bg-green-500" />,
        <CarouselItem key="3" color="bg-blue-500" />,
        <CarouselItem key="4" color="bg-yellow-500" />,
    ];

    return (
        <MaxWidthWrapper className='flex  flex-col w-full justify-center items-center pb-10'>
            <div className='flex w-full justify-center items-center block pt-10 text-lg'>
                <span className='flex items-center block text-sm font-[600] uppercase '>Brands that trust us</span>
            </div>
            <div className='flex w-full justify-center items-center p-5 pb-0'>
                {brands.map((brand) => (
                    <Link href={brand.website} target='_blank'>
                        <img
                            src={brand.logo}
                            alt=""
                            width={130}
                            height={50}
                            className='mr-10'
                        />
                    </Link>
                ))}
            </div>
        </MaxWidthWrapper>
    )
}

export default Brands