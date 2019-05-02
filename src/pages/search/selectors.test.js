import * as selectors from './selectors';
import { searchInitialState } from './actions';

const state = {
    search: searchInitialState
};

describe('search selectors', () => {
    it('should return getFetchingShows', () => {
        expect(selectors.getFetchingShows(state)).toEqual(
            searchInitialState.fetchingShows
        );
    });

    it('should return searchText', () => {
        expect(selectors.getSearchText(state)).toEqual(
            searchInitialState.searchText
        );
    });

    it('should return shows', () => {
        expect(selectors.getShows(state)).toEqual(searchInitialState.shows);
    });
});
