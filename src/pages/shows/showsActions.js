import seamlessImmutable from 'seamless-immutable';

const showsInitialState = seamlessImmutable({
    fetchingShows: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    shows: []
});

const showsActionTypes = {
    FETCH_SHOWS: {
        pending: 'FETCH_SHOWS/pending',
        fulfilled: 'FETCH_SHOWS/fulfilled',
        rejected: 'FETCH_SHOWS/rejected'
    },
    SET_SHOWS: 'SET_SHOWS'
};

const fetchShows = () => dispatch => {
    const searchText = localStorage.getItem('searchText');
    dispatch({ type: showsActionTypes.FETCH_SHOWS.pending });

    return fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: showsActionTypes.SET_SHOWS,
                shows: data
            });
            dispatch({
                type: showsActionTypes.FETCH_SHOWS.fulfilled
            });
        })
        .catch(() => {
            dispatch({
                type: showsActionTypes.FETCH_SHOWS.rejected
            });
        });
};

export { showsInitialState, showsActionTypes, fetchShows };
