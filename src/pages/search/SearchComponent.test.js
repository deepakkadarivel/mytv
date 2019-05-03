import React from 'react';
import { shallow } from 'enzyme';

import Component from './SearchComponent';

describe('<Component />', () => {
    const historyMock = { push: jest.fn() };
    const props = {
        history: historyMock
    };

    it('renders the Search Component', () => {
        const component = shallow(<Component {...props} />);
        expect(component.hasClass('Search')).toBeTruthy();
        expect(component.hasClass('container')).toBeTruthy();

        const search = component.find('Search');
        expect(search.length).toBe(1);
    });
});
