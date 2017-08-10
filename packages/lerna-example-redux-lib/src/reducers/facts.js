import { REQUEST_FACTS } from '../actions/requestFacts'
import { RECEIVE_FACTS } from '../actions/receiveFacts'

export default function facts(state={ list: [], isFetching: false }, action) {
  switch (action.type) {
    case REQUEST_FACTS:
      return { ...state, isFetching: true }
    case RECEIVE_FACTS:
      return { ...state, isFetching: false, list: action.facts }
    default:
      return state
  }
}
