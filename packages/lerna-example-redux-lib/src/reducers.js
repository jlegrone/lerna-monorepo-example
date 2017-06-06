import { combineReducers } from 'redux'
import { REQUEST_FACTS, RECEIVE_FACTS } from './actions'

function facts(state={ list: [], isFetching: false }, action) {
  switch (action.type) {
    case REQUEST_FACTS:
      return { ...state, isFetching: true }
    case RECEIVE_FACTS:
      return { ...state, isFetching: false, list: action.facts }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  facts
})

export default rootReducer
