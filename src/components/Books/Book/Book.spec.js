import React from 'react';
import {Book} from './Book';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

configure({ adapter: new Adapter() })


const props = {
    fetchBook: () => {},
    books:[{}]
}

const component = shallow(<Book {...props} />);

describe('<Book />', () => {
    test('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
