import Image from "next/image";
import styles from "./home.module.css";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "../sections";
import Brands from "@/components/brands/Brands";
import Solutions from "@/components/solutions/Solutions";
import CustomerSlider from "@/components/CustomerSlider";
import Slide1 from '@/components/slides/Slide1';
import Slide2 from '@/components/slides/Slide2';
import Slide3 from '@/components/slides/Slide3';

export default function Home() {

  const slides = [ <Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" /> ];

  return (
    <>
      <section className='xl:padding-l wide:padding-r padding-b bg-blue-50 bg-opacity-50'>
        <Hero />
      </section>
      <section className="flex w-full block padding">
        <Brands />
      </section>
      <section className="flex w-full block bg-pale-blue padding bg-blue-50 bg-opacity-50">
        <Solutions />
      </section>
      <section className="flex w-full h-full block padding pb-0 pt-0">
        <CustomerSlider slides={slides}  />
      </section>
    </>
  );
}