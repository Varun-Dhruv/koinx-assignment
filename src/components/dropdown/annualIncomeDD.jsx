import DropDown from "@/components/dropdown/dropdown"
import React from "react"
import { annualIncomes } from "@/shared/constants"
const AnnualIncomeDD = ({ value, setValue }) => {
    const Options = () => {
        return (
            <div>
                {
                    annualIncomes?.map((item) => {
                        return (
                            <div key={item.name} className="mouse-pointer p-2" onClick={() => setValue({
                                name: item.name,
                                valueStart: item.valueStart,
                                valueEnd: item.valueEnd,
                                taxRate: item.taxRate,
                                baseSum: item.baseSum,
                                taxRateString: item.taxRateString,
                            })}>
                                <div className="p-2">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className="">
            <DropDown Options={Options}
                placeholder="Select Annual Income"
                value={value} iconProp={{
                    value: "/svg/down.svg",
                    width: 20,
                    height: 30,
                }}
                paddingProp={"px-4 py-3"}
            />
        </div>
    )
}
export default AnnualIncomeDD