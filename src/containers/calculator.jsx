import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountryDropDown from "@/components/dropdown/countryDropDown";
import FYDropDown from "@/components/dropdown/financialYearDD";
import AnnualIncomeDD from "@/components/dropdown/annualIncomeDD";
const Calculator = () => {
    const calcTax = () => {
        const newCapitalGains = taxInfo.salePriceCrypto - taxInfo.purchasePriceCrypto - taxInfo.expenses;
        const newDiscountLongTermGains = taxInfo.capitalGains > 0 ? taxInfo.capitalGains * 0.5 : 0;
        let netCapitalGainsTaxAmount = newCapitalGains;
        if (taxInfo.LongTermInvestment) {
            taxInfo.netCapitalGainsTaxAmount = newCapitalGains - newDiscountLongTermGains;
        }
        const taxToPay = netCapitalGainsTaxAmount * taxInfo?.annualIncome?.taxRate * 0.01;
        setTaxInfo((prev) => {
            return {
                ...prev,
                capitalGains: newCapitalGains,
                discountLongTermGains: newDiscountLongTermGains,
                taxToPay: taxToPay.toFixed(2),
                netCapitalGainsTaxAmount: netCapitalGainsTaxAmount
            }
        });
    }
    const [taxInfo, setTaxInfo] = useState({
        LongTermInvestment: false,
        ShortTermInvestment: true,
        purchasePriceCrypto: 0,
        salePriceCrypto: 0,
        expenses: 0,
        capitalGains: 0,
        discountLongTermGains: 0,
        netCapitalGainsTaxAmount: 0,
        taxToPay: 0,
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const numericValue = Number(value.replace(/\D/g, ""));
        setTaxInfo({ ...taxInfo, [name]: numericValue });
    };

    const handleClick = (event) => {
        event.preventDefault();
        const { name } = event.currentTarget;
        name === "ShortTermInvestment"
            ? setTaxInfo({ ...taxInfo, [name]: true, LongTermInvestment: false })
            : setTaxInfo({ ...taxInfo, [name]: true, ShortTermInvestment: false });
    };
    const lessThanArrow = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="my-1 h-3 w-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
            />
        </svg>
    );
    const greaterThanArrow = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="my-1 h-3 w-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 19.5L15.75 12 8.25 4.5"
            />
        </svg>
    );
    useEffect(() => {
        calcTax();
    }, [taxInfo.purchasePriceCrypto, taxInfo.salePriceCrypto, taxInfo.expenses, taxInfo.annualIncome, taxInfo.LongTermInvestment, taxInfo.ShortTermInvestment]);

    return (
        <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white p-[17px] text-gray-800 lg:mr-6 lg:px-20 lg:py-12">
            <h2 className="mb-[30px] text-center text-2xl font-bold lg:mb-0 lg:text-4xl">
                Free Crypto Tax Calculator Australia
            </h2>
            <div className="mb-6 flex w-full flex-row justify-end gap-5 border-b-2 pb-6 md:gap-10 lg:m-7 lg:pb-7">
                <div className="flex w-1/2 flex-col md:flex-row md:items-center md:gap-2">
                    <label htmlFor="FY" className="text-semibase min-w-max">
                        Financial Year
                    </label>
                    <FYDropDown value={taxInfo.financialYear} setValue={(val) => {
                        setTaxInfo((prev) => { return { ...prev, financialYear: val } })
                    }} />
                </div>
                <div className="flex w-1/2 flex-col md:flex-row md:items-center md:gap-2">

                    <label htmlFor="CNTY" className="text-semibase">
                        Country
                    </label>
                    <CountryDropDown value={taxInfo.country} setValue={(val) => {
                        setTaxInfo((prev) => { return { ...prev, country: val } })
                    }} />
                </div>
            </div>
            <div className="mb-5 flex w-full flex-col gap-5 md:flex-row md:gap-10 lg:mb-7">
                <div className="flex w-full flex-col md:w-1/2">
                    <label className="mb-1 text-base" for="PurchasePriceCrypto">
                        Enter Purchase Price of Crypto
                    </label>
                    <input
                        className="border-spacing-1 rounded-lg bg-gray-200 p-4 text-lg"
                        value={taxInfo.purchasePriceCrypto !== undefined ? `$ ${taxInfo.purchasePriceCrypto}` : "$ "}
                        name="purchasePriceCrypto"
                        onChange={(event) => handleChange(event)}
                        id="PurchasePriceCrypto"
                        type="text"
                    />
                </div>
                <div className="flex w-full flex-col md:w-1/2">
                    <label className="mb-1 text-base" for="SalePriceCrypto">
                        Enter Sale Price of Crypto
                    </label>
                    <input
                        className="border-spacing-1 rounded-lg bg-gray-200 p-4 text-lg"
                        value={taxInfo.salePriceCrypto !== undefined ? `$ ${taxInfo.salePriceCrypto}` : "$ "}
                        name="salePriceCrypto"
                        onChange={(event) => handleChange(event)}
                        id="SalePriceCrypto"
                        type="text"
                    />
                </div>
            </div>
            <div className="mb-5 flex w-full flex-col-reverse gap-5 md:flex-row md:gap-10 lg:mb-0">
                <div className="flex w-full flex-col md:w-1/2">
                    <label className="text-base" for="Expenses">
                        Enter your Expenses
                    </label>
                    <input
                        className="border-spacing-1 rounded-lg bg-gray-200 p-4"
                        value={taxInfo.expenses !== undefined ? `$ ${taxInfo.expenses}` : "$ "}
                        name="expenses"
                        onChange={(event) => handleChange(event)}
                        id="Expenses"
                        type="text"
                    />
                </div>
                <div className="flex flex-col md:mb-7 md:w-1/2">
                    <label htmlFor="InvestmentType">Investment Type</label>
                    <div id="InvestmentType" className="flex flex-row gap-2.5 md:w-full">
                        <div className="w-1/2">
                            <button
                                className={`flex flex-row  w-full bg-white h-14 border-solid rounded-lg  ${taxInfo.ShortTermInvestment
                                    ? " border-2  border-blue-100"
                                    : "border-[1px] border-black"
                                    }`}
                                name="ShortTermInvestment"
                                onClick={(event) => {
                                    handleClick(event);
                                }}
                            >
                                <div
                                    className={`flex w-full flex-row items-center  px-3 py-6 justify-between ${taxInfo.ShortTermInvestment ? "bg-blue-200" : ""
                                        }`}
                                >
                                    <p className="text-lg">Short Term</p>
                                    <div
                                        className={`ml-auto
                                            ${taxInfo?.ShortTermInvestment ? "opacity-100" : "opacity-0"}
                                            `
                                        }
                                    >
                                        <Image alt="tick" src="/svg/tick.svg" width={32} height={32} />
                                    </div>
                                </div>
                            </button>

                            <p className="my-1 flex flex-row"> {lessThanArrow} 12 Months</p>
                        </div>
                        <div className="w-1/2">
                            <button
                                className={` flex flex-row bg-white h-14 border-solid rounded-lg w-full ${taxInfo.LongTermInvestment
                                    ? " border-2 border-blue-100"
                                    : "border-[1px] border-black"
                                    }`}
                                name="LongTermInvestment"
                                onClick={(event) => {
                                    handleClick(event);
                                }}
                            >
                                <div className={`flex w-full flex-row items-center self-stretch flex-shrink-0 px-3 py-6 justify-between ${taxInfo.LongTermInvestment ? "bg-blue-200" : ""
                                    }`}>
                                    <p className="text-lg font-medium">Long Term</p>
                                    <div
                                        className={`ml-auto ${taxInfo?.LongTermInvestment ? "opacity-100" : "opacity-0"}`}
                                    >
                                        <Image alt="tick" src="/svg/tick.svg" width={32} height={32} />
                                    </div>
                                </div>
                            </button>
                            <p className="my-1 flex flex-row">
                                {" "}
                                {greaterThanArrow} 12 Months{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!taxInfo.LongTermInvestment ? "mb-[35px]" : "mb-5"} flex w-full flex-col items-end gap-2 lg:mb-7 lg:flex-row lg:gap-10`}>
                <div className="flex w-full flex-col lg:w-1/2">
                    <label htmlFor="AnnualIncome">Select your Annual Income</label>
                    <AnnualIncomeDD value={taxInfo.annualIncome} setValue={
                        (val) => {
                            setTaxInfo((prev) => { return { ...prev, annualIncome: val } })
                        }} />
                    {/* <input
                        className="border-spacing-1 rounded-lg bg-gray-200 p-4 text-lg"
                        id="AnnualIncome"
                        name="annualIncome"
                        onChange={(event) => handleChange(event)}
                        value={taxInfo.annualIncome}
                        type="text"
                        defaultValue="$ 20,0000"
                    /> */}
                </div>
                <div className="flex w-full flex-col lg:w-1/2">
                    <div className="flex border-spacing-1 flex-row gap-2 text-sm text-gray-300 lg:h-14 lg:flex-col lg:gap-0">
                        <label htmlFor="TaxRate">Tax Rate</label>
                        <p >{taxInfo?.annualIncome?.taxRateString}</p>
                        {/* <p >{annualIncomes.find(element => element.name === taxInfo.annualIncome)?.taxRateString}</p> */}
                    </div>
                </div>
            </div>
            {taxInfo.LongTermInvestment &&
                <div className="mb-[35px] flex w-full flex-col gap-5 lg:mb-7 lg:flex-row lg:items-end lg:gap-10">
                    <div className="flex w-full flex-col text-gray-800 lg:w-1/2">
                        <label htmlFor="CapitalGains">Capital gains Amount</label>
                        <input
                            className="border-spacing-1 rounded-lg bg-gray-200 p-4 text-lg"
                            id="CapitalGains"
                            name="capitalGains"
                            onChange={(event) => handleChange(event)}
                            value={taxInfo.capitalGains !== undefined ? `$ ${taxInfo.capitalGains}` : "$ "}
                            type="text"

                        />
                    </div>
                    <div className="flex w-full flex-col text-gray-800 lg:w-1/2">
                        <label htmlFor="DiscountLongTermGains">Discount for long term gains</label>
                        <input
                            className="border-spacing-1 rounded-lg bg-gray-200 p-4 text-lg"
                            id="DiscountLongTermGains"
                            name="discountLongTermGains"
                            onChange={(event) => handleChange(event)}
                            value={taxInfo.discountLongTermGains !== undefined ? `$ ${taxInfo.discountLongTermGains}` : "$ "}
                            type="text"

                        />
                    </div>
                </div>
            }
            <div className="mb-7 flex w-4/5 flex-col gap-5 lg:w-full lg:flex-row lg:items-end lg:gap-10">
                <div className="w-full text-gray-800 lg:w-1/2">
                    <div className="flex h-24 flex-col justify-center rounded-lg bg-green-100 text-center">
                        <p className="mb-2 text-base text-gray-800">Net Capital gains tax amount</p>
                        <h3 className="text-2xl font-semibold text-green-700">$ {taxInfo.netCapitalGainsTaxAmount}</h3>
                    </div>
                </div>
                <div className="w-full text-gray-800 lg:w-1/2">
                    <div className="flex h-24 w-full flex-col items-center justify-center rounded-lg bg-blue-50 p-2 text-center">
                        <p className="mb-2 text-base text-gray-800">The tax you need to pay*</p>
                        <h3 className="text-2xl font-semibold text-blue-300">{taxInfo.taxToPay ? "$" + taxInfo.taxToPay : "TBC"}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Calculator;
