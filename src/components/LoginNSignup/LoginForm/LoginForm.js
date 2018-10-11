import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { login } from '../../../actions/authActions';
import validateInput from '../../../Validator/login';
import '../Login.css';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      userId: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    console.log(this.state);
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      console.log("hello")
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => {

          this.context.router.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
    // <Redirect to="/"/>
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
    //console.log(event.target.id +"   "+  event.target.value)
  }

  render() {
    const { errors, userId, password, isLoading } = this.state;

    return (

      <section className="h-100" style={{ marginTop: "2%" }}>
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">

              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>

                      <input id="userId"

                        type="email" className="form-control"
                        required autoFocus
                        value={userId}
                        error={errors.userId}
                        onChange={this.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password

									</label>
                      <input id="password" type="password" className="form-control" required data-eye
                        value={password}
                        error={errors.password}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group no-margin">
                      <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                        Login
									</button>
                    </div>
                    <div className="margin-top20 text-center">
                      Don't have an account? <NavLink to='/register'>Create One</NavLink>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
// export default LoginForm;
