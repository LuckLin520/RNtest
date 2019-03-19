/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppContainer from "./src/AppContainer"

export default class App extends Component {
  componentDidMount(){
    console.log(__DEV__)//开发环境得到true
  }

  render() {
    return <AppContainer></AppContainer>
  }
}
