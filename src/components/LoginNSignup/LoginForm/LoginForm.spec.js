import React from 'react';
import { LoginForm } from './LoginForm';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
    login:()=>{},
}

const component = shallow(<LoginForm {...props} />);

describe('<LoginForm />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
