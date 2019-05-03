import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import EpisodeContainer from './EpisodeContainer';

import EpisodeComponent from './EpisodeComponent';

jest.mock('./EpisodeComponent');

describe('<EpisodeContainer />', () => {
    const state = {
        episode: {
            episode: {
                image: { medium: 'http://placeholder.com/32' },
                name: 'show title',
                season: 1,
                number: 8,
                airdate: '1990',
                summary: '',
                id: 123
            },
            fetchEpisode: jest.fn()
        }
    };

    const epectedState = {
        episode: {
            url: 'http://placeholder.com/32',
            imageAlt: 'show title',
            title: 'show title',
            season: 1,
            number: 8,
            airdate: '1990',
            desc: '',
            id: 123
        },
        fetchEpisode: jest.fn()
    };
    const store = configureMockStore()(state);

    let container;
    let component;
    let componentProps;

    beforeEach(() => {
        EpisodeComponent.mockImplementation(() => {
            return {
                render() {
                    return <div />;
                }
            };
        });

        const wrapper = mount(
            <Provider store={store}>
                <EpisodeContainer />
            </Provider>
        );

        container = wrapper.find(EpisodeContainer);
        component = wrapper.find('EpisodeComponent');
        componentProps = component.props();
    });

    it('renders the EpisodeContainer', () => {
        expect(container.length).toBe(1);
        expect(component.length).toBe(1);
    });

    describe('mapStateToProps', () => {
        it('sets the search prop', () => {
            expect(componentProps.episode).toEqual(epectedState.episode);
            expect(componentProps.fetchingEpisode).toEqual(
                epectedState.fetchingEpisode
            );
        });
    });
});
