import React from 'react'
import {connect} from 'react-redux'
import {makeUpQuote} from '../actions/quotes'
import MakeUpQuoteForm from './MakeUpQuoteForm'

class MakeUpQuoteContainer extends React.Component {
  state = {
    content: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    console.log('event', event.value)
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
    return(
    <MakeUpQuoteForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      />)
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content
  }
}

export default connect(null, {makeUpQuote})(MakeUpQuoteContainer)