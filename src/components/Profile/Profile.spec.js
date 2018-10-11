import React from 'react';
import { Profile } from './Profile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {
}

const component = shallow(<Profile {...props} />);

describe('<Profile />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
