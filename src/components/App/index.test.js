import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '.';

jest.mock('.');

it('renders App component', () => {
    const state = {};
    const store = configureMockStore()(state);

    App.mockImplementation(() => {
        return {
            render() {
                return <div />;
            }
        };
    });

    const wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const component = wrapper.find('App');

    expect(component.length).toBe(1);
});
