export const countries = [
  {
    image: "/svg/aus.svg",
    name: "Australia",
  },
];
export const financialYears = [
  {
    name: "FY 2023-24",
  },
];
export const annualIncomes = [
  {
    name: "$0 - $18,200",
    valueStart: 0,
    valueEnd: 18200,
    taxRate: 0,
    baseSum: 0,
    taxRateString: "0%",
  },
  {
    name: "$18,201 - $45,000",
    valueStart: 18201,
    valueEnd: 45000,
    taxRate: 19,
    baseSum: 0,
    taxRateString: "Nil + 19% of excess over $18,200",
  },
  {
    name: "$45,001 - $120,000",
    valueStart: 45001,
    valueEnd: 120000,
    taxRate: 32.5,
    baseSum: 5092,
    taxRateString: "$ 5,092 + 32.5% of excess over $45,000",
  },
  {
    name: "$120,001 - $180,000",
    valueStart: 120001,
    valueEnd: 180000,
    taxRate: 37,
    baseSum: 29467,
    taxRateString: "$ 29,467 + 37% of excess over $120,000",
  },
  {
    name: "$180,001+",
    valueStart: 180001,
    valueEnd: Infinity,
    taxRate: 45,
    baseSum: 51667,
    taxRateString: "$ 51,667 + 45% of excess over $180,000",
  },
];
