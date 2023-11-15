import React, { useEffect } from 'react'
import Image from 'next/image'
// import useClickedOutside from '@/hooks/useClickedOutside'

const DropDown = ({ Options, placeholder, value, iconProp, paddingProp }) => {
    const [show, setShow] = React.useState(false)
    const dropdownRef = React.useRef(null);

    return (
        <div className='relative w-full'>
            <div className={`h-full w-full cursor-pointer  rounded-lg border-2 bg-gray-200 text-lg ${paddingProp} ${show ? 'rounded-b-none border-b-2 border-b-black' : ""}`}
                onClick={() => setShow((state) => !state)} ref={dropdownRef}>
                <div className={`flex flex-row items-center justify-between gap-2 self-stretch`}>
                    {
                        value?.image ? <Image alt={value.name} src={value.image} width={20} height={20} /> : null
                    }
                    {
                        value?.name ? value.name : placeholder
                    }
                    {iconProp && <div className="ml-auto px-2"><Image src={iconProp.value} width={iconProp.width ? iconProp.width : 9} height={6} /> </div>}
                </div>
            </div>

            <div className={`absolute left-0 top-full z-10 max-h-[400px] w-full rounded-b-md bg-gray-200 no-scrollbar ${show ? " block" : " hidden"}`} onClick={() => setShow(false)}>
                <Options />
            </div>
        </div >
    )
}

export default DropDown