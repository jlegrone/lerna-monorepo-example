# lerna-monorepo-example

[![Build Status](https://travis-ci.org/jlegrone/lerna-monorepo-example.svg?branch=master)](https://travis-ci.org/jlegrone/lerna-monorepo-example)

## Getting Started
```
$ yarn install
```

See README from `packages/<package-name>` to run individual projects.

## Testing
To run tests on file changes across all packages (at project root):
```
$ yarn test:watch
```

To run tests for specific package:

```
$ cd packages/<package-name>
$ yarn test
```
