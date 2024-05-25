'use client'

import { useState } from "react";
import Image from 'next/image';
import { heroItems } from "../constants";
import { bigShoe1 } from "../../public/images";
import Container from "@/components/container/container";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import EmailCapture from "./EmailCapture";


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <MaxWidthWrapper className="pt-3 pb-3">
      <Container className="flex flex-wrap " >
        <div className=" flex items-center w-full lg:w-3/5">
          <div className="max-w-2xl mb-8 items-start">
            <h1 className='mt-10 font-palanquin text-5xl max-sm:text-[42px] leading-[60px] max-sm:leading-[62px] font-normal '>
              <span className=' xl:whitespace-nowrap relative z-10 pr-10 '>
                Work <p className="inline-block border-b-2 border-orange-500 font-bold ">smarter</p>, not harder
              </span>
              <br />
              <span className='xl:whitespace-nowrap relative z-10 pr-5 '>to build your business.</span>
            </h1>
            <p className='font-montserrat text-slate-gray text-lg leading-6 mt-6 mb-14 sm:max-w-sm'>
              Solutions tailored specifically for SMEs, to streamline operations, boost productivity, and give you more time to focus on what matters most.
            </p>
            <div className="flex flex-row w-full">
              <EmailCapture />
              <div className="flex flex-col text-center justify-center ml-5">
                <span className="flex text-md font-medium">Call us +254 720844418</span>
                <span className="flex text-md font-sm">For any question</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center block w-full lg:w-2/5 ">
          <div className="w-full items-center block justify-between border border-blue-100 rounded-md float-right ml-20 bg-white p-2  ">
            {heroItems.map((heroItem, index) => (
              <Link key={index} href={heroItem.link} className="flex w-full p-1 items-center p-3 rounded-md ">
                <div key={index} className="flex flex-row w-1/6 m-2">
                  <Image
                    key={index}
                    className="p-1 filter grayscale(100%)"
                    src={heroItem.itemIcon}
                    height={40}
                    width={40}
                    alt={heroItem.item}                    
                  />
                </div>
                <div key={index} className="flex flex-col w-5/6 ">
                  <span key={index} className="flex w-full text-black  text-[18px] font-[500]">{heroItem.item}</span>
                  <span key={index} className="flex w-full text-slate-700 text-[13px] font-normal leading-5 ">{heroItem.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </MaxWidthWrapper>
  );
};

export default Hero;
