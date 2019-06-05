import React from 'react'
import { connect } from 'react-redux'
import { loadquotes } from '../actions/quotes'
import MakeUpQuoteForm, { QuotesList } from './MakeUpQuoteForm'

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
    return (
      <div>
        <MakeUpQuoteForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <QuotesList quote={} gameId={8} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content
  }
}

export default connect(mapStateToProps, { loadquotes })(MakeUpQuoteContainer)