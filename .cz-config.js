const { config } = require('./package.json')

const { types: typeKeys, scope } = config['validate-commit-msg']
const typeSet = new Set(typeKeys)

const types = [
  {
    value: 'feat',
    name: 'feat:     A new feature'
  },
  {
    value: 'fix',
    name: 'fix:      A bug fix'
  },
  {
    value: 'docs',
    name: 'docs:     Documentation only changes'
  },
  {
    value: 'style',
    name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)'
  },
  {
    value: 'refactor',
    name: 'refactor: A code change that neither fixes a bug nor adds a feature'
  },
  {
    value: 'perf',
    name: 'perf:     A code change that improves performance'
  },
  {
    value: 'test',
    name: 'test:     Adding missing tests'
  },
  {
    value: 'chore',
    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'
  },
  {
    value: 'revert',
    name: 'revert:   Revert to a commit'
  },
  {
    value: 'WIP',
    name: 'WIP:      Work in progress'
  }
].filter(type => typeSet.has(type.value))


const filteredScopes = new Set(['npm'])
const scopes = scope.allowed
  .filter(name => !filteredScopes.has(name))
  .map(name => ({ name }))

module.exports = {
  types,
  scopes,
  scopeOverrides: {
    chore: [
      ...scopes,
      { name: 'npm' }
    ]
  },
  allowCustomScopes: true,
  allowBreakingChanges: [
    'feat',
    'fix',
    'perf',
    'refactor'
  ]
}
