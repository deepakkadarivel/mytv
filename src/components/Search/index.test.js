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
        expect(input.props().placeholder).toBe(t('search.placeholder'));
        expect(input.props().disabled).toBeFalsy();
        input.props().onKeyPress();
        expect(handleInputMock).toHaveBeenCalled();
    });

    it('renders the hint field of Search Component', () => {
        const hint = component.find('p');
        expect(hint.length).toBe(1);
        expect(hint.props().className).toBe('Search-hint');
        expect(hint.props().children).toBe(t('search.hint'));
    });
});
