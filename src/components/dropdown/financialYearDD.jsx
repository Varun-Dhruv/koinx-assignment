import DropDown from "@/components/dropdown/dropdown"
import React from "react"
import { financialYears } from "@/shared/constants"
const FYDropDown = ({ value, setValue }) => {
    const Options = () => {
        return (
            <div>
                {
                    financialYears?.map((item) => {
                        return (
                            <div key={item.name} className="mouse-pointer p-2.5" onClick={() => setValue({
                                name: item.name
                            })}>
                                <div className="">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className="w-full">
            <DropDown Options={Options}
                placeholder="Select Country"
                value={value} iconProp={{
                    value: "/svg/downfill.svg"
                }}
                paddingProp={"p-2"}
            />
        </div>
    )
}
export default FYDropDown