import React from 'react';
import  thumbnail  from './Thumbnail';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
}

const component = shallow(<thumbnail {...props} />);

describe('<thumbnail />', () => {
    test('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
