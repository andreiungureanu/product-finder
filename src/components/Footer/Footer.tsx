import React from 'react';
import './Footer.css';
import HuguenotsMark from '../../img/huguenots-mark.svg';

const Footer = () => (
    <div className="footer">
        <img src={HuguenotsMark} className="logo" alt="Huguenots Mark" />
        
        <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
        </div>

        <div className="links">
            <span>Terms of Use</span>
            <span>Legal Terms</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
        </div>
    </div>
);

export default Footer;