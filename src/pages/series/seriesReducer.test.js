import seriesReducer from './seriesReducer';
import { seriesInitialState, seriesActionTypes } from './seriesActions';

describe('series reducer', () => {
    it('should return initial state', () => {
        expect(seriesReducer(undefined, {})).toEqual(seriesInitialState);
    });

    it(`should handle ${seriesActionTypes.FETCH_EPISODES.pending}`, () => {
        const fetchingEpisodes = {
            isPending: true,
            isRejected: false,
            isFulfilled: false
        };
        const expectedState = {
            ...seriesInitialState,
            fetchingEpisodes
        };

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_EPISODES.pending
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.FETCH_EPISODES.fulfilled}`, () => {
        const fetchingEpisodes = {
            isPending: false,
            isRejected: false,
            isFulfilled: true
        };
        const expectedState = {
            ...seriesInitialState,
            fetchingEpisodes
        };

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_EPISODES.fulfilled
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.FETCH_EPISODES.rejected}`, () => {
        const fetchingEpisodes = {
            isPending: false,
            isRejected: true,
            isFulfilled: false
        };
        const expectedState = {
            ...seriesInitialState,
            fetchingEpisodes
        };

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_EPISODES.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.SET_SERIES_DETAILS}`, () => {
        const details = { test: 'test' };
        const expectedState = {
            ...seriesInitialState,
            details
        };

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.SET_SERIES_DETAILS,
                details
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.SET_SERIES_EPISODES}`, () => {
        const episodes = ['show 1', 'show 2'];
        const expectedState = {
            ...seriesInitialState,
            episodes
        };

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.SET_SERIES_EPISODES,
                episodes
            })
        ).toEqual(expectedState);
    });
});
