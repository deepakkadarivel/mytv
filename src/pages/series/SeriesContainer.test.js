import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SeriesContainer from './SeriesContainer';
import { seriesInitialState } from './seriesActions';

import SeriesComponent from './SeriesComponent';

jest.mock('./SeriesComponent');

describe('<SeriesContainer />', () => {
    const state = {
        series: seriesInitialState
    };
    const store = configureMockStore()(state);

    let container;
    let component;
    let componentProps;

    beforeEach(() => {
        SeriesComponent.mockImplementation(() => {
            return {
                render() {
                    return <div />;
                }
            };
        });

        const wrapper = mount(
            <Provider store={store}>
                <SeriesContainer />
            </Provider>
        );

        container = wrapper.find(SeriesContainer);
        component = wrapper.find('SeriesComponent');
        componentProps = component.props();
    });

    it('renders the SeriesContainer', () => {
        expect(container.length).toBe(1);
        expect(component.length).toBe(1);
    });

    describe('mapStateToProps', () => {
        it('sets the shows prop', () => {
            expect(componentProps.details).toEqual(state.series.details);
            expect(componentProps.episodes).toEqual(state.series.episodes);
            expect(componentProps.fetchingEpisodes).toEqual(
                state.series.fetchingEpisodes
            );
        });
    });
});
