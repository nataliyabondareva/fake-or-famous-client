import React from 'react'
import {connect} from 'react-redux'
import {makeUpQuote} from '../actions/quotes'
import MakeUpQuoteForm from './MakeUpQuoteForm'

class MakeUpQuoteContainer extends React.PureComponent {
  state = {
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
    content: '',
    authorId: '',
    userId: '',
    real: false,
    gameId: ''
    })
    this.props.makeUpQuote(this.state)
  }
  render() {
    return(<MakeUpQuoteForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      />)
  }
}

export default connect(null, {makeUpQuote})(MakeUpQuoteContainer)