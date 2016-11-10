'use strict';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';

var Video = require('react-native-video');

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo : {
    position : 'absolute',
    top : 0,
    left : 0,
    bottom : 0,
    right : 0,
  },
});

// Later to trigger fullscreen
//this.player.presentFullscreenPlayer()
//
//// To set video position in seconds (seek)
//this.player.seek(0)

class VideoPlay extends React.Component {
  constructor(props) {
    super(props)
    //this.player.presentFullscreenPlayer()
    //this.player.seek(0)
  }

  render() {
    return (
      <View>
        <Video source={{ uri : "../../video/test.mp4" }}
               style={styles.backgroundVideo}
               resizeMode="cover" repeat={true} key="video2"/>
      </View>

    );
  }
}
export default VideoPlay

