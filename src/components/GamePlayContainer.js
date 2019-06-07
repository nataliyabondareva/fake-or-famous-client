import React from 'react'
import { connect } from 'react-redux'
import GamePlay from './GamePlay'
import { loadRealQuote } from '../actions/quotes'
//import {handleChoice} from '../actions/gameLogic'

class GamePlayContainer extends React.Component {
  state = {quotes: ''}
  componentDidMount() {
    this.props.loadRealQuote(this.props.match.params.id)
  }

  render() {
    return (
      <div>
      {/* <img src={this.state.image}/> */}
      <h1>What did I say?</h1>
      {/* <button onClick={() => handleChoice(this.state.quotes[1])}>{this.state.quotes[1]}</button>
      <button onClick={() => handleChoice(this.state.quotes[2])}>{this.state.quotes[2]}</button> */}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    roundsPlayed: state.roundsPlayed,
    quotes: state.quotes,
    score: state.score,
    quotes: state.quotes
  };
};

export default connect(mapStateToProps, { loadRealQuote })(GamePlayContainer) 