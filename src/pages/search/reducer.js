import searchActionTypes from './actionTypes';
import searchInitialState from './initialState';

const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
    case searchActionTypes.FETCH_SHOWS.fulfilled:
        return state
            .setIn(['fetchingShows', 'isPending'], false)
            .setIn(['fetchingShows', 'isFulfilled'], true)
            .setIn(['fetchingShows', 'isRejected'], false);
    case searchActionTypes.FETCH_SHOWS.pending:
        return state
            .setIn(['fetchingShows', 'isPending'], true)
            .setIn(['fetchingShows', 'isFulfilled'], false)
            .setIn(['fetchingShows', 'isRejected'], false);
    case searchActionTypes.FETCH_SHOWS.rejected:
        return state
            .setIn(['fetchingShows', 'isPending'], false)
            .setIn(['fetchingShows', 'isFulfilled'], false)
            .setIn(['fetchingShows', 'isRejected'], true);

    case searchActionTypes.SET_SHOWS:
        return state.set('shows', action.shows || searchInitialState.shows);
    case searchActionTypes.SET_SEARCH_TEXT:
        return state.set('searchText', action.searchText);

    default:
        return state;
    }
};

export default searchReducer;
