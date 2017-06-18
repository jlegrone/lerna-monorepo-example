# lerna-example-mac-os

This project was bootstrapped with [React Native macOS](https://github.com/ptmt/react-native-macos).

## Running Locally

1. `yarn install`
2. `yarn macos`
3. Click "Run" button in Xcode (`⌘R`)

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs the React Native packager.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
```

#### `yarn macos`

Like `yarn start`, but also attempts to open the project in Xcode.

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn test:watch`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests, and re-runs tests on file changes.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` to have the files loaded by jest. 

The [jest documentation](https://facebook.github.io/jest/docs/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/tutorial-react-native.html).
