import React from 'react';
import { shallow } from 'enzyme';

import Component from './component';
import { searchInitialState } from './actions';

describe('<Component />', () => {
    const setSearchTextMock = jest.fn();

    const props = {
        fetchingShows: searchInitialState.fetchingShows,
        searchText: searchInitialState.searchText,
        setSearchText: setSearchTextMock
    };

    it('renders the Search Component', () => {
        const component = shallow(<Component {...props} />);
        expect(component.hasClass('Search')).toBeTruthy();
        expect(component.hasClass('container')).toBeTruthy();

        Component.handleSearch = jest.fn();

        const search = component.find('Search');
        expect(search.length).toBe(1);
        expect(search.props().value).toBe(props.searchText);
        expect(search.props().disabled).toBe(props.fetchingShows.isPending);
    });
});
