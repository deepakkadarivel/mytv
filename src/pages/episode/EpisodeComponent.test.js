import React from 'react';
import { shallow } from 'enzyme';
import EpisodeComponent from './EpisodeComponent';

const props = {
    episode: {
        url: 'http://placeholder.com/32',
        imageAlt: 'test image',
        title: 'show title',
        season: 1,
        number: 8,
        airdate: '1990',
        desc: ''
    },
    fetchEpisode: jest.fn()
};

test('renders fine', () => {
    const wrapper = shallow(<EpisodeComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
});
