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
    height : 60,
    backgroundColor : '#ff0000'
  },
  headerTitle : {
    fontSize : 24,
    color : '#ffffff',
    textAlign : 'center',
    marginTop : 24,
  }
});
