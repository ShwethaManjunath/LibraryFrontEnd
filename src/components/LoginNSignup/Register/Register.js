import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            role: ''
        };
        this.SignUpHandler = this.SignUpHandler.bind(this);
    }

    SignUpHandler = (event) => {
        if (event.target.password.value === event.target.confirm_password.value) {
            this.setState({
                name: event.target.first_name.value + " " + event.target.last_name.value,
                email: event.target.email.value,
                password: event.target.password.value,
                role: 'user'
            }, () => {
                if (this.state.role === 'user') {
                    axios.post('http://localhost:3001/user/registration', this.state)
                        .then(response => {
                            alert(response.data.message);
                        }).catch((err) => {
                            alert(err.response.data.message);
                        })
                }
            });
        }
        else
            alert("Password did not match");
        event.preventDefault();
    }
    render() {
        return (
            <div className="signup-form" style={{ padding: "0 0 0 660px" }}>
                <form onSubmit={this.SignUpHandler}>
                    <br />
                    <h2 style={{ padding: "0 0 0 20px", color: "brown" }}>Register Yourself</h2>
                    <div className="form-group col-sm-4">
                        <input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" />
                    </div>
                    <div className="form-group col-sm-4">
                        <input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" />
                    </div>
                    <div className="form-group col-sm-4">
                        <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                    </div>
                    <div className="form-group col-sm-4">
                        <input type="password" className="form-control" name="password" placeholder="Password" minLength="4" required="required" />
                    </div>
                    <div className="form-group col-sm-4">
                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                    </div>
                    <div className="form-group col-sm-4">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="">Terms of Use</a> &amp; <a href="">Privacy Policy</a></label>
                    </div>
                    <div className="form-group col-sm-4">
                        <button type="submit" className="btn btn-info btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div className="text-center col-sm-3">Already have an account? &nbsp;
                    <NavLink to={'/login'}>Signin</NavLink>
                </div>
            </div>
        );
    };
}

export default Register;