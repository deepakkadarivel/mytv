import React from 'react';
import { shallow } from 'enzyme';
import SeriesComponent from './SeriesComponent';
import { seriesInitialState } from './seriesActions';

const props = {
    details: {
        url: 'http://placeholder.com/32',
        imageAlt: 'test image',
        title: 'show title',
        premiered: '1990',
        rating: 8,
        type: 'English',
        gener: 'Drama | Bio',
        desc: 'test desc'
    },
    episodes: seriesInitialState.episodes,
    fetchEpisodes: jest.fn()
};

test('renders fine', () => {
    const wrapper = shallow(<SeriesComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
});
