import seamlessImmutable from 'seamless-immutable';

const episodeInitialState = seamlessImmutable({
    fetchingEpisode: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    episode: {}
});

const episodeActionTypes = {
    FETCH_EPISODE: {
        pending: 'FETCH_EPISODE/pending',
        fulfilled: 'FETCH_EPISODE/fulfilled',
        rejected: 'FETCH_EPISODE/rejected'
    },

    SET_EPISODE: 'SET_EPISODE'
};

const fetchEpisode = () => dispatch => {
    dispatch({ type: episodeActionTypes.FETCH_EPISODE.pending });

    return fetch('http://api.tvmaze.com/episodes/657308')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: episodeActionTypes.SET_EPISODE,
                episode: data
            });
            dispatch({
                type: episodeActionTypes.FETCH_EPISODE.fulfilled
            });
        })
        .catch(() => {
            dispatch({
                type: episodeActionTypes.FETCH_EPISODE.rejected
            });
        });
};

export { episodeInitialState, episodeActionTypes, fetchEpisode };
