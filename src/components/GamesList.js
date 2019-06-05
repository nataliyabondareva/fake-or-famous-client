import React from 'react'
import { Link } from 'react-router-dom'

export default function GamesLists(props) {
  const { games } = props
  const GamesList = !games
    ? "Loading ... "
    : games.map(game =>
      <li key={game.id}>
        <Link to={`/games/${game.id}`}>
          {game.name}
        </Link>
      </li >)

  return <ul>{GamesList}</ul>
}