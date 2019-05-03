import React from 'react';
import { shallow } from 'enzyme';

import ShowCard from '.';

describe('<ShowCard />', () => {
    const props = {
        url: 'http://placeholder.com/32',
        imageAlt: 'test image',
        title: 'show title',
        premiered: '1990',
        rating: 8,
        type: 'English',
        gener: 'Drama | Bio',
        desc: 'test desc',
        onClick: jest.fn()
    };

    const component = shallow(<ShowCard {...props} />);
    it('renders the ShowCard Component', () => {
        expect(component.hasClass('ShowCard')).toBeTruthy();
        expect(component.props().children.length).toBe(2);
    });

    it('renders the image of ShowCard Component', () => {
        const image = component.find('img');
        expect(image.length).toBe(1);
        expect(image.props().className).toBe('ShowCard-image');
        expect(image.props().alt).toBe(props.imageAlt);
        expect(image.props().src).toBe(props.url);
    });

    it('renders the content of ShowCard Component', () => {
        const content = component.find('span');
        expect(content.length).toBe(7);
    });
});
