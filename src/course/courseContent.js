'use strict';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';
import React from 'react';

var ScreenWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  container : {
    marginTop : 64,
    flex : 1,
    backgroundColor : '#fff'
  },
  title : {
    fontSize : 20,
    fontWeight : "500",
    paddingTop : 10,
    paddingBottom : 10,
    paddingLeft : 10,
    paddingRight : 10,
    lineHeight : 28
  },
  flexRow : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  infoBlock : {
    color : '#666',
    marginLeft : 10,
    margin : 10,
  },
  pict : {
    width : ScreenWidth,
  },
  center : {
    flexDirection : 'row',
    justifyContent : 'center',
  },
});

class CourseContent extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelectRow = this.handleSelectRow.bind(this);
  }

  handleSelectRow() {
    this.props.navigator.push({ videoPlay : true, title : "课件播放" });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableHighlight underlayColor='rgba(24,36,35,0.1)' onPress={this.handleSelectRow}>
          <View style={[styles.listCell]}>
            <Image
              onPress={this.handleSelectRow}
              style={styles.pict}
              source={require('../../img/courseList1.jpeg')}
            />
            <View style={[styles.textBlock]}>
              <Text style={[styles.listText]}></Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
export default CourseContent

