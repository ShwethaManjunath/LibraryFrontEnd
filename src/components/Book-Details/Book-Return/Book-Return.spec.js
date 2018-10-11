import React from 'react';
import BookReturn from './Book-Return';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../../mock/mockLocalStorage';

const props = {}

configure({ adapter: new Adapter() })

const component = shallow(<BookReturn booklist={[]} />);

describe('<BookReturn />', () => {
    test('should start', () => {
        expect(component.instance()).toBeDefined()
    })
})
