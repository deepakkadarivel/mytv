import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

class EpisodeComponent extends Component {
    componentDidMount() {
        const { fetchEpisode } = this.props;
        fetchEpisode();
    }

    render() {
        const { episode } = this.props;
        const { url, imageAlt, title, season, number, airdate, desc } = episode;
        return (
            <div className="Episode container">
                <img className="Episode-image" src={url} alt={imageAlt} />
                <span className="Episode-content">
                    <span className="Episode-content--title">{title}</span>
                    <span className="Episode-content--episode">
                        Season: {season} Number: {number}
                    </span>
                    <span className="Episode-content--airDate">
                        Airdate: {airdate}
                    </span>
                    <span className="Episode-content--desc">{desc}</span>
                </span>
            </div>
        );
    }
}

EpisodeComponent.propTypes = {
    fetchEpisode: PropTypes.func.isRequired,
    episode: PropTypes.object.isRequired
};

export default EpisodeComponent;
