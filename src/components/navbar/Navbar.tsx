import React from 'react'
import Image from 'next/image';
import { navLinks } from "../../constants";
import { hamburger } from '../../../public/icons';
import styles from "./navbar.module.css"
import MaxWidthWrapper from '../MaxWidthWrapper';

type Props = {}

const Nav = (props: Props) => {
    return (
        <nav className='sticky flex h-16 inset-x-0 top-0 z-30 w-full border-b border-blue-100 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-16 items-center justify-between'>
                    <a href='/'>
                        <Image 
                            unoptimized
                            src="/images/header-logo.svg"
                            alt='logo'
                            width={129}
                            height={29}
                            className='m-0 w-[129px] h-[29px]'
                        />
                    </a>
                    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className='font-montserrat leading-normal text-lg text-slate-gray'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                        <a href='/'>Sign in</a>
                        <span>/</span>
                        <a href='/'>Explore now</a>
                    </div>
                    <div className='hidden max-lg:block'>
                        <img
                            src="/icons/hamburger.svg"
                            alt='hamburger icon'
                            width={25}
                            height={25} />
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Nav