import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { SearchPage } from '.';
// import {
//     searchInitialState,
//     searchActionTypes,
//     fetchShows,
//     setSearchText
// } from './actions';
import * as searchActions from './actions';

import Component from './component';

jest.mock('./component');

describe('<SearchPage />', () => {
    const state = {
        search: searchActions.searchInitialState
    };
    const store = configureMockStore()(state);

    let container;
    let component;
    let componentProps;

    beforeEach(() => {
        Component.mockImplementation(() => {
            return {
                render() {
                    return <div />;
                }
            };
        });

        const wrapper = mount(
            <Provider store={store}>
                <SearchPage />
            </Provider>
        );

        container = wrapper.find(SearchPage);
        component = wrapper.find('component');
        componentProps = component.props();
    });

    it('renders the SearchPage', () => {
        expect(container.length).toBe(1);
        expect(component.length).toBe(1);
    });

    describe('mapStateToProps', () => {
        it('sets the search prop', () => {
            expect(componentProps.shows).toEqual(state.search.shows);
            expect(componentProps.searchText).toEqual(state.search.searchText);
        });
    });
});
