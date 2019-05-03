import { seriesActionTypes, seriesInitialState } from './seriesActions';

const seriesReducer = (state = seriesInitialState, action) => {
    switch (action.type) {
    case seriesActionTypes.FETCH_EPISODES.fulfilled:
        return state
            .setIn(['fetchingEpisodes', 'isPending'], false)
            .setIn(['fetchingEpisodes', 'isFulfilled'], true)
            .setIn(['fetchingEpisodes', 'isRejected'], false);
    case seriesActionTypes.FETCH_EPISODES.pending:
        return state
            .setIn(['fetchingEpisodes', 'isPending'], true)
            .setIn(['fetchingEpisodes', 'isFulfilled'], false)
            .setIn(['fetchingEpisodes', 'isRejected'], false);
    case seriesActionTypes.FETCH_EPISODES.rejected:
        return state
            .setIn(['fetchingEpisodes', 'isPending'], false)
            .setIn(['fetchingEpisodes', 'isFulfilled'], false)
            .setIn(['fetchingEpisodes', 'isRejected'], true);

    case seriesActionTypes.FETCH_DETAIL.fulfilled:
        return state
            .setIn(['fetchingDetail', 'isPending'], false)
            .setIn(['fetchingDetail', 'isFulfilled'], true)
            .setIn(['fetchingDetail', 'isRejected'], false);
    case seriesActionTypes.FETCH_DETAIL.pending:
        return state
            .setIn(['fetchingDetail', 'isPending'], true)
            .setIn(['fetchingDetail', 'isFulfilled'], false)
            .setIn(['fetchingDetail', 'isRejected'], false);
    case seriesActionTypes.FETCH_DETAIL.rejected:
        return state
            .setIn(['fetchingDetail', 'isPending'], false)
            .setIn(['fetchingDetail', 'isFulfilled'], false)
            .setIn(['fetchingDetail', 'isRejected'], true);

    case seriesActionTypes.SET_SERIES_DETAIL:
        return state.set(
            'detail',
            action.detail || seriesInitialState.detail
        );
    case seriesActionTypes.SET_SERIES_EPISODES:
        return state.set('episodes', action.episodes);

    default:
        return state;
    }
};

export default seriesReducer;
