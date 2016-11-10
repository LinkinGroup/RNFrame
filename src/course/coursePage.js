'use strict';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CourseList from './courseList';

var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff'
  },

});

class NewsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <CourseList navigator={this.props.navigator}/>
      </View>
    );
  }
}
export default NewsPage

