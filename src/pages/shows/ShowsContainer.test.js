import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ShowsContainer from './ShowsContainer';

import ShowsComponent from './ShowsComponent';

jest.mock('./ShowsComponent');

describe('<ShowsContainer />', () => {
    const state = {
        search: {
            shows: []
        }
    };
    const store = configureMockStore()(state);

    let container;
    let component;
    let componentProps;

    beforeEach(() => {
        ShowsComponent.mockImplementation(() => {
            return {
                render() {
                    return <div />;
                }
            };
        });

        const wrapper = mount(
            <Provider store={store}>
                <ShowsContainer />
            </Provider>
        );

        container = wrapper.find(ShowsContainer);
        component = wrapper.find('ShowsComponent');
        componentProps = component.props();
    });

    it('renders the ShowsContainer', () => {
        expect(container.length).toBe(1);
        expect(component.length).toBe(1);
    });

    describe('mapStateToProps', () => {
        it('sets the search prop', () => {
            expect(componentProps.shows).toEqual(state.search.shows);
        });
    });
});
