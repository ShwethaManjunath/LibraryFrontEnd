import React from 'react';
import {BookDetails} from './Book-Details';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../mock/mockLocalStorage';

// configure({ adapter: new Adapter() })

// const props = {}
// const component = shallow(<BookDetails/>);

// describe('BookDetails', () => {
//     fit('should start', () => {
//         expect(BookDetails).toBeTruthy()
//     })
// })

const props = {
    getBookDetails : () => {},
    bookdetails:[{}]
}

configure({ adapter: new Adapter() })

const component = shallow(<BookDetails {...props} />);

describe('<BookDetails />', () => {
    it('should start', () => {
        expect(component.instance()).toBeTruthy()
    })
})
