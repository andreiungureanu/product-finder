import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ProductFinder.css';
import { ProductFinderDataType } from '../data/data';

interface ProductFinderProps {
  data: ProductFinderDataType[];
}

const ProductFinder = ({data}: ProductFinderProps) => {

  return (
    <div className="product-finder">
    <Header />
 
    <div className="product-finder-header">
      <div className="h2-roboto-—-25pt">Product Finder</div>
      <div className="search-bar">Search</div>
      <div className="filter-dropdowns">
        <span>Dropdown 1</span>
        <span>Dropdown 2</span>
        <span>Dropdown 3</span>
        <span>Dropdown 4</span>
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
        
          {data.map((item) => (
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
