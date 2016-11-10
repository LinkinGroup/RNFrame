'use strict';

import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator,
  TouchableOpacity
} from 'react-native'
import React from 'react';
import NewsPage from './news/newsPage';
import NewsContent from './news/newsContent'
const NAV_IMG1 = require('../img/nav1.png');
const NAV_IMG2 = require('../img/nav2.png');
const NAV_IMG3 = require('../img/nav3.png');

var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black',
  },
  navContainer : {
    flex : 1,
    height : 64,
    backgroundColor : '#3D96F7',
    //flexDirection : 'column',
    //justifyContent : 'center',
    //alignItems : 'center',
  },
  header : {
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
  headerTitle : {
    fontSize : 24,
    color : '#FFF',
    textAlign : 'center',
    marginTop : 3,
  },
  leftNavButtonText : {
    fontSize : 18,
    color : '#FFF',
    marginTop : 10,
    marginLeft : 10,
    ////height : 18,
    //flexDirection : 'column',
    //justifyContent : 'center',
    alignItems : 'center',
  },
});

// 路由设置：导航栏的Mapper
let NavigationBarRouteMapper = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.leftNavButtonText}>
              后退
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  },
  // 右键
  RightButton(route, navigator, index, navState) {
    // ...
  },
  // 标题
  Title(route, navigator, index, navState) {
    //console.log(route);
    return (
      <View style={ styles.header }>
        <Text style={ styles.headerTitle }>{route.title}</Text>
      </View>
    );
  }
};

class AppNavigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab : 'information'
    }
    this.renderScene = this.renderScene.bind(this)
  }

  handleTabChange(tabName) {
    this.setState({ selectedTab : tabName });
  }

  render() {
    return <Navigator
      ref="navigator"
      style={styles.container}
      initialRoute={{}}
      renderScene={this.renderScene}
      navigationBar={
        <Navigator.NavigationBar
          style={styles.navContainer}
          routeMapper={NavigationBarRouteMapper}
        />
      }
    />
  }

  renderScene(route, navigator) {
    if (route.detail) {
      return <NewsContent navigator={navigator}/>
    }
    route.title = "资讯"
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="资讯"
          icon={ NAV_IMG1 }
          onPress={this.handleTabChange.bind(this, 'information')}
          selected={ this.state.selectedTab === 'information' }>
          <NewsPage navigator={navigator}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="课程"
          icon={ NAV_IMG2 }
          onPress={ this.handleTabChange.bind(this, 'messages') }
          selected={ this.state.selectedTab === 'messages' }>
          <View style={ styles.container }>
            <Text>Messages</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="圈子"
          icon={ NAV_IMG2 }
          onPress={ this.handleTabChange.bind(this, 'circle') }
          selected={ this.state.selectedTab === 'circle' }>
          <View style={ styles.container }>
            <Text>Circle</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="我的"
          icon={ NAV_IMG3 }
          onPress={this.handleTabChange.bind(this, 'settings')}
          selected={ this.state.selectedTab === 'settings' }>
          <View style={ styles.container }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default AppNavigator