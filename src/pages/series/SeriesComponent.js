import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../components/ShowCard';
import EpisodeCard from '../../components/EpisodeCard';
import './_style.scss';
import t from '../../translation';

class SeriesComponent extends Component {
    componentDidMount() {
        const { fetchEpisodes, details } = this.props;
        fetchEpisodes(details.id);
    }

    render() {
        const { details, episodes, history, match } = this.props;
        return (
            <div className="Series container">
                <ShowCard {...details} onClick={() => {}} />
                <p className="Series-episodeTitle">{t('episodes')}</p>
                <div className="Series-grid">
                    {episodes.map(episode => (
                        <EpisodeCard
                            key={episode.id}
                            {...episode}
                            onClick={() => {
                                history.push(`${match.url}/episode`);
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

SeriesComponent.propTypes = {
    details: PropTypes.object.isRequired,
    episodes: PropTypes.array.isRequired,
    fetchEpisodes: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired
};

export default SeriesComponent;
