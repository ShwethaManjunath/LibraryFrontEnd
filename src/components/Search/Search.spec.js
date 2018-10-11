import React from 'react';
import  search  from './Search';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
}

const component = shallow(<search {...props} />);

describe('<search />', () => {
    test('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
