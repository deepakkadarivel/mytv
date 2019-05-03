import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../components/ShowCard';
import './_style.scss';

const ShowsComponent = props => {
    const { shows } = props;
    return (
        <div className="Shows container">
            {shows.map(show => (
                <div key={show.id}>
                    <ShowCard {...show} />
                </div>
            ))}
        </div>
    );
};

ShowsComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    shows: PropTypes.array.isRequired
};

export default ShowsComponent;
