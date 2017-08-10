import { get } from 'axios'
import { receiveFacts } from './receiveFacts'
import { requestFacts } from './requestFacts'

export default function fetchCatFacts(limit=1) {
  return async function(dispatch) {
    dispatch(requestFacts())
    const params = { limit }
    // cors-anywhere.herokuapp.com requires header to be set:
    const headers = { 'x-requested-with': 'foo' }
    const { data } = await get(
      `https://cors-anywhere.herokuapp.com/https://catfact.ninja/facts`,
      { params, headers }
    )
    dispatch(receiveFacts(data.data.map(item => item.fact)))
  }
}
