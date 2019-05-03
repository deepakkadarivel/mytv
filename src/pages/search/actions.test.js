import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    searchInitialState,
    searchActionTypes,
    fetchShows,
    setSearchText
} from './actions';

let state;
let store;

const historyMock = { push: jest.fn() };

describe('fetchShows', () => {
    const middleWares = [thunk];
    const mockStore = configureMockStore(middleWares);
    beforeEach(() => {
        state = searchInitialState;
        store = mockStore(state);
    });

    it(`dispatches ${
        searchActionTypes.FETCH_SHOWS.fulfilled
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
                type: searchActionTypes.FETCH_SHOWS.pending
            },
            {
                type: searchActionTypes.SET_SHOWS,
                shows: mockData.data
            },
            {
                type: searchActionTypes.FETCH_SHOWS.fulfilled
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

        store.dispatch(fetchShows(historyMock)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it(`dispatches ${
        searchActionTypes.FETCH_SHOWS.rejected
    } action if the response is failed`, done => {
        global.fetch = jest.fn().mockImplementation(() => Promise.reject());
        const expectedActions = [
            {
                type: searchActionTypes.FETCH_SHOWS.pending
            },
            {
                type: searchActionTypes.FETCH_SHOWS.rejected
            }
        ];
        store.dispatch(fetchShows(historyMock)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        });
    });

    it('set searchTeaxt', () => {
        const searchText = 'test';
        const expectedActions = [
            {
                type: searchActionTypes.SET_SEARCH_TEXT,
                searchText
            },
            {
                type: searchActionTypes.FETCH_SHOWS.pending
            }
        ];
        store.dispatch(setSearchText(searchText));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
