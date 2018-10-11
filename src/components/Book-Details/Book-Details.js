import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container } from 'mdbreact';
import { api_url } from '../../config/config';

import { getBookDetails } from '../../actions/getbookdetails';
import BookReturn from './Book-Return/Book-Return';
import Aux from '../../hoc/Auxh';


const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

export class BookDetails extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            toggle: false,
            selectedisbn: '',
            returnDate: '',
            errors: '',
            showingAlert: false
        }
    }

    toggle(event) {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    getPickerValue = (value) => {
        console.log(value);
    }

    componentDidMount() {
        this.props.getBookDetails();
    }

    changeHandler = (e) => {
        alert(e.target.value);
        this.setState({ returnDate: e.target.value });
    }

    renewHandler = (id) => {
        if (localStorage.getItem('isAuthenticated') !== null) {
            this.setState({ selectedisbn: id });
            this.toggle();
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

    returnHandler = (id) => {
        if (localStorage.getItem('isAuthenticated') !== null) {
            axios.delete(`${api_url}checkoutRouter/${id}`)
                .then(res => { this.props.getBookDetails(); })
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

    saveDataHandler = (e) => {
        this.toggle();
        const data = {
            isbn: this.state.selectedisbn,
            returnDate: this.state.returnDate
        }
        axios.put(`${api_url}checkoutRouter/bookrenewal`, data)
            .then(res => { this.props.getBookDetails(); });
    }

    render() {
        const error = (

            <div className={`alert alert-warning ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>{this.state.errors}</div>
        )
        return (
            <Aux>
                <Container>
                    <div className="row">
                        <div className="col">
                            <h5 className="h2-responsive pb-4" style={{ padding: "2%", fontWeight: "bold", color: "brown" }}>Return Details</h5>
                            {this.state.errors ? error : ''}
                            <BookReturn
                                booklist={this.props.bookdetails}
                                renewBook={this.renewHandler}
                                returnBook={this.returnHandler} />
                        </div>

                    </div>
                    <div className="modal" style={this.state.toggle ? display : hide} >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Header</h4>
                                </div>
                                <div className="modal-body">
                                    <input type="date" className="form-control" value={this.state.returnDate} onChange={this.changeHandler} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger"
                                        onClick={this.toggle} >Close</button>
                                    <button type="button" className="btn btn-success"
                                        onClick={this.saveDataHandler} >Save</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </Aux>

        );
    }
}

BookDetails.propTypes = {
    bookdetails: PropTypes.array.isRequired,
    getBookDetails: PropTypes.func.isRequired,
}

function mapStateToProps(state) {

    return {
        bookdetails: state.bookdetails
    }
}
export default connect(mapStateToProps, { getBookDetails })(BookDetails);