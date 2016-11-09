/**
 * @providesModule App
 * @flow
 */

'use strict';

import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native'
import React from 'react';
import AppNavigator from './appNavigator'

var styles = StyleSheet.create({
  container : { flex : 1 }
});

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        <AppNavigator/>
      </View>
    )
  }
}
export default App





