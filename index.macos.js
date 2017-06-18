/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './components/App'

export default class LernaExampleMacOS extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('LernaExampleMacOS', () => LernaExampleMacOS)
