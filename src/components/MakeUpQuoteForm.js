import React from 'react'

export default function MakeUpQuoteForm(props) {
  return (
  <form onSubmit={props.onSubmit}>
    <label>
      Quote:
      <input type='text' name='quote' onChange={props.onChange} value={props.values.content}/>
    </label>
    <button type='submit'>FAKE IT </button>

  </form>)
}