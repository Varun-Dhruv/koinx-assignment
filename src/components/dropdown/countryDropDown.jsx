import React from 'react'

import DropDown from '@/components/dropdown/dropdown'
import { countries } from '@/shared/constants'
import Image from 'next/image'

const CountryDropDown = ({ value, setValue }) => {
    const Options = () => {
        return (
            <div>
                {
                    countries?.map((item) => {
                        return (
                            <div key={item.name} className="p-2 py-2.5 transition-all duration-200 ease-in-out" onClick={() => setValue({
                                name: item.name,
                                image: item.image
                            })}>
                                <div className='flex flex-row space-x-2'>
                                    <Image alt={item.name} src={item.image} width={20} height={20} />
                                    <div className="text-lg">{item.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className="w-full">
            <DropDown
                Options={Options}
                placeholder="Select Country"
                value={value} iconProp={{
                    value: "/svg/downfill.svg"
                }}
                paddingProp={"p-2"}
            />
        </div>
    )
}
export default CountryDropDown


