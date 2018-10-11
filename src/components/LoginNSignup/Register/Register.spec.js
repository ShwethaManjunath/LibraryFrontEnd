import React from 'react';
import { Register } from './Register';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
}

const component = shallow(<Register {...props} />);

describe('<Register />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
