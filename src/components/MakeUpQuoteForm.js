import React from 'react'

export const QuotesList = (props) => !props.quotes
  ? "Loading ... "
  : props.quotes.map(quote =>
    <li key={quote.id}>
      <Link to={`/games/${props.gameId}/quotes`}>
        {quote.content}
      </Link>
    </li >)

export default function MakeUpQuoteForm(props) {
  const { quotes } = quotes

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          Quote:
      <input type='text' name='content' value={props.values.content} onChange={props.onChange} />
        </label>
        <button type='submit'>FAKE IT </button>
      </form>
      <ul><QuotesList quotes={} /></ul>
    </div>
  )
}


