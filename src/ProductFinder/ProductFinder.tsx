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
import {
  CustomDropdownContext
} from "../components/CustomDropdown/CustomDropdownContext";
import { OptionType } from '../components/CustomDropdown/CustomDropdown';

interface ProductFinderProps {
  data: ProductFinderDataType[];
}

const ProductFinder = ({data}: ProductFinderProps) => {
  const [searchFundName, setSearchFundName] = useState('');
  const [selectedItems, setSelectedItems] = useState<OptionType[]>([]);

  const handleSearch = (name: string) => {
    setSearchFundName(name.trim());
  }
  
  const isFiltered = (item:ProductFinderDataType) => {
    let isFilteredBySearch = false, isSelectedByDropdown = true;

    if(searchFundName === '') {
      isFilteredBySearch = true;
    }

    if(selectedItems.length === 0) {
      isSelectedByDropdown = true;
    }

    if(searchFundName !== '' && item.fundName.toLowerCase().includes(searchFundName.toLowerCase())) {
      isFilteredBySearch = true;
    }

    if(selectedItems.length) {
      isSelectedByDropdown = selectedItems.some((selected: OptionType) => (
        selected.name === item.strategy ||
        selected.name === item.assetClass ||
        selected.name === item.region ||
        selected.name === item.style
      ));
    }

    return isFilteredBySearch && isSelectedByDropdown;
  }

  return (
    <div className="product-finder">
      <Header />
  
      <div className="product-finder-header">
        <div className="title h2-roboto-—-25pt">Product Finder</div>

        <div className="search-bar">
          <img src={SearchIcon} alt="Search" />
          <span className="h3-roboto-—-20pt">Search</span>
          <input type="text" placeholder="Enter fund name" onChange={(e) => handleSearch(e.target.value)}></input>
        </div>

        <div className="filter-dropdowns">
          <CustomDropdownContext.Provider value={{ selectedItems, setSelectedItems }}>
            <CustomDropdown data={strategyFilters} />
            <CustomDropdown data={assetClassFilters} />
            <CustomDropdown data={marketAndRegionFilters} />
            <CustomDropdown data={styleFilters} />
          </CustomDropdownContext.Provider>
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
          
            {data.filter(isFiltered).map((item) => (
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
            ))}
        </div>
      </div>
  
      <Footer />
    </div>
  );
}

export default ProductFinder;
