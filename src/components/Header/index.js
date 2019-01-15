import React from 'react'
import Settings from '../../containers/Settings';
import './style.scss';

const Logo = () => (
    <div className="logo">
        <div>Logo</div>
    </div>
);

const Header = () => (
    <div id="header">
        <Logo />
        <Settings />
    </div>
);

export default Header;