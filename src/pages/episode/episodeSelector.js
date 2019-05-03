import { get } from 'lodash';

const getFetchingEpisode = state => get(state, 'episode.fetchingEpisode');
const getEpisode = state => {
    const episode = get(state, 'episode.episode');
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
        desc: episode.summary
    };
};

export { getEpisode, getFetchingEpisode };
