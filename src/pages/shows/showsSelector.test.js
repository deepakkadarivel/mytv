import * as selectors from './showsSelectors';
import { showsInitialState } from './showsActions';

const state = {
    shows: showsInitialState
};

describe('shows selectors', () => {
    it('should return getFetchingShows', () => {
        expect(selectors.getFetchingShows(state)).toEqual(
            showsInitialState.fetchingShows
        );
    });

    it('should return shows', () => {
        expect(selectors.getShows(state)).toEqual(showsInitialState.shows);
    });
});
