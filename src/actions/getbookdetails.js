import axios from 'axios'
export const SET_BOOK_DETAILS = 'SET_BOOK_DETAILS';
export function setbookDetails(bookList) {
    console.log(bookList)
    return {
        type: SET_BOOK_DETAILS,
        bookList
    };
}

export function getBookDetails() {
    return dispatch => {
        return axios.get('http://localhost:3001/checkoutRouter/booksdetails')
            .then(res => {
                dispatch(setbookDetails(res.data.booksdetails))
            },
           err=> dispatch(setbookDetails(err.response.data.booksdetails))
        )
    }
}