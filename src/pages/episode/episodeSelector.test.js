import * as selectors from './episodeSelector';

const state = {
    episode: {
        episode: {
            image: { medium: 'http://placeholder.com/32' },
            name: 'show title',
            season: 1,
            number: 8,
            airdate: '1990',
            summary: '',
            id: 123
        },
        fetchEpisode: jest.fn()
    }
};

const epectedState = {
    episode: {
        url: 'http://placeholder.com/32',
        imageAlt: 'show title',
        title: 'show title',
        season: 1,
        number: 8,
        airdate: '1990',
        desc: '',
        id: 123
    },
    fetchEpisode: jest.fn()
};

describe('episode selectors', () => {
    it('should return fetchingEpisode', () => {
        expect(selectors.getFetchingEpisode(state)).toEqual(
            epectedState.fetchingEpisode
        );
    });

    it('should return episode', () => {
        expect(selectors.getEpisode(state)).toEqual(epectedState.episode);
    });
});
