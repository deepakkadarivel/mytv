import seamlessImmutable from 'seamless-immutable';

const seriesInitialState = seamlessImmutable({
    fetchingEpisodes: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    fetchingDetail: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    detail: {},
    episodes: []
});

const seriesActionTypes = {
    FETCH_EPISODES: {
        pending: 'FETCH_EPISODES/pending',
        fulfilled: 'FETCH_EPISODES/fulfilled',
        rejected: 'FETCH_EPISODES/rejected'
    },

    FETCH_DETAIL: {
        pending: 'FETCH_DETAIL/pending',
        fulfilled: 'FETCH_DETAIL/fulfilled',
        rejected: 'FETCH_DETAIL/rejected'
    },

    SET_SERIES_DETAIL: 'SET_SERIES_DETAIL',
    SET_SERIES_EPISODES: 'SET_SERIES_EPISODES'
};

const fetchEpisodes = () => dispatch => {
    dispatch({ type: seriesActionTypes.FETCH_EPISODES.pending });
    const id = localStorage.getItem('showId');
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

const fetchDetail = () => dispatch => {
    dispatch({ type: seriesActionTypes.FETCH_DETAIL.pending });
    const id = localStorage.getItem('showId');
    return fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: seriesActionTypes.SET_SERIES_DETAIL,
                detail: data
            });
            dispatch({
                type: seriesActionTypes.FETCH_DETAIL.fulfilled
            });
        })
        .catch(() => {
            dispatch({
                type: seriesActionTypes.FETCH_DETAIL.rejected
            });
        });
};

export { seriesInitialState, seriesActionTypes, fetchEpisodes, fetchDetail };
