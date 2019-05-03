import React from 'react';
import './_style.scss';
import t from '../../translation';
import logo from '../../assets/logo.webp';
import history from '../../routes/history';

const Nav = () => {
    return (
        <div className="Nav">
            <span
                className="Nav-logo"
                onClick={() => history.push('/search')}
                role="presentation"
            >
                <img src={logo} alt={t('logo')} /> MyTV
            </span>
        </div>
    );
};

export default Nav;
