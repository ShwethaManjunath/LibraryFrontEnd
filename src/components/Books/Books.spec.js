import React from 'react';
import {BooksPage} from './Books';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

const props = {
    fetchBooks : () => {},
    books:[{}]
}

configure({ adapter: new Adapter() })

const component = shallow(<BooksPage {...props} />);

describe('<BooksPage />', () => {
    it('should start', () => {
        expect(component.instance()).toBeDefined();
    })
})
