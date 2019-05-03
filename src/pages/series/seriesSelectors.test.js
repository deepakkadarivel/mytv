import * as seriesSelectors from './seriesSelectors';
import { seriesInitialState } from './seriesActions';

const state = {
    series: {
        detail: {
            name: 'http://placeholder.com/32',
            type: 'test image',
            language: 'show title',
            geners: [],
            rating: { average: 8 },
            image: { medium: 'Drama | Bio' },
            summary: 'test desc',
            id: 123
        },
        fetchingEpisodes: seriesInitialState.fetchingEpisodes,
        fetchingDetail: seriesInitialState.fetchingDetail,
        episodes: [
            {
                name: 'http://placeholder.com/32',
                type: 'test image',
                language: 'show title',
                geners: [],
                rating: { average: 8 },
                image: { medium: 'Drama | Bio' },
                summary: 'test desc',
                id: 123
            }
        ]
    }
};

const expectedState = {
    detail: {
        desc: 'test desc',
        gener: undefined,
        imageAlt: 'http://placeholder.com/32',
        premiered: 'Unknown',
        rating: 8,
        title: 'http://placeholder.com/32',
        type: 'show title',
        url: 'Drama | Bio',
        id: 123
    },
    episodes: [
        {
            airdate: undefined,
            imageAlt: 'http://placeholder.com/32',
            number: undefined,
            season: undefined,
            summary: 'test desc',
            title: 'http://placeholder.com/32',
            url: 'Drama | Bio',
            id: 123
        }
    ]
};

describe('search seriesSelectors', () => {
    it('should return series episodes', () => {
        expect(seriesSelectors.getSeriesEpisodes(state)).toEqual(
            expectedState.episodes
        );
    });

    it('should return series detail', () => {
        expect(seriesSelectors.getSeriesDetail(state)).toEqual(
            expectedState.detail
        );
    });

    it('should return fetching episodes promise', () => {
        expect(seriesSelectors.getFetchingEpisodes(state)).toEqual(
            seriesInitialState.fetchingEpisodes
        );
    });

    it('should return fetching detail promise', () => {
        expect(seriesSelectors.getFetchingDetail(state)).toEqual(
            seriesInitialState.fetchingDetail
        );
    });
});
