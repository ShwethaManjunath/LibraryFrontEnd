import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxh';
import { logout } from '../../../actions/authActions';
import Logo from '../Logo/Logo';

export class MenuBar extends Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {

        let isAuthenticated = localStorage.getItem('isAuthenticated');
        const user = localStorage.getItem('user');

        const userLinks = (
            <Aux>
                <NavItem >
                    <span className="navbar-text white-text">
                        Welcome-{user}
                    </span>
                </NavItem>
                <NavItem >
                    <NavLink onClick={this.logout.bind(this)} to='/' ><Fa icon="sign-out" className="pr-1">logout</Fa></NavLink>
                </NavItem>
            </Aux>

        );
        const userProfile = (
            <Aux>
                <NavItem>
                    <NavLink to="/bookdetails">BooksDetails</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/profile">Profile</NavLink>
                </NavItem>
            </Aux>
        );
        const guestLinks = (
            <NavItem >
                <NavLink to="/login">Login/Signup</NavLink>
            </NavItem>
        );
        const adminLinks = (
            <Aux>
                <NavItem>
                    <NavLink to="/addNewBook">AddNewBook</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/editBook">EditBooks</NavLink>
                </NavItem>
            </Aux>

        )
        return (
            <Aux>
                <Navbar color="brown" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <Logo />
                    </NavbarBrand>
                    {!this.props.isWideEnough && <NavbarToggler onClick={this.props.clicked} />}
                    <Collapse isOpen={this.props.collapse} navbar>
                        <NavbarNav left>
                            <NavItem >
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/books">Books</NavLink>
                            </NavItem>
                            {isAuthenticated === null ? ' ' : userProfile}
                            {localStorage.getItem('role') === "admin" ? adminLinks : ''}

                        </NavbarNav>
                        <NavbarNav right>
                            {localStorage.getItem('isAuthenticated') ? userLinks : guestLinks}
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Aux>
        );
    }
}

MenuBar.propTypes = {
    auth: PropTypes.object,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    return {
        auth: state.auth,
    };
}
export default connect(mapStateToProps, { logout })(MenuBar);