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

export default function Home() {
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
    </>
  );
}