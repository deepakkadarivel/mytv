import searchReducer from './reducer';
import { searchActionTypes, searchInitialState } from './actions';

describe('search reducer', () => {
    it('should return initial state', () => {
        expect(searchReducer(undefined, {})).toEqual(searchInitialState);
    });

    it(`should handle ${searchActionTypes.FETCH_SHOWS.pending}`, () => {
        const fetchingShows = {
            isPending: true,
            isRejected: false,
            isFulfilled: false
        };
        const expectedState = {
            ...searchInitialState,
            fetchingShows
        };

        expect(
            searchReducer(searchInitialState, {
                type: searchActionTypes.FETCH_SHOWS.pending
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${searchActionTypes.FETCH_SHOWS.fulfilled}`, () => {
        const fetchingShows = {
            isPending: false,
            isRejected: false,
            isFulfilled: true
        };
        const expectedState = {
            ...searchInitialState,
            fetchingShows
        };

        expect(
            searchReducer(searchInitialState, {
                type: searchActionTypes.FETCH_SHOWS.fulfilled
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${searchActionTypes.FETCH_SHOWS.rejected}`, () => {
        const fetchingShows = {
            isPending: false,
            isRejected: true,
            isFulfilled: false
        };
        const expectedState = {
            ...searchInitialState,
            fetchingShows
        };

        expect(
            searchReducer(searchInitialState, {
                type: searchActionTypes.FETCH_SHOWS.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${searchActionTypes.SET_SEARCH_TEXT}`, () => {
        const searchText = 'test';
        const expectedState = {
            ...searchInitialState,
            searchText
        };

        expect(
            searchReducer(searchInitialState, {
                type: searchActionTypes.SET_SEARCH_TEXT,
                searchText
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${searchActionTypes.SET_SHOWS}`, () => {
        const shows = ['show 1', 'show 2'];
        const expectedState = {
            ...searchInitialState,
            shows
        };

        expect(
            searchReducer(searchInitialState, {
                type: searchActionTypes.SET_SHOWS,
                shows
            })
        ).toEqual(expectedState);
    });
});
