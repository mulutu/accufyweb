import Image from "next/image";
import styles from "./home.module.css";
import {
  CustomerReviews,
  Footer,
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
import Hero from "@/components/Hero";
import EmailNewsletter from "@/components/EmailNewsletter";

export default function Home() {

  const slides = [ <Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" /> ];

  return (
    <>
      <section className='xl:padding-l wide:padding-r padding-b bg-blue-50 bg-opacity-50'>
        <Hero />
      </section>
      <section className="flex w-full padding">
        <Brands />
      </section>
      <section className="flex w-full bg-pale-blue padding bg-blue-100 bg-opacity-50">
        <Solutions />
      </section>
      <section className="flex w-full h-full padding pb-0 pt-0">
        <CustomerSlider slides={slides}  />
      </section>
      <section className="flex w-full h-full padding pb-0 pt-0">
        <EmailNewsletter />
      </section>
    </>
  );
}