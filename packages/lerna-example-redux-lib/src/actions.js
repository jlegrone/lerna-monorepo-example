import { get } from 'axios'

export const REQUEST_FACTS = 'REQUEST_FACTS'
function requestFacts() {
  return {
    type: REQUEST_FACTS
  }
}

export const RECEIVE_FACTS = 'RECEIVE_FACTS'
function receiveFacts(facts) {
  return {
    type: RECEIVE_FACTS,
    facts
  }
}

export function fetchCatFacts(limit=1) {
  return async function(dispatch) {
    dispatch(requestFacts())
    const params = { limit }
    // cors-anywhere.herokuapp.com requires header to be set:
    const headers = { 'x-requested-with': 'foo' }
    const { data } = await get(
      'https://cors-anywhere.herokuapp.com/https://catfact.ninja/facts',
      { params, headers }
    )
    dispatch(receiveFacts(data.data.map(item => item.fact)))
  }
}
