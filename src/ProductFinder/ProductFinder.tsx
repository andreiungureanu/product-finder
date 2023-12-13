import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchIcon from '../img/ionic-md-search.svg';
import CustomDropdown from '../components/CustomDropdown/CustomDropdown';
import { 
  ProductFinderDataType, 
  strategyFilters, 
  assetClassFilters,
  marketAndRegionFilters,
  styleFilters
} from '../data/data';
import './ProductFinder.css';

interface ProductFinderProps {
  data: ProductFinderDataType[];
}

const ProductFinder = ({data}: ProductFinderProps) => {
  const [filterFundName, setFilterFundName] = useState('');
  
  const handleSearch = (name: string) => {
    setFilterFundName(name.trim());
  }

  const isFiltered = (item:ProductFinderDataType) => {
    if(filterFundName !== '') {
      if(item.fundName.toLowerCase().includes(filterFundName.toLowerCase()))
      return true;
      else return false;
    } else return true;
  }

  return (
    <div className="product-finder">
    <Header />
 
    <div className="product-finder-header">
      <div className="h2-roboto-—-25pt">Product Finder</div>

      <div className="search-bar">
        <img src={SearchIcon} alt="Search" />
        <span className="h3-roboto-—-20pt">Search</span>
        <input type="text" placeholder="Enter fund name" onChange={(e) => handleSearch(e.target.value)}></input>
      </div>

      <div className="filter-dropdowns">
        <CustomDropdown data={strategyFilters} />
        <CustomDropdown data={assetClassFilters} />
        <CustomDropdown data={marketAndRegionFilters} />
        <CustomDropdown data={styleFilters} />
      </div>
    </div>
 
    <div className="product-finder-content">
      <div className="table">
          <div className="table-header">
            <div className="cell primary first-column">Fund Name</div>
            <div className="cell primary">Primary Ticker</div>
            <div className="cell primary">Income Treatment</div>
            <div className="cell primary">Share Class Currency</div>
            <div className="cell secundary">ISIN</div>
            <div className="cell secundary">Strategy</div>
            <div className="cell secundary">Asset Class</div>
            <div className="cell secundary">Region</div>
            <div className="cell secundary">Style</div>
          </div>
        
        <>
          {data.map((item) =>
            isFiltered(item) ? (
              <div className="row" key={item.isin}>
                <div className="cell h5-roboto-—-13pt first-column">{item.fundName}</div>
                <div className="cell">{item.ticker}</div>
                <div className="cell">{item.incomeTreatment}</div>
                <div className="cell">{item.currency}</div>
                <div className="cell">{item.isin}</div>
                <div className="cell">{item.strategy}</div>
                <div className="cell">{item.assetClass}</div>
                <div className="cell">{item.region}</div>
                <div className="cell">{item.style}</div>
              </div>
            ) : null
          )}
        </>
      </div>
    </div>
 
    <Footer />
    </div>
  );
}

export default ProductFinder;
