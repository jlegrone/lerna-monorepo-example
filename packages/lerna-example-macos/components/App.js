import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from '@jlegrone/lerna-example-redux-lib/lib/reducers'
import Main from './Main'

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
