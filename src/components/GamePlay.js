import React from 'react'
import { handleChoice } from '../actions/quotes';

export default function GamePlay(props) {
    const { quotes } = props
    const QuotesList = !quotes
      ? "Loading ... "
      : quotes.map(game =>
        <li key={q.id}></li>
    <div>
    {/* <img src={this.state.image}/> */}
    <h1>What did I say?</h1>
    <button onClick={() => handleChoice(this.props['quotes'][0]['content'])}>{this.props['quotes'][0]['content']}</button>
    <button onClick={() => handleChoice(this.props['quotes'][0]['content'])}>{this.props['quotes'][0]['content']}</button>
    {/* <button onClick={() => handleChoice(this.state.quotes[1])}>{this.state.quotes[1]}</button>
    <button onClick={() => handleChoice(this.state.quotes[2])}>{this.state.quotes[2]}</button> */}
  </div>
}

{
  const { games } = props
  const GamesList = !games
    ? "Loading ... "
    : games.map(game =>
      <li key={game.id}>
        <Link to={`/games/${game.id}`}>
          {game.status}
        </Link>
      </li >)

  const output = <div>
    <button onClick={props.createGame}>Button</button>
    <ul>{GamesList}</ul>
  </div>

  return output
}