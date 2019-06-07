import React from 'react'
import MakeUpQuoteContainer from './MakeUpQuoteContainer'

export default function GameDetails(props) {
  // const quotes = props.quotes.map(quote =>
  //   <div key={quote.id} >
  //     <h1>{quote.content}</h1>
  //     <p>{quote.author}</p>
  //     <img src={quote.picture} alt="" />
  //   </div >)

  const users = props.game && props.game.users.map(user => <p>{user.email}</p>)

  return (
    <div>
      <button onClick={props.joinGame}>Join game</button>
      <h3>Users</h3>
      {users}

      <MakeUpQuoteContainer game={props.game} />
      <h3>Quotes</h3>
    </div>
  );
}

