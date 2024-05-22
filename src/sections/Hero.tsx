'use client'

import { useState } from "react";

import { shoes, statistics } from "../constants";
//import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../../public/images";
import { arrowRight, software } from "../../public/icons";
import Container from "@/components/container/container";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <MaxWidthWrapper className="pt-5 pb-5">
      <Container className="flex flex-wrap " >
        <div className=" flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className='mt-10 font-palanquin text-5xl max-sm:text-[42px] max-sm:leading-[62px] font-normal'>
              <span className=' xl:whitespace-nowrap relative z-10 pr-10'>
                Your life's work,
              </span>
              <br />
              <span className='xl:whitespace-nowrap relative z-10 pr-10'>powered by our life's work</span>
            </h1>
            <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
              A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.
            </p>
            <Button />
          </div>
        </div>
        <div className="flex items-center justify-center block w-full lg:w-1/2">
          <div className="w-full items-center block justify-between border border-blue-100 rounded-lg float-right ml-20 bg-white p-2 ">
            <Link href="/" className="flex w-full block p-1 items-center p-3 rounded-md hover:bg-gray-100">
              <div className="flex flex-row w-1/6 block">
                <img
                  className="p-1"
                  src="/icons/crm_1.svg"
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex flex-col w-5/6 block">
                <span className="w-full fletext-base text-[22px] font-normal">ERP</span><br />
                <span className="w-full text-base text-sm font-normal">With Inventory Management, POS, Online Shop & HRM</span>
              </div>
            </Link>
            <Link href="/" className="flex w-full block p-1 items-center p-3 rounded-md hover:bg-gray-100">
              <div className="flex flex-row w-1/6 block">
                <img
                  className="p-1"
                  src="/icons/crm_1.svg"
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex flex-col w-5/6 block">
                <span className="w-full fletext-base text-[22px] font-normal">ERP</span><br />
                <span className="w-full text-base text-sm font-normal">With Inventory Management, POS, Online Shop & HRM</span>
              </div>
            </Link>
            <Link href="/" className="flex w-full block p-1 items-center p-3 rounded-md hover:bg-gray-100">
              <div className="flex flex-row w-1/6 block">
                <img
                  className="p-1"
                  src="/icons/crm_1.svg"
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex flex-col w-5/6 block">
                <span className="w-full fletext-base text-[22px] font-normal">ERP</span><br />
                <span className="w-full text-base text-sm font-normal">With Inventory Management, POS, Online Shop & HRM</span>
              </div>
            </Link>
            <Link href="/" className="flex w-full block p-1 items-center p-3 rounded-md hover:bg-gray-100">
              <div className="flex flex-row w-1/6 block">
                <img
                  className="p-1"
                  src="/icons/crm_1.svg"
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex flex-col w-5/6 block">
                <span className="w-full fletext-base text-[22px] font-normal">ERP</span><br />
                <span className="w-full text-base text-sm font-normal">With Inventory Management, POS, Online Shop & HRM</span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </MaxWidthWrapper>
  );
};

export default Hero;
