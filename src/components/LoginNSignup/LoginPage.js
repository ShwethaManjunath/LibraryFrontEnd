import React from 'react';
import LoginForm from './LoginForm/LoginForm';

export class LoginPage extends React.Component {

  render() {
    return (
      <LoginForm gotoHome={this.gotoHomePage} />
    );
  }
}

export default LoginPage;