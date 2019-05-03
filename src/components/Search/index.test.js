import React from 'react';
import { shallow } from 'enzyme';
import t from '../../translation';

import Search from '.';

describe('<Search />', () => {
    const handleInputMock = jest.fn();

    const props = {
        handleInput: handleInputMock,
        disabled: false
    };

    const component = shallow(<Search {...props} />);
    it('renders the Search Component', () => {
        expect(component.hasClass('Search')).toBeTruthy();
        expect(component.props().children.length).toBe(2);
    });

    it('renders the input field of Search Component', () => {
        const input = component.find('input');
        expect(input.length).toBe(1);
        expect(input.props().className).toBe('Search-input');
        expect(input.props().placeholder).toBe(t('search.hint'));
    });

    it('renders the button of Search Component', () => {
        const button = component.find('button');
        expect(button.length).toBe(1);
        expect(button.props().className).toBe('Search-button');
        expect(button.props().children).toBe(t('search.button'));

        button.simulate('click');
        expect(handleInputMock).toHaveBeenCalled();
    });
});
