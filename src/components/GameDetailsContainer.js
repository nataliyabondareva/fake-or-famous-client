import React from 'react'
import { connect } from 'react-redux'
import GameDetails from './GamesDetails'
import { loadQuotes } from '../actions/quotes'

class GameDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuotesAction(Number(this.props.match.params.id))
  }

  render() {
    // console.log(this.props)
    return <GameDetails quote={this.props.quotes} />
  }
}

const mapStateToProps = state => ({
  quote: state.quote
})

export default connect(mapStateToProps, { loadQuotesAction: loadQuotes })(GameDetailsContainer) 