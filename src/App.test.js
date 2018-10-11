import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './mock/mockLocalStorage';

configure({ adapter: new Adapter() })
const props = {}
const component = shallow(<App {...props} />);

describe('<App />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
