'use strict';

//var React = require('react-native');
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import NewsIndex from './newsIndex';

export default React.createClass({
  render : function () {
    return (
      <View style={ styles.container }>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={ styles.header }>
          <Text style={ styles.headerTitle }>资讯</Text>
        </View>
        <NewsIndex/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff'
  },
  header : {
    height : 64,
    backgroundColor : '#3D96F7',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
  headerTitle : {
    fontSize : 16,
    color : '#FFF',
    textAlign : 'center',
    marginTop : 24,
  }
});
