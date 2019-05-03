import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    seriesInitialState,
    seriesActionTypes,
    fetchEpisodes,
    setDetails
} from './seriesActions';

let state;
let store;

describe('fetchEpisodes', () => {
    const middleWares = [thunk];
    const mockStore = configureMockStore(middleWares);
    beforeEach(() => {
        state = seriesInitialState;
        store = mockStore(state);
    });

    it(`dispatches ${
        seriesActionTypes.FETCH_EPISODES.fulfilled
    } action with data on successful response`, done => {
        const mockData = {
            data: [
                {
                    id: 11,
                    title: 'episode 1',
                    description: 'desc'
                }
            ]
        };
        const expectedActions = [
            {
                type: seriesActionTypes.FETCH_EPISODES.pending
            },
            {
                type: seriesActionTypes.SET_SERIES_EPISODES,
                episodes: mockData.data
            },
            {
                type: seriesActionTypes.FETCH_EPISODES.fulfilled
            }
        ];

        global.fetch = jest.fn().mockImplementation(() => {
            const p = new Promise(resolve => {
                resolve({
                    ok: true,
                    Id: '123',
                    json() {
                        return [
                            {
                                id: 11,
                                title: 'episode 1',
                                description: 'desc'
                            }
                        ];
                    }
                });
            });

            return p;
        });

        store.dispatch(fetchEpisodes(123)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it(`dispatches ${
        seriesActionTypes.FETCH_EPISODES.rejected
    } action if the response is failed`, done => {
        global.fetch = jest.fn().mockImplementation(() => Promise.reject());
        const expectedActions = [
            {
                type: seriesActionTypes.FETCH_EPISODES.pending
            },
            {
                type: seriesActionTypes.FETCH_EPISODES.rejected
            }
        ];
        store.dispatch(fetchEpisodes(123)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it('set setDetails', () => {
        const details = { test: 'test' };
        const expectedActions = [
            {
                type: seriesActionTypes.SET_SERIES_DETAILS,
                details
            },
            {
                type: seriesActionTypes.FETCH_EPISODES.pending
            }
        ];
        store.dispatch(setDetails(details));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
