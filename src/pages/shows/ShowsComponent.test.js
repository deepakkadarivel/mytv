import React from 'react';
import { shallow } from 'enzyme';

import ShowsComponent from './ShowsComponent';

describe('<ShowsComponent />', () => {
    const props = {
        shows: [
            {
                id: 1,
                url: 'http://placeholder.com/32',
                imageAlt: 'test image',
                title: 'show title',
                premiered: '1990',
                rating: 8,
                type: 'English',
                gener: 'Drama | Bio',
                desc: 'test desc'
            }
        ]
    };

    it('renders the ShowsComponent', () => {
        const component = shallow(<ShowsComponent {...props} />);
        expect(component.hasClass('Shows')).toBeTruthy();
        expect(component.hasClass('container')).toBeTruthy();
        expect(component.children.length).toBe(1);
    });
});
