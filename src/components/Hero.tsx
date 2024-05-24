'use client'

import { useState } from "react";

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
        <div className=" flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className='mt-10 font-palanquin text-5xl max-sm:text-[42px] max-sm:leading-[62px] font-normal'>
              <span className=' xl:whitespace-nowrap relative z-10 pr-10'>
                Work smarter, not harder
              </span>
              <br />
              <span className='xl:whitespace-nowrap relative z-10 pr-5'>for YOUR business.</span>
            </h1>
            <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
              Solutions tailored specifically for busy SMEs, to streamline operations, boost productivity, and give you more time to focus on what matters most.
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
        <div className="flex items-center justify-center block w-full lg:w-1/2">
          <div className="w-full items-center block justify-between border border-blue-100 rounded-lg float-right ml-20 bg-white p-2 ">
            {heroItems.map((heroItem) => (
              <Link href={heroItem.link} className="flex w-full block p-1 items-center p-3 rounded-md hover:bg-gray-100">
                <div className="flex flex-row w-1/6 block">
                  <img
                    className="p-1"
                    src={heroItem.itemIcon}
                    height={50}
                    width={50}
                  />
                </div>
                <div className="flex flex-col w-5/6 block">
                  <span className="w-full fletext-base text-[22px] font-normal">{heroItem.item}</span><br />
                  <span className="w-full text-base text-[13px] font-normal leading-5">{heroItem.description}</span>
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
