'use strict';

import {
  StyleSheet,
  AlertIOS,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import React from 'react';
var Video = require('react-native-video').default;

// Later on in your styles..
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#fff',
  },
  fullScreen : {
    position : 'absolute',
    top : 0,
    left : 0,
    bottom : 0,
    right : 0,
  },
  controls : {
    backgroundColor : "transparent",
    borderRadius : 5,
    position : 'absolute',
    bottom : 44,
    left : 4,
    right : 4,
  },
  progress : {
    flex : 1,
    flexDirection : 'row',
    borderRadius : 3,
    overflow : 'hidden',
  },
  innerProgressCompleted : {
    height : 20,
    backgroundColor : '#cccccc',
  },
  innerProgressRemaining : {
    height : 20,
    backgroundColor : '#2C2C2C',
  },
  generalControls : {
    flex : 1,
    flexDirection : 'row',
    overflow : 'hidden',
    paddingBottom : 10,
  },
  skinControl : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
  },
  rateControl : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
  },
  volumeControl : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
  },
  resizeModeControl : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  controlOption : {
    alignSelf : 'center',
    fontSize : 11,
    color : "white",
    paddingLeft : 2,
    paddingRight : 2,
    lineHeight : 12,
  },
  nativeVideoControls : {
    top : 184,
    height : 300
  }
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
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  state = {
    rate : 1,
    volume : 1,
    muted : false,
    resizeMode : 'contain',
    duration : 0.0,
    currentTime : 0.0,
    controls : false,
    paused : true,
    skin : 'custom'
  };

  onLoad(data) {
    this.setState({ duration : data.duration });
  }

  onProgress(data) {
    this.setState({ currentTime : data.currentTime });
  }

  onPress() {
    this.setState({ paused : !this.state.paused })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={this.onPress}>
          <Text>Hello</Text>
          <Video
            source={require('./../../resource/test.mp4')}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={() => { AlertIOS.alert('Done!') }}
            repeat
          />
        </TouchableOpacity>
      </View>

    );
  }
}
export default VideoPlay

