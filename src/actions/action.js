
import {api_url} from '../config/config';
import axios from 'axios'

export const SET_BOOKS = 'SET_BOOKS';
export const BOOK_FETCHED = 'BOOK_FETCHED';
export const SET_BORROW_STATUS = 'SET_BORROW_STATUS';


export  function fetchBooks(){
    return dispatch => {
       return  fetch(`${api_url}book/getallbooks`)
        .then(res => res.json())
        .then(data => dispatch(setBooks(data.books)));
    }
}

export function bookFetched(book) {
    return {
      type: BOOK_FETCHED,
      book
    }
  }

export function setBooks(books) {
    console.log(books)
    return {
      type: SET_BOOKS,
      books
    }
}
export function setBorrowDetails(data) {
    return {
      type: SET_BORROW_STATUS,
      data
    };
  }

export function fetchBook(id) {
   
    return dispatch => {
      fetch(`${api_url}book/${id}`)
        .then(res => res.json())
        .then(data => dispatch(bookFetched(data.book[0])));
    }
}

