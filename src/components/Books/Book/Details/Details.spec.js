import React from 'react';
import Details from './Details';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })

const props = {}

const component = shallow(<Details {...props} />);

describe('<Details />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
