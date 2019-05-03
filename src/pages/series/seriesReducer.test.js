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
        expectedState = seriesInitialState.asMutable({ deep: true });
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
        expectedState = seriesInitialState.asMutable({ deep: true });
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
        expectedState = seriesInitialState.asMutable({ deep: true });
        expectedState.fetchingEpisodes = fetchingEpisodes;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_EPISODES.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.FETCH_DETAIL.pending}`, () => {
        const fetchingDetail = {
            isPending: true,
            isRejected: false,
            isFulfilled: false
        };
        expectedState = seriesInitialState.asMutable({ deep: true });
        expectedState.fetchingDetail = fetchingDetail;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_DETAIL.pending
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.FETCH_DETAIL.fulfilled}`, () => {
        const fetchingDetail = {
            isPending: false,
            isRejected: false,
            isFulfilled: true
        };
        expectedState = seriesInitialState.asMutable({ deep: true });
        expectedState.fetchingDetail = fetchingDetail;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_DETAIL.fulfilled
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.FETCH_DETAIL.rejected}`, () => {
        const fetchingDetail = {
            isPending: false,
            isRejected: true,
            isFulfilled: false
        };
        expectedState = seriesInitialState.asMutable({ deep: true });
        expectedState.fetchingDetail = fetchingDetail;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.FETCH_DETAIL.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.SET_SERIES_DETAIL}`, () => {
        const detail = { test: 'test' };

        expectedState = seriesInitialState.asMutable({ deep: true });
        expectedState.detail = detail;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.SET_SERIES_DETAIL,
                detail
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${seriesActionTypes.SET_SERIES_EPISODES}`, () => {
        const episodes = ['show 1', 'show 2'];

        expectedState = seriesInitialState.asMutable({ deep: true });
        expectedState.episodes = episodes;

        expect(
            seriesReducer(seriesInitialState, {
                type: seriesActionTypes.SET_SERIES_EPISODES,
                episodes
            })
        ).toEqual(expectedState);
    });
});
