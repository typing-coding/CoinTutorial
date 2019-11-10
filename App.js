import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import constants from 'jest-haste-map/build/constants'

import { getStatusBarHeight } from 'react-native-status-bar-height'

import TopBar from './components/TopBar'

import CoinView from './screens/CoinView'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
        <View style={styles.statusBar} />
        <TopBar title="App Title" />
        <CoinView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  statusBar: {
    backgroundColor: 'pink',
    height: getStatusBarHeight(),
    width: '100%'
  }
})
