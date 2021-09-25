import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="header-section">
                <h2>Top Richest Person in The World</h2>
                <h3>Global GDP amounted to about <span className='billion'> 93,863.85 </span> billion U.S. dollars,</h3>
            </div>
        </div>
    );
};

export default Header;