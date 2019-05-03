import { get } from 'lodash';

const getSeriesEpisodes = state => {
    const episodes = get(state, 'series.episodes');
    return episodes.map(episode => {
        return {
            id: episode.id,
            title: episode.name,
            season: episode.season,
            number: episode.number,
            airdate: episode.airdate,
            url: episode.image
                ? episode.image.medium
                : 'https://via.placeholder.com/100?text=MyTV',
            imageAlt: episode.name,
            summary: episode.summary
        };
    });
};
const getSeriesDetails = state => get(state, 'series.details');
const getFetchingEpisodes = state => get(state, 'series.fetchingEpisodes');

export { getSeriesEpisodes, getSeriesDetails, getFetchingEpisodes };
