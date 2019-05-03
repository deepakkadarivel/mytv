import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

const EpisodeCard = props => {
    const { url, imageAlt, title, season, number, airdate, onClick } = props;
    return (
        <span className="EpisodeCard" onClick={onClick} role="presentation">
            <img className="EpisodeCard-image" src={url} alt={imageAlt} />
            <span className="EpisodeCard-content">
                <span className="EpisodeCard-content--title">{title}</span>
                <span className="EpisodeCard-content--episode">
                    Season: {season} Number: {number}
                </span>
                <span className="EpisodeCard-content--airDate">
                    Airdate: {airdate}
                </span>
            </span>
        </span>
    );
};

EpisodeCard.propTypes = {
    url: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    season: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    airdate: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default EpisodeCard;
