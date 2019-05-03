import seamlessImmutable from 'seamless-immutable';
import { getSearchText } from './selectors';

const searchInitialState = seamlessImmutable({
    fetchingShows: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    searchText: '',
    shows: []
});

const searchActionTypes = {
    FETCH_SHOWS: {
        pending: 'FETCH_SHOWS/pending',
        fulfilled: 'FETCH_SHOWS/fulfilled',
        rejected: 'FETCH_SHOWS/rejected'
    },

    SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
    SET_SHOWS: 'SET_SHOWS'
};

const fetchShows = history => (dispatch, getState) => {
    const searchText = getSearchText(getState());
    dispatch({ type: searchActionTypes.FETCH_SHOWS.pending });

    return fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: searchActionTypes.SET_SHOWS,
                shows: data
            });
            dispatch({
                type: searchActionTypes.FETCH_SHOWS.fulfilled
            });
            history.push('/shows');
        })
        .catch(() => {
            dispatch({
                type: searchActionTypes.FETCH_SHOWS.rejected
            });
        });
};

const setSearchText = (searchText, history) => dispatch => {
    dispatch({ type: searchActionTypes.SET_SEARCH_TEXT, searchText });
    dispatch(fetchShows(history));
};

export { searchInitialState, searchActionTypes, fetchShows, setSearchText };
