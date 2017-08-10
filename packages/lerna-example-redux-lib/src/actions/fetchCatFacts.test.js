import fetchCatFacts from './fetchCatFacts'

const NUMBER_TO_FETCH = 2

function testFetchCatFacts(action) {
  expect(action).toHaveProperty('type')
  switch (action.type) {
    case 'RECEIVE_FACTS':
      expect(action).toHaveProperty('facts')
      expect(action.facts.length).toEqual(NUMBER_TO_FETCH)
      expect(action.facts[0]).toBeDefined()
      expect(typeof action.facts[0]).toEqual('string')
      break
  }
}

test('fetches facts', async () => {
  // await fetchCatFacts(NUMBER_TO_FETCH)(testFetchCatFacts)
})
