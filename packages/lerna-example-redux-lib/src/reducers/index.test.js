import rootReducer from './index'

const initialState = rootReducer({}, {})

test('generates correct initial state', () => {
  expect(initialState).toMatchSnapshot();
})
