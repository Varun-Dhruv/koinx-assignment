import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='mb-8 bg-white p-2 px-6 shadow-sm md:px-0 lg:h-[60px]'>
            <div className='flex flex-row items-center justify-between lg:pl-[60px] lg:pr-14'>
                <div className='lg:mr-80'>
                    <Image alt="logo" src="/png/logo.png" width={100} height={100} style={{ objectFit: 'cover' }} />
                </div>
                <div className="hidden w-[728px] flex-row justify-end space-x-8 font-bold text-gray-800 md:flex">
                    <Link href="/">Features</Link>
                    <Link href="/">Exchanges</Link>
                    <Link href="/">How it Works?</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About us</Link>
                </div>
                <div className='just hidden h-10 w-28 rounded-md border-[1px] border-solid border-blue-100 p-2 text-center text-base font-semibold text-blue-100 md:block'>Sign In</div>
                <Image alt="hamburger" className="block md:hidden" src="/svg/hamburger.svg" width={20} height={20} style={{ objectFit: 'cover' }} />
            </div>
        </div>
    )
}
export default Navbar