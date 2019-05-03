import * as seriesSelectors from './seriesSelectors';
import { seriesInitialState } from './seriesActions';

const state = {
    series: seriesInitialState
};

describe('search seriesSelectors', () => {
    it('should return series episodes', () => {
        expect(seriesSelectors.getSeriesEpisodes(state)).toEqual(
            seriesInitialState.episodes
        );
    });

    it('should return series details', () => {
        expect(seriesSelectors.getSeriesDetails(state)).toEqual(
            seriesInitialState.details
        );
    });

    it('should return fetching episodes promise', () => {
        expect(seriesSelectors.getFetchingEpisodes(state)).toEqual(
            seriesInitialState.fetchingEpisodes
        );
    });
});
