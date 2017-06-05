import fetch from 'isomorphic-fetch'

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

export function fetchCatFacts(number=1) {
  return async function(dispatch) {
    dispatch(requestFacts())
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://catfacts-api.appspot.com/api/facts?number=${number}`)
    const { facts } = await response.json()
    dispatch(receiveFacts(facts))
  }
}
