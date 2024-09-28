import React, { useState } from 'react';
import './footercompo.css';

const FooterMobCompo = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dropdown content
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="col-md-3">
            <div className="footer-sub">
                {/* Heading with dropdown toggle */}
                <h5 onClick={toggleDropdown} className="dropdown-heading">
                    {props.heading}
                    <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
                </h5>

                {/* Dropdown content */}
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                    <h4>{props.heading2}</h4>
                    <p>{props.paragraph}</p>
                    <p>{props.paragraph1}</p>
                    <p>{props.paragraph2}</p>
                    <p>{props.paragraph3}</p>

                    <a href="#">{props.link1}</a>
                    <a href="#">{props.link2}</a>
                    <a href="#">{props.link3}</a>
                    <a href="#">{props.link4}</a>
                    <a href="#">{props.link5}</a>
                    <a href="#">{props.link6}</a>
                    <a href="#">{props.link7}</a>
                    <a href="#">{props.link8}</a>

                    <div className="footer-app">
                        <img src={props.image} alt="App Image 1" />
                        <img src={props.image2} alt="App Image 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMobCompo;
