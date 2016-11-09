'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
  static propTypes = {
    title : PropTypes.string.isRequired,
    onForward : PropTypes.func.isRequired,
    onBack : PropTypes.func.isRequired,
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

//export default React.createClass({
//  render : function () {
//    return (
//      <View style={ styles.container }>
//        <StatusBar
//          backgroundColor="blue"
//          barStyle="light-content"
//        />
//        <View style={ styles.header }>
//          <Text style={ styles.headerTitle }>资讯详情</Text>
//        </View>
//        <Text>sdfgfafsfs</Text>
//      </View>
//    );
//  }
//});

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
