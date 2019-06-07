import React from 'react'
import { connect } from 'react-redux'
import GameDetails from './GamesDetails'
import { loadGame, joinGame } from '../actions/games'

class GameDetailsContainer extends React.Component {
  componentDidMount() {

    this.props.loadGame(Number(this.props.match.params.id))
  }

  joinGame = () => {
    console.log('joinGame method test!')
    this.props.joinGame(this.props.game.id)
  }

  render() {

    return (
      <div>
        <GameDetails
          game={this.props.game}
          joinGame={this.joinGame}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    game: state.game
  })
}

export default connect(mapStateToProps, { loadGame, joinGame })(GameDetailsContainer) 