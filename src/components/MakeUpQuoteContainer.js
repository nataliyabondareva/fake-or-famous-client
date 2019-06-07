import React from 'react'
import {connect} from 'react-redux'
import {makeUpQuote} from '../actions/quotes'
import MakeUpQuoteForm from './MakeUpQuoteForm'

class MakeUpQuoteContainer extends React.Component {
  state = {
    content: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
    // content: '',
    // authorId: '',
    // userId: '',
    // real: '',
    // gameId: ''
    })
    this.props.makeUpQuote(this.props.game.id, this.state, this.props.user)
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
    content: state.content,
    user: state.currentUser && state.currentUser.token
  }
}

export default connect(mapStateToProps, {makeUpQuote})(MakeUpQuoteContainer)