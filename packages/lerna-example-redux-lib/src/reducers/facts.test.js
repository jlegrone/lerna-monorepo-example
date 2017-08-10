import { REQUEST_FACTS } from '../actions/requestFacts'
import { RECEIVE_FACTS } from '../actions/receiveFacts'
import factsReducer from './facts'

const state = {
  list: [],
  isFetching: false
}

test('returns fetching state', () => {
  const { isFetching } = factsReducer(state, { type: REQUEST_FACTS })
  expect(isFetching).toBe(true);
});

test('returns facts', () => {
  const facts = ['test one', 'test two']
  const { list } = factsReducer(state, { type: RECEIVE_FACTS, facts })
  expect(list).toBe(facts);
});
