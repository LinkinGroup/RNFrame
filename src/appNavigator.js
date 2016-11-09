'use strict';

import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator,
} from 'react-native'
import React from 'react';
import NewsPage from './news/newsPage';
const NAV_IMG1 = require('../img/nav1.png');
const NAV_IMG2 = require('../img/nav2.png');
const NAV_IMG3 = require('../img/nav3.png');

var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black',
  },
});

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
    />
  }

  renderScene(route, navigator) {
    if (route.detail) {
      return <NewsPage navigator={navigator}/>
    }
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