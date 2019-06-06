import React from 'react'
import { connect } from 'react-redux'
import GameDetails from './GamesDetails'
import { loadQuotes } from '../actions/quotes'

class GameDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuotes(Number(this.props.match.params.id))
  }

  render() {
    console.log('this.props', this.props)
    return <GameDetails quotes={this.props.quotes} />
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return ({
    quotes: state.quotes
  })
}

export default connect(mapStateToProps, { loadQuotes })(GameDetailsContainer) 