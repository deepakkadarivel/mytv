import { get } from 'lodash';
import t from '../../translation';

const getShows = state => {
    const shows = get(state, 'shows.shows');
    return shows.map(show => {
        const item = show.show;
        return (
            item && {
                id: item.id,
                url: item.image
                    ? item.image.medium
                    : 'https://via.placeholder.com/200?text=MyTV',
                imageAlt: item.name,
                title: item.name,
                premiered: item.premiered || t('unknown'),
                rating: item.rating.average,
                type: item.language,
                gener: item.genres.join(' | '),
                desc: item.summary
            }
        );
    });
};
const getFetchingShows = state => get(state, 'shows.fetchingShows');

export { getShows, getFetchingShows };
