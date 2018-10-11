import React from 'react';
import Footer from './Footer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
   
}

const component = shallow(<Footer {...props} />);

describe('<Footer />', () => {
    it('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
