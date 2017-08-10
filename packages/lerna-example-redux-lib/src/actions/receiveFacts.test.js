import { receiveFacts } from './receiveFacts'

test('returns correct value', () => {
  expect(receiveFacts(['test one', 'test two'])).toMatchSnapshot();
});
