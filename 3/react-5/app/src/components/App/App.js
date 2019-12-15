import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/';
import Main from '../Main/';
import Footer from '../Footer/';
import LoginForm from './LoginForm';
import Profile from '../Profile/Profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        isAuthorize: false,
        login: 'admin',
        password: 'admin'
      },

      fields: {
        login: '',
        password: ''
      },
      
      errors: {}
    };

    this.appRouter = this.appRouter.bind(this);
    this.loginFormInputChange = this.loginFormInputChange.bind(this);
    this.initializeUser = this.initializeUser.bind(this);
  }

  componentWithProps(Component, props) {
    return function(matchProps) {
      return <Component {...props} {...matchProps} />
    }
  }

  appRouter() {
    const { isAuthorize } = this.state.user;
    const { fields, errors } = this.state;

    if(isAuthorize) {
      return(
        <Switch>
        <Route path="/profile" component = { Profile } />
        <Route path="/" exact component = { Main } />
        <Route component = { Main } />
      </Switch>
      );
    }
    else {
      return(
        <Switch>
          <Route path="/" component = { 
            this.componentWithProps(LoginForm, {
              fields, 
              errors, 
              loginFormInputChange: this.loginFormInputChange, 
              initializeUser: this.initializeUser 
              }) 
            } />
          }
        </Switch>
      );
    }
  }

  loginFormInputChange (field, event) {
    let { fields } = this.state;
    fields[field] = event.target.value;

    this.setState({ fields });
  }

  isLoginFormValid() {
    const { login, password } = this.state.fields;
    let errors = {};
    let isValid = true;

    if(!login) {
        isValid = false;
        errors.login = 'Error! Field is empty';
    }
    else {
        if(!login.match(/^[a-zA-Z]+$/)){
            isValid = false;
            errors.login = "Only letters";
        }  
    }

    if(!password) {
        isValid = false;
        errors.password = 'Error! Field is empty';
    } 

    this.setState({ errors });

    return isValid;
}

  initializeUser(e) {
    e.preventDefault();

    if(this.isLoginFormValid()) {
      const { login, password } = this.state.user;
      const { login: _login, password: _password } = this.state.fields;

      if(login === _login && password === _password) {
        this.setState({ user: { isAuthorize: true } });
      }
    }
  }

  render() {
    return(
      <div>
        <Router>
          <Header user = { this.props.userData.user } />
          { this.appRouter() }
        </Router>
        <Footer />
      </div>
    );
  }
}