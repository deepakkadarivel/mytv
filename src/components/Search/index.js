import React from 'react';
import PropTypes from 'prop-types';
import t from '../../translation';
import './_style.scss';

const Search = props => {
    const { handleInput, disabled } = props;
    return (
        <div className="Search">
            <input
                className="Search-input"
                type="search"
                placeholder={t('search.placeholder')}
                onKeyPress={e => handleInput(e)}
                disabled={disabled}
            />
            <p className="Search-hint">{t('search.hint')}</p>
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
