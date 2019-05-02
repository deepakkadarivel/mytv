import seamlessImmutable from 'seamless-immutable';

const searchInitialState = seamlessImmutable({
    fetchingShows: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    searchText: '',
    shows: []
});

export default searchInitialState;
