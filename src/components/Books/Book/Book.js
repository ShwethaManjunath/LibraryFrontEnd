import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Fa } from 'mdbreact';
import { connect } from 'react-redux';

import { fetchBook } from '../../../actions/action';

import Aux from '../../../hoc/Auxh';
import Spinner from '../../Spinner/Spinner';
// import Details from './Details/Details';


export class Book extends Component {
    // 
    state = {
        redirect: false,
        user: localStorage.getItem('jwtToken'),
        errors: '',
        showingAlert: false
    }
    backHandler = () => {
        this.props.history.push({ pathname: '/books' });
    }
    componentDidMount() {

        if (this.props.match.params.id) {
            this.props.fetchBook(this.props.match.params.id);
        }
    }

    borrowHandler = () => {
        if (localStorage.getItem('isAuthenticated') !== null) {
            let localData = localStorage.getItem('user');
            let data = {
                userName: localData,
                bookName: this.props.book.title,
                isbn: this.props.book.isbn,
                category: this.props.book.category,
                issuedDate: new Date(),
                returnDate: new Date(),
                returnBook: false,
                renewalBook: false
            };
            axios.post('http://localhost:3001/checkoutRouter', data)
                .then(res => {
                    this.setState({ errors: res.data.message, showingAlert: true });

                })

        }
        else {
            this.setState({ errors: "please Login!!!", showingAlert: true });
        }
        setTimeout(() => {
            this.setState({
                showingAlert: false,
                errors: ''
            });
        }, 2000);
    }

    render() {
        const error = (

            <div className={`alert alert-danger ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>{this.state.errors}</div>
        )

        let bookDetails = "";
        if (this.props.book) {
            bookDetails = (
                <Container>
                    {this.state.errors ? error : ''}
                    <Row style={{ marginTop: "3%" }} >
                        <Col lg="3">
                            <Row>
                                <Col lg="8">
                                    <div className="rounded z-depth-1-half mb-lg-0 mb-4 zoom">
                                        <img src={this.props.book.picUrl} className="card-img-top" alt="wider" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="9">
                            <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="user-circle" className="pr-2"></Fa>{this.props.book.author}</h6></a>
                            <h3 className="font-weight-bold mb-3 p-0"><strong>
                                <Fa icon="book" className="pr-2"></Fa>{this.props.book.title}</strong></h3>
                            <p></p>
                            <p><strong>Published</strong> by <a><strong>{this.props.book.publisher}</strong></a>, {this.props.book.publishDate}</p>
                            <button type="button" className="btn btn-danger btn-rounded" onClick={this.backHandler}>Back</button>
                            <button type="button" className="btn btn-info btn-rounded" onClick={this.borrowHandler}>Borrow</button>
                        </Col>
                    </Row>
                </Container>
            )

        }

        return (
            <Aux>
                {
                    this.state.redirect ?
                        <Spinner /> :
                        bookDetails
                }

            </Aux>
        );
    }
}

function mapStateToProps(state, props) {

    const { match } = props;
    if (match.params.id) {
        console.log(state.books)
        return {
            book: state.books.find(item => item.isbn === match.params.id),

        }
    }

    return {
        book: null,

    }

}
export default connect(mapStateToProps, { fetchBook })(Book);