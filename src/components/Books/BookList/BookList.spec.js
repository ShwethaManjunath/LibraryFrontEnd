import React from 'react';
import BooksList from './BooksList.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

const props = {
    books :[{}]
}

configure({ adapter: new Adapter() })

const component = shallow(<BooksList {...props} />);

describe('<BooksList />', () => {
    test('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
