import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
// import Home from './components/Home'
import LoginFormContainer from './components/LoginFormContainer'
import SignupForm from './components/SignupForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/logins" exact component={LoginFormContainer} />
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/signup" exact component={SignupForm} />
        </div>
      </Provider>
    );
  }
}

export default App;