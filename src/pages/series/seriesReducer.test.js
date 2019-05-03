import seriesReducer from './seriesReducer';
import { seriesInitialState, seriesActionTypes } from './seriesActions';

describe('series reducer', () => {
    let expectedState;
    it('should return initial state', () => {
        expect(seriesReducer(undefined, {})).toEqual(seriesInitialState);
    });

    it(`should handle ${seriesActionTypes.FETCH_EPISODES.pending}`, () => {
        const fetchingEpisodes = {
            isPending: true,
            isRejected: false,
            isFulfilled: false
        };
        expectedState = seriesInitialState.asMutable({deep: true});
        expectedState.fetchingEpisodes = fetchingEpisodes;

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
        expectedState = seriesInitialState.asMutable({deep: true});
        expectedState.fetchingEpisodes = fetchingEpisodes;

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
        expectedState = seriesInitialState.asMutable({deep: true});
        expectedState.fetchingEpisodes = fetchingEpisodes;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_EPISODES.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.SET_SERIES_DETAILS}`, () => {
        const details = { test: 'test' };

        expectedState = seriesInitialState.asMutable({deep: true});
        expectedState.details = details;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.SET_SERIES_DETAILS,
                details
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.SET_SERIES_EPISODES}`, () => {
        const episodes = ['show 1', 'show 2'];

        expectedState = seriesInitialState.asMutable({deep: true});
        expectedState.episodes = episodes;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.SET_SERIES_EPISODES,
                episodes
            })
        ).toEqual(expectedState);
    });
});
