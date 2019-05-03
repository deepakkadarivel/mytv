import React from 'react';
import { shallow } from 'enzyme';
import EpisodeCard from '.';

const props = {
    url: 'http://placeholder.com/32',
    imageAlt: 'test image',
    title: 'show title',
    season: 1,
    number: 8,
    airdate: '1990',
    onClick: jest.fn()
};

test('renders fine', () => {
    const wrapper = shallow(<EpisodeCard {...props} />);
    expect(wrapper).toMatchSnapshot();
});
