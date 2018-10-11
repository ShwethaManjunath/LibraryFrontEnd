import React from 'react';
import categoryList from './CategoryList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
   
}


const component = shallow(<categoryList  />);


describe('<categoryList />', () => {
    it('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
