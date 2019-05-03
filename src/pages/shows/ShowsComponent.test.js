import React from 'react';
import { shallow } from 'enzyme';
import ShowsComponent from './ShowsComponent';

const historyMock = { push: jest.fn() };

const props = {
    shows: [
        {
            url: 'http://placeholder.com/32',
            imageAlt: 'test image',
            title: 'show title',
            premiered: '1990',
            rating: 8,
            type: 'English',
            gener: 'Drama | Bio',
            desc: 'test desc',
            onClick: jest.fn(),
            id: 123
        }
    ],
    history: historyMock,
    fetchingShows: {
        isPending: false,
        isRejected: false,
        isFulfilled: false
    },
    fetchShows: jest.fn()
};

test('renders fine', () => {
    const wrapper = shallow(<ShowsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
});
