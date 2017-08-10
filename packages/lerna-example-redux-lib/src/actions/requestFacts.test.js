import { requestFacts } from './requestFacts'

test('returns correct value', () => {
  expect(requestFacts()).toMatchSnapshot();
});
