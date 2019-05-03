import React, { useState } from 'react';
import PropTypes from 'prop-types';
import t from '../../translation';
import './_style.scss';

const Search = props => {
    const { handleInput, disabled } = props;
    const [search, setSearch] = useState('');
    return (
        <div className="Search">
            <input
                className="Search-input"
                type="search"
                placeholder={t('search.hint')}
                disabled={disabled}
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button
                className="Search-button"
                type="button"
                onClick={() => handleInput(search)}
            >
                {t('search.button')}
            </button>
        </div>
    );
};

Search.propTypes = {
    handleInput: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

Search.defaultProps = {
    disabled: false
};

export default Search;
