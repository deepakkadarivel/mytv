import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search';

const component = props => {
    const { fetchingShows, searchText, setSearchText } = props;
    const handleSearch = e => {
        if (e.key === 'Enter') {
            setSearchText(e.target.value);
        }
    };
    return (
        <div className="Search container">
            <Fragment>
                <Search
                    handleInput={handleSearch}
                    value={searchText}
                    disabled={fetchingShows.isPending}
                />
            </Fragment>
        </div>
    );
};

component.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    fetchingShows: PropTypes.object.isRequired,
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired
};

export default component;
