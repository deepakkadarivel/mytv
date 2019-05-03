import { episodeActionTypes, episodeInitialState } from './episodeActions';

const episodeReducer = (state = episodeInitialState, action) => {
    switch (action.type) {
    case episodeActionTypes.FETCH_EPISODE.fulfilled:
        return state
            .setIn(['fetchingEpisode', 'isPending'], false)
            .setIn(['fetchingEpisode', 'isFulfilled'], true)
            .setIn(['fetchingEpisode', 'isRejected'], false);
    case episodeActionTypes.FETCH_EPISODE.pending:
        return state
            .setIn(['fetchingEpisode', 'isPending'], true)
            .setIn(['fetchingEpisode', 'isFulfilled'], false)
            .setIn(['fetchingEpisode', 'isRejected'], false);
    case episodeActionTypes.FETCH_EPISODE.rejected:
        return state
            .setIn(['fetchingEpisode', 'isPending'], false)
            .setIn(['fetchingEpisode', 'isFulfilled'], false)
            .setIn(['fetchingEpisode', 'isRejected'], true);

    case episodeActionTypes.SET_EPISODE:
        return state.set(
            'episode',
            action.episode || episodeInitialState.episode
        );

    default:
        return state;
    }
};

export default episodeReducer;
