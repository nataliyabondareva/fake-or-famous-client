import React from 'react'

export default function GameDetails(props) {
  console.log('props', props)

  const content = props.quotes
    ? props.quotes.map(quote =>
      < div key={quote.id} >
        <h1>{quote.content}</h1>
        <p>{quote.author}</p>
        <img src={quote.picture} alt="" />
      </div >)
    : 'Loading...'

  return (
    <div>
      {content}
    </div>
  );
}

