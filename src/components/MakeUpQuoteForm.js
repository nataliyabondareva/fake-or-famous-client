import React from 'react'

export default function MakeUpQuoteForm(props) {
  return (
  <form onSubmit={props.onSubmit}>
    <label>
      Quote:
      <input type='text' name='content' value={props.values.content} onChange={props.onChange}/>
    </label>
    <button type='submit'>FAKE IT </button>

  </form>)
}