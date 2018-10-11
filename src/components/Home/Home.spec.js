import React from 'react';
import { Home } from './Home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
}

const component = shallow(<Home {...props} />);

describe('<Home />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
