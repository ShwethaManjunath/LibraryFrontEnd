import React from 'react';
import {EditBookDetails} from './EditBookDetails';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

const props = {
   
}

configure({ adapter: new Adapter() })

const component = shallow(<EditBookDetails {...props} />);

describe('<EditBookDetails />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
