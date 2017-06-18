import React, { Component } from 'react'
import { connect } from 'react-redux'
import cat from './cat.svg'
import './App.css'
import { fetchCatFacts } from '@jlegrone/lerna-example-redux-lib/lib/actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <img
            src={cat}
            className={`App-logo ${this.props.facts.isFetching ? 'loading' : ''}`}
            alt="logo"
            style={{cursor: 'pointer'}}
            onClick={() => this.props.dispatch(fetchCatFacts())}
          />
          <div className="facts">
            {this.props.facts.list.map((fact, index) => <p key={index}>{fact}</p>)}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { facts } = state

  return {
    facts,
  }
}

export default connect(mapStateToProps)(App)
