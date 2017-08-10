export const RECEIVE_FACTS = 'RECEIVE_FACTS'

export function receiveFacts(facts) {
  return {
    type: RECEIVE_FACTS,
    facts
  }
}
