# lerna-monorepo-example (WIP)

[![Build Status](https://travis-ci.org/jlegrone/lerna-monorepo-example.svg?branch=master)](https://travis-ci.org/jlegrone/lerna-monorepo-example)

## Getting Started
1. Install latest node (8.1.0)
2. `npm install lerna --global`
3. `lerna bootstrap`

See README from `/packages/<package-name>` to run individual projects.

## Testing
- To run all tests: `lerna run test` (from any directory in project)
- To re-run tests for file changes across all packages: `yarn test:watch` (at project root)
- To run tests for specific package: `cd packages/<package-name> && yarn test`
