import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../components/ShowCard';
import EpisodeCard from '../../components/EpisodeCard';
import './_style.scss';
import t from '../../translation';

class SeriesComponent extends Component {
    componentDidMount() {
        const { fetchEpisodes, fetchDetail } = this.props;
        fetchEpisodes();
        fetchDetail();
    }

    render() {
        const { detail, episodes, history, match } = this.props;
        return (
            <div className="Series container">
                <ShowCard {...detail} onClick={() => {}} />
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
    detail: PropTypes.object.isRequired,
    episodes: PropTypes.array.isRequired,
    fetchEpisodes: PropTypes.func.isRequired,
    fetchDetail: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired
};

export default SeriesComponent;
