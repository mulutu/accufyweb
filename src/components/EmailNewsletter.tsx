import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

function EmailNewsletter() {
    return (
        <MaxWidthWrapper className='flex flex-col w-full h-full pb-20'>
            <div className=" flex justify-center w-full ">
                <h1 className='items-center font-palanquin text-4xl max-sm:text-[42px] max-sm:leading-[62px] font-normal'>
                    <span className='flex justify-center items-center'>
                        How can we help grow your business?
                    </span>
                    <span className='flex justify-center items-center text-[22px] pt-1'>Contact us and let us discuss</span>
                </h1>
            </div>
            <div className="flex justify-center items-center pt-5">
                <form className="relative w-full max-w-sm">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 pl-4 pr-20 border-2 border-orange-500 rounded focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 bottom-0 m-1 px-4 py-2 bg-orange-500 text-white font-bold rounded"
                    >
                        Let's Get Started
                    </button>
                </form>
            </div>
        </MaxWidthWrapper>
    )
}

export default EmailNewsletter