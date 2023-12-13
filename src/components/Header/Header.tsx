import React from 'react';
import './Header.css';
import HuguenotsMark from '../../img/huguenots-mark.svg';
import FlagGreatBritain from '../../img/flag-great-britain.png';

const Header = () => (
    <div className="header">
        <img src={HuguenotsMark} className="logo" alt="Huguenots Mark" />
        
        <div className="profile">
            <img src={FlagGreatBritain} alt="Flag of Great Britain" />
            <span className="user">Professional Investor</span>
        </div>
    </div>
);

export default Header;