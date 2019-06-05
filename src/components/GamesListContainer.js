import React from 'react'
import { loadGames } from '../actions/games'
import { connect } from 'react-redux'
import GamesList from './GamesList'

class GamesListContainer extends React.Component {
  componentDidMount() {
    this.props.loadGames()
  }


  render() {
    return (
      <div>
        <GamesList games={this.props.games} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  games: state.games
})

export default connect(mapStateToProps, { loadGames })(GamesListContainer)