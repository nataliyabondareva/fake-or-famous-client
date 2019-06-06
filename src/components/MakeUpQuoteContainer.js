import React from 'react'
import {connect} from 'react-redux'
import {makeUpQuote} from '../actions/quotes'
import MakeUpQuoteForm from './MakeUpQuoteForm'
import socketIOClient from 'socket.io-client'

class MakeUpQuoteContainer extends React.Component {
  state = {
    content: '',
    endpoint: "localhost:4000",
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.send(event)
    this.setState({
    // content: '',
    // authorId: '',
    // userId: '',
    // real: '',
    // gameId: ''
    })
    this.props.makeUpQuote(this.state)
    console.log('state is', this.state)
  }

    send = (event) => {
    const socket = socketIOClient(this.state.endpoint)
    console.log('works', this.state)
    socket.emit('quote', this.state.quote)
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

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps, {makeUpQuote})(MakeUpQuoteContainer)