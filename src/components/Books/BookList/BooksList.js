import React from 'react';
import PropTypes from 'prop-types'

import Thumbnail from '../../Thumbnail/Thumbnail';
import Aux from '../../../hoc/Auxh';

 export const BooksList = ({ books, clicked }) => {
    const emptyMessage = (
        <p>Empty!!!!!</p>
    );

     
    const booksList = (
        books.map(book => {
            return <Thumbnail
                key={book.isbn}
                thumbnail={book.picUrl}
                clicked={clicked}
                id={book.isbn} />
        })
    );

    return (
        <Aux>
            {books.length === 0 ? emptyMessage : booksList}
        </Aux>


    );
}
BooksList.propTypes = {
    books: PropTypes.array.isRequired
}

export default BooksList;