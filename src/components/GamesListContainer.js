import React from 'react'
import { loadGames, createGame } from '../actions/games'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'
import GamesList from './GamesList'

class GamesListContainer extends React.Component {
  componentDidMount() {
    this.props.loadGames()
    // this.props.getUsers()
  }


  render() {
    return (
      <div>
        <GamesList games={this.props.games} createGame={this.props.createGame} />
      </div >
    )
  }
}

const mapStateToProps = state => ({
  games: state.games,
  users: state.users
})

export default connect(mapStateToProps, { loadGames, getUsers, createGame })(GamesListContainer)