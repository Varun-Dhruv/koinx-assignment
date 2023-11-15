import React from 'react'
import Image from 'next/image'
const MarketContainer = () => {
    return (
        <div className='hidden max-h-[576px] min-w-[300px] flex-col rounded-lg bg-blue-100 px-4 py-14 text-center md:flex md:w-2/5'>
            <div className='mx-auto flex w-auto flex-shrink-0 flex-col items-center'>
                <div className='flex h-[182px] w-auto flex-col items-center gap-3.5'>
                    <h3 className="h-auto w-[268px] text-center text-2xl font-semibold leading-10 text-white">Get Started With KoinX For FREE </h3>
                    {/* <h3 className="mb-[14px] text-center text-2xl font-semibold text-white"></h3> */}
                    <p className='h-[68px] w-[300px] flex-shrink-0 text-center text-sm font-medium leading-6 text-white'>With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your tax reports.</p>
                </div>
                <div className='mx-auto my-9' >
                    <Image alt="mobile-svg" src="/svg/mobile.svg" width={178.662} height={166.223} />
                </div>
                <button className='mx-auto flex flex-row space-x-2 rounded-md bg-white px-6 py-2'>
                    <p className='text-md font-semibold'>Get Started for Free</p>
                    <Image alt="arrow" src="/svg/arrowRightDash.svg" width={20} height={20} />
                </button>
            </div>
        </div>

    )
}
export default MarketContainer
