import seamlessImmutable from 'seamless-immutable';

const seriesInitialState = seamlessImmutable({
    fetchingEpisodes: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    details: {},
    episodes: []
});

const seriesActionTypes = {
    FETCH_EPISODES: {
        pending: 'FETCH_EPISODES/pending',
        fulfilled: 'FETCH_EPISODES/fulfilled',
        rejected: 'FETCH_EPISODES/rejected'
    },

    SET_SERIES_DETAILS: 'SET_SERIES_DETAILS',
    SET_SERIES_EPISODES: 'SET_SERIES_EPISODES'
};

const fetchEpisodes = id => dispatch => {
    dispatch({ type: seriesActionTypes.FETCH_EPISODES.pending });

    return fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: seriesActionTypes.SET_SERIES_EPISODES,
                episodes: data
            });
            dispatch({
                type: seriesActionTypes.FETCH_EPISODES.fulfilled
            });
        })
        .catch(() => {
            dispatch({
                type: seriesActionTypes.FETCH_EPISODES.rejected
            });
        });
};

const setDetails = details => dispatch => {
    dispatch({ type: seriesActionTypes.SET_SERIES_DETAILS, details });
    dispatch(fetchEpisodes(details.id));
};

export { seriesInitialState, seriesActionTypes, fetchEpisodes, setDetails };
