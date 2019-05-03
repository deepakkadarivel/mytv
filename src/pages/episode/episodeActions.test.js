import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    episodeInitialState,
    episodeActionTypes,
    fetchEpisode
} from './episodeActions';

let state;
let store;

describe('fetchEpisode', () => {
    const middleWares = [thunk];
    const mockStore = configureMockStore(middleWares);
    beforeEach(() => {
        state = episodeInitialState;
        store = mockStore(state);
    });

    it(`dispatches ${
        episodeActionTypes.FETCH_EPISODE.fulfilled
    } action with data on successful response`, done => {
        const mockData = {
            data: {
                id: 1
            }
        };
        const expectedActions = [
            {
                type: episodeActionTypes.FETCH_EPISODE.pending
            },
            {
                type: episodeActionTypes.SET_EPISODE,
                episode: mockData.data
            },
            {
                type: episodeActionTypes.FETCH_EPISODE.fulfilled
            }
        ];

        global.fetch = jest.fn().mockImplementation(() => {
            const p = new Promise(resolve => {
                resolve({
                    ok: true,
                    Id: '123',
                    json() {
                        return { id: 1 };
                    }
                });
            });

            return p;
        });

        store.dispatch(fetchEpisode(123)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it(`dispatches ${
        episodeActionTypes.FETCH_EPISODE.rejected
    } action if the response is failed`, done => {
        global.fetch = jest.fn().mockImplementation(() => Promise.reject());
        const expectedActions = [
            {
                type: episodeActionTypes.FETCH_EPISODE.pending
            },
            {
                type: episodeActionTypes.FETCH_EPISODE.rejected
            }
        ];
        store.dispatch(fetchEpisode(123)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });
});
