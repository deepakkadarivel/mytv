import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    showsInitialState,
    showsActionTypes,
    fetchShows
} from './showsActions';

let state;
let store;

describe('fetchShows', () => {
    const middleWares = [thunk];
    const mockStore = configureMockStore(middleWares);
    beforeEach(() => {
        state = showsInitialState;
        store = mockStore(state);
    });

    it(`dispatches ${
        showsActionTypes.FETCH_SHOWS.fulfilled
    } action with data on successful response`, done => {
        const mockData = {
            data: [
                {
                    id: 11,
                    title: 'show 1',
                    description: 'desc'
                }
            ]
        };
        const expectedActions = [
            {
                type: showsActionTypes.FETCH_SHOWS.pending
            },
            {
                type: showsActionTypes.SET_SHOWS,
                shows: mockData.data
            },
            {
                type: showsActionTypes.FETCH_SHOWS.fulfilled
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
                                title: 'show 1',
                                description: 'desc'
                            }
                        ];
                    }
                });
            });

            return p;
        });

        store.dispatch(fetchShows()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it(`dispatches ${
        showsActionTypes.FETCH_SHOWS.rejected
    } action if the response is failed`, done => {
        global.fetch = jest.fn().mockImplementation(() => Promise.reject());
        const expectedActions = [
            {
                type: showsActionTypes.FETCH_SHOWS.pending
            },
            {
                type: showsActionTypes.FETCH_SHOWS.rejected
            }
        ];
        store.dispatch(fetchShows()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });
});
