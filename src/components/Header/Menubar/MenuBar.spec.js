import React from 'react';
import { MenuBar } from './Menubar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
    logout: () => {},
}

const component = shallow(<MenuBar {...props} />);

describe('<MenuBar />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
