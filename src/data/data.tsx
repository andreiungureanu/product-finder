const uniqueId = require('lodash.uniqueid');

type ProductFinderDataType = {
    fundName: string,
    ticker: string,
    incomeTreatment: string,
    currency: string,
    isin: string,
    strategy: string,
    assetClass: string,
    region: string,
    style: string
}

const data:ProductFinderDataType[] = [
    {
        fundName: 'NASDAQ Cybersecurity UCITS ETF',
        ticker: 'CBRS',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BF16M727',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Global',
        style: 'Active'
    },
    {
        fundName: 'Cloud Computing UCITS ETF',
        ticker: 'SKYE',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BFD2H405',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Global',
        style: 'Active'
    },
    {
        fundName: 'Nasdaq® Clean Edge® Green Energy UCITS ETF',
        ticker: 'QCLN',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BDBRT036',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Global',
        style: 'Active'
    },
    {
        fundName: 'Indxx Innovative Transaction & Process UCITS ETF',
        ticker: 'BLOK',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BF5DXP42',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Global',
        style: 'Active'
    },
    {
        fundName: 'Dow Jones Internet UCITS ETF',
        ticker: 'FDNE',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BG0SSC32',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'United States',
        style: 'Active'
    },
    {
        fundName: 'Dow Jones International Internet UCITS ETF',
        ticker: 'FDNI',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BT9PVG14',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Global',
        style: 'Active'
    },
    {
        fundName: 'NYSE Arca Biotechnology UCITS ETF',
        ticker: 'FBT',
        incomeTreatment: 'Acc',
        currency: 'USD',
        isin: 'IE00BL0L0H60',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Developed',
        style: 'Active'
    },
    {
        fundName: 'IPOX® Europe Equity Opportunities UCITS ETF',
        ticker: 'EFPX',
        incomeTreatment: 'Acc',
        currency: 'EUR',
        isin: 'IE00BFD26097',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'Europe',
        style: 'Active'
    },
    {
        fundName: 'US Equity Opportunities UCITS ETF',
        ticker: 'FPXU',
        incomeTreatment: 'Acc',
        currency: 'USD',
        isin: 'IE00BYTH6238',
        strategy: 'Thematic',
        assetClass: 'Equity',
        region: 'United States',
        style: 'Active'
    },
    {
        fundName: 'FactorFX UCITS ETF',
        ticker: 'FXEU',
        incomeTreatment: 'Acc',
        currency: 'EUR (H)',
        isin: 'IE00BD5HBS12',
        strategy: 'Fixed Income',
        assetClass: 'Fixed Income',
        region: 'Global',
        style: 'Index'
    },
    {
        fundName: 'FactorFX UCITS ETF',
        ticker: 'FTFX',
        incomeTreatment: 'Acc',
        currency: 'USD',
        isin: 'IE00BD5HBQ97',
        strategy: 'Fixed Income',
        assetClass: 'Fixed Income',
        region: 'Global',
        style: 'Index'
    },
    {
        fundName: 'FactorFX UCITS ETF',
        ticker: 'FXGB',
        incomeTreatment: 'Acc',
        currency: 'GBP (H)',
        isin: 'IE00BD5HBR05',
        strategy: 'Fixed Income',
        assetClass: 'Fixed Income',
        region: 'Global',
        style: 'Index'
    },
    {
        fundName: 'Low Duration Global Government Bond UCITS ETF',
        ticker: 'FSOV',
        incomeTreatment: 'Dist',
        currency: 'EUR',
        isin: 'IE00BKS2X317',
        strategy: 'Fixed Income',
        assetClass: 'Fixed Income',
        region: 'Global',
        style: 'Index'
    }
]

const strategyFilters = {
    placeholder: 'Strategy',
    options: [
        {
            list: [
                {
                    id: uniqueId(),
                    name: 'Thematic',
                },
                {
                    id: uniqueId(),
                    name: 'Fixed Income',
                },
                {
                    id: uniqueId(),
                    name: 'Factors',
                },
                {
                    id: uniqueId(),
                    name: 'Equity Income',
                },
                {
                    id: uniqueId(),
                    name: 'Capital Strength',
                },
                {
                    id: uniqueId(),
                    name: 'Currency Hedge',
                },
                {
                    id: uniqueId(),
                    name: 'ESG',
                }
            ]
        }
    ]
};

const assetClassFilters = {
    placeholder: 'Asset Class',
    options: [
        {
            groupName: 'Equity',
            list: [
                {
                    id: uniqueId(),
                    name: 'All Cap',
                },
                {
                    id: uniqueId(),
                    name: 'Large Cap',
                },
                {
                    id: uniqueId(),
                    name: 'Small Cap',
                }
            ]
        },
        {
            groupName: 'Fixed Income',
            list: [
                {
                    id: uniqueId(),
                    name: 'Government',
                },
                {
                    id: uniqueId(),
                    name: 'Currency',
                }
            ]
        }
    ]
};

const marketAndRegionFilters = {
    placeholder: 'Market & Region',
    options: [
        {
            groupName: 'Market',
            list: [
                {
                    id: uniqueId(),
                    name: 'Developed',
                },
                {
                    id: uniqueId(),
                    name: 'Emerging',
                }
            ]
        },
        {
            groupName: 'Region',
            list: [
                {
                    id: uniqueId(),
                    name: 'Asia Pacific',
                    subgroup: [
                        {
                            id: uniqueId(),
                            name: 'India',
                        },
                        {
                            id: uniqueId(),
                            name: 'China',
                        },
                        {
                            id: uniqueId(),
                            name: 'Japan',
                        }
                    ]
                },
                {
                    id: uniqueId(),
                    name: 'Europe',
                    subgroup: [
                        {
                            id: uniqueId(),
                            name: 'Eurozone',
                        },
                        {
                            id: uniqueId(),
                            name: 'Germany',
                        },
                        {
                            id: uniqueId(),
                            name: 'Switzerland',
                        },
                        {
                            id: uniqueId(),
                            name: 'United Kingdom',
                        }
                    ]
                },
                {
                    id: uniqueId(),
                    name: 'Global',
                },
                {
                    id: uniqueId(),
                    name: 'North America',
                    subgroup: [
                        {
                            id: uniqueId(),
                            name: 'United States',
                        },
                        {
                            id: uniqueId(),
                            name: 'Canada',
                        }
                    ]
                },
                {
                    id: uniqueId(),
                    name: 'Australia',
                }
            ]
        }
    ]
};

const styleFilters = {
    placeholder: 'Style',
    options: [
        {
            list: [
                {
                    id: uniqueId(),
                    name: 'Index',
                },
                {
                    id: uniqueId(),
                    name: 'Active',
                }
            ]
        }
    ]
};

export type {
    ProductFinderDataType
}

export {
    data,
    strategyFilters,
    assetClassFilters,
    marketAndRegionFilters,
    styleFilters
}