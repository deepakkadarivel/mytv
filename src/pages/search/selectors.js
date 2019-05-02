import { get } from 'lodash';

const getSearchText = state => get(state, 'search.searchText');
const getShows = state => get(state, 'search.shows');
const getFetchingShows = state => get(state, 'search.fetchingShows');

export { getSearchText, getShows, getFetchingShows };
