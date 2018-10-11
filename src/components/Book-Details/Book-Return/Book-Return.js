import React from 'react';
import Aux from '../../../hoc/Auxh';

 const bookReturn = ({ booklist, renewBook, returnBook }) => {
  const emptyMessage = (
    <tr>
      <td>Empty!!!!!</td>
    </tr>
  );
  let count = 1;
  let booksList;
  if (booklist !== null) {
    booksList = (
      booklist.map(book => {
        return (<tr key={book._id}>
          <th scope="row">{count++}</th>
          <td >{book.isbn}</td>
          <td>{book.bookName}</td>
          <td>{book.category}</td>
          <td>{book.returnDate}</td>
          <td><button type="button" className="btn btn-mdb-color"
            onClick={() => renewBook(book.isbn)} >Renewal</button>
            <button type="button" className="btn btn-deep-orange"
              onClick={() => returnBook(book.isbn)}>Return</button></td>
        </tr>);
      })
    );
  }

  return (
    <Aux>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={{ fontWeight: "bold", color: "brown" }}>#</th>
              <th style={{ fontWeight: "bold", color: "brown" }}>ISBN</th>
              <th style={{ fontWeight: "bold", color: "brown" }}>BookName</th>
              <th style={{ fontWeight: "bold", color: "brown" }}>Category</th>
              <th style={{ fontWeight: "bold", color: "brown" }}>ReturnDate</th>
              <th style={{ fontWeight: "bold", color: "brown" }}>Renewal/Return</th>
            </tr>
          </thead>
          <tbody>

            {booklist !== null ? booksList : emptyMessage}

          </tbody>
        </table>
      </div>

    </Aux>
  );
};

export default bookReturn;