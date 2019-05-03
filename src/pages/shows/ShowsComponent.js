import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../components/ShowCard';
import './_style.scss';
import t from '../../translation';

const ShowsComponent = props => {
    const { shows, setDetails, history } = props;
    return (
        <div className="Shows container">
            {shows.length ? (
                <div className="Shows-grid">
                    {shows.map(show => (
                        <div key={show.id}>
                            <ShowCard
                                {...show}
                                onClick={() => {
                                    setDetails(show);
                                    history.push('/series');
                                }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="Shows-empty">{t('empty')}</p>
            )}
        </div>
    );
};

ShowsComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    shows: PropTypes.array.isRequired,
    setDetails: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired
};

export default ShowsComponent;
