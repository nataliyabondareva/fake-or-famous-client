import React from 'react'

export default function GameDetails(props) {
  const { quotes } = props
  const QuotesList = !quotes
  return (
    <div>{!props.quote && 'loading ...'}
      {props.quote && <div>
        <h1>{props.quote.content}</h1>
      </div>}
    </div>
  );
  return <p>{QuotesList}</p>
}