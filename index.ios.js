/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//var React = require('react');
import  React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  TabBarIOS,
  ListView,
  TouchableHighlight,
  Navigator,
  TouchableOpacity,
  Image,
} from 'react-native';

// Nav的配置，左右按钮：搜索功能
var NavigationBarRouteMapper = {
    LeftButton : function (route, navigator, index, navState) {
      if (route.id === 'main') {
        return null;
      }
      var previousRoute = navState.routeStack[index - 1];
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            返回
          </Text>
        </TouchableOpacity>
      );
    },
    //搜索栏右边的按钮：
    RightButton : function (route, navigator, index, navState) {
      if (route.id === 'detail') {
        return null;
      }
      return null;
      //return (
      //  <TouchableOpacity
      //    onPress={() => navigator.push({ id : 'detail', title : 'Detail' })}
      //    style={styles.navBarRightButton}>
      //    <Text style={[styles.navBarText, styles.navBarButtonText]}>
      //      Next
      //    </Text>
      //  </TouchableOpacity>
      //);
    },

    // 标题栏文字
    Title : function (route, navigator, index, navState) {
      return (
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          {route.title}
        </Text>
      );
    }
    ,
  }
  ;

var LHWeather = React.createClass({
  render(){
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id : "main", title : "历史" }}
        renderScene={this.renderNav}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  },
  renderNav(route, nav){
    return <MainScreen navigator={nav} title="历史"/>;
    //switch (route.id) {
    //  case 'main':
    //    //return null;
    //    return <MainScreen navigator={nav} title="历史"/>;
    //  case 'detail':
    //    return (<DetailScreen navigator={nav} title="Detail" data={route.data}/>);
    //}
  }
});
import LogIn from './src/login';
const defaultRoute = { component : LogIn, };

var MainScreen = React.createClass({
  toDetail(){
    this.props.navigator.push({ id : "detail", title : "Detail", data : "Passed from Main screen" });
  },
  _renderScene(route, navigator) {
    let Component = route.component;
    return (       <Component {...route.params} navigator={navigator}/>     );
  },
  render(){
    return (
      <Navigator initialRoute={defaultRoute} renderScene={this._renderScene}/> );
  }
});

var DetailScreen = React.createClass({
  toMain(){
    this.props.navigator.pop();
  },
  render(){
    return (
      <View style={styles.detailContainView}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.toMain}
          underlayColor="green">
          <Text style={styles.blackText}>{this.props.data}</Text>
        </TouchableHighlight>
      </View>
    );
  }
});
const styles = StyleSheet.create({
  backImage : {
    width : 13,
    height : 26,
  },
  container : {
    flex : 1,
  },
  navBar : {
    backgroundColor : 'white',
  },
  button : {
    padding : 15,
  },
  containView : {
    flex : 1,
    backgroundColor : 'gray',
    justifyContent : 'center',
  },
  detailContainView : {
    flex : 1,
    justifyContent : 'center',
    backgroundColor : 'green',
  },
  blackText : {
    fontSize : 20,
    textAlign : 'center',
  },
  navBar : {
    backgroundColor : 'red',
  },
  navBarText : {
    fontSize : 16,
    marginVertical : 10,
  },
  navBarTitleText : {
    color : '#373E4D',
    fontWeight : '500',
    marginVertical : 9,
  },
  navBarLeftButton : {
    paddingLeft : 10,
    paddingTop : 6,
  },
  navBarRightButton : {
    paddingRight : 10,
  },
  navBarButtonText : {
    color : '#5890FF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => LHWeather);