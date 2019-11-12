import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import constants from 'jest-haste-map/build/constants'

import { getStatusBarHeight } from 'react-native-status-bar-height'

import TopBar from './components/TopBar'

import CoinView from './screens/CoinView'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshDate: '-'
    }
  }
  setRefreshDate = refreshDate => {
    this.setState({refreshDate: refreshDate})
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
        <View style={styles.statusBar} />
        <TopBar title="App Title" refreshDate={this.state.refreshDate} />
        <CoinView style={styles.coinView} setRefreshDate={this.setRefreshDate} />
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
  },
  coinView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  }
});