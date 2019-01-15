import React from 'react'
import Settings from '../../containers/Settings';
import './style.scss';

const Logo =() => (
    <div className="logo">
    <p>Logo</p>
</div>
);

const Header = () => (
    <div id="header">
        <Logo />
        <Settings />
    </div>
);

export default Header;