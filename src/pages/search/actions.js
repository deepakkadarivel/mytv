import searchActionTypes from './actionTypes';
import { getSearchText } from './selectors';

const fetchShows = () => (dispatch, getState) => {
    const searchText = getSearchText(getState());
    dispatch({ type: searchActionTypes.FETCH_SHOWS.pending });

    fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: searchActionTypes.SET_SHOWS,
                shows: data
            });
            dispatch({
                type: searchActionTypes.FETCH_SHOWS.fulfilled
            });
        })
        .catch(() => {
            dispatch({
                type: searchActionTypes.FETCH_SHOWS.rejected
            });
        });
};

const setSearchText = searchText => dispatch => {
    dispatch({ type: searchActionTypes.SET_SEARCH_TEXT, searchText });
    dispatch(fetchShows());
};

export { fetchShows, setSearchText };
