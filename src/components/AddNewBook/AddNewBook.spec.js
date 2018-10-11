import React from 'react';
import AddNewBook from './AddNewBook.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
   
}

const component = shallow(<AddNewBook {...props} />);

describe('<AddNewBook />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
