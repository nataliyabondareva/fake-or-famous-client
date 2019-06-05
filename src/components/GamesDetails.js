/*
creating components actions and reducer for
quotes sent dummy quote to db

*/

import React from 'react'

export default function GameDetails(props) {
  console.log('props', props)
  return (
    <div>{!props.quote && 'loading ...'}
      {props.quote && <div>
        <h1>{props.quote.content}</h1>
      </div>}
    </div>
  );
}