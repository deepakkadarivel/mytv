import { showsActionTypes, showsInitialState } from './showsActions';

const showsReducer = (state = showsInitialState, action) => {
    switch (action.type) {
    case showsActionTypes.FETCH_SHOWS.fulfilled:
        return state
            .setIn(['fetchingShows', 'isPending'], false)
            .setIn(['fetchingShows', 'isFulfilled'], true)
            .setIn(['fetchingShows', 'isRejected'], false);
    case showsActionTypes.FETCH_SHOWS.pending:
        return state
            .setIn(['fetchingShows', 'isPending'], true)
            .setIn(['fetchingShows', 'isFulfilled'], false)
            .setIn(['fetchingShows', 'isRejected'], false);
    case showsActionTypes.FETCH_SHOWS.rejected:
        return state
            .setIn(['fetchingShows', 'isPending'], false)
            .setIn(['fetchingShows', 'isFulfilled'], false)
            .setIn(['fetchingShows', 'isRejected'], true);

    case showsActionTypes.SET_SHOWS:
        return state.set('shows', action.shows || showsInitialState.shows);

    default:
        return state;
    }
};

export default showsReducer;
