import React from 'react';
import { LoginPage } from './LoginPage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
}

const component = shallow(<LoginPage {...props} />);

describe('<LoginPage />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
