import React from 'react'

export default function MakeUpQuoteForm(props) {
  return (
  <form onSubmit={props.onSubmit}>
    <label>
      Tell us:
      <input type='text' name='content' value={props.values.content} onChange={props.onChange}/>
    </label>
    <button type='submit'>LAUGH </button>

  </form>)
}