import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import { data } from './data/data';
import ProductFinder from './ProductFinder/ProductFinder';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ProductFinder data={data} />
  </React.StrictMode>
);