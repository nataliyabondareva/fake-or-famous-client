import React from 'react'

export default function MakeUpQuoteForm(props) {
  return (
  <form obSubmit={props.onSubmit}>
    <label>
      Quote:
      <input type='text' name='quote' onChange={props.onChange} value={props.values.content}/>
    </label>
    <button type='submit'></button>

  </form>)
}