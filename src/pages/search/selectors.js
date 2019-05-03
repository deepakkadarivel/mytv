import { get } from 'lodash';

const getSearchText = state => get(state, 'search.searchText');
const getShows = state => {
    const shows = get(state, 'search.shows');
    return shows.map(show => {
        return (
            show.show && {
                id: show.show.id,
                url: show.show.image.medium,
                imageAlt: show.show.name,
                title: show.show.name,
                premiered: show.show.premiered,
                rating: show.show.rating.average,
                type: show.show.language,
                gener: show.show.genres.join(' | '),
                desc: show.show.summary
            }
        );
    });
};
const getFetchingShows = state => get(state, 'search.fetchingShows');

export { getSearchText, getShows, getFetchingShows };
