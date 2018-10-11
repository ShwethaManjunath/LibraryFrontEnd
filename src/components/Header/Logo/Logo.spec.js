import React from 'react';
import Logo  from './Logo';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
}

const component = shallow(<Logo {...props} />);

describe('<Logo />', () => {
    it('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
