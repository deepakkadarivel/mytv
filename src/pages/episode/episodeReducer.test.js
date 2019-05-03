import episodeReducer from './episodeReducer';
import { episodeActionTypes, episodeInitialState } from './episodeActions';

describe('episode reducer', () => {
    it('should return initial state', () => {
        expect(episodeReducer(undefined, {})).toEqual(episodeInitialState);
    });

    it(`should handle ${episodeActionTypes.FETCH_EPISODE.pending}`, () => {
        const fetchingEpisode = {
            isPending: true,
            isRejected: false,
            isFulfilled: false
        };
        const expectedState = {
            ...episodeInitialState,
            fetchingEpisode
        };

        expect(
            episodeReducer(episodeInitialState, {
                type: episodeActionTypes.FETCH_EPISODE.pending
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${episodeActionTypes.FETCH_EPISODE.fulfilled}`, () => {
        const fetchingEpisode = {
            isPending: false,
            isRejected: false,
            isFulfilled: true
        };
        const expectedState = {
            ...episodeInitialState,
            fetchingEpisode
        };

        expect(
            episodeReducer(episodeInitialState, {
                type: episodeActionTypes.FETCH_EPISODE.fulfilled
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${episodeActionTypes.FETCH_EPISODE.rejected}`, () => {
        const fetchingEpisode = {
            isPending: false,
            isRejected: true,
            isFulfilled: false
        };
        const expectedState = {
            ...episodeInitialState,
            fetchingEpisode
        };

        expect(
            episodeReducer(episodeInitialState, {
                type: episodeActionTypes.FETCH_EPISODE.rejected
            })
        ).toEqual(expectedState);
    });

    it(`should handle ${episodeActionTypes.SET_EPISODE}`, () => {
        const episode = {
            url: 'http://placeholder.com/32',
            imageAlt: 'show title',
            title: 'show title',
            season: 1,
            number: 8,
            airdate: '1990',
            desc: '',
            id: 123
        };
        const expectedState = {
            ...episodeInitialState,
            episode
        };

        expect(
            episodeReducer(episodeInitialState, {
                type: episodeActionTypes.SET_EPISODE,
                episode
            })
        ).toEqual(expectedState);
    });
});
