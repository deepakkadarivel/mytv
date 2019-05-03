import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search';

const component = props => {
    const { history } = props;
    const handleSearch = searchText => {
        localStorage.setItem('searchText', searchText);
        history.push('/shows');
    };
    return (
        <div className="Search container">
            <Fragment>
                <Search handleInput={handleSearch} />
            </Fragment>
        </div>
    );
};

component.propTypes = {
    history: PropTypes.any.isRequired
};

export default component;
