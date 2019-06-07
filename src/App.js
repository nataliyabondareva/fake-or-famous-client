import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginFormContainer from './components/LoginFormContainer'
import SignupFormContainer from './components/SignupFormContainer';
import MakeUpQuoteContainer from './components/MakeUpQuoteContainer'
import GamesListContainer from './components/GamesListContainer'
import GameDetailsContainer from './components/GameDetailsContainer'
import GamePlayContainer from './components/GamePlayContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={SignupFormContainer} />
          <Route path="/logins" exact component={LoginFormContainer} />
          <Route path="/signup" exact component={SignupFormContainer} />
          <Route path="/games" exact component={GamesListContainer} />
          <Route path="/games/:id" exact component={GameDetailsContainer} />
          <Route path="/quotes" exact component={MakeUpQuoteContainer} />
          <Route path="/gameplay" exact component={GamePlayContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;