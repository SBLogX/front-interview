import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';

import Post from '../components/Post';

describe('Enzyme tests', () => {
    test('should render Post according to snapshot', () => {
        const wrapper = mount(<Post />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})