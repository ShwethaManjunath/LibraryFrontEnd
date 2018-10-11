import React from 'react';
import  spinner  from './Spinner';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
}

const component = shallow(<spinner {...props} />);

describe('<spinner />', () => {
    test('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
