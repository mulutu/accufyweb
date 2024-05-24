import { shieldTick, support, truckFast } from "../../public/icons";
import facebook from "../../public/icons/facebook.svg";
import twitter from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/facebook.svg";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../public/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const brands =[
    {
        brandname: "Kocela",
        website: "https://kocela.com/",
        logo: "/images/brands/kocela-original.png"
    },
    {
        brandname: "Enfinite",
        website: "https://www.enfinitesolutions.com/",
        logo: "/images/brands/Enfinite-Logo-01.png"
    },
    {
        brandname: "Heleq",
        website: "https://heleq.com/",
        logo: "/images/brands/heleqlogo.svg"
    },
    {
        brandname: "Ronford",
        website: "https://ronford.dev/",
        logo: "/images/brands/Ronfordlogo.svg"
    },
    {
        brandname: "TendePay",
        website: "https://tendepay.com",
        logo: "/images/brands/tendeLogo.png"
    },
    {
        brandname: "Apple Price",
        website: "https://appleprice.co.ke/",
        logo: "/images/brands/apple_price_logo.png"
    },
    {
        brandname: "Delta Stream",
        website: "https://appleprice.co.ke/",
        logo: "/images/brands/deltastream.png"
    },
]

export const heroItems = [
    {
        itemIcon: "/icons/crm_1.svg",
        item: "ERP",
        description: "ERP platform with Inventory Management, POS, Online Shop & HRM. Manage your business on the Go!",
        link:"/"
    },
    {
        itemIcon: "/icons/crm_1.svg",
        item: "Custom website",
        description: "Supercharge your business with a customer centric website - capture, manage and convert leads",
        link:"/"
    },
    {
        itemIcon: "/icons/crm_1.svg",
        item: "CRM",
        description: "Comprehensive CRM platform for your customer facing operations and teams",
        link:"/"
    },
    {
        itemIcon: "/icons/crm_1.svg",
        item: "Customer Feedback",
        description: "Do you know what customers think about your products and services? Our customer survey tool will help you.",
        link:"/"
    },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "ERP with POS", link: "/" },
            { name: "CRM", link: "/" },
            { name: "Custom website", link: "/" },
            { name: "AI Tools", link: "/" },
            { name: "Customer surveys", link: "/" },
            { name: "Property Management", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "info@accufyapps.com", link: "mailto:info@accufyapps.com" },
            { name: "+254720844418", link: "tel:+254720844418" },
        ],
    },
];

export const socialMedia1 = [
    { facebook, alt: "facebook logo" },
    { twitter, alt: "twitter logo" },
    { instagram, alt: "instagram logo" },
];

export const socialMedia = [
    { src: "icons/facebook.svg", alt: "facebook", link: "https://facebook.com" },
    { src: "icons/twitter.svg", alt: "facebook", link: "https://facebook.com" },
    { src: "icons/instagram.svg", alt: "facebook", link: "https://facebook.com" }
];
