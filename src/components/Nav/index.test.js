import React from 'react';
import { shallow } from 'enzyme';
import t from '../../translation';
import logo from '../../assets/logo.webp';

import Nav from '.';

describe('<Nav />', () => {
    const component = shallow(<Nav />);
    it('renders the Nav Component', () => {
        expect(component.hasClass('Nav')).toBeTruthy();
    });

    it('renders the app logo and name in Nav Component', () => {
        const appLogo = component.find('span');
        expect(appLogo.length).toBe(1);
        expect(appLogo.props().className).toBe('Nav-logo');

        const image = appLogo.find('img');
        expect(image.props().src).toEqual(logo);
        expect(image.props().alt).toEqual(t('logo'));
    });
});
