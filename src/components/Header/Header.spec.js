import React from 'react';
import { Toolbar } from './Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {}

const component = shallow(<Toolbar {...props} />);

describe('<Toolbar />', () => {
    it('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
