import { get } from 'lodash';
import t from '../../translation';

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
const getSeriesDetail = state => {
    const detail = get(state, 'series.detail');
    return {
        id: detail.id,
        url: detail.image
            ? detail.image.medium
            : 'https://via.placeholder.com/200?text=MyTV',
        imageAlt: detail.name,
        title: detail.name,
        premiered: detail.premiered || t('unknown'),
        rating: detail.rating && detail.rating.average,
        type: detail.language,
        gener: detail.genres && detail.genres.join(' | '),
        desc: detail.summary
    };
};
const getFetchingEpisodes = state => get(state, 'series.fetchingEpisodes');
const getFetchingDetail = state => get(state, 'series.fetchingDetail');

export {
    getSeriesEpisodes,
    getSeriesDetail,
    getFetchingEpisodes,
    getFetchingDetail
};
