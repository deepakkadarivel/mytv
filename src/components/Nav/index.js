import React from 'react';
import './_style.scss';
import t from '../../translation';
import logo from '../../assets/logo.webp';

const Nav = () => {
    return (
        <div className="Nav">
            <span className="Nav-logo">
                <img src={logo} alt={t('logo')} /> MyTV
            </span>
        </div>
    );
};

export default Nav;
