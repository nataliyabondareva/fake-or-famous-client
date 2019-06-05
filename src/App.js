import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginFormContainer from './components/LoginFormContainer'
import SignupFormContainer from './components/SignupFormContainer';
import MakeUpQuoteContainer from './components/MakeUpQuoteContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={SignupFormContainer} />
          <Route path="/logins" exact component={LoginFormContainer} />
          <Route path="/signup" exact component={SignupFormContainer} />
          <Route path="/quotes" exact component={MakeUpQuoteContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;