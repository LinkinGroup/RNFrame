'use strict';

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React from 'react';
import NewsIndex from './newsIndex';

var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff'
  },
  //header : {
  //  height : 64,
  //  backgroundColor : '#000',
  //  flexDirection : 'column',
  //  justifyContent : 'center',
  //  alignItems : 'center',
  //},
  //headerTitle : {
  //  fontSize : 24,
  //  color : '#FFF',
  //  textAlign : 'center',
  //  marginTop : 24,
  //}
});

class NewsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        {/*<View style={ styles.header }>*/}
        {/*<Text style={ styles.headerTitle }>资讯</Text>*/}
        {/*</View>*/}
        <NewsIndex navigator={this.props.navigator}/>
      </View>
    );
  }
}
export default NewsPage

