import showsReducer from './showsReducer';
import { showsActionTypes, showsInitialState } from './showsActions';

describe('shows reducer', () => {
    let expectedState;
    it('should return initial state', () => {
        expect(showsReducer(undefined, {})).toEqual(showsInitialState);
    });

    it(`should handle ${showsActionTypes.FETCH_SHOWS.pending}`, () => {
        const fetchingShows = {
            isPending: true,
            isRejected: false,
            isFulfilled: false
        };
        expectedState = showsInitialState.asMutable({ deep: true });
        expectedState.fetchingShows = fetchingShows;

        expect(
            showsReducer(showsInitialState, {
                type: showsActionTypes.FETCH_SHOWS.pending
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${showsActionTypes.FETCH_SHOWS.fulfilled}`, () => {
        const fetchingShows = {
            isPending: false,
            isRejected: false,
            isFulfilled: true
        };
        expectedState = showsInitialState.asMutable({ deep: true });
        expectedState.fetchingShows = fetchingShows;

        expect(
            showsReducer(showsInitialState, {
                type: showsActionTypes.FETCH_SHOWS.fulfilled
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${showsActionTypes.FETCH_SHOWS.rejected}`, () => {
        const fetchingShows = {
            isPending: false,
            isRejected: true,
            isFulfilled: false
        };

        expectedState = showsInitialState.asMutable({ deep: true });
        expectedState.fetchingShows = fetchingShows;

        expect(
            showsReducer(showsInitialState, {
                type: showsActionTypes.FETCH_SHOWS.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${showsActionTypes.SET_SHOWS}`, () => {
        const shows = ['show 1', 'show 2'];

        expectedState = showsInitialState.asMutable({ deep: true });
        expectedState.shows = shows;

        expect(
            showsReducer(showsInitialState, {
                type: showsActionTypes.SET_SHOWS,
                shows
            })
        ).toEqual(expectedState);
    });
});
