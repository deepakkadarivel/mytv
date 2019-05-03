import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

const ShowCard = props => {
    const {
        url,
        imageAlt,
        title,
        premiered,
        rating,
        type,
        gener,
        desc,
        onClick
    } = props;
    return (
        <div className="ShowCard" onClick={onClick} role="presentation">
            <img className="ShowCard-image" src={url} alt={imageAlt} />
            <span className="ShowCard-content">
                <span className="ShowCard-content--title">{title}</span>
                <span className="ShowCard-content--premiered">
                    Premiered: {premiered}
                </span>
                {rating && (
                    <span className="ShowCard-content--rating">{rating}</span>
                )}
                <span className="ShowCard-content--type">{type}</span>
                <span className="ShowCard-content--gener">{gener}</span>
                <span className="ShowCard-content--desc">{desc}</span>
            </span>
        </div>
    );
};

ShowCard.propTypes = {
    url: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    premiered: PropTypes.string.isRequired,
    rating: PropTypes.number,
    type: PropTypes.string.isRequired,
    gener: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

ShowCard.defaultProps = {
    rating: 0
};

export default ShowCard;
