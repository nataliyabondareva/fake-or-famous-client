import React from 'react'
import { connect } from 'react-redux'
import GameDetails from './GamesDetails'
import { loadQuotes } from '../actions/quotes'

class GameDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuotes(Number(this.props.match.params.id))
  }

  render() {

    return (
      <div>
        <GameDetails quotes={this.props.quotes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

export default connect(mapStateToProps, { loadQuotes })(GameDetailsContainer) 