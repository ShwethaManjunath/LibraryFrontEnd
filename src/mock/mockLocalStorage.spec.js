import React from 'react';
import * as  mockLocalStorage from './mockLocalStorage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
const props = {}
// const component = shallow(<App {...props} />);

describe('mockLocalStorage', () => {
    fit('should start', () => {
        expect(mockLocalStorage).toBeTruthy()
    })
})
